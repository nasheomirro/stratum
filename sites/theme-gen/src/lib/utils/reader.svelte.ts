import { stratumThemeKeys } from "@nasheomirro/stratum-shared/theme-keys";

export function CSSToEntries(css: string): [string, string][] {
  const entries: [string, string][] = [];
  const lines = css.split("\n").map((line) => line.trim());

  for (let line of lines) {
    if (line.startsWith("--")) {
      const [key, val] = line.split(":");
      if (stratumThemeKeys.includes(key as any)) {
        entries.push([
          key.replaceAll("--", "").trim(),
          val.replaceAll(";", "").trim(),
        ]);
      }
    }
  }

  return entries;
}
