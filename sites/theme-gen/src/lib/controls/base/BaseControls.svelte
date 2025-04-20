<script>
  import Controls from "$lib/components/Controls.svelte";
  import { app } from "$lib/app.svelte";
  
  import ColorOptions from "$lib/components/ColorOptions.svelte";
</script>

<Controls title="Base">
  <div class="space-y-1">
    <h3 class="hd-6">colors</h3>
    <p class="text-xs">
      The base colors can only be set to an existing <code
        class="base:code py-0">--color-*</code
      > variable.
    </p>
  </div>

  <label class="form-field">
    <span class="label-text">background color - light</span>
    <select
      class="select"
      bind:value={app.theme.base["--base-background-color"]}
    >
      <ColorOptions />
    </select>
  </label>

  <label class="form-field">
    <span class="label-text">background color - dark</span>
    <select
      class="select"
      bind:value={app.theme.base["--base-background-color-dark"]}
    >
      <ColorOptions />
    </select>
  </label>

  <label class="form-field">
    <span class="label-text">font color - light</span>
    <select class="select" bind:value={app.theme.base["--base-font-color"]}>
      <ColorOptions />
    </select>
  </label>

  <label class="form-field">
    <span class="label-text">font color - dark</span>
    <select
      class="select"
      bind:value={app.theme.base["--base-font-color-dark"]}
    >
      <ColorOptions />
    </select>
  </label>

  <div class="space-y-1">
    <h3 class="hd-6">text settings</h3>
    <p class="text-xs">
      All configurations related to text and font and texts and... fonts.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="--base-font-family">font family</label>
    <input
      bind:value={app.theme.base["--base-font-family"]}
      class="input"
      id="--base-font-family"
      defaultValue="inherit"
    />
    <p class="form-field-caption">
      make sure your font is installed locally and you typed its name correctly
      if you want it shown on the display.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="--base-letter-spacing">letter spacing</label>
    <input
      class="input"
      bind:value={app.theme.base["--base-letter-spacing"]}
      id="--base-letter-spacing"
      defaultValue="inherit"
    />
  </div>

  <div class="grid grid-cols-2 gap-4">
    <label class="form-field">
      <span class="label-text">font weight</span>
      <select class="select" bind:value={app.theme.base["--base-font-weight"]}>
        <option>inherit</option>
        <option>100</option>
        <option>200</option>
        <option>300</option>
        <option selected>400</option>
        <option>500</option>
        <option>600</option>
        <option>700</option>
        <option>800</option>
        <option>900</option>
      </select>
    </label>
    <label class="form-field">
      <span class="label-text">font style</span>
      <select class="select" bind:value={app.theme.base["--base-font-style"]}>
        <option>inherit</option>
        <option selected>normal</option>
        <option>italic</option>
      </select>
    </label>
  </div>

  <div class="space-y-1">
    <h4 class="text-sm font-bold">font sizes</h4>
    <p class="text-xs">
      As of now, it is not possible to set individual custom font sizes, the
      base font size is set to <code class="base:code py-0">--text-base</code> by
      default.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="--base-text-scaling">text-scaling</label>
    <input
      class="input"
      bind:value={app.theme.base["--base-text-scaling"]}
      id="--base-text-scaling"
      defaultValue="inherit"
    />
    <p class="form-field-caption">
      text-scaling is multiplied to all <code class="base:code py-0"
        >text-[size]</code
      > utilities.
    </p>
  </div>
</Controls>
