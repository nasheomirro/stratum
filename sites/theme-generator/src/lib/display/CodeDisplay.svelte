<script lang="ts">
  import { app, defaultThemeAndConfig } from "$lib/app.svelte";
  import { CSSToStratumTheme } from "@nasheomirro/stratum-theme";
  import Upload from "~icons/material-symbols/upload";

  let btnText = $state("copy");

  function handleCopyClick() {
    navigator.clipboard.writeText(app.generated.theme);
    btnText = "copied!";

    setTimeout(() => {
      btnText = "copy";
    }, 2000);
  }

  function handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    // Check if the input contains files
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Create a FileReader instance to read the file
      const reader = new FileReader();

      // Set up a callback for when the file is successfully read
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileContent = e.target?.result as string;
        const { theme, presetConfig } = CSSToStratumTheme(fileContent, defaultThemeAndConfig.theme);

        app.theme = theme;
        app.presetConfig = presetConfig;
      };

      // Set up an error callback
      reader.onerror = (e: ProgressEvent<FileReader>) => {
        alert("Error reading file! Please try again.");
      };

      // Read the file as a text string
      reader.readAsText(file);
    }
  }
</script>

<div class="py-10 px-4 space-y-10 lg:p-10">
  <div class="space-y-4">
    <h2 class="hd-2">Generated Theme</h2>
    <div class="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between">
      <p>
        Create a file and import this to your root <code class="code">app.css</code> file.
      </p>

      <button class="btn ml-auto filled-primary-200-800" onclick={handleCopyClick}>{btnText}</button>
    </div>
    <pre class="code-block max-h-92 rounded-preset-base">{app.generated.theme}</pre>
  </div>

  <div class="space-y-4">
    <h2 class="hd-2">Import A Theme</h2>
    <div class="flex flex-wrap sm:flex-nowrap gap-4 items-center justify-between">
      <p>Import over an existing theme to modify it here.</p>

      <label>
        <span class="btn ml-auto filled-surface-900-100">
          <Upload />
          import
        </span>
        <input type="file" class="hidden" onchange={handleFileChange} />
      </label>
    </div>
  </div>
</div>
