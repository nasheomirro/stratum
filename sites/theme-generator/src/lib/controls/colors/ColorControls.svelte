<script lang="ts">
  import { colorSets } from "@nasheomirro/stratum-theme";
  import PaletteIcon from "~icons/material-symbols/palette";
  import PenIcon from "~icons/material-symbols/pen-size-5";

  import { app } from "$lib/app.svelte";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
  import ColorPaletteControls from "./ColorPaletteControls.svelte";
</script>

<ControlDropdown>
  {#snippet head()}
    <PaletteIcon /> Colors
  {/snippet}
  <p>choose a color to edit from the colors below:</p>
  <div class="grid grid-cols-7 gap-2">
    {#each colorSets as colorSet}
      <div>
        <label class="block w-full h-10 rounded focus-within:brightness-110">
          <div
            style="--outline-color: light-dark(var(--color-{colorSet}-100), var(--color-{colorSet}-900));"
            class="flex items-center justify-center text-contrast-{colorSet}-500 w-full h-full rounded bg-{colorSet}-500 opacity-50
            {app.activeColor === colorSet && '!opacity-100 outline-3 outline-(--outline-color)'}"
          >
            {#if app.activeColor === colorSet}
              <PenIcon />
            {/if}
          </div>
          <input type="radio" class="absolute opacity-0" name="color-name" bind:group={app.activeColor} value={colorSet} />
        </label>
      </div>
    {/each}
  </div>

  <ColorPaletteControls
    colorName={app.activeColor}
    bind:colorSet={app.theme.colors[app.activeColor]}
    bind:contrastSet={app.theme.colors[app.activeColor].contrasts}
  />

  <div class="space-y-1">
    <h3 class="hd-6 font-bold">contrast colors</h3>
    <p class="text-sm">
      contrast colors for each shade is automatically created. Note that contrast colors are either the `50` shade or `950` shade, the app
      chooses which contrasts best with the given shade but doesn't garauntee that it will be up to WCAG standards.
    </p>
  </div>
</ControlDropdown>
