<script lang="ts">
  if (localStorage.getItem("is-dark") === "true") {
    document.documentElement.classList.add("dark");
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key.toLowerCase() === "q") {
      event.preventDefault();
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "is-dark",
        document.documentElement.classList.contains("dark") ? "true" : "false"
      );
    }
  }
</script>

<svelte:window onkeydown={handleKeyDown} />
