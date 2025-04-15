import { SvelteMap } from "svelte/reactivity";
import chroma from "chroma-js";

import { stratumTheme } from "@nasheomirro/stratum-shared";
import defaultCSSFile from "@nasheomirro/stratum/themes/default?raw";

import { CSSToEntries } from "./utils/reader.svelte";

class AppState {
  vars = new SvelteMap<string, string>(CSSToEntries(defaultCSSFile));
  generated = $derived.by(() => {
    let res = "";
    for (let [key, val] of this.vars.entries()) {
      // make sure that colors will always be in oklch
      if (stratumTheme.colors.includes(key) && chroma.valid(val)) {
        val = chroma(val).css("oklch");
      }

      res += `${key}: ${val};\n`;
    }

    return res;
  });
}

export const app = new AppState();
