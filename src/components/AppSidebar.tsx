import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, Table2, FileInput, Users, Shield, BarChart3, Settings, User, Bell, UserPlus, LogIn } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppSidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  const items = [
    { title: t('nav.dashboard'), url: "/", icon: LayoutDashboard },
    { title: t('nav.analytics'), url: "/analytics", icon: BarChart3 },
    { title: t('nav.tables'), url: "/tables", icon: Table2 },
    { title: t('nav.forms'), url: "/forms", icon: FileInput },
    { title: t('nav.users'), url: "/users", icon: Users },
    { title: t('nav.roles'), url: "/roles", icon: Shield },
    { title: t('nav.profile'), url: "/profile", icon: User },
    { title: t('nav.notifications'), url: "/notifications", icon: Bell },
    { title: t('nav.settings'), url: "/settings", icon: Settings },
    { title: t('nav.login'), url: "/login", icon: LogIn },
    { title: t('nav.register'), url: "/register", icon: UserPlus },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to="/" className="flex items-center gap-2 px-2 py-1.5 text-lg font-semibold">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  A
                </div>
                <span className="hidden lg:inline">React19 Admin</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarInset>
          <SidebarGroup>
            <SidebarGroupLabel>Ana Menü</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                      <NavLink to={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="hidden lg:inline">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarInset>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to="/profile" className="flex items-center gap-2 px-2 py-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
                  <User className="h-4 w-4" />
                </div>
                <div className="hidden lg:block">
                  <div className="text-sm font-medium">Samet UCA</div>
                  <div className="text-xs text-muted-foreground">ahmet@example.com</div>
                </div>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
