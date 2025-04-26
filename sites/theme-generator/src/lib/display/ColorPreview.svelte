<script>
  import { colorSets, colorShades } from "@nasheomirro/stratum-theme";
</script>

<div class="space-y-6">
  <div class="space-y-2">
    <h2 class="hd-2">Colors</h2>
    <p>Colors are set as each cell's backgrounds with the contrast being set as their texts.</p>
  </div>
  <div class="grid grid-cols-7">
    {#each colorSets as colorSet}
      <div>
        <p class="text-center break-words h-9 font-semibold text-surface-600-400 hidden sm:block md:hidden lg:block">
          {colorSet}
        </p>
        {#each colorShades as colorShade}
          <div class="@container flex items-center justify-center h-9 bg-{colorSet}-{colorShade}">
            <span class="text-contrast-{colorSet}-{colorShade} text-xs font-bold @max-[4rem]:hidden">
              {colorShade}
            </span>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
