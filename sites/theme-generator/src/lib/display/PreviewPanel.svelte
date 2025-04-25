<script lang="ts">
  import ColorPreview from "./ColorPreview.svelte";
  import MainPreview from "./MainPreview.svelte";
  import PreviewDivider from "./PreviewDivider.svelte";
  import TextPreview from "./TextPreview.svelte";
</script>

<div class="p-4 lg:p-10 max-w-[1280px] mx-auto">
  <MainPreview />
  <PreviewDivider />
  <TextPreview />
  <PreviewDivider />
  <ColorPreview />
</div>
