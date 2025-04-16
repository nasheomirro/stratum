<script lang="ts">
  import { app } from "$lib/app.svelte";
  import "../app.css";

  // import for now so that color variables are generated, remove when display is fully set
  import "$lib/display/colorClasses";

  let { children } = $props();

  $effect(() => {
    document.documentElement.setAttribute("style", app.generated);
  });
</script>

{@render children()}
