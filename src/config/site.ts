export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "ECC REDLINE Wiki",
  shortName: "ECC REDLINE",
  logoText: "ER",
  tagline: "Vehicles, Guides, Gameplay & Racing Strategies",
  description: "Explore ECC REDLINE Wiki with vehicle guides, gameplay tips, racing strategies, updates, and community resources to master futuristic high-speed racing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ecc-redline.wiki",
  supportEmail: "support@ecc-redline.wiki",
  gameUrl: "https://ecc-redline.wiki",
  heroVideoId: "50mYWyjPltU",
  social: {
    discord: "https://discord.gg",
    youtube: "https://www.youtube.com/@neteasegames6254",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
