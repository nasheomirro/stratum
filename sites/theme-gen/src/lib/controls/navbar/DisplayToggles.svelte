<script lang="ts">
  import Code from "~icons/material-symbols/code";
  import Preview from "~icons/material-symbols/calendar-view-day";
  import Controls from "~icons/material-symbols/power-input";
  import { app } from "$lib/app.svelte";
</script>

<div class="flex items-center gap-2">
  <button
    onclick={() => (app.display = "controls-preview")}
    class="btn btn-xs md:hidden hover:filled-surface-200-800 {app.display ===
      'controls-preview' && 'filled-surface-200-800'}"
  >
    <Controls /> Controls
  </button>

  <button
    onclick={() => (app.display = "code")}
    class="btn btn-xs md:btn-sm hover:filled-surface-200-800 {app.display ===
      'code' && 'filled-surface-200-800'}"
  >
    <Code /> Code
  </button>

  <button
    onclick={() => (app.display = "preview")}
    class="btn btn-xs md:btn-sm hover:filled-surface-200-800
    {app.display === 'preview' && 'filled-surface-200-800'}
    {app.display === 'controls-preview' && 'md:filled-surface-200-800'}"
  >
    <Preview /> Preview
  </button>
</div>
