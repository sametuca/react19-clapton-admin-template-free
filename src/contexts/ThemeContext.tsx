import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'midnight' | 'neon' | 'royal' | 'aurora' | 'cyberpunk' | 'galaxy' | 'emerald' | 'pureblack';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  dark: {
    name: 'Dark Premium',
    description: 'Gelişmiş koyu tema',
    colors: {
      background: '222.2 84% 4.9%',
      foreground: '210 40% 98%',
      card: '222.2 84% 4.9%',
      'card-foreground': '210 40% 98%',
      popover: '222.2 84% 4.9%',
      'popover-foreground': '210 40% 98%',
      primary: '217.2 91.2% 59.8%',
      'primary-foreground': '222.2 84% 4.9%',
      secondary: '217.2 32.6% 17.5%',
      'secondary-foreground': '210 40% 98%',
      muted: '217.2 32.6% 17.5%',
      'muted-foreground': '215 20.2% 65.1%',
      accent: '217.2 32.6% 17.5%',
      'accent-foreground': '210 40% 98%',
      destructive: '0 62.8% 30.6%',
      'destructive-foreground': '210 40% 98%',
      border: '217.2 32.6% 17.5%',
      input: '217.2 32.6% 17.5%',
      ring: '224.3 76.3% 94.1%'
    },
    gradient: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
  },
  midnight: {
    name: 'Midnight Black',
    description: 'Derin siyah premium tema',
    colors: {
      background: '0 0% 3%',
      foreground: '0 0% 98%',
      card: '0 0% 6%',
      'card-foreground': '0 0% 98%',
      popover: '0 0% 6%',
      'popover-foreground': '0 0% 98%',
      primary: '270 100% 70%',
      'primary-foreground': '0 0% 3%',
      secondary: '0 0% 12%',
      'secondary-foreground': '0 0% 98%',
      muted: '0 0% 12%',
      'muted-foreground': '0 0% 65%',
      accent: '0 0% 15%',
      'accent-foreground': '0 0% 98%',
      destructive: '0 84% 60%',
      'destructive-foreground': '0 0% 98%',
      border: '0 0% 15%',
      input: '0 0% 15%',
      ring: '270 100% 70%'
    },
    gradient: 'linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #2d1b69 75%, #8b5cf6 100%)'
  },
  neon: {
    name: 'Neon Cyber',
    description: 'Neon ışıklı siber tema',
    colors: {
      background: '200 50% 3%',
      foreground: '180 100% 90%',
      card: '200 50% 6%',
      'card-foreground': '180 100% 90%',
      popover: '200 50% 6%',
      'popover-foreground': '180 100% 90%',
      primary: '180 100% 50%',
      'primary-foreground': '200 50% 3%',
      secondary: '200 50% 12%',
      'secondary-foreground': '180 100% 90%',
      muted: '200 50% 12%',
      'muted-foreground': '180 50% 65%',
      accent: '300 100% 50%',
      'accent-foreground': '200 50% 3%',
      destructive: '0 100% 50%',
      'destructive-foreground': '0 0% 98%',
      border: '180 100% 25%',
      input: '200 50% 15%',
      ring: '180 100% 50%'
    },
    gradient: 'linear-gradient(135deg, #001122 0%, #003344 25%, #00ffff 50%, #ff00ff 75%, #ffff00 100%)'
  },
  royal: {
    name: 'Royal Purple',
    description: 'Kraliyet moru premium tema',
    colors: {
      background: '270 50% 8%',
      foreground: '270 20% 95%',
      card: '270 50% 12%',
      'card-foreground': '270 20% 95%',
      popover: '270 50% 12%',
      'popover-foreground': '270 20% 95%',
      primary: '270 95% 65%',
      'primary-foreground': '270 50% 8%',
      secondary: '270 30% 18%',
      'secondary-foreground': '270 20% 95%',
      muted: '270 30% 18%',
      'muted-foreground': '270 20% 70%',
      accent: '280 100% 70%',
      'accent-foreground': '270 50% 8%',
      destructive: '0 84% 60%',
      'destructive-foreground': '0 0% 98%',
      border: '270 30% 25%',
      input: '270 30% 20%',
      ring: '270 95% 65%'
    },
    gradient: 'linear-gradient(135deg, #1a0d2e 0%, #2d1b69 25%, #6b46c1 50%, #a855f7 75%, #d946ef 100%)'
  },
  aurora: {
    name: 'Aurora Borealis',
    description: 'Kutup ışıkları teması',
    colors: {
      background: '220 50% 6%',
      foreground: '180 100% 95%',
      card: '220 50% 10%',
      'card-foreground': '180 100% 95%',
      popover: '220 50% 10%',
      'popover-foreground': '180 100% 95%',
      primary: '160 100% 50%',
      'primary-foreground': '220 50% 6%',
      secondary: '220 30% 15%',
      'secondary-foreground': '180 100% 95%',
      muted: '220 30% 15%',
      'muted-foreground': '180 50% 70%',
      accent: '200 100% 60%',
      'accent-foreground': '220 50% 6%',
      destructive: '340 100% 60%',
      'destructive-foreground': '0 0% 98%',
      border: '160 50% 25%',
      input: '220 30% 18%',
      ring: '160 100% 50%'
    },
    gradient: 'linear-gradient(135deg, #0c1445 0%, #1e3a8a 25%, #10b981 50%, #06b6d4 75%, #8b5cf6 100%)'
  },
  cyberpunk: {
    name: 'Cyberpunk 2077',
    description: 'Futuristik siber tema',
    colors: {
      background: '60 100% 2%',
      foreground: '60 100% 95%',
      card: '60 100% 5%',
      'card-foreground': '60 100% 95%',
      popover: '60 100% 5%',
      'popover-foreground': '60 100% 95%',
      primary: '60 100% 50%',
      'primary-foreground': '60 100% 2%',
      secondary: '60 50% 12%',
      'secondary-foreground': '60 100% 95%',
      muted: '60 50% 12%',
      'muted-foreground': '60 50% 70%',
      accent: '300 100% 60%',
      'accent-foreground': '60 100% 2%',
      destructive: '0 100% 60%',
      'destructive-foreground': '0 0% 98%',
      border: '60 100% 20%',
      input: '60 50% 15%',
      ring: '60 100% 50%'
    },
    gradient: 'linear-gradient(135deg, #ffff00 0%, #ff6600 25%, #ff0066 50%, #6600ff 75%, #0066ff 100%)'
  },
  galaxy: {
    name: 'Galaxy Deep',
    description: 'Derin uzay galaksi teması',
    colors: {
      background: '240 100% 4%',
      foreground: '240 50% 95%',
      card: '240 100% 8%',
      'card-foreground': '240 50% 95%',
      popover: '240 100% 8%',
      'popover-foreground': '240 50% 95%',
      primary: '280 100% 70%',
      'primary-foreground': '240 100% 4%',
      secondary: '240 50% 15%',
      'secondary-foreground': '240 50% 95%',
      muted: '240 50% 15%',
      'muted-foreground': '240 30% 70%',
      accent: '320 100% 70%',
      'accent-foreground': '240 100% 4%',
      destructive: '0 100% 65%',
      'destructive-foreground': '0 0% 98%',
      border: '240 50% 20%',
      input: '240 50% 18%',
      ring: '280 100% 70%'
    },
    gradient: 'linear-gradient(135deg, #0f0f23 0%, #1a0033 25%, #330066 50%, #6600cc 75%, #cc00ff 100%)'
  },
  emerald: {
    name: 'Emerald Luxury',
    description: 'Lüks zümrüt yeşili tema',
    colors: {
      background: '160 100% 6%',
      foreground: '160 50% 95%',
      card: '160 100% 10%',
      'card-foreground': '160 50% 95%',
      popover: '160 100% 10%',
      'popover-foreground': '160 50% 95%',
      primary: '160 100% 50%',
      'primary-foreground': '160 100% 6%',
      secondary: '160 50% 15%',
      'secondary-foreground': '160 50% 95%',
      muted: '160 50% 15%',
      'muted-foreground': '160 30% 70%',
      accent: '180 100% 60%',
      'accent-foreground': '160 100% 6%',
      destructive: '0 100% 60%',
      'destructive-foreground': '0 0% 98%',
      border: '160 50% 25%',
      input: '160 50% 18%',
      ring: '160 100% 50%'
    },
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 25%, #059669 50%, #10b981 75%, #34d399 100%)'
  },
  pureblack: {
    name: 'Pure Black',
    description: 'Gerçekten siyah premium tema',
    colors: {
      background: '0 0% 0%',
      foreground: '0 0% 100%',
      card: '0 0% 2%',
      'card-foreground': '0 0% 100%',
      popover: '0 0% 2%',
      'popover-foreground': '0 0% 100%',
      primary: '0 0% 100%',
      'primary-foreground': '0 0% 0%',
      secondary: '0 0% 5%',
      'secondary-foreground': '0 0% 100%',
      muted: '0 0% 8%',
      'muted-foreground': '0 0% 70%',
      accent: '0 0% 10%',
      'accent-foreground': '0 0% 100%',
      destructive: '0 100% 60%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 15%',
      input: '0 0% 10%',
      ring: '0 0% 100%'
    },
    gradient: 'linear-gradient(135deg, #000000 0%, #111111 25%, #222222 50%, #111111 75%, #000000 100%)'
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
      setResolvedTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    Object.keys(themes).forEach(themeName => {
      root.classList.remove(`theme-${themeName}`);
    });
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    root.classList.add('dark'); // Always keep dark class for compatibility
    
    // Apply CSS variables
    const themeConfig = themes[theme];
    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    
    // Apply background gradient
    document.body.style.background = themeConfig.gradient;
    document.body.style.backgroundAttachment = 'fixed';
    
    localStorage.setItem('theme', theme);
    setResolvedTheme(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
    resolvedTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { themes };
