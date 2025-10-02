import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Shield,
  Edit,
  MoreHorizontal,
  UserPlus,
  Search,
  Filter,
  Download
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const users = [
  { 
    id: 1, 
    name: "Ayşe Yılmaz", 
    email: "ayse@example.com", 
    role: "Admin",
    phone: "+90 555 123 4567",
    location: "İstanbul, Türkiye",
    joinDate: "2023-01-15",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    department: "Bilgi İşlem",
    lastLogin: "2 saat önce"
  },
  { 
    id: 2, 
    name: "Mehmet Demir", 
    email: "mehmet@example.com", 
    role: "Editör",
    phone: "+90 555 987 6543",
    location: "Ankara, Türkiye",
    joinDate: "2023-03-22",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    department: "İçerik Yönetimi",
    lastLogin: "1 gün önce"
  },
  { 
    id: 3, 
    name: "Elif Kaya", 
    email: "elif@example.com", 
    role: "Üye",
    phone: "+90 555 456 7890",
    location: "İzmir, Türkiye",
    joinDate: "2023-06-10",
    status: "inactive",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    department: "Satış",
    lastLogin: "1 hafta önce"
  },
  { 
    id: 4, 
    name: "Ali Özkan", 
    email: "ali@example.com", 
    role: "Moderatör",
    phone: "+90 555 321 6547",
    location: "Bursa, Türkiye",
    joinDate: "2023-04-05",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    department: "Müşteri Hizmetleri",
    lastLogin: "3 saat önce"
  },
  { 
    id: 5, 
    name: "Zeynep Arslan", 
    email: "zeynep@example.com", 
    role: "Editör",
    phone: "+90 555 789 1234",
    location: "Antalya, Türkiye",
    joinDate: "2023-02-18",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    department: "Pazarlama",
    lastLogin: "30 dakika önce"
  },
  { 
    id: 6, 
    name: "Burak Yıldız", 
    email: "burak@example.com", 
    role: "Üye",
    phone: "+90 555 654 3210",
    location: "Adana, Türkiye",
    joinDate: "2023-05-30",
    status: "pending",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    department: "İnsan Kaynakları",
    lastLogin: "Henüz giriş yapmadı"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">Aktif</Badge>;
    case "inactive":
      return <Badge variant="secondary" className="bg-gray-100 text-gray-800">İnaktif</Badge>;
    case "pending":
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Bekliyor</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getRoleBadge = (role: string) => {
  switch (role) {
    case "Admin":
      return <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-200"><Shield className="w-3 h-3 mr-1" />Admin</Badge>;
    case "Editör":
      return <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200"><Edit className="w-3 h-3 mr-1" />Editör</Badge>;
    case "Moderatör":
      return <Badge variant="secondary" className="bg-purple-100 text-purple-800"><Users className="w-3 h-3 mr-1" />Moderatör</Badge>;
    case "Üye":
      return <Badge variant="outline" className="bg-gray-50 text-gray-700">Üye</Badge>;
    default:
      return <Badge variant="outline">{role}</Badge>;
  }
};

export default function UsersPage() {
  const { t } = useLanguage();
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const stats = [
    { label: "Toplam Kullanıcı", value: users.length, icon: Users, color: "text-blue-600" },
    { label: "Aktif Kullanıcı", value: users.filter(u => u.status === "active").length, icon: Shield, color: "text-green-600" },
    { label: "Bekleyen", value: users.filter(u => u.status === "pending").length, icon: Calendar, color: "text-yellow-600" },
    { label: "İnaktif", value: users.filter(u => u.status === "inactive").length, icon: Users, color: "text-gray-600" },
  ];

  return (
    <div className="space-y-6">
      <Helmet>
        <title>{t('users.pageTitle')} | React19 Admin</title>
        <meta name="description" content={t('users.metaDescription')} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {t('users.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('users.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtrele
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Dışa Aktar
          </Button>
          <Button size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Kullanıcı Ekle
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition-shadow">
            <CardContent className="flex items-center p-6">
              <div className={`p-2 rounded-lg bg-opacity-10 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Kullanıcı ara..." 
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12 ring-2 ring-offset-2 ring-blue-500/20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{user.department}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Düzenle
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Mail className="h-4 w-4 mr-2" />
                      E-posta Gönder
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      Kullanıcıyı Sil
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                {getRoleBadge(user.role)}
                {getStatusBadge(user.status)}
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-2 text-blue-500" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2 text-green-500" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                  <span>Katılım: {user.joinDate}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  Son giriş: <span className="font-medium">{user.lastLogin}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
