import { stratumTheme } from "@nasheomirro/stratum-shared";

const allThemeKeys = Object.keys(stratumTheme).reduce(
  (arr: string[], key) => [
    ...arr,
    ...stratumTheme[key as keyof typeof stratumTheme],
  ],
  []
);

export function CSSToEntries(css: string): [string, string][] {
  const entries: [string, string][] = [];
  const lines = css.split("\n").map((line) => line.trim());

  for (let line of lines) {
    if (line.startsWith("--")) {
      const [key, val] = line.split(":");
      if (allThemeKeys.includes(key as any)) {
        entries.push([key.trim(), val.replaceAll(";", "").trim()]);
      }
    }
  }

  return entries;
}
