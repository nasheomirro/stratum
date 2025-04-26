<script lang="ts">
  import { colorSets, colorShades } from "@nasheomirro/stratum-theme";

  type Props = {
    hasInherit?: boolean;
  };

  const { hasInherit }: Props = $props();
</script>

{#if hasInherit}
<optgroup label="default">
  <option value="inherit">inherit</option>
</optgroup>
{/if}
{#each colorSets as colorName}
  <optgroup label={colorName}>
    {#each colorShades as colorShade}
      <option value={`var(--color-${colorName}-${colorShade})`}
        >{`${colorName}-${colorShade}`}</option
      >
    {/each}
  </optgroup>
{/each}
