import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NotificationBell } from "@/components/ui/notification-bell";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon, Monitor, Globe } from "lucide-react";

export default function AppLayout() {
  const { theme, setTheme } = useTheme();
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

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLanguage: 'tr' | 'en') => {
    setLanguage(newLanguage);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'system':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const { t } = useLanguage();

  return (
    <SidebarProvider>
      <Helmet>
        <title>React19 Admin – Modern React Admin Template</title>
        <meta name="description" content="Modern React admin template with dashboard, tables, forms and user management." />
      </Helmet>

      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-50 h-14 flex items-center gap-3 px-4 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger />
            <div className="flex items-center gap-2 font-semibold">
              <span className="hidden sm:inline">React19 Admin</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
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
                
                <Select value={theme} onValueChange={handleThemeChange}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light" className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      {t('theme.light')}
                    </SelectItem>
                    <SelectItem value="dark" className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      {t('theme.dark')}
                    </SelectItem>
                    <SelectItem value="system" className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      {t('theme.system')}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="hidden md:flex items-center">
                <Input placeholder={t('search.placeholder')} className="w-64" />
              </div>
              
              <NotificationBell 
                notifications={notifications}
                onMarkAsRead={(id) => console.log('Mark as read:', id)}
                onMarkAllAsRead={() => console.log('Mark all as read')}
                onRemove={(id) => console.log('Remove:', id)}
              />
              
              <Avatar>
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
