import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Table2, 
  FileInput, 
  Users, 
  Shield, 
  BarChart3, 
  Settings, 
  User, 
  Bell, 
  UserPlus, 
  LogIn, 
  Palette,
  Crown,
  LogOut,
  ChevronRight,
  Sparkles,
  Star,
  Loader2,
  Image,
  ShoppingCart,
  DollarSign,
  Activity,
  Rocket
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppSidebar() {
  const location = useLocation();
  const { t } = useLanguage();
  const { state, setOpenMobile } = useSidebar();
  const collapsed = state === "collapsed";

  const mainItems = [
    { title: t('nav.dashboard'), url: "/", icon: LayoutDashboard, badge: null },
    { title: "Get Started", url: "/get-started", icon: Rocket, badge: "Guide" },
  ];

  const showcaseItems = [
    { title: t('nav.showcase'), url: "/showcase", icon: Palette, badge: "14", isParent: true },
    { title: "İstatistik Kartları", url: "/showcase/stats", icon: BarChart3, badge: "Animasyonlu", isChild: true },
    { title: "Veri Tabloları", url: "/showcase/tables", icon: Table2, badge: "Tam Özellikli", isChild: true },
    { title: "Aktivite Akışları", url: "/showcase/activity", icon: Activity, badge: "Canlı", isChild: true },
    { title: "Metric Grafikleri", url: "/showcase/charts", icon: BarChart3, badge: "İnteraktif", isChild: true },
    { title: "Özellik Kartları", url: "/showcase/features", icon: Star, badge: "Showcase", isChild: true },
    { title: "Yükleme Durumları", url: "/showcase/loading", icon: Loader2, badge: "Smooth", isChild: true },
    { title: "İnteraktif Formlar", url: "/showcase/forms", icon: FileInput, badge: "Premium", isChild: true },
    { title: "Dashboard Widgets", url: "/showcase/widgets", icon: LayoutDashboard, badge: "Pro", isChild: true },
    { title: "Modern Gallery", url: "/showcase/gallery", icon: Image, badge: "Media", isChild: true },
    { title: "Animation Showcase", url: "/showcase/animations", icon: Palette, badge: "Animated", isChild: true },
    { title: "Benzersiz Komponentler", url: "/showcase/unique", icon: Sparkles, badge: "Exclusive", isChild: true },
    { title: "E-commerce Showcase", url: "/showcase/ecommerce", icon: ShoppingCart, badge: "Premium", isChild: true },
    { title: "Crypto & Finance", url: "/showcase/crypto-finance", icon: DollarSign, badge: "Premium", isChild: true },
    { title: "Social Media", url: "/showcase/social-media", icon: Users, badge: "Premium", isChild: true },
    // Ana menüden taşınan öğeler
    { title: t('nav.analytics'), url: "/analytics", icon: BarChart3, badge: "Pro", isChild: true },
    { title: t('nav.tables'), url: "/tables", icon: Table2, badge: null, isChild: true },
    { title: t('nav.forms'), url: "/forms", icon: FileInput, badge: "Beta", isChild: true },
    { title: t('nav.users'), url: "/users", icon: Users, badge: null, isChild: true },
    { title: t('nav.roles'), url: "/roles", icon: Shield, badge: null, isChild: true },
  ];

  const settingsItems = [
    { title: t('nav.profile'), url: "/profile", icon: User, badge: null },
    { title: t('nav.notifications'), url: "/notifications", icon: Bell, badge: "3" },
    { title: t('nav.settings'), url: "/settings", icon: Settings, badge: null },
  ];

  const authItems = [
    { title: t('nav.login'), url: "/login", icon: LogIn, badge: null },
    { title: t('nav.register'), url: "/register", icon: UserPlus, badge: null },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const active = isActive(path);
    return `
      relative group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 min-h-[44px]
      ${active 
        ? "bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 text-primary border-l-4 border-primary shadow-lg shadow-primary/20" 
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:shadow-md"
      }
      ${collapsed ? "justify-center" : ""}
    `;
  };

  return (
    <Sidebar className="border-r bg-gradient-to-b from-background to-muted/20" collapsible="icon">
      {/* Header */}
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-lg">
            <Crown className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                React19 Admin
              </h1>
              <p className="text-xs text-muted-foreground">Premium Template</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-6 space-y-8 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-sidebar-border/50 hover:scrollbar-thumb-sidebar-border/70">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            <LayoutDashboard className="h-3 w-3" />
            {!collapsed && "Ana Menü"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
                         <SidebarMenu className="space-y-2">
               {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink 
                      to={item.url} 
                      className={getNavClassName(item.url)}
                      onClick={() => {
                        // Prevent sidebar from auto-closing on mobile
                        if (window.innerWidth < 1024) {
                          setOpenMobile(false);
                        }
                      }}
                    >
                                             <item.icon className="h-5 w-5 flex-shrink-0" />
                       {!collapsed && (
                         <>
                           <span className="flex-1 font-medium leading-tight">{item.title}</span>
                           {item.badge && (
                             <Badge variant={item.badge === "Pro" ? "default" : "secondary"} className="text-xs px-2 py-1 flex-shrink-0">
                               {item.badge}
                             </Badge>
                           )}
                           {isActive(item.url) && (
                             <ChevronRight className="h-4 w-4 text-primary animate-pulse flex-shrink-0" />
                           )}
                         </>
                       )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Showcase */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            <Sparkles className="h-3 w-3" />
            {!collapsed && "Showcase"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
                         <SidebarMenu className="space-y-2">
               {showcaseItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                                         <NavLink 
                       to={item.url} 
                       className={`${getNavClassName(item.url)} ${item.isChild ? 'ml-6 text-sm' : ''}`}
                       onClick={() => {
                         // Prevent sidebar from auto-closing on mobile
                         if (window.innerWidth < 1024) {
                           setOpenMobile(false);
                         }
                       }}
                     >
                       {item.isChild ? (
                         <div className="h-5 w-5 flex items-center justify-center flex-shrink-0">
                           <item.icon className="h-4 w-4 text-muted-foreground" />
                         </div>
                       ) : (
                         <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex-shrink-0 shadow-sm">
                           <item.icon className="h-4 w-4 text-white" />
                         </div>
                       )}
                       {!collapsed && (
                         <>
                           <span className="flex-1 font-medium leading-tight">{item.title}</span>
                           {item.badge && (
                             <Badge variant={item.isChild ? "secondary" : "outline"} className={`text-xs px-2 py-1 flex-shrink-0 ${item.isChild ? 'bg-muted/80' : 'border-yellow-500 text-yellow-600'}`}>
                               {item.isChild ? item.badge : `${item.badge} Kategori`}
                             </Badge>
                           )}
                           {isActive(item.url) && (
                             <ChevronRight className="h-4 w-4 text-primary animate-pulse flex-shrink-0" />
                           )}
                         </>
                       )}
                     </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 px-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            <Settings className="h-3 w-3" />
            {!collapsed && "Ayarlar"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
                         <SidebarMenu className="space-y-2">
               {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink 
                      to={item.url} 
                      className={getNavClassName(item.url)}
                      onClick={() => {
                        // Prevent sidebar from auto-closing on mobile
                        if (window.innerWidth < 1024) {
                          setOpenMobile(false);
                        }
                      }}
                    >
                                             <item.icon className="h-5 w-5 flex-shrink-0" />
                       {!collapsed && (
                         <>
                           <span className="flex-1 font-medium leading-tight">{item.title}</span>
                           {item.badge && (
                             <Badge variant="destructive" className="text-xs px-2 py-1 flex-shrink-0">
                               {item.badge}
                             </Badge>
                           )}
                           {isActive(item.url) && (
                             <ChevronRight className="h-4 w-4 text-primary animate-pulse flex-shrink-0" />
                           )}
                         </>
                       )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Auth (if needed) */}
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2 px-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              <LogIn className="h-3 w-3" />
              {!collapsed && "Giriş"}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                {authItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="p-0">
                      <NavLink 
                        to={item.url} 
                        className={getNavClassName(item.url)}
                        onClick={() => {
                          // Prevent sidebar from auto-closing on mobile
                          if (window.innerWidth < 1024) {
                            setOpenMobile(false);
                          }
                        }}
                      >
                                               <item.icon className="h-5 w-5 flex-shrink-0" />
                       {!collapsed && (
                         <>
                           <span className="flex-1 font-medium leading-tight">{item.title}</span>
                           {isActive(item.url) && (
                             <ChevronRight className="h-4 w-4 text-primary animate-pulse flex-shrink-0" />
                           )}
                         </>
                       )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-border/50 p-4">
        {!collapsed ? (
          <div className="space-y-3">
            {/* User Profile */}
            <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xs">
                  SU
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Samet UCA</p>
                <p className="text-xs text-muted-foreground truncate">samet@example.com</p>
              </div>
            </div>
            
            {/* Premium Badge */}
            <div className="rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 p-3">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Premium</span>
              </div>
              <p className="text-xs text-muted-foreground">Tüm özelliklere erişim</p>
            </div>

            {/* Logout */}
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
              <LogOut className="h-4 w-4" />
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <Avatar className="h-8 w-8 mx-auto">
              <AvatarImage src="/api/placeholder/32/32" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xs">
                SU
              </AvatarFallback>
            </Avatar>
            <div className="flex justify-center">
              <Crown className="h-4 w-4 text-yellow-600" />
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
