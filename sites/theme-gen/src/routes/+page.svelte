<script>
  import BaseControls from "$lib/controls/BaseControls.svelte";
  import ColorControls from "$lib/controls/ColorControls.svelte";

</script>
<div class="grid md:grid-cols-[0.5fr_0.5fr] lg:grid-cols-[0.3fr_0.7fr] min-h-screen">
  <div class="border-r border-r-surface-200-800 p-4 flex flex-col gap-10">
    <BaseControls />
    <ColorControls />
  </div>
</div>