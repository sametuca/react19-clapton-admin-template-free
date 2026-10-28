import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Theme =
  | 'light'
  | 'dark'
  | 'midnight'
  | 'neon'
  | 'royal'
  | 'aurora'
  | 'cyberpunk'
  | 'galaxy'
  | 'emerald'
  | 'pureblack';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Theme;
  mode: ThemeMode;
}

interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;
  primary: string;
  'primary-foreground': string;
  secondary: string;
  'secondary-foreground': string;
  muted: string;
  'muted-foreground': string;
  accent: string;
  'accent-foreground': string;
  destructive: string;
  'destructive-foreground': string;
  success: string;
  'success-foreground': string;
  warning: string;
  'warning-foreground': string;
  info: string;
  'info-foreground': string;
  'brand-2': string;
  border: string;
  input: string;
  ring: string;
  'sidebar-background': string;
  'sidebar-foreground': string;
  'sidebar-primary': string;
  'sidebar-primary-foreground': string;
  'sidebar-accent': string;
  'sidebar-accent-foreground': string;
  'sidebar-border': string;
  'sidebar-ring': string;
}

interface ThemeConfig {
  name: string;
  mode: ThemeMode;
  colors: ThemeColors;
  /** Preview gradient used by theme pickers only. */
  gradient: string;
}

/**
 * Builds a complete token set for a dark theme from a handful of hue values.
 * Every pair (foreground / background) is tuned to stay above WCAG AA (4.5:1).
 */
const buildDarkColors = ({
  hue,
  saturation = 28,
  primary,
  primaryForeground,
  brand2,
  background = 8,
  card = 11.5,
  surface = 16,
  borderLightness = 21,
}: {
  hue: number;
  saturation?: number;
  primary: string;
  primaryForeground: string;
  brand2: string;
  background?: number;
  card?: number;
  surface?: number;
  borderLightness?: number;
}): ThemeColors => ({
  background: `${hue} ${saturation}% ${background}%`,
  foreground: `${hue} 30% 96%`,
  card: `${hue} ${saturation - 2}% ${card}%`,
  'card-foreground': `${hue} 30% 96%`,
  popover: `${hue} ${saturation - 2}% ${card}%`,
  'popover-foreground': `${hue} 30% 96%`,
  primary,
  'primary-foreground': primaryForeground,
  secondary: `${hue} ${saturation - 4}% ${surface}%`,
  'secondary-foreground': `${hue} 30% 96%`,
  muted: `${hue} ${saturation - 4}% ${surface}%`,
  'muted-foreground': `${hue} 16% 70%`,
  accent: `${hue} ${saturation - 2}% ${surface + 2}%`,
  'accent-foreground': `${hue} 30% 96%`,
  destructive: '0 68% 48%',
  'destructive-foreground': '0 0% 100%',
  success: '152 62% 40%',
  'success-foreground': '0 0% 100%',
  warning: '38 92% 52%',
  'warning-foreground': '30 60% 10%',
  info: '205 88% 56%',
  'info-foreground': '210 60% 8%',
  'brand-2': brand2,
  border: `${hue} ${saturation - 8}% ${borderLightness}%`,
  input: `${hue} ${saturation - 8}% ${borderLightness + 2}%`,
  ring: primary,
  'sidebar-background': `${hue} ${saturation}% ${Math.max(background - 1, 0)}%`,
  'sidebar-foreground': `${hue} 30% 94%`,
  'sidebar-primary': primary,
  'sidebar-primary-foreground': primaryForeground,
  'sidebar-accent': `${hue} ${saturation - 2}% ${surface}%`,
  'sidebar-accent-foreground': `${hue} 30% 98%`,
  'sidebar-border': `${hue} ${saturation - 8}% ${borderLightness - 3}%`,
  'sidebar-ring': primary,
});

