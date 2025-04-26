<script lang="ts">
  import { app } from "$lib/app.svelte";
  import type { Snippet } from "svelte";
  import { fade } from "svelte/transition";

  type Props = {
    name: string;
    show: boolean;
    children: Snippet;
  };

  let { children, show = $bindable(), name }: Props = $props();
</script>

<div class="relative z-0">
  <div inert={!show}>
    {@render children()}
  </div>
  {#if !show}
    <div
      transition:fade={{ duration: 200 }}
      class="absolute top-0 left-0 w-full h-full z-10 bg-surface-50-950/80 flex items-center justify-center"
    >
      <button onclick={() => (show = !show)} class="btn p-6 filled-{app.activeColor}-100-900 shadow rounded-xl"
        >Enable presets/{name} to unlock this preview.</button
      >
    </div>
  {/if}
</div>
