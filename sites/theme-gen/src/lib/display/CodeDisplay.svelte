<script lang="ts">
  import { app } from "$lib/app.svelte";

  let btnText = $state("copy");

  function onCopyClick() {
    navigator.clipboard.writeText(app.generated.generated);
    btnText = "copied!";

    setTimeout(() => {
      btnText = "copy";
    }, 2000);
  }
</script>

<div class="py-10 px-4 space-y-6 lg:p-10">
  <h2 class="hd-2">Generated Theme</h2>
  <div class="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between">
    <p>
      Create a file and import this to your root <code class="code"
        >app.css</code
      > file.
    </p>

    <button class="btn ml-auto filled-primary-200-800" onclick={onCopyClick}
      >{btnText}</button
    >
  </div>
  <pre class="code-block">{app.generated.generated}</pre>
</div>
