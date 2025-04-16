<script lang="ts">
  import { colorNames } from "$lib/constants";

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
</Controls>
