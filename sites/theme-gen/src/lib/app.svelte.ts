import { SvelteMap } from "svelte/reactivity";
import { defaultVars } from "./defaultVars";

export const vars = new SvelteMap<string, string>();

// set default vars onto map
Object.entries(defaultVars).map((entry) =>
  vars.set(entry[0], entry[1].toString())
);

const _generatedCSSVars = $derived.by(() => {
  let res = "";
  for (let [key, val] of vars.entries()) {
    res += `--${key}: ${val};\n`;
  }

  return res;
});

export const generatedCSSVars = {
  get value() {
    return _generatedCSSVars;
  },
};
