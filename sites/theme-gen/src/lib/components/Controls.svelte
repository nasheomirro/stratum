<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    out?: Snippet;
    children: Snippet;
  };

  const { title, children, out }: Props = $props();
</script>

<div class="space-y-4">
  {#if out}
    {@render out()}
  {/if}
  <h2 class="hd-2">{title}</h2>
  {@render children()}
</div>
