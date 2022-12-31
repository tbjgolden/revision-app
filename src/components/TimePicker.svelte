<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { MouseEventHandler } from "svelte/elements";

  const dispatch = createEventDispatcher();

  const asStr = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  // 0 - 287
  export let time = 0;
  export let min = -1;
  export let max = 288;

  $: min_ = min ?? -1;
  $: max_ = max ?? 288;

  $: m = time % 12;
  $: h = Math.floor(time / 12);

  let shownSelector: "minutes" | "hours" | "" = "";

  const setHours: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event.target instanceof HTMLButtonElement) {
      const prevTime = time;
      time = Math.min(max_ - 1, Math.max(min_ + 1, Number.parseInt(event.target.value) * 12 + m));
      if (time !== prevTime) {
        dispatch("change", time);
      }
    }
  };
  const setMinutes: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event.target instanceof HTMLButtonElement) {
      const prevTime = time;
      time = Math.min(max_ - 1, Math.max(min_ + 1, Number.parseInt(event.target.value) + time - m));
      if (time !== prevTime) {
        dispatch("change", time);
      }
    }
  };

  let timeout: ReturnType<typeof setTimeout>;
</script>

<div
  class="time-picker"
  on:mouseleave={() => {
    timeout = setTimeout(() => {
      shownSelector = "";
    }, 100);
  }}
  on:blur={() => {
    timeout = setTimeout(() => {
      shownSelector = "";
    }, 100);
  }}
>
  <div class="time-picker-inner">
    <button
      on:click={() => {
        clearTimeout(timeout);
        shownSelector = "hours";
      }}
      on:mouseenter={() => {
        clearTimeout(timeout);
        shownSelector = "hours";
      }}
      on:focus={() => {
        clearTimeout(timeout);
        shownSelector = "hours";
      }}>{asStr(h)}</button
    ><button
      class="r"
      on:click={() => {
        clearTimeout(timeout);
        shownSelector = "minutes";
      }}
      on:mouseenter={() => {
        clearTimeout(timeout);
        shownSelector = "minutes";
      }}
      on:focus={() => {
        clearTimeout(timeout);
        shownSelector = "minutes";
      }}>{asStr(m * 5)}</button
    >
  </div>
  {#if shownSelector === "hours"}
    <div class="picker">
      {#each new Array(24).fill(0) as _, i}
        <button value={i} on:click={setHours}>
          {asStr(i)}
        </button>
      {/each}
    </div>
  {:else if shownSelector === "minutes"}
    <div class="picker">
      {#each new Array(12).fill(0) as _, i}
        <button value={i} on:click={setMinutes}>
          {asStr(i * 5)}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .time-picker {
    margin: 0;
    line-height: 1;
    position: relative;
  }

  .picker {
    position: absolute;
    z-index: 1;
    bottom: 0;
    transform: translate(0, 100%);
    border-radius: 6px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    box-shadow: 0 0.5px 2px #000;
  }

  .time-picker-inner {
    display: inline-block;
    line-height: 1;
    border-radius: 6px;
    overflow: hidden;
  }

  button {
    font-family: monospace;
    border: 0;
    margin: 0;
    padding: 0 4px;
    line-height: 1.5em;
    font-size: 20px;
    background: #fff;
  }

  button:hover {
    background: #eee;
    cursor: pointer;
  }

  .r {
    position: relative;
  }
  .r::before {
    left: 0;
    transform: translateX(-50%);
    position: absolute;
    content: ":";
    color: #aaa;
  }
</style>
