import { useState } from "react";
import { Check, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapStep {
  id: string;
  title: string;
  description?: string;
  disabled?: boolean;
}

interface ProgressRoadmapProps {
  steps: RoadmapStep[];
  initialActive?: string;
  onChange?(activeId: string): void;
}

export function ProgressRoadmap({ steps, initialActive, onChange }: ProgressRoadmapProps) {
  const [active, setActive] = useState<string>(initialActive || steps[0]?.id);
  const indexOf = (id: string) => steps.findIndex(s => s.id === id);
  const activeIdx = indexOf(active);

  const activate = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-6">
        {steps.map((step, i) => {
          const completed = i < activeIdx;
          const isActive = i === activeIdx;
          return (
            <div key={step.id} className="relative">
              {i !== steps.length - 1 && (
                <div className="absolute left-5 top-8 w-px h-[calc(100%+1.25rem)] bg-gradient-to-b from-primary/30 to-muted" />
              )}
              <button
                disabled={step.disabled}
                onClick={() => activate(step.id)}
                className={cn(
                  "w-full pl-14 pr-4 py-4 rounded-xl border text-left transition-all backdrop-blur-sm",
                  isActive ? "border-primary/50 bg-primary/5" : "border-border/60 hover:bg-muted/40",
                  completed && "!border-primary/40",
                  step.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center rounded-full border bg-background translate-x-2 translate-y-2 shadow-sm">
                  {completed ? (
                    <Check className="h-5 w-5 text-primary" />
                  ) : isActive ? (
                    <CircleDot className="h-5 w-5 text-primary animate-pulse" />
                  ) : (
                    <span className="text-xs text-muted-foreground">{i + 1}</span>
                  )}
                </div>
                <div className="font-medium flex items-center gap-2">
                  {step.title}
                  {completed && <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/15 text-primary">Tamamlandı</span>}
                  {isActive && !completed && <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary">Aktif</span>}
                </div>
                {step.description && (
                  <p className="mt-1 text-xs text-muted-foreground">{step.description}</p>
                )}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 flex-wrap">
        {steps.map((s,i) => {
          const completed = i < activeIdx;
          const isActive = i === activeIdx;
          return (
            <div
              key={s.id}
              onClick={() => activate(s.id)}
              className={cn(
                "h-2 rounded-full cursor-pointer transition-all",
                "bg-muted/60 hover:bg-muted",
                "flex-1 min-w-[40px] relative overflow-hidden",
                (completed || isActive) && "bg-primary/60"
              )}
              title={s.title}
            >
              {isActive && <div className="absolute inset-0 bg-primary animate-pulse opacity-60" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
