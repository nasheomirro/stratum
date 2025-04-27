<script lang="ts">
  import { app } from "$lib/app.svelte";
  import CopyIcon from "~icons/material-symbols/content-copy-outline";
  import CheckIcon from "~icons/material-symbols/check";
  import { fly } from "svelte/transition";

  let isCopied = $state(false);
  let timeout: NodeJS.Timeout;
  function handleCopyClick(e: MouseEvent & { currentTarget: HTMLButtonElement }) {
    navigator.clipboard.writeText(app.generated.theme);
    isCopied = true;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      isCopied = false;
    }, 2000);
  }
</script>

<h2 class="hd-2">Generated Theme</h2>
<p class="mb-6">Copy this to your own <i>theme.css</i> file</p>
<div class="relative rounded-xl overflow-hidden z-0">
  <pre class="base:code-block p-8 max-h-100">{app.generated.theme.trim()}</pre>
  <button
    class="absolute top-4 right-4 base:btn grid {isCopied ? `filled-${app.activeColor}-100-900` : 'filled-surface-100-900'}"
    onclick={handleCopyClick}
  >
    {#if isCopied}
      <span transition:fly={{ y: 30 }} class="col-start-1 row-start-1">
        <CheckIcon />
      </span>
    {:else}
      <span transition:fly={{ y: -30 }} class="col-start-1 row-start-1">
        <CopyIcon />
      </span>
    {/if}
  </button>
</div>
