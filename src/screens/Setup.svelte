<script lang="ts">
  import TimePicker from "../components/TimePicker.svelte";

  let timesPerDay = 0;

  let sessionStarts = [96, 132, 168, 192];
  let startDate = new Date().toISOString().slice(0, 10);
  let endDate = new Date().toISOString().slice(0, 10);
  $: todayStartTime = new Date(startDate).getTime();
  $: selectedDayStartTime = new Date(endDate).getTime();
  $: days = Math.round(1 + (selectedDayStartTime - todayStartTime) / 86400000);

  $: totalSessions = timesPerDay * days;
  let sessions = {
    nothing: 0,
  };
  $: selectedCount = Object.values(sessions).reduce((a, b) => a + b, 0);

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
      <div>
        <h4>time {i + 1} start time?</h4>
        <div>
          <TimePicker
            time={sessionStarts[i]}
            min={i > 0 ? sessionStarts[i - 1] : undefined}
            max={i < timesPerDay - 1 ? sessionStarts[i + 1] : undefined}
          />
        </div>
      </div>
    {/each}

    <div>
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

    <div>
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

    <div>
      <h4>what sessions?</h4>
      <p class="hint">
        added {selectedCount}/{totalSessions}<br />(recommend 1 non-revision sessions per 3 revision
        sessions)
      </p>

      <div class="table">
        {#each Object.entries(sessions) as [name, count]}
          <div class="row">
            <div class="col-left">
              <button
                disabled={count === 0 && name === "nothing"}
                on:click={() => {
                  if (count === 0 && name !== "nothing") {
                    delete sessions[name];
                  } else {
                    sessions[name] = count - 1;
                  }
                  sessions = sessions;
                }}>{count === 0 && name !== "nothing" ? "🗑" : "\u2796"}</button
              ><span>{count}</span><button
                disabled={totalSessions === selectedCount}
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
              Object.entries(sessions).reduce((o, [k, v]) => {
                if (v) o[k] = v;
                return o;
              }, {}),
            ])
          );
          window.location.href = "/";
        }}
        disabled={totalSessions !== selectedCount ||
          Object.values(sessions).filter(Boolean).length < 2}
        style="font-size:2em">go!</button
      >
    </p>
  {/if}
</div>

<style>
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
    font-family: "Comic Neue", "Comic Sans", "Impact", "Arial Black", Arial, sans-serif;
    border: 0;
    margin: 0;
  }

  .row {
    display: flex;
    margin-top: 4px;
  }

  .col-left {
    flex: 0 0 72px;
    padding-right: 12px;
    display: flex;
  }
  .col-left span {
    flex: 1 0 auto;
    text-align: center;
  }
  .col-left button {
    flex: 0 0 auto;
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

  h1 {
    margin: 0 0 8px;
  }

  h4 {
    margin: 8px 0;
  }

  .hint {
    margin: -6px 0 4px;
    color: #aaa;
  }
</style>
