<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    head: Snippet;
    children: Snippet;
  };

  const {head, children }: Props = $props();

  let isDown = $state(false);

  let inner: HTMLElement;
  let outer: HTMLElement;

  let calculatedHeight = $state("0px");

  $effect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const inner = entry.target;
        calculatedHeight = `${inner.scrollHeight}px`;
      }
    });

    observer.observe(inner);
  });

  $effect(() => {
    outer.setAttribute("style", `height: ${isDown ? calculatedHeight : "0px"};`);
  });
</script>

<div>
  <button
    onclick={() => (isDown = !isDown)}
    class="base:btn-full rounded-none text-left w-full text-2xl font-bold border-b border-surface-100-900 p-5 hover:filled-surface-200-800"
  >
    {@render head()}
  </button>

  <div bind:this={outer} class="h-0 overflow-hidden transition-[height] ease-in-out">
    <div bind:this={inner} inert={!isDown} class="border-b p-4 space-y-4">
        {@render children()}
    </div>
  </div>
</div>
