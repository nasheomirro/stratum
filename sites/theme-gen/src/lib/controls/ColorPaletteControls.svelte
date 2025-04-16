<script lang="ts">
  import chroma from "chroma-js";
  import { app } from "$lib/app.svelte";
  import { colorShades } from "$lib/constants";

  type Props = {
    colorName: string;
  };

  const { colorName }: Props = $props();
  let createMode: "manual" | "auto" | "tri-auto" = $state("manual");

  function setAutoPalette(config: { tri?: boolean }) {
    const lightest = app.vars.get(`--color-${colorName}-50`);
    const middle = app.vars.get(`--color-${colorName}-500`);
    const darkest = app.vars.get(`--color-${colorName}-950`);

    if (lightest && middle && darkest) {
      const colors = chroma
        .scale(config.tri ? [lightest, middle, darkest] : [lightest, darkest])
        .mode("oklch")
        .colors(colorShades.length);

      for (let i = 0; i < colorShades.length; i++) {
        const color = colors[i];
        const colorShade = colorShades[i];
        app.vars.set(`--color-${colorName}-${colorShade}`, color);
      }
    }
  }

  function onColorChange(key: string, color: string, input: HTMLInputElement) {
    const value = input.value;
    if (!chroma.valid(value)) {
      input.value = color;
      return;
    }

    app.vars.set(key, value);

    if (createMode !== "manual") {
      setAutoPalette({ tri: createMode === "tri-auto" });
    }
  }
</script>

<div class="space-y-2">
  <h3 class="hd-6">{colorName}</h3>
  <div class="flex items-center gap-4">
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={createMode}
        value="manual"
      />
      <span class="label-text">Manual</span>
    </label>
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={createMode}
        value="auto"
      />
      <span class="label-text">Auto</span>
    </label>
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={createMode}
        value="tri-auto"
      />
      <span class="label-text">Tri-Auto</span>
    </label>
  </div>

  <p class="form-field-caption">
    {#if createMode === "manual"}
      You can edit each shade manually, switch to auto if you want to
      automatically interpolate between two colors.
    {:else if createMode === "auto"}
      shades between the lightest (50) and the darkest (950) are automatically
      generated. Switch to manual if you want to set them yourself.
    {:else if createMode === "tri-auto"}
      shades between the lightest (50), the middle (500), and the darkest (950)
      are automatically generated. Switch to manual if you want to set them
      yourself.
    {/if}
  </p>
</div>

<div class="flex justify-between">
  <button class="btn btn-sm filled-primary-500">random</button>
  {#if createMode !== "manual"}
    <button
      class="btn btn-sm filled-primary-100-900"
      onclick={() => setAutoPalette({ tri: createMode === "tri-auto" })}
      >regenerate</button
    >
  {/if}
</div>

<div class="flex flex-col gap-1">
  {#each colorShades as colorShade}
    {@const color = app.vars.get(
      `--color-${colorName}-${colorShade}`
    ) as string}
    {@const isDisabled =
      createMode === "auto"
        ? colorShade > 50 && colorShade < 950
        : createMode === "tri-auto"
          ? colorShade !== 50 && colorShade !== 500 && colorShade !== 950
          : false}

    <div class="flex gap-2 items-center">
      <label
        class="flex items-center justify-center w-8"
        for="color-{colorName}-{colorShade}">{colorShade}</label
      >
      <input
        class="input"
        type="color"
        name="color-{colorName}-{colorShade}"
        disabled={isDisabled}
        value={(() => {
          /* 
            color inputs only accept hex values, it's okay if oklch --> hex is lossy,
            if this input is used, hex --> oklch is loseless
           */
          return chroma(color).hex();
        })()}
        oninput={(e) =>
          onColorChange(
            `--color-${colorName}-${colorShade}`,
            chroma(color).hex(),
            e.currentTarget
          )}
      />
      <div class="grow">
        <input
          class="input"
          id="color-{colorName}-{colorShade}"
          name="color-{colorName}-{colorShade}"
          disabled={isDisabled}
          value={chroma(color).css("oklch")}
          onchange={(e) =>
            onColorChange(
              `--color-${colorName}-${colorShade}`,
              chroma(color).css("oklch"),
              e.currentTarget
            )}
        />
      </div>
    </div>
  {/each}
</div>
