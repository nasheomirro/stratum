<script lang="ts">
  import { app } from "$lib/app.svelte";
  import { navbarState } from "$lib/controls/navbar/navbar.svelte";

  import Navbar from "$lib/controls/navbar/Navbar.svelte";
  import ColorControls from "$lib/controls/colors/ColorControls.svelte";
  import PresetControls from "$lib/controls/presets/PresetControls.svelte";
  import PreviewPanel from "$lib/display/PreviewPanel.svelte";
  import TextControls from "$lib/controls/text/TextControls.svelte";
  import BackgroundControls from "$lib/controls/background/BackgroundControls.svelte";
  import PresetPipControls from "$lib/controls/presets/PresetPipControls.svelte";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { type PresetNames } from "@nasheomirro/stratum-theme";
  import PresetFormsControls from "$lib/controls/presets/PresetFormsControls.svelte";
  import PresetTypographyControls from "$lib/controls/presets/PresetTypographyControls.svelte";
  import CodePanel from "$lib/display/CodePanel.svelte";
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
      <BackgroundControls />
      <PresetControls />
      {#if Object.values(app.presetConfig).some((v) => v)}
        <div transition:fly={{ y: -20 }} class="z-0">
          <div class="h-20 bg-surface-100-900/50"></div>
          <div>
            {#each (Object.keys(app.presetConfig) as PresetNames[]).filter((key) => app.presetConfig[key]) as key (key)}
              <div animate:flip={{ duration: 200 }} transition:fly={{ x: -20 }}>
                {#if key === "pip"}
                  <PresetPipControls />
                {:else if key === "forms"}
                  <PresetFormsControls />
                {:else if key === "typography"}
                  <PresetTypographyControls />
                {/if}
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <div
    class="row-start-1 col-start-1 md:row-start-auto md:col-start-auto {app.display === 'controls-preview' &&
      'hidden'} md:block w-full overflow-x-auto"
  >
    {#if app.display === "code"}
      <CodePanel />
    {:else if app.display === "preview" || app.display === "controls-preview"}
      <PreviewPanel />
    {/if}
  </div>
</div>
