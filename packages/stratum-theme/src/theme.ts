import { createEmptyColorSet } from "./utils";

export type StratumTheme = typeof emptyTheme;
export type PresetConfig = typeof emptyPresetConfig;
export type PresetNames = (typeof presetNames)[number];
export type ColorSets = (typeof colorSets)[number];
export type ColorShades = (typeof colorShades)[number];
export type SharedPresetVariables = keyof typeof emptySharedPresetVars;

export const colorSets = ["primary", "secondary", "tertiary", "success", "warning", "error", "surface"] as const;
export const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
export const presetNames = ["pip", "typography", "forms"] as const;

export const emptyPresetConfig: { [K in PresetNames]: boolean } = {
  forms: false,
  pip: false,
  typography: false,
};

/** variables used by two or more presets */
const emptySharedPresetVars = {
  radiusBase: "",
};

/** A map of each preset's use of a shared variable */
export const sharedPresetVarsMap: {
  [k in PresetNames]: SharedPresetVariables[];
} = {
  typography: [],
  forms: ["radiusBase"],
  pip: ["radiusBase"],
};

/**
 * An object representation of all configurable stratum variables.
 * Note that this does not include any auto-generated variables (color pairings, contrast color pairings).
 */
export const emptyTheme = {
  base: {
    fontColor: "",
    fontColorDark: "",
    backgroundColor: "",
    backgroundColorDark: "",
    fontFamily: "",
    fontWeight: "",
    fontSize: "",
    lineHeight: "",
    fontStyle: "",
    textScaling: "",
    letterSpacing: "",
  },
  colors: {
    primary: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
    secondary: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
    tertiary: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
    success: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
    warning: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
    error: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
    surface: { ...createEmptyColorSet(), contrasts: createEmptyColorSet() },
  },
  presets: {
    shared: emptySharedPresetVars,
    typography: {
      anchorColor: "",
      anchorColorDark: "",
      anchorFontFamily: "",
      anchorFontWeight: "",
      anchorFontStyle: "",
      anchorLetterSpacing: "",
      headingColor: "",
      headingColorDark: "",
      headingFontFamily: "",
      headingFontWeight: "",
      headingFontStyle: "",
      headingLetterSpacing: "",
    },
    forms: {},
    pip: {},
  },
};

const colorVarsToThemeMap = (() => {
  const obj: any = {};
  colorSets.forEach((set) => {
    colorShades.forEach((shade) => {
      obj[`--color-${set}-${shade}`] = ["colors", set, shade];
      obj[`--color-contrast-${set}-${shade}`] = ["colors", set, "contrasts", shade];
    });
  });

  type ColorVar = `--color-${ColorSets}-${ColorShades}`;
  type ColorContrastVar = `--color-contrast-${ColorSets}-${ColorShades}`;

  type GetColorSet<T extends ColorVar> = T extends `--color-${infer R}-${ColorShades}` ? R : never;
  type GetColorContrastSet<T extends ColorContrastVar> = T extends `--color-contrast-${infer R}-${ColorShades}` ? R : never;
  type GetColorShade<T extends ColorVar> = T extends `--color-${ColorSets}-${infer R}` ? R : never;
  type GetColorContrastShade<T extends ColorContrastVar> = T extends `--color-contrast-${ColorSets}-${infer R}` ? R : never;

  type ColorMap = {
    [K in `--color-${ColorSets}-${ColorShades}`]: ["colors", GetColorSet<K>, GetColorShade<K>];
  } & {
    [K in `--color-contrast-${ColorSets}-${ColorShades}`]: ["colors", "contrast", GetColorContrastSet<K>, GetColorContrastShade<K>];
  };

  return obj as ColorMap;
})();

/** a mapping from css variable names to theme object paths */
export const CSSToThemeMap = {
  // base
  "--base-text-scaling": ["base", "textScaling"],
  "--base-font-color": ["base", "fontColor"],
  "--base-font-color-dark": ["base", "fontColorDark"],
  "--base-background-color": ["base", "backgroundColor"],
  "--base-background-color-dark": ["base", "backgroundColorDark"],
  "--base-font-family": ["base", "fontFamily"],
  "--base-font-weight": ["base", "fontWeight"],
  "--base-font-size": ["base", "fontSize"],
  "--base-line-height": ["base", "lineHeight"],
  "--base-font-style": ["base", "fontStyle"],
  "--base-letter-spacing": ["base", "letterSpacing"],

  // colors
  ...colorVarsToThemeMap,

  // presets -shared
  "--radius-preset-base": ["presets", "shared", "radiusBase"],

  // presets - typography
  "--color-preset-anchor-light": ["presets", "typography", "anchorColor"],
  "--color-preset-anchor-dark": ["presets", "typography", "anchorColorDark"],
  "--font-preset-anchor": ["presets", "typography", "anchorFontFamily"],
  "--font-weight-preset-anchor": ["presets", "typography", "anchorFontWeight"],
  "--style-preset-anchor": ["presets", "typography", "anchorFontStyle"],
  "--tracking-preset-anchor": ["presets", "typography", "anchorLetterSpacing"],
  "--color-preset-heading-light": ["presets", "typography", "headingColor"],
  "--color-preset-heading-dark": ["presets", "typography", "headingColorDark"],
  "--font-preset-heading": ["presets", "typography", "headingFontFamily"],
  "--font-weight-preset-heading": ["presets", "typography", "headingFontWeight"],
  "--style-preset-heading": ["presets", "typography", "headingFontStyle"],
  "--tracking-preset-heading": ["presets", "typography", "headingLetterSpacing"],
};

/** a mapping from theme object paths to css variables */
export const ThemeToCSSMap = (() => {
  const theme: any = structuredClone(emptyTheme);
  Object.entries(CSSToThemeMap).forEach(([key, [...stack]]) => {
    let obj = theme;
    const leaf = stack.pop() as string;

    for (let _key of stack) {
      obj = obj[_key];
    }

    obj[leaf] = key;
  });

  return theme as StratumTheme;
})();
