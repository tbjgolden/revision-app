<script lang="ts">
  import { onMount } from "svelte";

  type Session = {
    i: number;
    name: string;
    startTime: number;
    startDate: string;
  };

  type ViewData = {
    history: Session[];
    shownSessionType: "next" | "next*" | "curr" | "done";
    shouldShowSession: boolean;
    shownSession?: Session;
  };

  const rand = (date: string, time: number) => {
    const seed = Number.parseInt(date.split("-").join("") + time.toString().padStart(3, "0"));
    const a = seed * 15485863;
    return ((a * a * a) % 2038074743) / 2038074743;
  };

  const getViewData = (): ViewData => {
    const [startDate, days, sessionStarts, sessions, unlocked] = JSON.parse(
      localStorage.getItem("data")
    ) as [
      startDate: string,
      days: number,
      sessionStarts: number[],
      sessions: Record<string, number>,
      unlocked?: number
    ];

    const totalSessions = sessionStarts.length * days;

    const nowIso = new Date().toISOString();
    const nowDate = nowIso.slice(0, 10);
    const [h, m] = nowIso
      .slice(11, 16)
      .split(":")
      .map((n) => Number.parseInt(n));
    const nowTime = h * 12 + m / 5;

    const startDateMs = new Date(startDate).getTime();
    const nowDateMs = new Date(nowDate).getTime();

    const prevDays = Math.round((nowDateMs - startDateMs) / 86400000);

    let dayPrevIndex = sessionStarts.length - 1;
    for (const [i, sessionStart] of sessionStarts.entries()) {
      if (nowTime <= sessionStart) {
        dayPrevIndex = i - 1;
        break;
      }
    }

    const prevIndex = Math.max(-1, prevDays * sessionStarts.length + dayPrevIndex);
    const prevTime = prevIndex === -1 ? -277 : sessionStarts[prevIndex % sessionStarts.length];
    const nextIndex = prevIndex + 1;
    const nextTime =
      nextIndex === sessionStarts.length ? 555 : sessionStarts[nextIndex % sessionStarts.length];

    let shownSessionIndex: number;
    let shownSessionType: ViewData["shownSessionType"];

    if (prevDays < 0) {
      shownSessionIndex = nextIndex;
      shownSessionType = "next";
    } else if (nextTime - nowTime <= 6) {
      shownSessionIndex = nextIndex;
      if (unlocked >= nextIndex) {
        shownSessionType = "curr";
      } else {
        shownSessionType = "next*";
      }
    } else if (nowTime - prevTime > 72 || unlocked > prevIndex) {
      shownSessionIndex = nextIndex;
      shownSessionType = "next";
    } else if (unlocked === prevIndex) {
      shownSessionIndex = prevIndex;
      shownSessionType = "curr";
    } else {
      shownSessionIndex = prevIndex;
      shownSessionType = "next*";
    }

    if (shownSessionIndex >= totalSessions) {
      shownSessionIndex = totalSessions;
      shownSessionType = "done";
    }

    const sessionsFlat = Object.entries(sessions)
      .sort(([a], [b]) => {
        return a === "nothing" ? 1 : b === "nothing" ? -1 : 0;
      })
      .flatMap(([name, count]) => new Array<string>(count).fill(name));

    const shuffledSessions: Session[] = [];
    for (let day = 0; day < days; day++) {
      const date = new Date(new Date(startDate).getTime() + 86400000 * day + 43200000)
        .toISOString()
        .slice(0, 10);
      for (let sessionStart of sessionStarts) {
        let r = rand(date, sessionStart);
        // This makes it unlikely that the first session is a break
        if (day === 0 && sessionStart === sessionStarts[0]) r = Math.min(r, 0.49);
        shuffledSessions.push({
          i: shuffledSessions.length,
          startDate: date,
          startTime: sessionStart,
          name: sessionsFlat.splice(Math.floor(r * sessionsFlat.length), 1)[0],
        });
      }
    }

    return {
      shownSession: shuffledSessions[shownSessionIndex],
      shownSessionType,
      shouldShowSession: unlocked < shownSessionIndex,
      history: shuffledSessions.slice(0, shownSessionIndex).reverse(),
    };
  };

  const timeAsStr = (time: number): string => {
    return `${`${Math.floor(time / 12)}`.padStart(2, "0")}:${`${(5 * time) % 12}`.padStart(
      2,
      "0"
    )}`;
  };

  const getSessionRelativeTime = (session: Session): string => {
    const nowIso = new Date().toISOString();
    const [nowH, nowM] = nowIso
      .slice(11, 16)
      .split(":")
      .map((n) => Number.parseInt(n));
    const nowTime = nowH * 12 + nowM / 5;

    const today = nowIso.slice(0, 10);
    const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
    if (session.startDate === today) {
      const delta = Math.round(5 * (session.startTime - nowTime));
      if (delta <= 0) {
        return "now";
      } else {
        return `in ${delta} mins (${timeAsStr(session.startTime)})`;
      }
    } else {
      if (session.startDate === tomorrow) {
        return `tomorrow at ${timeAsStr(session.startTime)}`;
      } else {
        return `on ${session.startDate} at ${timeAsStr(session.startTime)}`;
      }
    }
  };

  let viewData = getViewData();

  onMount(async () => {
    while (true) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 61000 - (Date.now() % 60000));
      });
      viewData = getViewData();
    }
  });
