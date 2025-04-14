import { SvelteMap } from "svelte/reactivity";
import { defaultVars } from "./defaultVars";

export const vars = new SvelteMap<string, string>(
  Object.entries(defaultVars).map(([a, b]) => [a.toString(), b.toString()])
);

class GeneratedCSSVars {
  value = $derived.by(() => {
    let res = "";
    for (let [key, val] of vars.entries()) {
      res += `--${key}: ${val};\n`;
    }

    return res;
  });
}

export const generatedCSSVars = new GeneratedCSSVars();
