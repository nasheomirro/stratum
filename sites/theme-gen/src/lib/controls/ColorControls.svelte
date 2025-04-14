<script lang="ts">
  import { vars } from "$lib/app.svelte";
  import Controls from "$lib/components/Controls.svelte";
  import { colorNames, colorShades } from "$lib/constants";

  let colorName = $state("primary");
</script>

<Controls title="Colors">
  <p class="text-xs">choose a color to edit from the colors below:</p>
  <div class="grid grid-cols-7 gap-2">
    {#each colorNames as _colorName}
      <label
        class="block w-full h-10 rounded bg-{_colorName}-500 {colorName !==
          _colorName && 'opacity-50'}"
      >
        <input
          type="radio"
          class="hidden"
          name="color-name"
          bind:group={colorName}
          value={_colorName}
        />
      </label>
    {/each}
  </div>

  <h3 class="hd-6">{colorName}</h3>
  <div class="flex flex-col gap-1">
    {#each colorShades as colorShade}
      <label class="grid grid-cols-[4rem_1fr]">
        <span class="flex items-center justify-center">{colorShade}</span>
        <input
          class="input"
          name="color-{colorName}-{colorShade}"
          bind:value={
            () => vars.get(`color-${colorName}-${colorShade}`),
            (v) =>
              v !== undefined && vars.set(`color-${colorName}-${colorShade}`, v)
          }
        />
      </label>
    {/each}
  </div>
</Controls>
