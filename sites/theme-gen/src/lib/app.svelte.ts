import { SvelteMap } from "svelte/reactivity";
import { type StratumTheme } from "@nasheomirro/stratum-shared";
import defaultCSSFile from "@nasheomirro/stratum/themes/default?raw";

import { CSSToThemeObject } from "./utils/read";
import { ThemeObjectToCSS } from "./utils/write";
import { type AppConfig } from "./types";

class AppState {
  theme = $state<StratumTheme>(CSSToThemeObject(defaultCSSFile));
  config = $state<AppConfig>({
    presets: {
      shared: false,
      typography: false,
    },
  });

  generated = $derived(
    ThemeObjectToCSS($state.snapshot(this.theme), this.config)
  );
}

export const app = new AppState();
