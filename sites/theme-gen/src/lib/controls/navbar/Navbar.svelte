<script lang="ts">
  import DarkToggle from "./DarkToggle.svelte";
  import { navbarState } from "./navbar.svelte";

  let navbar: HTMLDivElement;

  // Create a ResizeObserver that observes the navbar
  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const currentHeight = entry.target.getBoundingClientRect().height;
      navbarState.height = currentHeight;
    });
  });

  // Start observing the navbar element
  $effect(() => {
    resizeObserver.observe(navbar);
  });
</script>

<div
  bind:this={navbar}
  class="p-4 flex items-center border-b border-b-surface-200-800 sticky top-0 bg-surface-50-950 z-10"
  id="navbar"
>
  <DarkToggle />
</div>
