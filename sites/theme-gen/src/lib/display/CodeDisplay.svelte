<script lang="ts">
  import { generatedCSSVars } from "$lib/app.svelte";
</script>

<div class="py-10 px-4 text-xs lg:text-base lg:p-10">
  <pre>{generatedCSSVars.value}</pre>
</div>
