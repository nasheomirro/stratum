<script>
  import { app } from "$lib/app.svelte";
  import PresetPreview from "./PresetPreview.svelte";
</script>

<PresetPreview name="typography" bind:show={app.presetConfig.typography}>
  <div class="space-y-2 mb-8">
    <h2 class="hd-2">presets/typography</h2>
    <p>Add responsive headings, inline anchors, and more.</p>
  </div>

  <div class="grid gap-7 xl:grid-cols-3">
    <div class="space-y-8">
      <div class="">
        <h1 class="hd-1 mb-4">heading-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor sapiente qui doloremque reiciendis, ea recusandae veniam
          laboriosam placeat! Deserunt a iusto voluptatem dolorem facilis, ex quo laudantium eligendi minus!
        </p>
      </div>

      <div class="p-4 filled-{app.activeColor}-50-950 rounded-lg shadwo">
        <h4 class="hd-4 mb-4">heading-4</h4>
        This is the<code class="code">stratum</code> theme generator. You can use the keyboard combination: <kbd class="kbd">alt</kbd> +
        <kbd class="kbd">q</kbd> to toggle dark/light mode.
      </div>
    </div>

    <div class="space-y-8">
      <div class="">
        <h2 class="hd-2 mb-4">heading-2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, est. Nobis, blanditiis. Dignissimos odit nam consequatur iste unde
          libero deserunt necessitatibus, autem, facere nihil molestias.
        </p>
      </div>

      <div class="">
        <h5 class="hd-5 mb-4">heading-5</h5>
        Fun fact, there is an alternate sleeping method called
        <a class="anchor" href="https://en.wikipedia.org/wiki/Polyphasic_sleep" target="_blank" rel="noreferrer">segmented sleeping</a>, in
        which people would wake in the middle of the night, stay up for a few hours and go back to sleep right after.
      </div>
    </div>

    <div class="space-y-8">
      <div class="">
        <h3 class="hd-3 mb-4">heading-3</h3>
        <p>
          By the way, the heading classes aren't actually named <code class="code">heading-[number]</code>, but instead are shortened to
          <code class="code">hd-[number]</code>.
        </p>
      </div>

      <div class="">
        <h6 class="hd-6 mb-4">heading-6</h6>
        <blockquote class="blockquote">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eos laborum iste voluptates possimus, eveniet sit
          accusantium officia minima ipsam, aspernatur repellendus mollitia reprehenderit unde.
        </blockquote>
      </div>
    </div>
  </div>
</PresetPreview>
