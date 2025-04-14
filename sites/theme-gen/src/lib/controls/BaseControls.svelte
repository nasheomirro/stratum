<script>
  import Controls from "$lib/components/Controls.svelte";
  import { vars } from "$lib/app.svelte";
</script>

<Controls title="Base">
  <div class="form-field">
    <label class="label-text" for="base-font-family">font family</label>
    <input
      bind:value={
        () => vars.get("base-font-family"),
        (v) => v !== undefined && vars.set("base-font-family", v)
      }
      class="input"
      id="base-font-family"
      defaultValue="inherit"
    />
    <p class="form-field-caption">
      make sure your font is installed locally and you typed its name correctly
      if you want it shown on the display.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="base-letter-spacing">letter spacing</label>
    <input
      class="input"
      bind:value={
        () => vars.get("base-letter-spacing"),
        (v) => v !== undefined && vars.set("base-letter-spacing", v)
      }
      id="base-letter-spacing"
      defaultValue="inherit"
    />
  </div>

  <div class="grid grid-cols-2 gap-4">
    <label class="form-field">
      <span class="label-text">font weight</span>
      <select
        class="select"
        bind:value={
          () => vars.get("base-font-weight"),
          (v) => v !== undefined && vars.set("base-font-weight", v)
        }
      >
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
          () => vars.get("base-font-style"),
          (v) => v !== undefined && vars.set("base-font-style", v)
        }
      >
        <option selected>normal</option>
        <option>italic</option>
      </select>
    </label>
  </div>

  <div>
    <h3 class="hd-6">font sizes</h3>
    <p class="form-field-caption mb-4">
      As of now, it is not possible to set a custom font size, the base font
      size is set to <code class="base:code py-0">--text-base</code> by
      default. If you want to change the base font size, change
      <code class="base:code py-0">--text-base</code> instead.
    </p>
  </div>
</Controls>
