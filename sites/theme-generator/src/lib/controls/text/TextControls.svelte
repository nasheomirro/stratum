<script>
  import { app } from "$lib/app.svelte";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
  import Icon from "~icons/material-symbols/custom-typography";
</script>

<ControlDropdown>
  {#snippet head()}
    <Icon /> Texts
  {/snippet}
  <div class="space-y-7">
    <div class="form-field">
      <label class="label-text" for="--base-text-scaling">text-scaling</label>
      <input class="input" bind:value={app.theme.base.textScaling} id="--base-text-scaling" defaultValue="inherit" />
      <p class="form-field-caption">
        Currently, text sizes aren't configurable individually. But text-scaling is multiplied to all <code class="base:code py-0"
          >text-[size]</code
        > utilities.
      </p>
    </div>

    <div class="form-field">
      <label class="label-text" for="--base-font-family">font family</label>
      <input bind:value={app.theme.base.fontFamily} class="input" id="--base-font-family" defaultValue="inherit" />
      <p class="form-field-caption">
        make sure your font is installed locally and you typed its name correctly if you want it shown on the display.
      </p>
    </div>

    <div class="form-field">
      <label class="label-text" for="--base-letter-spacing">letter spacing</label>
      <input class="input" bind:value={app.theme.base.letterSpacing} id="--base-letter-spacing" defaultValue="inherit" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <label class="form-field">
        <span class="label-text">font weight</span>
        <select class="select" bind:value={app.theme.base.fontWeight}>
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
        <select class="select" bind:value={app.theme.base.fontStyle}>
          <option>inherit</option>
          <option selected>normal</option>
          <option>italic</option>
        </select>
      </label>
    </div>
  </div>
</ControlDropdown>
