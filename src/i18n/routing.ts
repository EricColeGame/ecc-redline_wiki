import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ja", "es", "de"] as const;

export const routing = defineRouting({
  locales: ["en", "ja", "es", "de"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
