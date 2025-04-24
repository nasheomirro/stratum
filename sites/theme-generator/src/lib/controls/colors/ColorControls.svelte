<script lang="ts">
  import { colorSets, type ColorSets } from "@nasheomirro/stratum-theme";
  import Icon from "~icons/material-symbols/palette";
  
  import { app } from "$lib/app.svelte";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
  import ColorPaletteControls from "./ColorPaletteControls.svelte";

  let activeColorSet = $state<ColorSets>("primary");
</script>

<ControlDropdown>
  {#snippet head()}
    <Icon /> Colors
  {/snippet}
  <p class="text-xs">choose a color to edit from the colors below:</p>
  <div class="grid grid-cols-7 gap-2">
    {#each colorSets as colorSet}
      <div>
        <label class="block w-full h-10 rounded focus-within:brightness-110">
          <div
            class="w-full h-full bg-{colorSet}-500 opacity-50 {activeColorSet === colorSet &&
              '!opacity-100 outline outline-primary-500 outline-offset-1'}"
          ></div>
          <input type="radio" class="absolute opacity-0" name="color-name" bind:group={activeColorSet} value={colorSet} />
        </label>
      </div>
    {/each}
  </div>

  {#key activeColorSet}
    <ColorPaletteControls
      colorName={activeColorSet}
      bind:colorSet={app.theme.colors[activeColorSet]}
      bind:contrastSet={app.theme.colors[activeColorSet].contrasts}
    />
  {/key}

  <div class="space-y-1">
    <h3 class="hd-6 font-bold">contrast colors</h3>
    <p class="text-xs">
      contrast colors for each shade is automatically created. Note that contrast colors are either the `50` shade or `950` shade, the app
      chooses which contrasts best with the given shade but doesn't garauntee that it will be up to WCAG standards.
    </p>
  </div>
</ControlDropdown>
