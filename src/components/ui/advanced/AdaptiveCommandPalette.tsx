import { useCallback, useEffect, useMemo, useState } from "react";
import { Command, Search, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PaletteItem {
  id: string;
  group: string;
  label: string;
  keywords?: string[];
  path?: string;
  shortcut?: string;
  action?: () => void;
}

const baseItems: PaletteItem[] = [
  { id: "dashboard", group: "Navigasyon", label: "Dashboard", keywords: ["home","panel"], path: "/dashboard" },
  { id: "analytics", group: "Navigasyon", label: "Analytics", keywords: ["stats","charts"], path: "/analytics" },
  { id: "users", group: "Navigasyon", label: "Kullanıcılar", keywords: ["members","people"], path: "/users" },
  { id: "theme-toggle", group: "Eylemler", label: "Tema Değiştir", keywords: ["dark","light"], shortcut: "T" },
  { id: "new-report", group: "Eylemler", label: "Yeni Rapor", keywords: ["create","report"] },
  { id: "docs", group: "Kaynaklar", label: "Dokümantasyon", keywords: ["read","help"], path: "/docs" }
];

interface AdaptiveCommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AdaptiveCommandPalette({ open, onOpenChange }: AdaptiveCommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const actualOpen = open ?? internalOpen;
  const setOpen = (v: boolean) => (onOpenChange ? onOpenChange(v) : setInternalOpen(v));
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [recent, setRecent] = useState<string[]>([]);

  const items = useMemo(() => {
    const q = query.toLowerCase().trim();
    let list = baseItems;
    if (q) {
      list = list.filter(it =>
        it.label.toLowerCase().includes(q) ||
        it.group.toLowerCase().includes(q) ||
        (it.keywords || []).some(k => k.toLowerCase().includes(q))
      );
    }
    list = list
      .map(it => ({
        it,
        score: (q ? (it.label.toLowerCase().startsWith(q) ? 4 : 0) : 1) +
               ((it.keywords || []).some(k => k.toLowerCase().startsWith(q)) ? 2 : 0) +
               (recent.includes(it.id) ? 3 : 0)
      }))
      .sort((a,b) => b.score - a.score)
      .map(x => x.it);
    return list;
  }, [query, recent]);

  const grouped = useMemo(
    () => items.reduce((acc, it) => {
      acc[it.group] = acc[it.group] || [];
      acc[it.group].push(it);
      return acc;
    }, {} as Record<string, PaletteItem[]>),
    [items]
  );

  const flat = items;

  const handleKey = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setOpen(!actualOpen);
      return;
    }
    if (!actualOpen) return;
    if (e.key === "Escape") setOpen(false);
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = flat[activeIndex];
      if (item) trigger(item);
    }
  }, [actualOpen, flat, activeIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!actualOpen) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [actualOpen]);

  const trigger = (item: PaletteItem) => {
    setRecent(r => [item.id, ...r.filter(x => x !== item.id)].slice(0, 6));
    if (item.action) item.action();
    if (item.path) console.log("Navigate ->", item.path);
    setOpen(false);
  };

  if (!actualOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl rounded-xl border bg-background/80 backdrop-blur-md shadow-2xl overflow-hidden animate-fade-in">
        <div className="flex items-center gap-2 px-4 pt-3 pb-2 border-b">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            autoFocus
            placeholder="Komut ara veya yaz (örn: dashboard, tema...)"
            value={query}
            onChange={e => { setQuery(e.target.value); setActiveIndex(0); }}
            className="h-8 bg-transparent border-0 shadow-none focus-visible:ring-0 px-0"
          />
          <div className="ml-auto hidden sm:flex gap-1">
            <kbd className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">Ctrl</kbd>
            <span className="text-xs text-muted-foreground">+</span>
            <kbd className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">K</kbd>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto custom-scroll">
          {Object.entries(grouped).map(([group, list]) => (
            <div key={group} className="px-2 py-2">
              <div className="px-2 pb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{group}</div>
              <ul className="space-y-1">
                {list.map(item => {
                  const idx = flat.indexOf(item);
                  const active = idx === activeIndex;
                  return (
                    <li
                      key={item.id}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => trigger(item)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer border border-transparent",
                        active ? "bg-primary/10 border-primary/30" : "hover:bg-muted/60"
                      )}
                    >
                      <Command className="h-4 w-4 text-primary" />
                      <span className="text-sm flex-1">{item.label}</span>
                      {item.shortcut && <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{item.shortcut}</span>}
                      {item.path && <ExternalLink className="h-3.5 w-3.5 opacity-60" />}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {!flat.length && (
            <div className="py-10 text-center text-sm text-muted-foreground">
              Sonuç bulunamadı
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t bg-background/70">
          <div className="flex gap-2">
            <Badge variant="outline">Adaptif</Badge>
            {recent.length > 0 && <Badge variant="secondary">Öğreniyor</Badge>}
          </div>
          <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
            Kapat
          </Button>
        </div>
      </div>
    </div>
  );
}
