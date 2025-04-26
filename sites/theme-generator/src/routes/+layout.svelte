<script lang="ts">
  import { app } from "$lib/app.svelte";
  import "../app.css";

  let { children } = $props();

  $effect(() => {
    document.documentElement.setAttribute("style", app.generated.raw);
  });
</script>

<svelte:head>
  <title>Stratum Theme Generator</title>
  <meta name="description" content="The Theme Generator for the Stratum CSS framework" />
</svelte:head>

{@render children()}
