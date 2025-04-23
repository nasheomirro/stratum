import chroma, { type Color } from "chroma-js";

export const colorNames = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
  "surface",
] as const;

export const colorShades = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export const colorPairings = [
  [50, 950],
  [100, 900],
  [200, 800],
  [300, 700],
  [400, 600],
  [600, 400],
  [700, 300],
  [800, 200],
  [900, 100],
  [950, 50],
] as const;

export function genScale(from: [string, string] | [string, string, string]) {
  const colors = chroma.scale(from).mode("oklch").colors(colorShades.length);
  return colors;
}

export function genScaleFromSeed(seed: Color) {
  const l = seed.brighten(3).hex();
  const m = seed.hex();
  const d = seed.darken(3).hex();

  return genScale([l, m, d]);
}

export function genRandomSeed() {
  const lightness = Math.random() * 0.2 + 0.4; // Random between 0.4 to 0.6
  const chromaColor = chroma.random().set("hsl.l", lightness);
  return chromaColor;
}
