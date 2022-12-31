<script lang="ts">
  import TimePicker from "../components/TimePicker.svelte";

  let timesPerDay = 0;

  const TOMORROW = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  let sessionStarts = [96, 132, 168, 192];
  let startDate = TOMORROW;
  let endDate = TOMORROW;
  $: todayStartTime = new Date(startDate).getTime();
  $: selectedDayStartTime = new Date(endDate).getTime();
  $: days = Math.round(1 + (selectedDayStartTime - todayStartTime) / 86400000);
  $: totalSessions = timesPerDay * days;

  let sessions: Record<string, number> = {
    "break 🏖": 0,
  };
  $: safeSessions =
    Object.values(sessions).reduce((a, b) => a + b, 0) <= totalSessions
      ? sessions
      : Object.keys(sessions).reduce((o, k) => {
          o[k] = 0;
          return o;
        }, {});
  $: safeSelectedCount = Object.values(safeSessions).reduce((a, b) => a + b, 0);

  let nextSessionName = "";
</script>

<div class="screen">
  <h1>random revision app 🎲</h1>

  {#each [1, 2, 3, 4] as value}
    <label>
      <input
        type="radio"
        {value}
        on:change={(event) => {
          timesPerDay = Number.parseInt(event.currentTarget.value);
        }}
        name="dayNumber"
      />
      <span class="label">{value} time{value === 1 ? "" : "s"}/day</span>
    </label>
  {/each}

  {#if timesPerDay > 0}
    {#each new Array(timesPerDay).fill(0) as _, i}
      <div class="section">
        <h4>time {i + 1} start time?</h4>
        <div>
          <TimePicker
            time={sessionStarts[i]}
            min={i > 0 ? sessionStarts[i - 1] : undefined}
            max={i < timesPerDay - 1 ? sessionStarts[i + 1] : undefined}
            on:change={(value) => {
              sessionStarts[i] = value.detail;
              sessionStarts = sessionStarts;
            }}
          />
        </div>
      </div>
    {/each}

    <div class="section">
      <h4>start date? (incl)</h4>
      <div>
        <input
          type="date"
          value={startDate}
          on:change={(event) => {
            startDate = event.currentTarget.value;
            if (event.currentTarget.value > endDate) {
              endDate = event.currentTarget.value;
            }
          }}
        />
      </div>
    </div>

    <div class="section">
      <h4>end date? (incl)</h4>
      <div>
        <input
          type="date"
          value={endDate}
          on:change={(event) => {
            if (event.currentTarget.value < startDate) {
              endDate = startDate;
              event.currentTarget.value = startDate;
            } else {
              endDate = event.currentTarget.value;
            }
          }}
          min={startDate}
        />
        ({days} day{days === 1 ? "" : "s"})
      </div>
    </div>

    <div class="section">
      <h2>create revision sessions!</h2>
      <blockquote>
        <p>
          Add your revision sessions here - create your custom sessions with a name and a number of
          occurrences
        </p>
        <p>This app will create the perfect revision schedule for you</p>
        <p>
          Your schedule will be saved to your browser, so you can close and reopen the window
          without losing your schedule. There'll also be a button to copy a url for your schedule to
          a different device.
        </p>
        <p>
          You can mix in some "break" sessions, or other productive sessions. Sit down at your desk
          ready to work, click the "start" button and you'll find out which session is next - can't
          get anxious if you don't know which is next - it might even be a break!
        </p>
        <p>
          Bonus: if both you and your friends use this app and have an identical session time (e.g.
          both 08:00 on the same day), the randomiser will try to sync up your breaks so you have
          someone to hang out with!
        </p>
        <p>Suggestion: aim for 1 non-revision sessions per 3 revision sessions</p>
      </blockquote>
      <p class="counter">
        added <span style={`color:${safeSelectedCount < totalSessions ? "#f90" : "#090"}`}
          >{safeSelectedCount}</span
        >/{totalSessions}
      </p>
      <div class="table">
        {#each Object.entries(safeSessions) as [name, count]}
          <div class="row">
            <div class="col-left">
              <button
                disabled={count === 0 && name === "break 🏖"}
                on:click={() => {
                  if (count === 0 && name !== "break 🏖") {
                    delete sessions[name];
                  } else {
                    sessions[name] = count - 1;
                  }
                  sessions = sessions;
                }}>{count === 0 && name !== "break 🏖" ? "🗑" : "\u2796"}</button
              ><span>{count}</span><button
                disabled={totalSessions === safeSelectedCount}
                on:click={() => {
                  sessions[name] = count + 1;
                  sessions = sessions;
                }}>{"\u2795"}</button
              >
            </div>
            <div class="col-right">{name}</div>
          </div>
        {/each}
        <form
          class="row"
          on:submit|preventDefault={() => {
            if (nextSessionName.trim()) {
              sessions[nextSessionName.trim()] = 0;
              sessions = sessions;
              nextSessionName = "";
            }
          }}
        >
          <div class="col-left">
            <button style="width: 100%" type="submit" disabled={nextSessionName.trim() === ""}
              >add</button
            >
          </div>
          <div class="col-right">
            <input
              value={nextSessionName}
              placeholder="custom session name"
              on:input={(event) => {
                nextSessionName = event.currentTarget.value;
              }}
            />
          </div>
        </form>
      </div>
    </div>

    <div class="section">
      {#if totalSessions === safeSelectedCount}
        <blockquote>
          <p>
            Final warning: You cannot edit a schedule after it has been created. If you need to
            start from scratch and create a new schedule, navigate directly to this url.
          </p>
        </blockquote>
      {/if}
      <p>
        <button
          class="go"
          on:click={() => {
            localStorage.setItem(
              "data",
              JSON.stringify([
                startDate,
                days,
                sessionStarts.slice(0, timesPerDay),
                Object.entries(safeSessions).reduce((o, [k, v]) => {
                  if (v) o[k] = v;
                  return o;
                }, {}),
              ])
            );
            window.location.href = import.meta.env.BASE_URL;
          }}
          disabled={totalSessions !== safeSelectedCount}
          style="font-size:2em">go!</button
        >
      </p>
    </div>
  {/if}
</div>

<style>
  label {
    margin-bottom: 6px;
  }

  .section {
    margin-top: 18px;
  }

  .table {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 1.5;
  }

  .table input,
  .table button {
    line-height: 1.5;
    font-size: 18px;
    padding: 0 2px;
    border: 0;
    margin: 0;
  }

  .go {
    line-height: 1.5;
    font-size: 32px;
    padding: 0 8px;
    font-family: Comic, Arimo, Arial, sans-serif;
    border: 0;
    margin: 0;
  }

  .row {
    display: flex;
    margin-top: 8px;
  }

  .col-left {
    flex: 0 0 76px;
    padding-right: 8px;
    display: flex;
  }
  .col-left span {
    flex: 1 0 auto;
    text-align: center;
  }
  .col-left button {
    flex: 0 0 auto;
  }

  .counter {
    font-weight: bold;
    font-size: 1.4em;
    margin: 2px 0;
  }

  .screen {
    flex: 1 0 auto;
    padding: 40px;
  }

  label {
    display: block;
    user-select: none;
  }

  input[type="date"] {
    font-size: 18px;
    background-color: #eee;
    border: 0;
    line-height: 1.5em;
    border-radius: 6px;
    font-family: monospace;
  }

  .label {
    display: inline-block;
    margin-left: 0;
  }

  input[type="date"] {
    background: #fff;
  }

  blockquote {
    max-width: 66ch;
    margin: 0 0 8px;
    padding: 12px 16px;
    background: #111;
    border: 2px solid #a8f;
    text-shadow: none;
    color: #a8f;
    border-radius: 16px;
  }

  blockquote > * {
    margin: 8px 0;
  }
  blockquote > :last-child {
    margin-bottom: 0;
  }
  blockquote > :first-child {
    margin-top: 0;
  }

  h1 {
    margin: 0 0 8px;
  }

  h4 {
    margin: 8px 0;
  }
</style>
