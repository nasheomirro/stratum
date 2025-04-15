<script lang="ts">
  import { vars } from "$lib/app.svelte";
  import { colorNames, colorShades } from "$lib/constants";
  import chroma from "chroma-js";

  import Controls from "$lib/components/Controls.svelte";

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

  <h3 class="hd-6">{colorName}</h3>
  <div class="flex flex-col gap-1">
    {#each colorShades as colorShade}
      {@const color = vars.get(`--color-${colorName}-${colorShade}`) as string}
      <div class="flex gap-2 items-center">
        <label
          class="flex items-center justify-center w-8"
          for="color-{colorName}-{colorShade}">{colorShade}</label
        >
        <input
          class="input"
          type="color"
          name="color-{colorName}-{colorShade}"
          bind:value={
            () => chroma(color).hex(),
            (v) =>
              v !== undefined &&
              vars.set(`--color-${colorName}-${colorShade}`, chroma(v).hex())
          }
        />
        <div class="grow">
          <input
            class="input"
            id="color-{colorName}-{colorShade}"
            name="color-{colorName}-{colorShade}"
            value={chroma(color).hex()}
            onchange={(e) => {
              const v = e.currentTarget.value;
              if (chroma.valid(v)) {
                vars.set(`--color-${colorName}-${colorShade}`, chroma(v).hex());
              }
            }}
          />
        </div>
      </div>
    {/each}
  </div>
</Controls>
