import { colorShades } from "@nasheomirro/stratum-theme";
import chroma, { type Color } from "chroma-js";

export function genScale(from: [string, string] | [string, string, string]) {
  const colors = chroma.scale(from).mode("oklch").colors(colorShades.length);
  return colors;
}

export function genScaleFromSeed(seed: Color) {
  const lightness = seed.get("hsl.l");
  const lto = lightness < 5 ? 2 : 2.5;
  const dto = lightness > 5 ? 2 : 3;

  const l = seed.brighten(lto).hex();
  const m = seed.hex();
  const d = seed.darken(dto).hex();

  return genScale([l, m, d]);
}

export function genRandomSeed() {
  const lightness = Math.random() * 0.15 + 0.45; // Random between 0.45 to 0.6
  const chromaColor = chroma.random().set("hsl.l", lightness);
  return chromaColor;
}
