import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AuroraBackgroundProps {
  className?: string;
  children?: ReactNode;
  intensity?: number;
  colorSet?: ("cyan"|"violet"|"pink"|"amber"|"emerald")[];
}

const colorMap: Record<string,string> = {
  cyan: "from-cyan-400/30 via-sky-500/15 to-blue-500/10",
  violet: "from-violet-500/30 via-fuchsia-500/15 to-purple-500/10",
  pink: "from-pink-500/30 via-rose-500/15 to-fuchsia-500/10",
  amber: "from-amber-400/30 via-orange-500/15 to-yellow-500/10",
  emerald: "from-emerald-400/30 via-teal-500/15 to-green-500/10"
};

export function AuroraBackground({
  className,
  children,
  intensity = 3,
  colorSet = ["cyan","violet","pink"]
}: AuroraBackgroundProps) {
  const layers = Array.from({ length: intensity });

  return (
    <div className={cn("aurora-container relative", className)}>
      {layers.map((_, i) => {
        const c = colorMap[colorSet[i % colorSet.length]];
        return (
          <div
            key={i}
            className={cn(
              "aurora-layer absolute inset-0 pointer-events-none mix-blend-screen opacity-60",
              c
            )}
            style={{
              animationDelay: `${i * 2}s`,
              filter: `blur(${18 + i * 6}px)`
            }}
          />
        );
      })}
      <div className="relative">{children}</div>
    </div>
  );
}
