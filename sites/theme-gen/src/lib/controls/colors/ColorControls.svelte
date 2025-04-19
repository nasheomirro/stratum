<script lang="ts">
  import { colorNames } from "@nasheomirro/stratum-shared";
  import Controls from "$lib/components/Controls.svelte";
  import ColorPaletteControls from "./ColorPaletteControls.svelte";

  let colorName = $state("primary");
</script>

<Controls title="Colors">
  <p class="text-xs">choose a color to edit from the colors below:</p>
  <div class="grid grid-cols-7 gap-2">
    {#each colorNames as _colorName}
      <div>
        <label
          class="block w-full h-10 rounded bg-{_colorName}-500 opacity-50 {colorName ===
            _colorName && '!opacity-100 outline outline-offset-1'}"
        >
          <input
            type="radio"
            class="hidden"
            name="color-name"
            bind:group={colorName}
            value={_colorName}
          />
        </label>
      </div>
    {/each}
  </div>

  {#key colorName}
    <ColorPaletteControls {colorName} />
  {/key}

  <div class="space-y-1">
    <h3 class="h6 font-bold">contrast colors</h3>
    <p class="text-xs">
      contrast colors for each shade is automatically created. Note that contrast
      colors are either the `50` shade or `950` shade, the app chooses which
      contrasts best with the given shade but doesn't garauntee that it will be up
      to WCAG standards.
    </p>
  </div>
</Controls>
