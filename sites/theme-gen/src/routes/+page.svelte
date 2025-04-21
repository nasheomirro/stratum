<script>
  import Navbar from "$lib/controls/navbar/Navbar.svelte";
  import BaseControls from "$lib/controls/base/BaseControls.svelte";
  import ColorControls from "$lib/controls/colors/ColorControls.svelte";
  import PresetControls from "$lib/controls/presets/PresetControls.svelte";
  import PreviewDisplay from "$lib/display/PreviewDisplay.svelte";
  import { navbarState } from "$lib/controls/navbar/navbar.svelte";
</script>

<Navbar />
<div
  class="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr] min-h-screen"
>
  <div
    class="border-r border-r-surface-200-800 px-4 py-10 md:sticky md:max-h-screen md:top-0 md:overflow-y-auto"
    style="top: {navbarState.height}px; max-height: calc(100vh - {navbarState.height}px);"
  >
    <div class="flex flex-col gap-10">
      <BaseControls />
      <ColorControls />
      <PresetControls />
    </div>
  </div>
  <div class="w-full overflow-x-auto">
    <PreviewDisplay />
  </div>
</div>
