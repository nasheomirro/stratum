<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    presetName: string;
    disabled: boolean;
    children: Snippet;
  };

  const { presetName, disabled, children }: Props = $props();
</script>

<div class="relative">
  {#if disabled}
    <div
      class="absolute z-10 w-full h-full top-0 left-0 flex justify-center items-center"
    >
      <div
        class="p-4 filled-surface-50-950 border border-surface-200-800 rounded-preset-base shadow"
      >
        Enable the <code class="code">{presetName}</code> preset
      </div>
    </div>
  {/if}
  <div
    inert={disabled}
    class="space-y-6 {disabled ? 'opacity-20 pointer-events-none' : ''}"
  >
    {@render children()}
  </div>
</div>
