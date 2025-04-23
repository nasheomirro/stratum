import { CSSToThemeMap, type PresetConfig, type StratumTheme, emptyPresetConfig, emptyTheme } from "./theme";

export function CSSToStratumTheme(
  css: string,
  baseTheme = emptyTheme
): {
  theme: StratumTheme;
  presetConfig: PresetConfig;
} {
  const linesArr = css.split("\n");

  // creating the theme object
  const theme = structuredClone(baseTheme);
  const lines = linesArr
    .map((line) => line.trim())
    .filter((line) => line.startsWith("--"))
    .map((line) => line.split(":"))
    .map(([key, val]) => [key.trim(), val.replace(";", "").trim()] as const);

  lines.forEach(([key, val]) => {
    if (!Object.hasOwn(CSSToThemeMap, key)) return;
    let obj: any = theme;
    const stack = [...CSSToThemeMap[key as keyof typeof CSSToThemeMap]];
    const leaf = stack.pop() as string;

    for (let _key of stack) {
      obj = obj[_key];
    }

    obj[leaf] = val;
  });

  // creating the presets config
  const config = structuredClone(emptyPresetConfig);
  const header = linesArr[0].trim()!.replace(/[/*]/g, "").trim().split(" ");
  const presets = header[1]
    .replace(/[[]]/g, "")
    .split(",")
    .map((i) => i.trim());

  (Object.keys(config) as (keyof typeof config)[]).forEach((key) => {
    if (presets.includes(key)) {
      config[key] = true;
    }
  });

  return { theme, presetConfig: config };
}
