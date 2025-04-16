import chroma from "chroma-js";
import { stratumTheme } from "@nasheomirro/stratum-shared";

export function EntriesToCSS(entries: IterableIterator<[string, string]>) {
  let res = "";

  for (let [key, val] of entries) {
    // make sure that colors will always be in oklch
    if (stratumTheme.colors.includes(key) && chroma.valid(val)) {
      val = chroma(val).css("oklch");
    }

    res += `${key}: ${val};\n`;
  }

  return res;
}
