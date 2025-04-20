<script lang="ts">
  import { app } from "$lib/app.svelte";
  import ColorOptions from "$lib/components/ColorOptions.svelte";
  import Controls from "$lib/components/Controls.svelte";
</script>

<Controls title="Presets">
  <p class="text-xs">
    some presets are customizable through theme variables, you can configure
    them by checking the boxes below:
  </p>

  <div class="space-y-2">
    <label class="form-field-row">
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={app.config.presets.pip}
      />
      <span class="label-text">Pip</span>
    </label>
    <label class="form-field-row">
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={app.config.presets.typography}
      />
      <span class="label-text">Typography</span>
    </label>
    <label class="form-field-row">
      <input
        class="checkbox"
        type="checkbox"
        bind:checked={app.config.presets.forms}
      />
      <span class="label-text">Forms</span>
    </label>
  </div>

  {#if app.config.presets.pip || app.config.presets.forms || app.config.presets.typography}
    <div class="space-y-1">
      <h3 class="hd-6 font-bold">Shared</h3>
      <p class="text-xs">
        some preset variables are used by multiple presets, these variables are
        configurable here:
      </p>
    </div>

    <div class="form-field">
      <label class="label-text" for="--radius-preset-base">radius-base</label>
      <input
        class="input"
        bind:value={app.theme.presets.shared["--radius-preset-base"]}
        id="--radius-preset-base"
        defaultValue="inherit"
      />
    </div>
  {/if}

  {#if app.config.presets.typography}
    <div class="space-y-1">
      <h3 class="hd-6 font-bold">Presets/Typography</h3>
      <p class="text-xs">
        edit preset variables that <code class="base:code py-0"
          >presets/typography</code
        > uses.
      </p>
    </div>

    <h4 class="font-bold">Anchor Settings</h4>

    <label class="form-field">
      <span class="label-text">font color - light</span>
      <select
        class="select"
        bind:value={
          app.theme.presets.typography.anchor["--color-preset-anchor-light"]
        }
      >
        <ColorOptions hasInherit />
      </select>
    </label>

    <label class="form-field">
      <span class="label-text">font color - dark</span>
      <select
        class="select"
        bind:value={
          app.theme.presets.typography.anchor["--color-preset-anchor-dark"]
        }
      >
        <ColorOptions hasInherit />
      </select>
    </label>

    <div class="form-field">
      <label class="label-text" for="--anchor-font-family">font family</label>
      <input
        bind:value={app.theme.presets.typography.anchor["--font-preset-anchor"]}
        class="input"
        id="--anchor-font-family"
        defaultValue="inherit"
      />
      <p class="form-field-caption">
        make sure your font is installed locally and you typed its name
        correctly if you want it shown on the display.
      </p>
    </div>

    <div class="form-field">
      <label class="label-text" for="--anchor-letter-spacing"
        >letter spacing</label
      >
      <input
        class="input"
        bind:value={
          app.theme.presets.typography.anchor["--tracking-preset-anchor"]
        }
        id="--anchor-letter-spacing"
        defaultValue="inherit"
      />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <label class="form-field">
        <span class="label-text">font weight</span>
        <select
          class="select"
          bind:value={
            app.theme.presets.typography.anchor["--font-weight-preset-anchor"]
          }
        >
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
        <select
          class="select"
          bind:value={
            app.theme.presets.typography.anchor["--style-preset-anchor"]
          }
        >
          <option>inherit</option>
          <option selected>normal</option>
          <option>italic</option>
        </select>
      </label>
    </div>

    <h4 class="font-bold">Heading Settings</h4>

    <label class="form-field">
      <span class="label-text">font color - light</span>
      <select
        class="select"
        bind:value={
          app.theme.presets.typography.heading["--color-preset-heading-light"]
        }
      >
        <ColorOptions hasInherit />
      </select>
    </label>

    <label class="form-field">
      <span class="label-text">font color - dark</span>
      <select
        class="select"
        bind:value={
          app.theme.presets.typography.heading["--color-preset-heading-dark"]
        }
      >
        <ColorOptions hasInherit />
      </select>
    </label>

    <div class="form-field">
      <label class="label-text" for="--anchor-font-family">font family</label>
      <input
        bind:value={
          app.theme.presets.typography.heading["--font-preset-heading"]
        }
        class="input"
        id="--anchor-font-family"
        defaultValue="inherit"
      />
      <p class="form-field-caption">
        make sure your font is installed locally and you typed its name
        correctly if you want it shown on the display.
      </p>
    </div>

    <div class="form-field">
      <label class="label-text" for="--anchor-letter-spacing"
        >letter spacing</label
      >
      <input
        class="input"
        bind:value={
          app.theme.presets.typography.heading["--tracking-preset-heading"]
        }
        id="--anchor-letter-spacing"
        defaultValue="inherit"
      />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <label class="form-field">
        <span class="label-text">font weight</span>
        <select
          class="select"
          bind:value={
            app.theme.presets.typography.heading["--font-weight-preset-heading"]
          }
        >
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
        <select
          class="select"
          bind:value={
            app.theme.presets.typography.heading["--style-preset-heading"]
          }
        >
          <option>inherit</option>
          <option selected>normal</option>
          <option>italic</option>
        </select>
      </label>
    </div>
  {/if}
</Controls>
