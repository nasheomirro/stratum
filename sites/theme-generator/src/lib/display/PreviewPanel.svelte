<script lang="ts">
  import { app } from "$lib/app.svelte";
  import ColorPreview from "./ColorPreview.svelte";
  import MainPreview from "./MainPreview.svelte";
  import TextPreview from "./TextPreview.svelte";

  import PipPreview from "./presets/PipPreview.svelte";
</script>

{#snippet divider()}
  <div class="border-b border-surface-100-900 my-10"></div>
{/snippet}

<div class="p-4 lg:p-10 max-w-[1280px] mx-auto">
  <MainPreview />
  {@render divider()}
  <TextPreview />
  {@render divider()}
  <ColorPreview />
  {#if app.presetConfig.pip}
    {@render divider()}
    <PipPreview />
  {/if}
</div>
