<script lang="ts">
  import { colorSets, colorShades } from "@nasheomirro/stratum-theme";

  type Props = {
    value: string;
    /** this goes to the color set select element */
    id?: string;
    /** the value can be "inherit" */
    hasInherit?: boolean;
  };

  let { value = $bindable(), id, hasInherit }: Props = $props();

  const setsRegExp = new RegExp(colorSets.join("|"));
  const currentSet = $derived(value === "inherit" ? "inherit" : value.match(setsRegExp)?.[0] || "primary");
  const currentShade = $derived(value.match(/\d+/)?.[0] || "50");

  const setValue = (set: string = currentSet, shade: string = currentShade) => {
    if (set === "inherit") return set;
    return `var(--color-${set}-${shade})`;
  };
</script>

<div class="grid gap-1 grid-cols-[2.5fr_1fr]">
  <select class="select" {id} bind:value={() => currentSet, (v) => (value = setValue(v))}>
    {#if hasInherit}
      <option>inherit</option>
    {/if}
    {#each colorSets as colorSet}
      <option>{colorSet}</option>
    {/each}
  </select>
  <select
    name="color-shade"
    disabled={currentSet === "inherit"}
    class="select"
    bind:value={() => currentShade, (v) => (value = setValue(undefined, v))}
  >
    {#each colorShades as colorShade}
      <option>{`${colorShade}`}</option>
    {/each}
  </select>
</div>
