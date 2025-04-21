import { type StratumTheme } from "@nasheomirro/stratum-shared";
import defaultCSSFile from "@nasheomirro/stratum/themes/default?raw";

import { CSSToThemeObject } from "./utils/read";
import { ThemeObjectToCSS } from "./utils/write";
import { type AppConfig } from "./types";

class AppState {
  // controls-preview is for mobile, it shows the controls on mobile and the preview on larger screens
  display = $state<"code" | "preview" | "controls-preview">("controls-preview");
  theme = $state<StratumTheme>(CSSToThemeObject(defaultCSSFile));
  config = $state<AppConfig>({
    presets: {
      forms: false,
      pip: false,
      typography: false,
    },
  });

  generated = $derived(
    ThemeObjectToCSS($state.snapshot(this.theme), this.config)
  );
}

export const app = new AppState();
