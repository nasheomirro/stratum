# stratum

An extremely light-weight wrapper for your tailwindCSS projects, with optional presets and pre-generated themes to boost development time! ⌛🔥

- 🌓 dark-mode ready: Don't worry about having to use `dark:` for every color, stratum does it for you!
- 🎨 theme-generator: Customize colors and other stuff with our [theme-generator]()!
- 📦 prebuilt-themes: Or if you don't trust yourself to make colors, use one of our default themes!
- ✅ ready-made presets: Not a designer? No prob bob! I got you covered G, just slap on my presets and you're good to go!

```
npm i -D @nasheomirro/stratum
```

```css
/* app.css */
@import 'tailwind.css';

@import "@nasheomirro/stratum";
@import "@nasheomirro/stratum/themes/default";
```

## Core Concept

At it's core, stratum only offers a few handy utilities and a slightly opinionated way of handling text sizes, and common global properties. The core must be paired with a generated theme from our [theme-generator]() or from the pre-generated themes, themes consist of color variables and base variables for the core.

That is all that is required to use stratum, in essence, stratum is just a small, slightly opinionated toolkit, and you can arguably just use the theme-generator without using stratum if you really just want to use the generated colors without the other fluff.

Apart from the core, you can also optionally add presets to your project, these presets offer an opinionated set of utilities aimed to boost development time. Some presets are customizable through the theme, but most preset utilities aren't as flexible since their designed to just be your goto when you don't not worry about how they look.

## Colors

Stratum uses 7 color sets, each with shades from `50` to `950` (just like default tailwind colors). This is just your standard color palette but what makes them support dark-mode is the generated color pairings from the `theme`. these color variables uses CSS's [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) function to determine which color to choose from.

The generated color pairings are named like so: `--color-{set}-{shade-light}-{shade-dark}`. `shade-light` in this case is the shade that will be used when in light mode, and `shade-dark` when on dark mode. The generated color pairings only pair with it's mirrored shade on the opposite side of the spectrum (`50-950`, `100-900`, `200-800`, etc.).

### toggling dark mode manually

Color pairings also support switching to dark mode when using a custom selector:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Creating A Custom Theme

You can create your theme using our [theme-generator](), all you need to do to use your generated theme is import it to your root tailwind CSS file:

```css
@import 'tailwindcss';

@import '@nasheomirro/stratum';
@import './your-theme';
/* ... */
```

## Presets

Presets are optional sets of utilities that you can import to your project.

### presets/typography

This offers utilties for typography-related uses such as `anchors`, `headings`, `blockquotes`, `codeblocks`, and inline elements like `code` and `kbd`. To add this preset, import the file after the core imports:

```css
@import 'tailwindcss';

@import "@nasheomirro/stratum";
@import "@nasheomirro/stratum/themes/default";
@import "@nasheomirro/stratum/presets/typography";
```

### presets/pip

This offers utilities to style "button"-like elements, pair this with the `filled-*` and `tonal-*` utility classes and you get a wide range of button styles. To add this preset, import the file after the core imports:

```css
@import 'tailwindcss';

@import "@nasheomirro/stratum";
@import "@nasheomirro/stratum/themes/default";
@import "@nasheomirro/stratum/presets/pip";
```

### presets/forms

This preset builds on top of the `@tailwindcss/forms` plugin. This preset offers default styles to form-related components. To add this preset, import the file after the core imports as well as add the `@tailwindcss/forms` plugin:

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms";

@import "@nasheomirro/stratum";
@import "@nasheomirro/stratum/themes/default";
@import "@nasheomirro/stratum/presets/forms";
```