import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Palette, 
  BarChart3, 
  Table2, 
  Activity, 
  Star, 
  Loader2, 
  FileText, 
  Users, 
  Shield, 
  Settings, 
  Bell, 
  User, 
  Menu, 
  X,
  Rocket,
  Moon,
  Sun,
  Languages,
  Sparkles,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  MousePointer,
  Wallet,
  ShoppingCart,
  Brain,
  Database,
  Camera
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/contexts/ThemeContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSelector } from "@/components/ThemeSelector";
import {
  Collapsible as CollapsibleRoot,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function AppSidebar() {
  const [showcaseExpanded, setShowcaseExpanded] = useState(false);
  const [examplesExpanded, setExamplesExpanded] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();
  const { state } = useSidebar();

  const mainItems = [
    { title: t('nav.getStarted'), url: "/get-started", icon: Rocket, badge: t('nav.guide') },
    { title: t('nav.exampleServices'), url: "/services", icon: Database, badge: "API" },
  ];

  const showcaseChildItems = [
    { title: t('showcase.stats.title'), url: "/showcase/stats", icon: BarChart3},
    { title: t('showcase.datatables.title'), url: "/showcase/tables", icon: Table2},
    { title: t('showcase.activity.title'), url: "/showcase/activity", icon: Activity},
    { title: t('showcase.charts.title'), url: "/showcase/charts", icon: BarChart3},
    { title: t('showcase.features.title'), url: "/showcase/features", icon: Star},
    { title: t('showcase.loading.title'), url: "/showcase/loading", icon: Loader2},
    { title: t('showcase.widgets.title'), url: "/showcase/widgets", icon: BarChart3},
    { title: t('showcase.gallery.title'), url: "/showcase/gallery", icon: Palette},
    { title: t('showcase.animation.title'), url: "/showcase/animations", icon: Star},
    { title: t('showcase.buttons.title'), url: "/showcase/buttons", icon: MousePointer},
    { title: t('showcase.forms.title'), url: "/showcase/forms", icon: FileText},
    { title: t('showcase.navigation.title'), url: "/showcase/navigation", icon: Menu},
    { title: t('showcase.feedback.title'), url: "/showcase/feedback", icon: MessageSquare},
    { title: t('showcase.media.title'), url: "/showcase/media", icon: Camera},
    { title: "Popüler Komponentler", url: "/showcase/popular", icon: Star },
    { title: "Kanban Board", url: "/showcase/kanban", icon: LayoutDashboard },
    { title: "Authentication", url: "/showcase/auth", icon: User },
    { title: t('showcase.ai.premiumComponents'), url: "/showcase/premium", icon: Star },
    { title: t('showcase.ai.aiComponents'), url: "/showcase/ai", icon: Brain},
  ];

  const exampleChildItems = [
    { title: t('nav.examples.socialMedia'), url: "/examples/social-media", icon: MessageSquare },
    { title: t('nav.examples.ecommerce'), url: "/examples/ecommerce", icon: ShoppingCart },
    { title: t('nav.examples.analytics'), url: "/examples/analytics", icon: BarChart3 },
    { title: t('nav.examples.crm'), url: "/examples/crm", icon: Users },
    { title: t('nav.examples.finance'), url: "/examples/finance", icon: Wallet },
  ];

  const isActive = (url: string) => location.pathname === url;

  return (
    <TooltipProvider>
      <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-sidebar-primary-foreground shadow-lg border border-white/20">
                  <span className="text-white font-bold text-lg tracking-wider" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>C</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    React19 Admin
                  </span>
                  <span className="truncate text-xs text-sidebar-foreground/60">
                    Premium Template for React19
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Items */}
        <SidebarGroup>
          <SidebarGroupLabel>{t('nav.menu')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.badge && <Badge variant="secondary" className="ml-auto">{item.badge}</Badge>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Showcase Items */}
        <SidebarGroup>
          <SidebarGroupLabel>{t('nav.showcase')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <CollapsibleRoot open={showcaseExpanded} onOpenChange={setShowcaseExpanded}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Palette />
                      <span>{t('nav.showcase')}</span>
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* Main Showcase Link */}
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive('/showcase')}>
                          <Link to="/showcase">
                            <Palette />
                            <span>{t('nav.overview')}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      
                      {/* Showcase Child Items */}
                      {showcaseChildItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild isActive={isActive(item.url)}>
                            <Link to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </CollapsibleRoot>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Example Pages */}
        <SidebarGroup>
          <SidebarGroupLabel>{t('nav.examples.examples')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <CollapsibleRoot open={examplesExpanded} onOpenChange={setExamplesExpanded}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Sparkles />
                      <span>{t('nav.examples.examples')}</span>
                      <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {/* Main Examples Link */}
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton asChild isActive={isActive('/examples')}>
                          <Link to="/examples">
                            <Sparkles />
                            <span>{t('nav.examples.overview')}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      
                      {/* Example Child Items */}
                      {exampleChildItems.map((item) => (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuSubButton asChild isActive={isActive(item.url)}>
                            <Link to={item.url}>
                              <item.icon />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </CollapsibleRoot>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className={`flex ${state === "collapsed" ? "flex-col" : "flex-row"} items-center justify-center gap-2 p-2`}>
              {state === "collapsed" ? (
                <>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <LanguageSwitcher />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{t('nav.changeLanguage')}</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <ThemeSelector />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{t('nav.changeTheme')}</p>
                    </TooltipContent>
                  </Tooltip>
                </>
              ) : (
                <>
                  <LanguageSwitcher />
                  <ThemeSelector />
                </>
              )}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </TooltipProvider>
  );
}