</script>

<div class="screen">
  {#if viewData.shownSessionType === "next" || viewData.shownSessionType === "next*"}
    <h1>next session</h1>
    <h2>{getSessionRelativeTime(viewData.shownSession)}</h2>
    {#if viewData.shownSessionType === "next*"}
      <button
        on:click={() => {
          const data = JSON.parse(localStorage.getItem("data"));
          data[4] = viewData.shownSession.i;
          localStorage.setItem("data", JSON.stringify(data));
          viewData = getViewData();
        }}>start</button
      >
    {/if}
  {:else if viewData.shownSessionType === "curr"}
    <h1>current session</h1>
    <h2>started at {timeAsStr(viewData.shownSession.startTime)}</h2>
    <h1>{viewData.shownSession.name}</h1>
    <button
      on:click={() => {
        const data = JSON.parse(localStorage.getItem("data"));
        data[4] = viewData.shownSession.i + 0.5;
        localStorage.setItem("data", JSON.stringify(data));
        viewData = getViewData();
      }}>done</button
    >
  {:else}
    <h1>done</h1>
    <h2>🎉🎉🎉</h2>
  {/if}
  <button
    class="copy"
    on:click={(event) => {
      const el = event.currentTarget;
      navigator.clipboard
        .writeText("/load.html?x=" + btoa(encodeURIComponent(localStorage.getItem("data"))))
        .then(() => {
          el.innerText = "copied link";
          el.style.lineHeight = "16px";
          el.style.fontSize = "14px";
          el.style.padding = "4px";
          el.style.color = "#fff";
          setTimeout(() => {
            el.innerText = "📋 🔗";
            el.style.lineHeight = "";
            el.style.fontSize = "";
            el.style.color = "";
            el.style.padding = "";
          }, 1000);
        })
        .catch(() => {});
    }}>{"📋 🔗"}</button
  >
</div>
{#if viewData.history.length > 0}
  <div class="prev">
    <div class="scroll">↓</div>
    {#each viewData.history as session}
      <div>{session.name} {session.startDate} {timeAsStr(session.startTime)}</div>
    {/each}
  </div>
{/if}

<style>
  .screen {
    height: 100vh;
    height: 100svh;
    padding: 40px;
    flex: 1 0 auto;
    position: relative;
  }

  .prev {
    position: relative;
    width: 100%;
  }

  .scroll {
    position: absolute;
    top: -64px;
    left: 50%;
    transform: translateX(-50%);
  }

  .scroll {
    user-select: none;
    font-size: 2em;
  }

  .copy {
    position: absolute;
    bottom: 16px;
    right: 16px;
    background: #444;
    width: 64px;
    line-height: 40px;
    font-size: 18px;
    border-radius: 9999px;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  .copy:hover {
    background: #555;
  }
</style>
