import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme, themes, type Theme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";
import { themeChipClasses, themeIcons } from "@/components/theme-meta";
import { cn } from "@/lib/utils";
import { Palette, Check, Sparkles } from "lucide-react";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const themeKeys = Object.keys(themes) as Theme[];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9" title={t("theme.select")}>
          <Palette className="h-4 w-4" />
          <span className="sr-only">{t("theme.select")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            {t("theme.title")}
          </DialogTitle>
          <DialogDescription className="text-base">{t("theme.subtitle")}</DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid max-h-[65vh] gap-4 overflow-y-auto p-1 sm:grid-cols-2 lg:grid-cols-3">
          {themeKeys.map((themeKey) => {
            const config = themes[themeKey];
            const Icon = themeIcons[themeKey];
            const isSelected = theme === themeKey;

            return (
              <button
                type="button"
                key={themeKey}
                aria-pressed={isSelected}
                onClick={() => {
                  setTheme(themeKey);
                  setOpen(false);
                }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-card p-4 text-left text-card-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected && "border-primary ring-2 ring-primary"
                )}
              >
                {/* Live mini preview rendered with the theme's own tokens */}
                <div
                  className="mb-4 flex h-20 items-end gap-2 rounded-lg border p-2"
                  style={{
                    background: `hsl(${config.colors.background})`,
                    borderColor: `hsl(${config.colors.border})`,
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="h-full w-6 rounded"
                    style={{ background: `hsl(${config.colors["sidebar-background"]})`, border: `1px solid hsl(${config.colors["sidebar-border"]})` }}
                  />
                  <div className="flex h-full flex-1 flex-col justify-between">
                    <div className="h-2 w-2/3 rounded" style={{ background: `hsl(${config.colors.foreground})` }} />
                    <div
                      className="flex h-8 items-center gap-1 rounded px-1.5"
                      style={{ background: `hsl(${config.colors.card})`, border: `1px solid hsl(${config.colors.border})` }}
                    >
                      <span className="h-3 w-3 rounded-full" style={{ background: `hsl(${config.colors.primary})` }} />
                      <span className="h-1.5 flex-1 rounded" style={{ background: `hsl(${config.colors["muted-foreground"]})` }} />
                      <span className="h-3 w-5 rounded" style={{ background: `hsl(${config.colors["brand-2"]})` }} />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className={cn("rounded-lg bg-gradient-to-br p-2 text-white shadow", themeChipClasses[themeKey])}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="truncate font-semibold">{t(`theme.names.${themeKey}`)}</h3>
                      {isSelected && (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">{t(`theme.descriptions.${themeKey}`)}</p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {t(`theme.mode.${config.mode}`)}
                  </Badge>
                  {isSelected && <Badge className="text-xs">{t("theme.active")}</Badge>}
                </div>
              </button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
