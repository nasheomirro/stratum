import { SvelteMap } from "svelte/reactivity";
import { CSSToEntries } from "./utils/reader.svelte";
import defaultVars from "@nasheomirro/stratum/themes/default?raw";

export const vars = new SvelteMap<string, string>(CSSToEntries(defaultVars));

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
