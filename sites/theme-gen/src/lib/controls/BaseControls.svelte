<div class="space-y-4">
  <h2 class="hd-2">Base</h2>
  <div class="flex flex-col space-y-1">
    <label class="text-xs text-surface-400-600 font-bold" for="base-font-family"
      >font family</label
    >
    <input class="input" id="base-font-family" defaultValue="inherit" />
    <p class="text-xs text-surface-400-600">
      make sure your font is installed locally and you typed its name correctly.
    </p>
  </div>
  <div class="flex flex-col space-y-1">
    <label
      class="text-xs text-surface-400-600 font-bold"
      for="base-letter-spacing">letter spacing</label
    >
    <input class="input" id="base-letter-spacing" defaultValue="inherit" />
    <p class="text-xs text-surface-400-600">
      value is automatically converted to <code class="base:code py-0">em</code>
      or type "inherit" to leave it as is.
    </p>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <label class="flex flex-col space-y-1">
      <span class="text-xs text-surface-400-600 font-bold">font weight</span>
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
    <label class="flex flex-col space-y-1">
      <span class="text-xs text-surface-400-600 font-bold">font style</span>
      <select class="select">
        <option selected>normal</option>
        <option>italic</option>
      </select>
    </label>
  </div>
  <div>
    <h3 class="hd-6">font sizes</h3>
    <p class="text-xs text-surface-400-600 mb-4">
      it is reccomended to not provide your own base font size, but instead use
      the default font size which is <code class="base:code py-0"
        >--text-base</code
      >.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <label class="flex flex-col space-y-1">
        <span class="text-xs text-surface-400-600 font-bold">font size</span>
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
      <label class="flex flex-col space-y-1">
        <span class="text-xs text-surface-400-600 font-bold">line height</span>
        <select class="select">
          <option selected>normal</option>
          <option>italic</option>
        </select>
      </label>
    </div>
  </div>
</div>
