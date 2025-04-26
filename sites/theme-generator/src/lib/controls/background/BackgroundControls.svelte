<script lang="ts">
  import { app } from "$lib/app.svelte";
  import ColorVarInput from "$lib/components/ColorVarInput.svelte";
  import ControlDropdown from "$lib/components/ControlDropdown.svelte";
  import Icon from "~icons/material-symbols/filter-frames-outline";
</script>

<ControlDropdown>
  {#snippet head()}
    <Icon /> Backgrounds
  {/snippet}

  <p>Controls the body's background color.</p>

  <div class="form-field">
    <label class="label-text" for="background-color-light">background color - light</label>
    <ColorVarInput id="background-color-light" bind:value={app.theme.base.backgroundColor} />
  </div>

  <div class="form-field">
    <label class="label-text" for="background-color-dark">background color - dark</label>
    <ColorVarInput id="background-color-dark" bind:value={app.theme.base.backgroundColorDark} />
  </div>
</ControlDropdown>
