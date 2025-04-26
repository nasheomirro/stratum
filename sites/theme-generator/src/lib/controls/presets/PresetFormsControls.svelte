<script lang="ts">
  import Icon from "~icons/material-symbols/box";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
  import SharedControls from "./SharedControls.svelte";
</script>

<ControlDropdown preset>
  {#snippet head()}
      <Icon /> preset/forms
  {/snippet}
  <div class="space-y-4">
    <p>You have opted to use this preset, you can import it to your project by adding this to your main.css file:</p>
    <pre class="code-block">@import "@nasheomirro/stratum/presets/forms";</pre>
  </div>

  <div class="border-b border-surface-100-900"></div>
  <div>
    <h3 class="hd-6">Configurations</h3>
    <p>Presets come with some limited controls on how they'll look:</p>
  </div>
  <SharedControls preset="forms" />
</ControlDropdown>
