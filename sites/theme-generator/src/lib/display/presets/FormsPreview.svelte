<script>
  import { app } from "$lib/app.svelte";
  import PresetPreview from "./PresetPreview.svelte";
</script>

<PresetPreview name="forms" bind:show={app.presetConfig.forms}>
  <div class="space-y-2 mb-8">
    <h2 class="hd-2">presets/forms</h2>
    <p>Add nice-looking input classes.</p>
  </div>

  <div class="grid gap-7 xl:grid-cols-3 items-start">
    <div class="space-y-8">
      <div class="p-6 border border-surface-100-900 rounded-lg shadow">
        <div class="hd-2 mb-6 leading-none">Login</div>
        <form class="space-y-2 mb-2">
          <label class="flex gap-1 flex-col">
            <span class="label-text">email</span>
            <input class="input" type="email" placeholder="name@example.com" />
          </label>
          <label class="flex gap-1 flex-col">
            <span class="label-text">password</span>
            <input class="input" type="password" placeholder="super secret string" />
          </label>

          <button class="mt-6 btn w-full filled-{app.activeColor}-500">Sign in Now</button>
        </form>
        <button class="border-surface-100-900 hover:filled-surface-200-800 btn w-full border">Sign in with Google</button>
      </div>
    </div>

    <div class="space-y-8 grid gap-7 xl:grid-cols-2 xl:col-span-2">
      <div class="xl:col-span-2">
        <label class="flex flex-col gap-1">
          <span class="label-text">Energy Level</span>
          <input type="range" class="input w-full" />
        </label>
      </div>

      <div class="space-y-4 border border-surface-100-900 p-6 rounded-xl shadow">
        <div class="hd-4">Day Update</div>
        <label class="flex flex-col gap-2">
          <span class="label-text">How was today?</span>
          <select class="select">
            <option>Great</option>
            <option>Good</option>
            <option>Meh</option>
            <option>Bad</option>
          </select>
        </label>

        <label class="flex flex-col gap-2">
          <span class="label-text">Summary</span>
          <textarea class="input w-full max-h-20"></textarea>
        </label>

        <button class="btn filled-{app.activeColor}-500 ml-auto flex">Submit</button>
      </div>

      <div class="space-y-4">
        <input class="input" placeholder="placeholder" />
        <input class="input" disabled placeholder="disabled" />
        <input class="input" type="file" placeholder="disabled" />
        <div class="grid grid-cols-2">
          <div class="space-y-2">
            <label class="flex gap-2 items-center">
              <input type="checkbox" class="checkbox" />
              <span>Checkbox 1</span>
            </label>
            <label class="flex gap-2 items-center">
              <input type="checkbox" class="checkbox" />
              <span>Checkbox 2</span>
            </label>
            <label class="flex gap-2 items-center">
              <input type="checkbox" class="checkbox" />
              <span>Checkbox 3</span>
            </label>
          </div>
          <div class="space-y-2">
            <label class="flex gap-2 items-center">
              <input type="radio" class="radio" name="forms-preview-example-radio" />
              <span>Radio 1</span>
            </label>
            <label class="flex gap-2 items-center">
              <input type="radio" class="radio" name="forms-preview-example-radio" />
              <span>Radio 2</span>
            </label>
            <label class="flex gap-2 items-center">
              <input type="radio" class="radio" name="forms-preview-example-radio" />
              <span>Radio 3</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</PresetPreview>
