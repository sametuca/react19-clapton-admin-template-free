import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BarChart3, Sparkles, LayoutDashboard, ShoppingCart, Users, Rocket } from "lucide-react";

const links = [
  { to: "/get-started", label: "Get Started", icon: Rocket },
  { to: "/showcase", label: "Showcase", icon: Sparkles },
  { to: "/showcase/kanban", label: "Kanban", icon: LayoutDashboard },
  { to: "/examples", label: "Examples", icon: BarChart3 },
  { to: "/examples/ecommerce", label: "Ecommerce", icon: ShoppingCart },
  { to: "/users", label: "Users", icon: Users },
];

export function TopNav() {
  return (
    <nav className="sticky top-14 z-40 bg-background/80 backdrop-blur border-b">
      <div className="px-2 sm:px-4 md:px-6">
        <ul className="flex items-center gap-1 overflow-x-auto py-2">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "hover:bg-muted hover:text-foreground"
                  )
                }
              >
                <l.icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{l.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
