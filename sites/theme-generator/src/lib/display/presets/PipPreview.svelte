<script>
  import { app } from "$lib/app.svelte";
  import PersonIcon from "~icons/material-symbols/person";
  import BackIcon from "~icons/material-symbols/arrow-back-rounded";
  import UpArrowIcon from "~icons/material-symbols/arrow-upward";
  import DownArrowIcon from "~icons/material-symbols/arrow-downward";
  import PresetPreview from "./PresetPreview.svelte";
</script>

<PresetPreview name="pip" bind:show={app.presetConfig.pip}>
  <div class="space-y-2 mb-8">
    <h2 class="hd-2">presets/pip</h2>
    <p>A quick way to add button and badge classes, anything that's small and looks like a button.</p>
  </div>

  <div class="grid gap-7 xl:grid-cols-3">
    <div class="space-y-7">
      <div class="space-y-4 p-4 rounded-xl">
        <div class="flex gap-2 items-start flex-wrap">
          <button class="btn filled-{app.activeColor}-500">Button</button>
          <button class="btn filled-{app.activeColor}-500" disabled>Button</button>
          <button class="btn filled-surface-950-50">Button</button>
          <button class="btn filled-{app.activeColor}-100-900">
            <BackIcon />
            Button
          </button>
          <button class="btn hover:filled-surface-300-700"> Button </button>
        </div>
        <div class="flex gap-2 items-start flex-wrap">
          <button class="btn-icon filled-{app.activeColor}-300-700">📦</button>
          <button class="btn-icon filled-{app.activeColor}-100-900 rounded-full">📦</button>
          <button class="btn-icon hover:filled-surface-300-700">📦</button>
        </div>
      </div>

      <div class="space-y-4 p-4 rounded-xl">
        <div class="flex gap-2 items-start flex-wrap">
          <button class="btn btn-lg filled-{app.activeColor}-300-700">large</button>
          <button class="btn btn-base filled-{app.activeColor}-100-900">base</button>
          <button class="btn btn-sm filled-{app.activeColor}-50-950">small</button>
          <button class="btn btn-xs filled-{app.activeColor}-500">x-small</button>
        </div>
        <div class="flex gap-2 items-start flex-wrap">
          <button class="btn-icon btn-icon-lg filled-{app.activeColor}-900-100">lg</button>
          <button class="btn-icon btn-icon-base filled-{app.activeColor}-800-200">📦</button>
          <button class="btn-icon btn-icon-sm filled-{app.activeColor}-700-300">sm</button>
        </div>
      </div>

      <div class="border border-surface-100-900 rounded-xl p-4 space-y-4 shadow">
        <div class="flex gap-2 items-center">
          <div class="base:badge-icon badge-icon-lg rounded-full filled-{app.activeColor}-500">
            <PersonIcon />
          </div>
          <span class="font-bold">Nashe</span>
        </div>

        <p>Anyone know when we stop making more CSS frameworks? Or is that just in our nature?</p>
        <div class="flex justify-between gap-1 items-center">
          <div>
            <button class="btn-icon text-{app.activeColor}-950-50 bg-{app.activeColor}-100-900">
              <UpArrowIcon />
            </button>
            <button class="btn-icon hover:filled-surface-200-800">
              <DownArrowIcon />
            </button>
          </div>
          <div class="text-xs text-surface-600-400">5 hours ago</div>
        </div>
      </div>
    </div>
    <div class="space-y-7">
      <div class="border-surface-100-900 rounded-lg p-4 border shadow flex items-center justify-between text-sm">
        <div class="relative flex gap-2 items-center w-fit cursor-pointer">
          <span>Home</span>
        </div>

        <div class="relative flex gap-2 items-center w-fit cursor-pointer">
          <span>Issues</span>
          <div class="badge-icon filled-{app.activeColor}-500">2</div>
        </div>

        <div class="relative flex gap-2 items-center w-fit cursor-pointer">Pull Requests</div>
      </div>

      <div class="border-surface-100-900 rounded-lg p-4 border space-y-2 shadow">
        <button class="btn-full w-full hover:filled-surface-200-800">Introduction</button>
        <button class="btn-full w-full hover:filled-surface-200-800">Installation</button>
        <button class="btn-full w-full hover:filled-surface-200-800 font-bold">Using the theme generator</button>
        <button class="btn-full w-full hover:filled-surface-200-800">Using the imported theme</button>
        <button class="btn-full w-full hover:filled-surface-200-800">Using Presets</button>
      </div>

      <div class="space-y-4">
        <div class="border-b border-surface-100-900 p-2 pb-3 flex justify-between items-center">
          <button class="btn hover:filled-surface-300-700">Cake</button>
          <button class="btn hover:filled-surface-300-700">Pizza</button>
          <button class="btn hover:filled-surface-300-700">Icecream</button>
        </div>

        <p class="pl-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, aperiam! Unde voluptas, rerum qui minima maxime quidem ipsum
          soluta quibusdam.
        </p>
      </div>
    </div>
    <div class="space-y-7">
      <div class="space-y-4 p-4 rounded-xl">
        <div class="flex gap-2 items-start flex-wrap">
          <div class="badge bg-primary-500 text-surface-50">badge</div>
          <div class="badge bg-secondary-500 text-surface-50">badge</div>
          <div class="badge rounded-full bg-tertiary-500 text-surface-50">badge</div>
        </div>
        <div class="flex gap-2 items-start flex-wrap">
          <div class="badge-icon bg-primary-500 text-surface-50">📦</div>
          <div class="badge-icon rounded-full bg-secondary-500 text-surface-50">📦</div>
          <div class="badge-icon bg-tertiary-500 text-surface-50">📦</div>
        </div>
        <div class="flex gap-2 items-start flex-wrap">
          <div class="badge badge-lg bg-{app.activeColor}-500 text-surface-50">large</div>
          <div class="badge bg-{app.activeColor}-400-600 text-surface-50">base</div>
        </div>
        <div class="flex gap-2 items-start flex-wrap">
          <div class="badge-icon badge-icon-lg bg-{app.activeColor}-500 text-surface-50">lg</div>
          <div class="badge-icon bg-{app.activeColor}-400-600 text-surface-50">📦</div>
        </div>
      </div>
      <div class="space-y-4 p-4 border-surface-100-900 border rounded-xl shadow">
        <div class="hd-2">EULA</div>
        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt distinctio architecto velit amet nemo. Aperiam cum ex, suscipit
          soluta illo, adipisci laboriosam quisquam, tenetur doloribus facere exercitationem ratione eum dicta expedita mollitia autem?
          Voluptate odio ipsum nesciunt deserunt nisi ab.
        </p>
        <button class="btn w-full filled-surface-100-900">I Accept Terms and Conditions</button>
      </div>
    </div>
  </div>
</PresetPreview>