const themes: Record<Theme, ThemeConfig> = {
  light: {
    name: 'Light',
    mode: 'light',
    colors: {
      background: '220 25% 97%',
      foreground: '224 40% 12%',
      card: '0 0% 100%',
      'card-foreground': '224 40% 12%',
      popover: '0 0% 100%',
      'popover-foreground': '224 40% 12%',
      primary: '243 75% 55%',
      'primary-foreground': '0 0% 100%',
      secondary: '220 22% 93%',
      'secondary-foreground': '224 40% 16%',
      muted: '220 22% 94%',
      'muted-foreground': '218 17% 38%',
      accent: '230 80% 96%',
      'accent-foreground': '236 55% 28%',
      destructive: '0 72% 46%',
      'destructive-foreground': '0 0% 100%',
      success: '152 68% 28%',
      'success-foreground': '0 0% 100%',
      warning: '38 95% 48%',
      'warning-foreground': '30 70% 10%',
      info: '208 90% 38%',
      'info-foreground': '0 0% 100%',
      'brand-2': '268 80% 50%',
      border: '220 20% 88%',
      input: '220 20% 84%',
      ring: '243 75% 55%',
      'sidebar-background': '0 0% 100%',
      'sidebar-foreground': '224 30% 20%',
      'sidebar-primary': '243 75% 55%',
      'sidebar-primary-foreground': '0 0% 100%',
      'sidebar-accent': '230 80% 96%',
      'sidebar-accent-foreground': '236 55% 28%',
      'sidebar-border': '220 20% 90%',
      'sidebar-ring': '243 75% 55%',
    },
    gradient: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 55%, #6366f1 100%)',
  },
  dark: {
    name: 'Dark',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 224,
      primary: '234 89% 74%',
      primaryForeground: '226 45% 10%',
      brand2: '283 85% 76%',
    }),
    gradient: 'linear-gradient(135deg, #0f1320 0%, #1c2340 55%, #818cf8 100%)',
  },
  midnight: {
    name: 'Midnight',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 262,
      saturation: 30,
      primary: '263 90% 76%',
      primaryForeground: '262 50% 10%',
      brand2: '222 90% 72%',
      background: 7,
      card: 10.5,
    }),
    gradient: 'linear-gradient(135deg, #0d0a18 0%, #251a4a 55%, #a78bfa 100%)',
  },
  neon: {
    name: 'Neon Cyber',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 200,
      saturation: 40,
      primary: '187 88% 52%',
      primaryForeground: '200 60% 8%',
      brand2: '262 85% 76%',
      background: 6.5,
      card: 10,
    }),
    gradient: 'linear-gradient(135deg, #07141b 0%, #0c3a4a 55%, #22d3ee 100%)',
  },
  royal: {
    name: 'Royal Purple',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 280,
      saturation: 32,
      primary: '281 85% 72%',
      primaryForeground: '280 55% 10%',
      brand2: '330 85% 72%',
      background: 8,
      card: 11.5,
    }),
    gradient: 'linear-gradient(135deg, #150b1d 0%, #3b1a55 55%, #d27af0 100%)',
  },
  aurora: {
    name: 'Aurora',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 206,
      saturation: 40,
      primary: '166 72% 50%',
      primaryForeground: '170 60% 7%',
      brand2: '210 90% 68%',
      background: 7,
      card: 10.5,
    }),
    gradient: 'linear-gradient(135deg, #08131f 0%, #0d3b4d 55%, #2dd4bf 100%)',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 42,
      saturation: 22,
      primary: '48 96% 56%',
      primaryForeground: '40 70% 8%',
      brand2: '330 85% 70%',
      background: 6,
      card: 9.5,
    }),
    gradient: 'linear-gradient(135deg, #14110a 0%, #3d2a0a 55%, #facc15 100%)',
  },
  galaxy: {
    name: 'Galaxy',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 250,
      saturation: 38,
      primary: '312 82% 72%',
      primaryForeground: '300 55% 10%',
      brand2: '210 90% 72%',
      background: 6.5,
      card: 10,
    }),
    gradient: 'linear-gradient(135deg, #0c0a1f 0%, #2c1659 55%, #f080d4 100%)',
  },
  emerald: {
    name: 'Emerald',
    mode: 'dark',
    colors: buildDarkColors({
      hue: 160,
      saturation: 30,
      primary: '152 66% 52%',
      primaryForeground: '160 60% 7%',
      brand2: '182 70% 54%',
      background: 6.5,
      card: 10,
    }),
    gradient: 'linear-gradient(135deg, #07140f 0%, #0b3a2a 55%, #34d399 100%)',
  },
  pureblack: {
    name: 'Pure Black',
    mode: 'dark',
    colors: {
      ...buildDarkColors({
        hue: 0,
        saturation: 0,
        primary: '0 0% 98%',
        primaryForeground: '0 0% 6%',
      brand2: '0 0% 72%',
        background: 0,
        card: 4,
        surface: 10,
        borderLightness: 18,
      }),
      'muted-foreground': '0 0% 72%',
    },
    gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 55%, #f5f5f5 100%)',
  },
};

const THEME_STORAGE_KEY = 'theme';

const isTheme = (value: string | null): value is Theme =>
  value !== null && Object.prototype.hasOwnProperty.call(themes, value);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (isTheme(saved)) return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const config = themes[theme];

    (Object.keys(themes) as Theme[]).forEach((name) => {
      root.classList.remove(`theme-${name}`);
    });
    root.classList.add(`theme-${theme}`);
    root.classList.toggle('dark', config.mode === 'dark');
    root.classList.toggle('light', config.mode === 'light');
    root.style.colorScheme = config.mode;

    (Object.entries(config.colors) as [string, string][]).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = useMemo<ThemeContextType>(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme,
      mode: themes[theme].mode,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { themes };

