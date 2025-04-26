<script lang="ts">
  import { app } from "$lib/app.svelte";
  import Icon from "~icons/material-symbols/box-add";

  import ColorOptions from "$lib/components/ColorOptions.svelte";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
</script>

<ControlDropdown>
  {#snippet head()}
    <Icon /> Presets
  {/snippet}
  <p>some presets are customizable through theme variables, you can configure them by checking the boxes below:</p>

  <div class="space-y-2">
    <label class="form-field-row">
      <input class="checkbox" type="checkbox" bind:checked={app.presetConfig.pip} />
      <span class="label-text">Pip</span>
    </label>
    <label class="form-field-row">
      <input class="checkbox" type="checkbox" bind:checked={app.presetConfig.typography} />
      <span class="label-text">Typography</span>
    </label>
    <label class="form-field-row">
      <input class="checkbox" type="checkbox" bind:checked={app.presetConfig.forms} />
      <span class="label-text">Forms</span>
    </label>
  </div>
</ControlDropdown>
