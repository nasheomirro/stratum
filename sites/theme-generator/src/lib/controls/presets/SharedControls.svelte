<script lang="ts">
  import { app } from "$lib/app.svelte";
  import { sharedPresetVarsMap, type PresetNames } from "@nasheomirro/stratum-theme";

  type Props = {
    preset: PresetNames;
  };

  const { preset }: Props = $props();
  const sharedConfig = sharedPresetVarsMap[preset];
</script>

{#if sharedConfig.includes("radiusBase")}
  <div class="form-field">
    <label class="label-text" for="--radius-preset-base">radius base</label>
    <input class="input" bind:value={app.theme.presets.shared.radiusBase} id="--radius-preset-base" defaultValue="inherit" />
  </div>
{/if}
