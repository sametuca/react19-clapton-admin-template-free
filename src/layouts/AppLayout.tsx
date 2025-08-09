import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sun, Moon, Monitor, Globe } from "lucide-react";

export default function AppLayout() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    toast({
      title: "CodeMaze Admin",
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

  return (
    <SidebarProvider>
      <Helmet>
        <title>CodeMaze Admin – Modern React Admin Template</title>
        <meta name="description" content="Modern React admin template with dashboard, tables, forms and user management." />
      </Helmet>

      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex min-h-screen flex-col">
          <header className="h-14 flex items-center gap-3 px-4 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-2 font-semibold">
              <span className="hidden sm:inline">CodeMaze Admin</span>
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
                      Açık
                    </SelectItem>
                    <SelectItem value="dark" className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      Koyu
                    </SelectItem>
                    <SelectItem value="system" className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Sistem
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="hidden md:flex items-center">
                <Input placeholder="Ara..." className="w-64" />
              </div>
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
