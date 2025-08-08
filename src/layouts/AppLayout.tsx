import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export default function AppLayout() {
  useEffect(() => {
    toast({
      title: "Aurora Admin",
      description: "Hoş geldin! Şablonu keşfetmeye başla.",
    });
  }, []);

  return (
    <SidebarProvider collapsedWidth={56}>
      <Helmet>
        <title>Aurora Admin – Modern React Admin Template</title>
        <meta name="description" content="Modern React admin template with dashboard, tables, forms and user management." />
      </Helmet>

      <div className="min-h-screen flex w-full">
        <AppSidebar />

        <div className="flex-1 flex min-h-screen flex-col">
          <header className="h-14 flex items-center gap-3 px-4 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-2 font-semibold">
              <span className="hidden sm:inline">Aurora Admin</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
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
