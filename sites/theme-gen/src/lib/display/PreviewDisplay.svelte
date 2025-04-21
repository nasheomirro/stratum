<script lang="ts">
  import { colorNames, colorShades } from "@nasheomirro/stratum-shared";
  import { bgColors, textColors } from "./colors";
  import { app } from "$lib/app.svelte";
  import PresetSection from "./PresetSection.svelte";
</script>

<div class="pt-10 pb-30 px-4 lg:px-10 space-y-16 relative z-0">
  <div class="space-y-6">
    <div class="space-y-2">
      <h2 class="hd-2">Base</h2>
      <p>
        Base variables control the body's background color and text related
        styles. It also controls the scaling for <code class="code"
          >text-[size]</code
        > utility classes.
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div>
        <p class="text-xs">xs</p>
        <p class="text-sm">sm</p>
        <p class="text-base">base</p>
        <p class="text-lg">lg</p>
        <p class="text-xl">xl</p>
        <p class="text-2xl">2xl</p>
        <p class="text-3xl">3xl</p>
        <p class="text-4xl">4xl</p>
        <p class="text-5xl">5xl</p>
        <p class="text-6xl">6xl</p>
        <p class="text-7xl">7xl</p>
        <p class="text-8xl">8xl</p>
        <p class="text-9xl">9xl</p>
      </div>

      <div class="flex flex-col justify-stretch h-full">
        <div
          class="h-full border border-surface-200-800 min-h-40 bg-[var(--base-background-color)] text-[var(--base-font-color)] flex items-center justify-center"
        >
          This is text in light mode
        </div>
        <div
          class="h-full border border-surface-200-800 min-h-40 bg-[var(--base-background-color-dark)] text-[var(--base-font-color-dark)] flex items-center justify-center"
        >
          This is text in dark mode
        </div>
      </div>
    </div>
  </div>

  <div class="border-t border-t-surface-300-700"></div>

  <div class="space-y-6">
    <div class="space-y-2">
      <h2 class="hd-2">Colors</h2>
      <p>
        Colors are set as each cell's backgrounds with the contrast being set as
        their texts.
      </p>
    </div>
    <div class="grid grid-cols-7">
      {#each colorNames as colorName, i}
        <div>
          <p
            class="text-center break-words h-9 font-semibold text-surface-600-400 hidden sm:block md:hidden lg:block"
          >
            {colorName}
          </p>
          {#each bgColors[i] as bg, j}
            <div class={`flex items-center justify-center h-9 ${bg}`}>
              <span class="{textColors[i][j]} text-xs font-bold">
                {colorShades[j]}
              </span>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="border-t border-t-surface-300-700"></div>

  <PresetSection presetName="pip" disabled={!app.config.presets.pip}>
    <div class="space-y-2">
      <h3 class="hd-2">Pip</h3>
      <p>
        A quick way to add button and badge classes, anything that's small and
        looks like a button.
      </p>
    </div>

    <div class="flex gap-4 flex-wrap items-center">
      <button class="btn filled-primary-500">primary</button>
      <button class="btn filled-secondary-500">secondary</button>
      <button class="btn filled-tertiary-500">tertiary</button>
      <button class="btn filled-success-500">success</button>
      <button class="btn filled-warning-500">warning</button>
      <button class="btn filled-error-500">error</button>
      <button class="btn filled-surface-500">surface</button>
      <button class="btn filled-surface-500" disabled>disabled</button>
      <button class="btn-icon filled-primary-500">👍</button>
      <button class="btn-icon filled-secondary-500">👍</button>
      <button class="btn-icon filled-tertiary-500">👍</button>
      <button class="btn-icon filled-success-500">👍</button>
      <button class="btn-icon filled-warning-500">👍</button>
      <button class="btn-icon filled-error-500">👍</button>
      <button class="btn-icon filled-surface-500">👍</button>
      <button class="btn-icon filled-surface-500" disabled>💀</button>
      <button class="btn btn-xs filled-primary-300-700">extra small</button>
      <button class="btn btn-sm filled-tertiary-300-700">small</button>
      <button class="btn btn-lg filled-secondary-300-700">large</button>
      <div class="badge filled-primary-500">primary</div>
      <div class="badge filled-secondary-500">secondary</div>
      <div class="badge filled-tertiary-500">tertiary</div>
      <div class="badge filled-success-500">success</div>
      <div class="badge filled-warning-500">warning</div>
      <div class="badge filled-error-500">error</div>
      <div class="badge filled-surface-500">surface</div>
      <div class="badge-icon filled-primary-500">👍</div>
      <div class="badge-icon filled-secondary-500">👍</div>
      <div class="badge-icon filled-tertiary-500">👍</div>
      <div class="badge-icon filled-success-500">👍</div>
      <div class="badge-icon filled-warning-500">👍</div>
      <div class="badge-icon filled-error-500">👍</div>
      <div class="badge-icon filled-surface-500">👍</div>
      <div class="badge badge-lg filled-secondary-300-700">large</div>
      <div class="badge-icon badge-icon-lg filled-secondary-300-700">🐲</div>
    </div>
  </PresetSection>

  <div class="border-t border-t-surface-300-700"></div>

  <PresetSection
    presetName="typography"
    disabled={!app.config.presets.typography}
  >
    <div class="space-y-2">
      <h3 class="hd-2">Typography</h3>
      <p>
        contains classes that relates to typography. This includes inline <code
          class="code">code</code
        >
        styles,<kbd class="kbd">key</kbd> styles, code blocks, block-quotes,
        headings, and <a class="anchor" href="#top">anchors</a>.
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-col gap-2 lg:row-span-2">
        <div class="hd-1">Heading 1</div>
        <div class="hd-2">Heading 2</div>
        <div class="hd-3">Heading 3</div>
        <div class="hd-4">Heading 4</div>
        <div class="hd-5">Heading 5</div>
        <div class="hd-6">Heading 6</div>
      </div>

      <blockquote class="blockquote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis ab
        ut quidem, itaque explicabo sit eum alias nulla corporis accusamus.
        Officia explicabo sit sed magnam at, animi deleniti repellat quam!
        Doloremque perferendis porro nesciunt inventore aspernatur nobis, harum
        minima sint tempore dolores aut id placeat odio sapiente maiores fugiat
        modi velit quas nihil doloribus magni cumque ducimus? Consequatur, sunt!
      </blockquote>

      <pre
        class="code-block sm:col-span-2 md:col-span-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ex minus voluptatibus illo exercitationem ad nobis quisquam! Doloribus fugit alias quidem? Facilis eligendi sunt earum illo, tempora laborum libero odit.</pre>
    </div>
  </PresetSection>

  <div class="border-t border-t-surface-300-700"></div>

  <PresetSection presetName="forms" disabled={!app.config.presets.forms}>
    <div class="space-y-2">
      <h3 class="hd-2">Forms</h3>
      <p>
        A bunch of form classes, note that this expects the <code class="code"
          >tailwind/forms</code
        > plugin.
      </p>
    </div>
    <input class="input" placeholder="write on me!" />
    <input class="input" placeholder="write on me! You cant!" disabled />
    <input class="input" type="file" />
    <input class="input" type="range" />
    <select class="select">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    </select>
    <select class="select" multiple size="2">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
    </select>
  </PresetSection>
</div>
