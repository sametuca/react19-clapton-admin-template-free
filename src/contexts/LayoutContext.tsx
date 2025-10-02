import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LayoutType = "vertical" | "horizontal" | "two-column" | "semi-box";
export type LayoutWidth = "fluid" | "boxed";
export type LayoutPosition = "fixed" | "scrollable";
export type TopbarTone = "light" | "dark";

export interface LayoutSettings {
  layoutType: LayoutType;
  layoutWidth: LayoutWidth;
  layoutPosition: LayoutPosition;
  topbarTone: TopbarTone;
}

const DEFAULT_SETTINGS: LayoutSettings = {
  layoutType: "vertical",
  layoutWidth: "fluid",
  layoutPosition: "fixed",
  topbarTone: "dark",
};

const LS_KEY = "react19-layout-settings";

interface LayoutContextValue extends LayoutSettings {
  setSettings: (update: Partial<LayoutSettings>) => void;
  resetSettings: () => void;
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettingsState] = useState<LayoutSettings>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings]);

  const setSettings = (update: Partial<LayoutSettings>) => {
    setSettingsState((prev) => ({ ...prev, ...update }));
  };

  const resetSettings = () => setSettingsState(DEFAULT_SETTINGS);

  const value = useMemo(
    () => ({ ...settings, setSettings, resetSettings }),
    [settings]
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

export function useLayoutSettings() {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error("useLayoutSettings must be used within LayoutProvider");
  return ctx;
}
