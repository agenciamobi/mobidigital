import { mobiEditorialAgencyTheme } from "./mobi-editorial-agency";

export const themes = {
  [mobiEditorialAgencyTheme.id]: mobiEditorialAgencyTheme,
} as const;

export const activeTheme = mobiEditorialAgencyTheme;

export type ThemeId = keyof typeof themes;
export type { ButtonSize, ButtonVariant, HeroCollageAccent, ThemeRecord } from "./types";
