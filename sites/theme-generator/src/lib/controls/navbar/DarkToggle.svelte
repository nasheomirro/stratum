<script lang="ts">
  import Light from "~icons/material-symbols/light-mode";
  import Dark from "~icons/material-symbols/dark-mode";

  let isDark = $state(localStorage.getItem("is-dark") === "true");

  function handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === "q") {
      event.preventDefault();
      isDark = !isDark;
    }
  }

  $effect(() => {
    if (isDark) {
      localStorage.setItem("is-dark", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("is-dark", "false");
      document.documentElement.classList.remove("dark");
    }
  });
</script>

<svelte:window onkeydown={handleKeyDown} />

<button class="btn-icon hover:filled-surface-200-800" onclick={() => (isDark = !isDark)}>
  {#if isDark}
    <Light />
  {:else}
    <Dark />
  {/if}
</button>
