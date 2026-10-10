import { BookOpen, Code2, Cpu, Flame, Gamepad2, Newspaper, Scale, type LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cpu, isContentType: true },
  { key: "comparison", path: "/comparison", icon: Scale, isContentType: true },
  { key: "characters", path: "/characters", icon: Flame, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "news", path: "/news", icon: Newspaper, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
