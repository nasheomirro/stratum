import {
  CSSToStratumTheme,
  emptyPresetConfig,
  StratumThemeToCSS,
  type ColorSets,
  type PresetConfig,
  type StratumTheme,
} from "@nasheomirro/stratum-theme";
import defaultCSSFile from "@nasheomirro/stratum/themes/default?raw";

export const defaultThemeAndConfig = CSSToStratumTheme(defaultCSSFile);

class AppState {
  theme = $state<StratumTheme>(defaultThemeAndConfig.theme);
  presetConfig = $state<PresetConfig>(emptyPresetConfig);
  generated = $derived(StratumThemeToCSS($state.snapshot(this.theme), this.presetConfig));

  // controls-preview is for mobile, it shows the controls on mobile and the preview on larger screens
  display = $state<"code" | "preview" | "controls-preview">("controls-preview");
  activeColor = $state<ColorSets>("primary");
}

export const app = new AppState();
