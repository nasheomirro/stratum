<script lang="ts">
  import Icon from "~icons/material-symbols/box";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
  import SharedControls from "./SharedControls.svelte";
  import { app } from "$lib/app.svelte";
  import ColorVarInput from "$lib/components/ColorVarInput.svelte";
</script>

<ControlDropdown preset>
  {#snippet head()}
    <Icon /> presets/typography
  {/snippet}
  <div class="space-y-4">
    <p>You have opted to use this preset, you can import it to your project by adding this to your main.css file:</p>
    <pre class="code-block">@import "@nasheomirro/stratum/presets/typography";</pre>
  </div>

  <div class="border-b border-surface-100-900"></div>
  <div>
    <h3 class="hd-6">Configurations</h3>
    <p>Presets come with some limited controls on how they'll look:</p>
  </div>
  <SharedControls preset="typography" />

  <h4 class="hd-static font-bold">Anchor Settings</h4>

  <div class="form-field">
    <label class="label-text" for="anchor-color-light">font color - light</label>
    <ColorVarInput hasInherit id="anchor-color-light" bind:value={app.theme.presets.typography.anchorColor} />
  </div>

  <div class="form-field">
    <label class="label-text" for="anchor-color-dark">font color - dark</label>
    <ColorVarInput hasInherit id="anchor-color-dark" bind:value={app.theme.presets.typography.anchorColorDark} />
  </div>

  <div class="form-field">
    <label class="label-text" for="--anchor-font-family">font family</label>
    <input bind:value={app.theme.presets.typography.anchorFontFamily} class="input" id="--anchor-font-family" defaultValue="inherit" />
    <p class="form-field-caption">
      make sure your font is installed locally and you typed its name correctly if you want it shown on the display.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="--anchor-letter-spacing">letter spacing</label>
    <input
      class="input"
      bind:value={app.theme.presets.typography.anchorLetterSpacing}
      id="--anchor-letter-spacing"
      defaultValue="inherit"
    />
  </div>

  <div class="grid grid-cols-2 gap-4">
    <label class="form-field">
      <span class="label-text">font weight</span>
      <select class="select" bind:value={app.theme.presets.typography.anchorFontWeight}>
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
      <select class="select" bind:value={app.theme.presets.typography.anchorFontStyle}>
        <option>inherit</option>
        <option selected>normal</option>
        <option>italic</option>
      </select>
    </label>
  </div>

  <h4 class="hd-static font-bold">Heading Settings</h4>

  <div class="form-field">
    <label class="label-text" for="heading-color-light">font color - light</label>
    <ColorVarInput hasInherit id="heading-color-light" bind:value={app.theme.presets.typography.headingColor} />
  </div>

  <div class="form-field">
    <label class="label-text" for="heading-color-dark">font color - dark</label>
    <ColorVarInput hasInherit id="heading-color-dark" bind:value={app.theme.presets.typography.headingColorDark} />
  </div>

  <div class="form-field">
    <label class="label-text" for="--anchor-font-family">font family</label>
    <input bind:value={app.theme.presets.typography.headingFontFamily} class="input" id="--anchor-font-family" defaultValue="inherit" />
    <p class="form-field-caption">
      make sure your font is installed locally and you typed its name correctly if you want it shown on the display.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="--anchor-letter-spacing">letter spacing</label>
    <input
      class="input"
      bind:value={app.theme.presets.typography.headingLetterSpacing}
      id="--anchor-letter-spacing"
      defaultValue="inherit"
    />
  </div>

  <div class="grid grid-cols-2 gap-4">
    <label class="form-field">
      <span class="label-text">font weight</span>
      <select class="select" bind:value={app.theme.presets.typography.headingFontWeight}>
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
      <select class="select" bind:value={app.theme.presets.typography.headingFontStyle}>
        <option>inherit</option>
        <option selected>normal</option>
        <option>italic</option>
      </select>
    </label>
  </div>
</ControlDropdown>
