<script>
  import { app } from "$lib/app.svelte";
  import { navbarState } from "$lib/controls/navbar/navbar.svelte";

  import Navbar from "$lib/controls/navbar/Navbar.svelte";
  import ColorControls from "$lib/controls/colors/ColorControls.svelte";
  import PresetControls from "$lib/controls/presets/PresetControls.svelte";
  import CodeDisplay from "$lib/display/CodeDisplay.svelte";
  import PreviewPanel from "$lib/display/PreviewPanel.svelte";
  import TextControls from "$lib/controls/text/TextControls.svelte";
</script>

<Navbar />
<div class="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr]">
  <div
    class="
    {app.display !== 'controls-preview' && 'hidden'} 
    row-start-1 col-start-1 md:row-start-auto md:col-start-auto md:block bg-surface-50-950
    border-r border-r-surface-100-900 md:sticky md:max-h-(--max-h) md:top-0 md:overflow-y-auto
    "
    style="top: {navbarState.height}px; --max-h: calc(100vh - {navbarState.height}px);"
  >
    <div>
      <ColorControls />
      <TextControls />
      <PresetControls />
    </div>
  </div>


  <div
    class="row-start-1 col-start-1 md:row-start-auto md:col-start-auto {app.display === 'controls-preview' &&
      'hidden'} md:block w-full overflow-x-auto"
  >
    {#if app.display === "code"}
      <CodeDisplay />
    {:else if app.display === "preview" || app.display === "controls-preview"}
      <PreviewPanel />
    {/if}
  </div>
</div>
