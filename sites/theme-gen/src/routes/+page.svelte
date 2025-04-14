<script>
  import BaseControls from "$lib/controls/BaseControls.svelte";
  import CodeDisplay from "$lib/display/CodeDisplay.svelte";

</script>
<div class="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2.25fr] xl:grid-cols-[1fr_3fr] min-h-screen">
  <div class="border-r border-r-surface-200-800 p-4 flex flex-col gap-10">
    <BaseControls />
  </div>
  <div>
    <CodeDisplay />
  </div>
</div>