<script lang="ts">
  import chroma from "chroma-js";
  import { colorShades } from "@nasheomirro/stratum-shared";

  import { app } from "$lib/app.svelte";
  import { genScaleFromSeed, genRandomSeed, genScale } from "$lib/utils/colors";

  type Props = {
    colorName: string;
  };

  const { colorName }: Props = $props();
  let mode: "manual" | "auto" | "tri-auto" | "mid-auto" = $state("manual");

  function setColorValue(key: string, value: string) {
    if (chroma.valid(value)) {
      app.vars.set(key, value);
    }
  }

  /** 
   * Hey buddy, this is a "always-generated" value, it uses var(--color-*).
   */
  function setColorContrastValue(key: string, value: string) {
    const color = app.vars.get(key);
    const l = app.vars.get(`--color-${colorName}-50`);
    const d = app.vars.get(`--color-${colorName}-950`);

    if (color && l && d) {
      const best =
        chroma.contrast(color, l) > chroma.contrast(color, d) ? l : d;
      app.vars.set(`--color-contrast-${colorName}-${key.split("-")[-1]}`, best);
    }
  }


  function setToAutomatedScale() {
    if (mode === "manual") return;

    const l = app.vars.get(`--color-${colorName}-50`);
    const m = app.vars.get(`--color-${colorName}-500`);
    const d = app.vars.get(`--color-${colorName}-950`);

    if (l && m && d) {
      const colors =
        mode === "mid-auto"
          ? genScaleFromSeed(chroma(m))
          : genScale(mode === "auto" ? [l, d] : [l, m, d]);

      for (let i = 0; i < colorShades.length; i++) {
        const color = colors[i];
        const colorShade = colorShades[i];
        app.vars.set(`--color-${colorName}-${colorShade}`, color);
      }
    }
  }

  function setToRandomScale() {
    const colors = genScaleFromSeed(genRandomSeed());

    for (let i = 0; i < colorShades.length; i++) {
      const color = colors[i];
      const colorShade = colorShades[i];
      app.vars.set(`--color-${colorName}-${colorShade}`, color);
    }
  }

  function handleClick(e: MouseEvent & { currentTarget: HTMLButtonElement }) {
    const action = e.currentTarget.getAttribute("data-action");
    if (action) {
      if (action === "regenerate") setToAutomatedScale();
      else if (action === "random") setToRandomScale();
    }
  }

  function handleChange(e: Event & { currentTarget: HTMLInputElement }) {
    setColorValue(e.currentTarget.value, `--${e.currentTarget.name}`);
    setColorContrastValue(e.currentTarget.value, `--${e.currentTarget.name}`);
    if (mode !== "manual") {
      setToAutomatedScale();
    }
  }
</script>

<div class="space-y-2">
  <h3 class="hd-6">{colorName}</h3>
  <div class="flex flex-wrap items-center gap-4">
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={mode}
        value="manual"
      />
      <span class="label-text">Manual</span>
    </label>
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={mode}
        value="auto"
      />
      <span class="label-text">Auto</span>
    </label>
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={mode}
        value="tri-auto"
      />
      <span class="label-text">Tri-Auto</span>
    </label>
    <label class="flex items-center gap-1">
      <input
        type="radio"
        class="radio"
        name="color-{colorName}-create-mode"
        bind:group={mode}
        value="mid-auto"
      />
      <span class="label-text">Mid-Auto</span>
    </label>
  </div>

  <p class="form-field-caption">
    {#if mode === "manual"}
      You can edit each shade manually, switch to auto if you want to
      automatically interpolate between two colors, three colors, or generate
      the whole pallete with just one color.
    {:else if mode === "auto"}
      shades between the lightest (50) and the darkest (950) are automatically
      generated. Switch to manual if you want to set them yourself.
    {:else if mode === "tri-auto"}
      shades between the lightest (50), the middle (500), and the darkest (950)
      are automatically generated. Switch to manual if you want to set them
      yourself.
    {:else if mode === "mid-auto"}
      All shades are automatically generated based on the middle (500). Switch
      to manual if you want to set them yourself.
    {/if}
  </p>
</div>

<div class="flex justify-between">
  <button
    class="btn btn-sm filled-primary-500"
    onclick={handleClick}
    data-action="random">random</button
  >
  {#if mode !== "manual"}
    <button
      class="btn btn-sm filled-primary-100-900"
      onclick={handleClick}
      data-action="regenerate">regenerate</button
    >
  {/if}
</div>

<div class="flex flex-col gap-1">
  {#each colorShades as colorShade}
    {@const color = app.vars.get(
      `--color-${colorName}-${colorShade}`
    ) as string}
    {@const isDisabled =
      mode === "auto"
        ? colorShade > 50 && colorShade < 950
        : mode === "tri-auto"
          ? colorShade !== 50 && colorShade !== 500 && colorShade !== 950
          : mode === "mid-auto"
            ? colorShade !== 500
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
        value={chroma(color).hex()}
        oninput={handleChange}
      />
      <div class="grow">
        <input
          class="input"
          id="color-{colorName}-{colorShade}"
          name="color-{colorName}-{colorShade}"
          disabled={isDisabled}
          value={chroma(color).css("oklch")}
          onchange={handleChange}
        />
      </div>
    </div>
  {/each}
</div>
