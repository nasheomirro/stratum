<script lang="ts">
  import { app } from "$lib/app.svelte";
  import "../app.css";

  let { children } = $props();

  $effect(() => {
    document.documentElement.setAttribute("style", app.generated.raw);
  });
</script>

{@render children()}
