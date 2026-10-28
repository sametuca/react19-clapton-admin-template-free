import { Atom, Circle, Crown, Flame, Gem, Moon, Star, Sun, Waves, Zap, type LucideIcon } from "lucide-react";
import type { Theme } from "@/contexts/ThemeContext";

/** Icon shown for every theme in pickers and previews. */
export const themeIcons: Record<Theme, LucideIcon> = {
  light: Sun,
  dark: Moon,
  midnight: Atom,
  neon: Zap,
  royal: Crown,
  aurora: Waves,
  cyberpunk: Flame,
  galaxy: Star,
  emerald: Gem,
  pureblack: Circle,
};

/**
 * Gradient classes for theme icon chips.
 * Every gradient is dark/saturated enough for white icons on top.
 */
export const themeChipClasses: Record<Theme, string> = {
  light: "from-indigo-500 to-violet-600",
  dark: "from-slate-600 to-slate-800",
  midnight: "from-violet-700 to-slate-900",
  neon: "from-cyan-600 to-sky-800",
  royal: "from-fuchsia-600 to-purple-800",
  aurora: "from-teal-600 to-sky-700",
  cyberpunk: "from-amber-600 to-orange-800",
  galaxy: "from-pink-600 to-indigo-800",
  emerald: "from-emerald-600 to-green-800",
  pureblack: "from-neutral-700 to-black",
};
