<script>
  import Controls from "$lib/components/Controls.svelte";
</script>

<Controls title="Base">
  <div class="form-field">
    <label class="label-text" for="base-font-family">font family</label>
    <input class="input" id="base-font-family" defaultValue="inherit" />
    <p class="form-field-caption">
      make sure your font is installed locally and you typed its name correctly.
    </p>
  </div>

  <div class="form-field">
    <label class="label-text" for="base-letter-spacing">letter spacing</label>
    <input class="input" id="base-letter-spacing" defaultValue="inherit" />
    <p class="form-field-caption">
      value is automatically converted to <code class="base:code py-0">em</code>
      or type "inherit" to leave it as is.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4">
    <label class="form-field">
      <span class="label-text">font weight</span>
      <select class="select">
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
      <select class="select">
        <option selected>normal</option>
        <option>italic</option>
      </select>
    </label>
  </div>

  <div>
    <h3 class="hd-6">font sizes</h3>
    <p class="form-field-caption mb-4">
      it is reccomended to not provide your own base font size, but instead use
      the default font size which is <code class="base:code py-0"
        >--text-base</code
      >.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <label class="form-field">
        <span class="label-text">font size</span>
        <select class="select">
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
        <span class="label-text">line height</span>
        <select class="select">
          <option selected>normal</option>
          <option>italic</option>
        </select>
      </label>
    </div>
  </div>
</Controls>
