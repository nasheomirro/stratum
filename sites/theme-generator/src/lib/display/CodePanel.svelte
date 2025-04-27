<script lang="ts">
  import { app } from "$lib/app.svelte";
  import GeneratedTheme from "./GeneratedTheme.svelte";
  import ImportTheme from "./ImportTheme.svelte";
</script>

{#snippet divider()}
  <div class="border-b border-surface-100-900 my-10"></div>
{/snippet}

<div class="p-4 lg:p-10 max-w-[1280px] mx-auto">
    <GeneratedTheme />
    {@render divider()}
    <ImportTheme />
</div>
