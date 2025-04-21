import type { AppConfig } from "$lib/types";
import { emptyTheme, type StratumTheme } from "@nasheomirro/stratum-shared";

const themeKeyMap = createThemeKeyMap(emptyTheme);

export function CSSToThemeObject(css: string, fromTheme = emptyTheme) {
  const theme = structuredClone(fromTheme);
  const lines = css
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("--"))
    .map((line) => line.split(":"))
    .map(([key, val]) => [key.trim(), val.replace(";", "").trim()] as const);

  lines.forEach(([key, val]) => {
    if (Object.hasOwn(themeKeyMap, key)) {
      assignThemeKeyFromStack(theme, [...themeKeyMap[key]], key, val);
    }
  });

  return theme as StratumTheme;
}

export function appConfigFromTheme(theme: StratumTheme): AppConfig {
  // maybe better way to detect this, oh well.
  return {
    presets: {
      pip: theme.presets.shared["--radius-preset-base"] !== undefined,
      forms: theme.presets.shared["--radius-preset-base"] !== undefined,
      typography:
        theme.presets.typography.heading["--font-preset-heading"] !== undefined,
    },
  };
}

function assignThemeKeyFromStack(
  theme: StratumTheme,
  stack: string[],
  propertyName: string,
  val: string
) {
  let _theme = theme as any;
  const finalKeyName = stack.pop();
  for (let i = 0; i < stack.length; i++) {
    const key = stack[i];
    if (!typeof Object.hasOwn(_theme, key)) {
      return;
    }

    _theme = _theme[key];
  }

  if (finalKeyName) {
    _theme[finalKeyName][propertyName] = val;
  }
}

function createThemeKeyMap(
  obj: any,
  stack: string[] = [],
  root: { [key: string]: string[] } = {}
) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    const val = obj[key];
    if (typeof val === "object") {
      createThemeKeyMap(obj[key], [...stack, key], root);
    } else {
      root[key] = [...stack];
    }
  }

  return root;
}
