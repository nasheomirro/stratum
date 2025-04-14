<script lang="ts">
  import { generatedCSSVars } from "$lib/app.svelte";
</script>

<div class="p-10">
  <pre>{generatedCSSVars.value}</pre>
</div>
