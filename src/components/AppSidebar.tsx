import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Languages
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const mainItems = [
    { title: t('nav.dashboard'), url: "/", icon: LayoutDashboard, badge: null },
    { title: t('nav.getStarted'), url: "/get-started", icon: Rocket, badge: t('nav.guide') },
  ];

  const showcaseItems = [
    { title: t('nav.showcase'), url: "/showcase", icon: Palette, badge: "10", isParent: true },
    { title: t('showcase.stats.title'), url: "/showcase/stats", icon: BarChart3, badge: t('showcase.stats.badge'), isChild: true },
    { title: t('showcase.tables.title'), url: "/showcase/tables", icon: Table2, badge: t('showcase.tables.badge'), isChild: true },
    { title: t('showcase.activity.title'), url: "/showcase/activity", icon: Activity, badge: t('showcase.activity.badge'), isChild: true },
    { title: t('showcase.charts.title'), url: "/showcase/charts", icon: BarChart3, badge: t('showcase.charts.badge'), isChild: true },
    { title: t('showcase.features.title'), url: "/showcase/features", icon: Star, badge: t('showcase.features.badge'), isChild: true },
    { title: t('showcase.loading.title'), url: "/showcase/loading", icon: Loader2, badge: t('showcase.loading.badge'), isChild: true },
    { title: t('showcase.widgets.title'), url: "/showcase/widgets", icon: BarChart3, badge: t('showcase.widgets.badge'), isChild: true },
    { title: t('showcase.gallery.title'), url: "/showcase/gallery", icon: Palette, badge: t('showcase.gallery.badge'), isChild: true },
    { title: t('showcase.animations.title'), url: "/showcase/animations", icon: Star, badge: t('showcase.animations.badge'), isChild: true },
  ];

  const otherItems = [
    { title: t('nav.analytics'), url: "/analytics", icon: BarChart3, badge: null },
    { title: t('nav.tables'), url: "/tables", icon: Table2, badge: null },
    { title: t('nav.forms'), url: "/forms", icon: FileText, badge: null },
    { title: t('nav.users'), url: "/users", icon: Users, badge: null },
    { title: t('nav.roles'), url: "/roles", icon: Shield, badge: null },
    { title: t('nav.profile'), url: "/profile", icon: User, badge: null },
    { title: t('nav.notifications'), url: "/notifications", icon: Bell, badge: null },
    { title: t('nav.settings'), url: "/settings", icon: Settings, badge: null },
  ];

  const isActive = (url: string) => location.pathname === url;

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="glassmorphism-card text-white hover:bg-white/20"
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full z-50 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        sidebar-glass
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            {!isCollapsed && (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold gradient-text-primary">
                  {t('app.title')}
                </span>
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-white hover:bg-white/20"
            >
              {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {/* Main Items */}
            <div className="space-y-1">
              {mainItems.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                    ${isActive(item.url) 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="badge-glass text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Link>
              ))}
            </div>

            {/* Showcase Items */}
            <div className="space-y-1">
              <div className={`
                flex items-center gap-3 px-3 py-2 text-white/50 text-sm font-medium
                ${!isCollapsed ? 'mb-2' : 'justify-center'}
              `}>
                {!isCollapsed && <span>{t('nav.showcase')}</span>}
              </div>
              {showcaseItems.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                    ${isActive(item.url) 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }
                    ${item.isChild ? 'ml-4' : ''}
                  `}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="badge-glass text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Link>
              ))}
            </div>

            {/* Other Items */}
            <div className="space-y-1">
              <div className={`
                flex items-center gap-3 px-3 py-2 text-white/50 text-sm font-medium
                ${!isCollapsed ? 'mb-2' : 'justify-center'}
              `}>
                {!isCollapsed && <span>{t('nav.mainMenu')}</span>}
              </div>
              {otherItems.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                    ${isActive(item.url) 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300' 
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <>
                      <span className="flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="badge-glass text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer Controls */}
          <div className="p-4 border-t border-white/10 space-y-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-full text-white/70 hover:bg-white/10 hover:text-white"
            >
              <Languages className="h-4 w-4 mr-2" />
              {!isCollapsed && <span>{language === 'tr' ? 'TR' : 'EN'}</span>}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full text-white/70 hover:bg-white/10 hover:text-white"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 mr-2" />
              ) : (
                <Moon className="h-4 w-4 mr-2" />
              )}
              {!isCollapsed && <span>{theme === 'dark' ? t('theme.light') : t('theme.dark')}</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Margin */}
      <div className={`${isCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300`} />
    </>
  );
}
