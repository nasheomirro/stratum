<script>
  import BaseControls from "$lib/controls/BaseControls.svelte";
  import ColorControls from "$lib/controls/ColorControls.svelte";
  import CodeDisplay from "$lib/display/CodeDisplay.svelte";

</script>
<div class="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2.25fr] xl:grid-cols-[1fr_3fr] min-h-screen">
  <div class="border-r border-r-surface-200-800 p-4 flex flex-col gap-10 md:sticky md:max-h-screen md:top-0 md:overflow-y-auto">
    <ColorControls />
    <BaseControls />
  </div>
  <div class="w-full overflow-x-auto">
    <CodeDisplay />
  </div>
</div>