<script lang="ts">
  import { colorNames, colorShades } from "@nasheomirro/stratum-shared";

  type Props = {
    hasInherit?: boolean;
  };

  const { hasInherit }: Props = $props();
</script>

{#if hasInherit}
<optgroup label="default">
  <option value="inherit">Inherit</option>
</optgroup>
{/if}
{#each colorNames as colorName}
  <optgroup label={colorName}>
    {#each colorShades as colorShade}
      <option value={`var(--color-${colorName}-${colorShade})`}
        >{`${colorName}-${colorShade}`}</option
      >
    {/each}
  </optgroup>
{/each}
