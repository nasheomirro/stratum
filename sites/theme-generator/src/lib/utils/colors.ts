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

export function genRandomSeed(lightness: [number, number] = [0.45, 0.6], saturation?: [number, number]) {
  const l = Math.random() * (lightness[1] - lightness[0]) + lightness[0]; // Random between the given range
  let chromaColor = chroma.random().set("hsl.l", l);

  if (saturation) {
    const s = Math.random() * (saturation[1] - saturation[0]) + saturation[0]; // Random between the given range
    chromaColor = chromaColor.set("hsl.s", s);
  }

  return chromaColor;
}
