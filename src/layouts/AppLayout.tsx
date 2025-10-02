import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NotificationBell } from "@/components/ui/notification-bell";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { Toaster } from "sonner";
import { ThemeSelector } from "@/components/ThemeSelector";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import { Globe } from "lucide-react";
import { useLayoutSettings } from "@/contexts/LayoutContext";
import { ThemeCustomizer } from "@/components/ThemeCustomizer";
import { TopNav } from "@/components/TopNav";

export default function AppLayout() {
  const { language, setLanguage } = useLanguage();

  const notifications = [
    {
      id: "1",
      title: "Yeni kullanıcı kaydı",
      message: "Ahmet Yılmaz sisteme kayıt oldu",
      time: "2 dakika önce",
      read: false,
      type: "info" as const
    },
    {
      id: "2",
      title: "Sistem güncellemesi",
      message: "v1.2.0 sürümü başarıyla yüklendi",
      time: "1 saat önce",
      read: false,
      type: "success" as const
    },
    {
      id: "3",
      title: "Güvenlik uyarısı",
      message: "Şifrenizi güncellemeniz öneriliyor",
      time: "3 saat önce",
      read: true,
      type: "warning" as const
    }
  ];
  useEffect(() => {
    toast({
      title: "React19 Admin",
      description: "Hoş geldin! Şablonu keşfetmeye başla.",
    });
  }, []);

  const handleLanguageChange = (newLanguage: 'tr' | 'en') => {
    setLanguage(newLanguage);
  };

  const { t } = useLanguage();

  const { layoutWidth, layoutPosition, topbarTone, layoutType } = useLayoutSettings();
  const isSemiBox = layoutType === 'semi-box';
  const isBoxed = layoutWidth === 'boxed' || isSemiBox;

  return (
    <SidebarProvider>
      <Helmet>
        <title>React19 Admin – Modern React Admin Template</title>
        <meta name="description" content="Modern React admin template with dashboard, tables, forms and user management." />
      </Helmet>

      {layoutType !== 'horizontal' && <AppSidebar />}
      <SidebarInset>
        <header className={`${layoutPosition === 'fixed' ? 'sticky top-0' : 'relative'} z-50 h-14 flex items-center gap-2 sm:gap-3 px-2 sm:px-4 border-b ${topbarTone === 'light' ? 'bg-card text-foreground' : 'bg-background/80'} backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
          {layoutType !== 'horizontal' && <SidebarTrigger />}
          <div className="flex items-center gap-2 font-semibold">
            <span className="hidden sm:inline text-sm sm:text-base">React19 Admin</span>
          </div>
          <div className="ml-auto flex items-center gap-1 sm:gap-3">
            {/* Mobile: Show only essential items */}
            <div className="flex md:hidden items-center gap-1">
              <ThemeCustomizer />

              <NotificationBell 
                notifications={notifications}
                onMarkAsRead={(id) => console.log('Mark as read:', id)}
                onMarkAllAsRead={() => console.log('Mark all as read')}
                onRemove={(id) => console.log('Remove:', id)}
              />
              <ProfileDropdown />
            </div>

            {/* Desktop: Show all items */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Select value={language} onValueChange={handleLanguageChange}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tr" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      TR
                    </SelectItem>
                    <SelectItem value="en" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      EN
                    </SelectItem>
                  </SelectContent>
                </Select>
                <ThemeSelector />
              </div>
              
              <div className="flex items-center">
                <Input placeholder={t('search.placeholder')} className="w-64" />
              </div>
              
              <ThemeCustomizer />
              
              <NotificationBell 
                notifications={notifications}
                onMarkAsRead={(id) => console.log('Mark as read:', id)}
                onMarkAllAsRead={() => console.log('Mark all as read')}
                onRemove={(id) => console.log('Remove:', id)}
              />
              
              <ProfileDropdown />
            </div>
          </div>
        </header>
        {layoutType === 'horizontal' && <TopNav />}
        {layoutType === 'two-column' ? (
          <div className={`flex-1 p-2 sm:p-4 md:p-6 ${isBoxed ? 'max-w-[1200px] mx-auto' : ''}`}>
            <div className={`grid gap-4 lg:grid-cols-[1fr_320px] ${isSemiBox ? 'rounded-xl border bg-card p-4 shadow-sm' : ''}`}>
              <main>
                <Outlet />
              </main>
              <aside className="hidden lg:block space-y-4">
                {/* Simple secondary column with sample cards */}
                <div className="border rounded-lg p-4 bg-background/50">
                  <div className="font-semibold mb-2">Quick Actions</div>
                  <div className="grid gap-2 text-sm">
                    <button className="text-left hover:underline">Create Task</button>
                    <button className="text-left hover:underline">Invite Member</button>
                    <button className="text-left hover:underline">View Reports</button>
                  </div>
                </div>
                <div className="border rounded-lg p-4 bg-background/50">
                  <div className="font-semibold mb-2">Shortcuts</div>
                  <p className="text-sm text-muted-foreground">Customize this panel for your app.</p>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <main className={`flex-1 p-2 sm:p-4 md:p-6 ${isBoxed ? 'max-w-[1200px] mx-auto' : ''} ${isSemiBox ? 'rounded-xl border bg-card shadow-sm' : ''}`}>
            <Outlet />
          </main>
        )}
      </SidebarInset>
      <Toaster position="top-right" />
    </SidebarProvider>
  );
}
