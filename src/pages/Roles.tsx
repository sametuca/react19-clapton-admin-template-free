import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Shield, 
  Users, 
  Edit,
  Eye,
  Settings,
  UserCheck,
  FileText,
  Database,
  Lock,
  Unlock,
  Plus,
  MoreHorizontal,
  Search,
  Filter,
  Crown,
  Briefcase,
  UserCog
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const roles = [
  { 
    id: 1, 
    name: "Super Admin", 
    description: "Sistem yöneticisi - tüm yetkilere sahip",
    userCount: 2,
    color: "from-red-500 to-pink-500",
    icon: Crown,
    level: "critical",
    perms: [
      { name: "Kullanıcı Yönetimi", icon: Users, type: "admin" },
      { name: "Rol Yönetimi", icon: Shield, type: "admin" },
      { name: "Sistem Ayarları", icon: Settings, type: "admin" },
      { name: "Veritabanı Erişimi", icon: Database, type: "admin" },
      { name: "Raporlar", icon: FileText, type: "admin" },
      { name: "Güvenlik Ayarları", icon: Lock, type: "admin" }
    ]
  },
  { 
    id: 2, 
    name: "Admin", 
    description: "Yönetici - çoğu yetkiye sahip",
    userCount: 3,
    color: "from-blue-500 to-purple-500",
    icon: Shield,
    level: "high",
    perms: [
      { name: "Kullanıcı Yönetimi", icon: Users, type: "admin" },
      { name: "İçerik Yönetimi", icon: Edit, type: "content" },
      { name: "Raporlar", icon: FileText, type: "view" },
      { name: "Ayarlar", icon: Settings, type: "admin" }
    ]
  },
  { 
    id: 3, 
    name: "Editör", 
    description: "İçerik editörü - yayın yetkileri",
    userCount: 5,
    color: "from-green-500 to-teal-500",
    icon: Edit,
    level: "medium",
    perms: [
      { name: "İçerik Düzenleme", icon: Edit, type: "content" },
      { name: "İçerik Yayınlama", icon: Unlock, type: "content" },
      { name: "Yorum Yönetimi", icon: UserCheck, type: "moderate" },
      { name: "Medya Yönetimi", icon: FileText, type: "content" }
    ]
  },
  { 
    id: 4, 
    name: "Moderatör", 
    description: "İçerik moderatörü - denetleme yetkileri",
    userCount: 8,
    color: "from-purple-500 to-indigo-500",
    icon: UserCog,
    level: "medium",
    perms: [
      { name: "Yorum Moderasyonu", icon: UserCheck, type: "moderate" },
      { name: "İçerik Denetimi", icon: Eye, type: "view" },
      { name: "Kullanıcı Raporları", icon: FileText, type: "view" }
    ]
  },
  { 
    id: 5, 
    name: "Yazar", 
    description: "İçerik yazarı - yaratım yetkileri",
    userCount: 12,
    color: "from-yellow-500 to-orange-500",
    icon: Briefcase,
    level: "low",
    perms: [
      { name: "Makale Yazma", icon: Edit, type: "content" },
      { name: "Taslak Kaydetme", icon: FileText, type: "content" },
      { name: "Profil Yönetimi", icon: UserCog, type: "user" }
    ]
  },
  { 
    id: 6, 
    name: "Üye", 
    description: "Standart kullanıcı - temel yetkilere sahip",
    userCount: 156,
    color: "from-gray-500 to-slate-500",
    icon: Users,
    level: "basic",
    perms: [
      { name: "Profil Görüntüleme", icon: Eye, type: "user" },
      { name: "İçerik Okuma", icon: FileText, type: "view" },
      { name: "Yorum Yazma", icon: Edit, type: "user" }
    ]
  }
];

const getPermissionBadge = (perm: any) => {
  const typeStyles = {
    admin: "bg-red-100 text-red-800 border-red-200",
    content: "bg-blue-100 text-blue-800 border-blue-200",
    moderate: "bg-purple-100 text-purple-800 border-purple-200",
    view: "bg-green-100 text-green-800 border-green-200",
    user: "bg-gray-100 text-gray-800 border-gray-200"
  };

  return (
    <Badge 
      variant="outline" 
      className={`${typeStyles[perm.type as keyof typeof typeStyles]} flex items-center gap-1 text-xs`}
    >
      <perm.icon className="w-3 h-3" />
      {perm.name}
    </Badge>
  );
};

const getLevelBadge = (level: string) => {
  switch (level) {
    case "critical":
      return <Badge className="bg-red-500 hover:bg-red-600">Kritik</Badge>;
    case "high":
      return <Badge className="bg-orange-500 hover:bg-orange-600">Yüksek</Badge>;
    case "medium":
      return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Orta</Badge>;
    case "low":
      return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Düşük</Badge>;
    case "basic":
      return <Badge variant="outline">Temel</Badge>;
    default:
      return <Badge variant="outline">{level}</Badge>;
  }
};

export default function RolesPage() {
  const { t } = useLanguage();
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const totalUsers = roles.reduce((sum, role) => sum + role.userCount, 0);
  const totalPermissions = roles.reduce((sum, role) => sum + role.perms.length, 0);

  const stats = [
    { label: "Toplam Rol", value: roles.length, icon: Shield, color: "text-blue-600" },
    { label: "Toplam Kullanıcı", value: totalUsers, icon: Users, color: "text-green-600" },
    { label: "Toplam Yetki", value: totalPermissions, icon: Lock, color: "text-purple-600" },
    { label: "Aktif Roller", value: roles.filter(r => r.userCount > 0).length, icon: UserCheck, color: "text-orange-600" },
  ];

  return (
    <div className="space-y-6">
      <Helmet>
        <title>{t('roles.pageTitle')} | React19 Admin</title>
        <meta name="description" content={t('roles.metaDescription')} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {t('roles.title')}
          </h1>
          <p className="text-muted-foreground mt-1">{t('roles.subtitle')}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtrele
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Rol Ekle
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
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

      {/* Search Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Rol ara..." 
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {roles.map((role) => (
          <Card key={role.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
            {/* Gradient Header */}
            <div className={`h-2 bg-gradient-to-r ${role.color}`} />
            
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${role.color} shadow-lg`}>
                    <role.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      {role.name}
                      {getLevelBadge(role.level)}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {role.description}
                    </CardDescription>
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
                      <Users className="h-4 w-4 mr-2" />
                      Kullanıcıları Görüntüle
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      Rolü Sil
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* User Count */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Kullanıcı Sayısı</span>
                </div>
                <Badge variant="secondary" className="font-bold">
                  {role.userCount}
                </Badge>
              </div>

              {/* Permissions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-gray-700">Yetkiler</h4>
                  <Badge variant="outline" className="text-xs">
                    {role.perms.length} yetki
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.perms.map((perm) => (
                    <div key={perm.name}>
                      {getPermissionBadge(perm)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  Detay
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Düzenle
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
