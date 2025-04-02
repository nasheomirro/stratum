## Theme Keys

Note that anything with `heading` or `anchor` are only used in the `typography` preset.

```css
/* Scalar Properties */
--text-scaling
--spacing

/* Radius */
--radius-base
--radius-container

/* Font Family */
--font-base-text
--font-base-heading
--font-base-anchor

/* Font Weight */
--font-weight-base-text-weight
--font-weight-base-heading-weight
--font-weight-base-anchor-weight

/* Letter Spacing */
--tracking-base-text
--tracking-base-heading
--tracking-base-anchor

/* Color sets and contrasts */
--color-{type}-{shade}
--color-{type}-contrast-dark
--color-{type}-contrast-light
--color-{type}-contrast-{shade}
```

## Inline Theme Keys

These theme keys mostly references variables that already exists, keeping it inline helps cut off having a middle man variable.

```css
/* Colors */
--color-base-text-light
--color-base-text-dark

--color-base-background-light
--color-base-background-dark

--color-base-heading-light
--color-base-heading-dark

--color-base-anchor-light
--color-base-anchor-dark

/* Anchor Hover/Focus/Active States --- Optional */
--color-base-anchor-active-light
--color-base-anchor-active-dark
```

## Non-Automated Theme Keys

Theme keys that are either intentionally hidden or that isn't possible to be automated by tailwind (unfortunately).

```css
/* Font Style */
--anchor-font-style
--heading-font-style

/* Text Decoration */
--anchor-text-decoration-light
--anchor-text-decoration-dark
--anchor-text-underline-offset

/* Anchor Hover/Focus/Active States --- Optional */
--anchor-text-decoration-active-light
--anchor-text-decoration-active-dark
--anchor-text-underline-offset-active
```

Note that for now these variables have utility classes that apply them with the same name with some exceptions like `anchor-text-decoration` and `anchor-text-decoration-active` applying both light and dark variants automatically.
