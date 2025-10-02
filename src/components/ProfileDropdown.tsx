import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  LogOut, 
  Crown,
  Star,
  Activity,
  CreditCard,
  HelpCircle,
  Moon,
  Sun,
  Globe,
  Palette
} from "lucide-react";

interface ProfileDropdownProps {
  className?: string;
}

export function ProfileDropdown({ className }: ProfileDropdownProps) {
  const navigate = useNavigate();
  const [user] = useState({
    name: "Ahmet Yılmaz",
    email: "ahmet@company.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    role: "Senior Developer",
    isPremium: true,
    reputation: 4.8,
    unreadNotifications: 3
  });

  const handleLogout = () => {
    // Logout logic here
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          {user.unreadNotifications > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {user.unreadNotifications}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-3 p-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  {user.isPremium && (
                    <Badge variant="secondary" className="h-5 px-2 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </div>
                <p className="text-xs leading-none text-muted-foreground mt-1">
                  {user.email}
                </p>
                <p className="text-xs leading-none text-muted-foreground mt-1">
                  {user.role}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="font-medium">{user.reputation}</span>
                <span className="text-muted-foreground">Reputasyon</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity className="h-3 w-3 text-green-500" />
                <span className="text-green-600 font-medium">Aktif</span>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            <span>Profil</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            <span>Ayarlar</span>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem asChild>
          <Link to="/notifications" className="flex items-center gap-2 cursor-pointer">
            <Bell className="h-4 w-4" />
            <div className="flex items-center justify-between flex-1">
              <span>Bildirimler</span>
              {user.unreadNotifications > 0 && (
                <Badge variant="destructive" className="h-4 w-4 p-0 flex items-center justify-center text-xs">
                  {user.unreadNotifications}
                </Badge>
              )}
            </div>
          </Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <Shield className="h-4 w-4 mr-2" />
          <span>Güvenlik</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem>
          <CreditCard className="h-4 w-4 mr-2" />
          <span>Faturalandırma</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          <HelpCircle className="h-4 w-4 mr-2" />
          <span>Yardım & Destek</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600">
          <LogOut className="h-4 w-4 mr-2" />
          <span>Çıkış Yap</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}