<script lang="ts">
  import { app } from "$lib/app.svelte";
  import DarkToggle from "$lib/components/DarkToggle.svelte";
  
  import "../app.css";

  let { children } = $props();

  $effect(() => {
    document.documentElement.setAttribute("style", app.generated);
  });
</script>

<DarkToggle />
{@render children()}
