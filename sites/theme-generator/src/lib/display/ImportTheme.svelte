<script lang="ts">
  import { app, defaultThemeAndConfig } from "$lib/app.svelte";
  import { CSSToStratumTheme } from "@nasheomirro/stratum-theme";
  import UploadIcon from "~icons/material-symbols/upload";
  import FileDownIcon from "~icons/material-symbols/file-save-outline-rounded";

  let isDraggingOver = $state(false);

  function readThemeFile(file: File) {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        const fileContent = e.target?.result as string;
        const { theme, presetConfig } = CSSToStratumTheme(fileContent, defaultThemeAndConfig.theme);
        app.theme = theme;
        app.presetConfig = presetConfig;
      } catch {
        alert("Error! Cannot read uploaded file.");
      }
    };

    reader.readAsText(file);
  }

  function handleDragover(event: Event) {
    event.preventDefault();
    isDraggingOver = true;
  }

  function handleDragleave(event: Event) {
    event.preventDefault();
    isDraggingOver = false;
  }

  function handleDrop(event: DragEvent) {
    event.preventDefault();
    isDraggingOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      readThemeFile(files[0]);
    }
  }

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      readThemeFile(file);
    }
  }
</script>

<h2 class="hd-2">Import a Theme</h2>
<p>Import over an existing theme to modify it here.</p>

<label
  role="region"
  class="border-2 border-dashed rounded-xl cursor-pointer border-surface-200-800 mt-6 p-6 min-h-100 transition flex justify-center items-center flex-col focus-within:filled-surface-100-900 hover:filled-surface-100-900 {isDraggingOver &&
    'opacity-50 !filled-surface-100-900'}"
  ondrop={handleDrop}
  ondragover={handleDragover}
  ondragleave={handleDragleave}
>
  <FileDownIcon class="w-16 h-16 mb-4" />
  <span>Drag and drop your theme here or choose a file from your system.</span>
  <input type="file" class="opacity-0 absolute" onchange={handleFileChange} />
</label>
