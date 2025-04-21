<script>
  import BaseControls from "$lib/controls/base/BaseControls.svelte";
  import ColorControls from "$lib/controls/colors/ColorControls.svelte";
  import PresetControls from "$lib/controls/presets/PresetControls.svelte";
  import PreviewDisplay from "$lib/display/PreviewDisplay.svelte";

</script>
<div class="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_3fr] min-h-screen">
  <div class="border-r border-r-surface-200-800 px-4 py-10 flex flex-col gap-10 md:sticky md:max-h-screen md:top-0 md:overflow-y-auto">
    <BaseControls />
    <ColorControls />
    <PresetControls />
  </div>
  <div class="w-full overflow-x-auto">
    <PreviewDisplay />
  </div>
</div>