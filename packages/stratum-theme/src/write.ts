import draft from "./drafts/v0.1.0";
import {
  ColorSets,
  emptyPresetConfig,
  PresetConfig,
  SharedPresetVariables,
  sharedPresetVarsMap,
  ThemeToCSSMap,
  type StratumTheme,
} from "./theme";

export function StratumThemeToCSS(theme: StratumTheme, presetConfig: PresetConfig = emptyPresetConfig): { raw: string; theme: string } {
  let res = draft;

  res = res.replace(
    "$$presets$$",
    [presetConfig.forms && "forms", presetConfig.pip && "pip", presetConfig.typography && "typography"].filter((v) => v).join(",")
  );

  let base = ObjectToCSSStr(theme.base, ThemeToCSSMap.base);
  let presets = Object.values(presetConfig).some((v) => v) ? "" : "    /* No Presets Selected */\n";

  let colors = "";
  for (let key of Object.keys(theme.colors) as ColorSets[]) {
    colors += ObjectToCSSStr(theme.colors[key], ThemeToCSSMap.colors[key]);
    colors += "\n";
  }

  let contrasts = "";
  for (let key of Object.keys(theme.colors) as ColorSets[]) {
    contrasts += ObjectToCSSStr(theme.colors[key].contrasts, ThemeToCSSMap.colors[key].contrasts);
    contrasts += "\n";
  }

  let done: SharedPresetVariables[] = [];

  if (presetConfig.forms) {
    const sharedVars = sharedPresetVarsMap.forms.filter((v) => !done.includes(v));
    sharedVars.forEach((key) => {
      presets += keyValToCSSStr(ThemeToCSSMap.presets.shared[key], theme.presets.shared[key]);
      done.push(key);
    });

    presets += ObjectToCSSStr(theme.presets.forms, ThemeToCSSMap.presets.forms);
  }

  if (presetConfig.pip) {
    const sharedVars = sharedPresetVarsMap.pip.filter((v) => !done.includes(v));
    sharedVars.forEach((key) => {
      presets += keyValToCSSStr(ThemeToCSSMap.presets.shared[key], theme.presets.shared[key]);
      done.push(key);
    });

    presets += ObjectToCSSStr(theme.presets.pip, ThemeToCSSMap.presets.pip);
  }

  if (presetConfig.typography) {
    const sharedVars = sharedPresetVarsMap.typography.filter((v) => !done.includes(v));
    sharedVars.forEach((key) => {
      presets += keyValToCSSStr(ThemeToCSSMap.presets.shared[key], theme.presets.shared[key]);
      done.push(key);
    });

    presets += ObjectToCSSStr(theme.presets.typography, ThemeToCSSMap.presets.typography);
  }

  res = res
    .replace("[slot]:base", base.trim())
    .replace("[slot]:presets", presets.trim())
    .replace("[slot]:color", colors.trim())
    .replace("[slot]:color-contrasts", contrasts.trim());

  return {
    theme: res,
    /** contains just the variables */
    raw: base + (presets.startsWith("    /*") ? "" : presets) + colors + contrasts,
  };
}

function ObjectToCSSStr(obj: { [K: string]: any }, map: { [K: string]: any }) {
  let res = "";
  for (let key of Object.keys(obj)) {
    const val = obj[key];
    const _key = map[key];
    if (typeof val === "string" && typeof _key === "string") {
      res += keyValToCSSStr(_key, val);
    }
  }
  return res;
}

function keyValToCSSStr(key: string, val: string) {
  return `    ${key}: ${val};\n`;
}
