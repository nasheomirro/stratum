<script lang="ts">
  import { app } from "$lib/app.svelte";
  import { ThemeToCSSMap } from "@nasheomirro/stratum-theme";
  import "../app.css";

  let { children } = $props();

  $effect(() => {
    document.documentElement.setAttribute("style", app.generated.raw);
  });
</script>

{@render children()}
