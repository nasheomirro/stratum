<script lang="ts">
  import chroma from "chroma-js";
  import { app } from "$lib/app.svelte";
  import "../app.css";

  let { children } = $props();

  const l = chroma('oklch(90.94% 0.08 328.26deg)');
  const d = chroma('oklch(37.03% 0.15 355.51deg)');
  const v = chroma('oklch(64.63% 0.26 2.24deg)');

  $effect(() => {
    console.log(v.luminance());
    console.log(l.luminance());
    console.log(d.luminance());
    console.log(chroma.contrast(l, v));
    console.log(chroma.contrast(d, v));
  })

  $effect(() => {
    document.documentElement.setAttribute("style", app.generated.raw);
  });
</script>

{@render children()}
