import type { AppConfig } from "$lib/types";
import { type StratumTheme } from "@nasheomirro/stratum-shared";
import boilerplateStr from "@nasheomirro/stratum-shared/theme-boilerplate?raw";

export function ThemeObjectToCSS(theme: StratumTheme, config: AppConfig) {
  let res = boilerplateStr;

  let base = ObjectToCSSStr(theme.base);

  let presets = "    /* No Presets Selected */\n";

  let colors = ObjectToCSSStr({
    ...theme.colors.main.primary,
    ...theme.colors.main.secondary,
    ...theme.colors.main.tertiary,
    ...theme.colors.main.success,
    ...theme.colors.main.warning,
    ...theme.colors.main.error,
    ...theme.colors.main.surface,
  });

  let contrasts = ObjectToCSSStr({
    ...theme.colors.contrasts.primary,
    ...theme.colors.contrasts.secondary,
    ...theme.colors.contrasts.tertiary,
    ...theme.colors.contrasts.success,
    ...theme.colors.contrasts.warning,
    ...theme.colors.contrasts.error,
    ...theme.colors.contrasts.surface,
  });

  if (config.presets.forms || config.presets.pip || config.presets.typography) {
    presets = ObjectToCSSStr(theme.presets.shared);
  }

  if (config.presets.typography) {
    presets += ObjectToCSSStr({
      ...theme.presets.typography.anchor,
      ...theme.presets.typography.heading,
    });
  }

  res.replaceAll("[slot]:base", base);
  res.replaceAll("[slot]:presets", presets);
  res.replaceAll("[slot]:color", colors);
  res.replaceAll("[slot]:color-contrasts", contrasts);

  return {
    generated: res,
    /** contains just the variables */
    raw: base + (presets.startsWith("    /*") ? "" : presets) + colors + contrasts,
  };
}

function ObjectToCSSStr(obj: { [K: string]: string }) {
  let res = "";
  Object.entries(obj).forEach(([key, val]) => {
    res += `    ${key}: ${val};\n`;
  });
  return res;
}
