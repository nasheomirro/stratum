<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    title: string;
    children: Snippet;
  };

  const { title, children }: Props = $props();
</script>

<div class="space-y-4">
  <h2 class="hd-2">{title}</h2>
  {@render children()}
</div>
