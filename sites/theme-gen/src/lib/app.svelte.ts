import { SvelteMap } from "svelte/reactivity";
import defaultCSSFile from "@nasheomirro/stratum/themes/default?raw";

import { CSSToEntries } from "./utils/read";
import { EntriesToCSS } from "./utils/write";

class AppState {
  vars = new SvelteMap<string, string>(CSSToEntries(defaultCSSFile));
  generated = $derived(EntriesToCSS(this.vars.entries()));
}

export const app = new AppState();
