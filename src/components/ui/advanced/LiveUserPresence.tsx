import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface PresenceUser {
  id: string;
  name: string;
  color: string;
  status: "active" | "idle" | "typing";
  x: number;
  y: number;
}

const seedUsers: Omit<PresenceUser,"x"|"y">[] = [
  { id: "u1", name: "Ada", color: "bg-cyan-500", status: "active" },
  { id: "u2", name: "Berk", color: "bg-pink-500", status: "active" },
  { id: "u3", name: "Cem", color: "bg-violet-500", status: "idle" },
  { id: "u4", name: "Deniz", color: "bg-emerald-500", status: "active" }
];

export function LiveUserPresence() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [users, setUsers] = useState<PresenceUser[]>(() =>
    seedUsers.map(u => ({ ...u, x: Math.random(), y: Math.random() }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev =>
        prev.map(u => {
          const jitter = 0.08;
          return {
            ...u,
            status: Math.random() < 0.15 ? (["active","idle","typing"][Math.floor(Math.random()*3)] as PresenceUser["status"]) : u.status,
            x: Math.min(1, Math.max(0, u.x + (Math.random() - 0.5) * jitter)),
            y: Math.min(1, Math.max(0, u.y + (Math.random() - 0.5) * jitter))
          };
        })
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative h-56 rounded-xl border bg-background/50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {users.map(u => (
          <div
            key={u.id}
            className="absolute"
            style={{ left: `calc(${u.x * 100}% - 18px)`, top: `calc(${u.y * 100}% - 18px)` }}
          >
            <div
              className={cn(
                "w-9 h-9 rounded-full ring-2 ring-background shadow-md flex items-center justify-center text-[11px] font-medium text-white select-none transition-transform duration-700",
                u.color,
                u.status === "typing" && "scale-110",
                u.status === "idle" && "opacity-70"
              )}
              title={`${u.name} • ${u.status}`}
            >
              {u.name.slice(0,2).toUpperCase()}
            </div>
            {u.status === "typing" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-9 text-[9px] px-1 py-0.5 rounded bg-black/40 text-white backdrop-blur-sm">
                yazıyor...
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded bg-muted/70 text-muted-foreground backdrop-blur">
        Aktif Kullanıcılar: {users.length}
      </div>
    </div>
  );
}
