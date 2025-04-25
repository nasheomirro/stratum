<script lang="ts">
  import { colorSets, colorShades } from "@nasheomirro/stratum-theme";

  type Props = {
    value: string;
  };

  let { value = $bindable() }: Props = $props();
  const setsRegExp = new RegExp(colorSets.join("|"));

  const currentSet = $derived(value.match(setsRegExp)?.[0] || "primary");
  const currentShade = $derived(value.match(/\d+/)?.[0] || "50");
</script>

<div class="grid gap-1 grid-cols-[2.5fr_1fr]">
  <select class="select" bind:value={() => currentSet, (v) => (value = value.replace(setsRegExp, v))}>
    {#each colorSets as colorSet}
      <option>{colorSet}</option>
    {/each}
  </select>
  <select name="color-shade" class="select" bind:value={() => currentShade, (v) => (value = value.replace(/\d+/, v))}>
    {#each colorShades as colorShade}
      <option>{`${colorShade}`}</option>
    {/each}
  </select>
</div>
