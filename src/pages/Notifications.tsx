import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Check, 
  X, 
  Search, 
  Filter, 
  Trash2, 
  Settings, 
  Mail, 
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  Star,
  User,
  FileText,
  Database,
  Shield
} from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Giriş başarılı",
    message: "Sisteme başarıyla giriş yapıldı",
    time: "2 dakika önce",
    read: false,
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 2,
    type: "info",
    title: "Sistem güncellemesi",
    message: "Yeni sürüm v1.2.0 yayınlandı. Performans iyileştirmeleri eklendi.",
    time: "1 saat önce",
    read: false,
    icon: Info,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 3,
    type: "warning",
    title: "Güvenlik uyarısı",
    message: "Şifrenizi 30 günden fazla değiştirmediniz. Güvenlik için güncelleyin.",
    time: "3 saat önce",
    read: true,
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  {
    id: 4,
    type: "error",
    title: "Bağlantı hatası",
    message: "Veritabanı bağlantısında geçici bir sorun yaşandı. Tekrar deneyin.",
    time: "5 saat önce",
    read: true,
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: 5,
    type: "success",
    title: "Rapor tamamlandı",
    message: "Aylık performans raporu başarıyla oluşturuldu ve e-posta ile gönderildi.",
    time: "1 gün önce",
    read: true,
    icon: FileText,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 6,
    type: "info",
    title: "Yeni kullanıcı",
    message: "Samet UCA sisteme yeni kullanıcı olarak eklendi.",
    time: "2 gün önce",
    read: true,
    icon: User,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  }
];

const notificationTypes = [
  { type: "all", label: "Tümü", count: 6, icon: Bell },
  { type: "unread", label: "Okunmamış", count: 2, icon: Mail },
  { type: "success", label: "Başarılı", count: 2, icon: CheckCircle },
  { type: "warning", label: "Uyarı", count: 1, icon: AlertTriangle },
  { type: "error", label: "Hata", count: 1, icon: AlertTriangle },
  { type: "info", label: "Bilgi", count: 2, icon: Info }
];

export default function Notifications() {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <Helmet>
        <title>Bildirimler | CodeMaze Admin</title>
        <meta name="description" content="Sistem bildirimleri ve mesajlar." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Bildirimler</h1>
            <p className="text-muted-foreground mt-1">Sistem bildirimleri ve mesajlar</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrele
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Ayarlar
            </Button>
            <Button size="sm">
              <Check className="h-4 w-4 mr-2" />
              Tümünü Okundu İşaretle
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Sol Kolon - Bildirim Türleri */}
        <div className="xl:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bildirim Türleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {notificationTypes.map((item) => (
                  <div
                    key={item.type}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hızlı Eylemler</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Check className="h-4 w-4 mr-2" />
                Tümünü Okundu İşaretle
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Trash2 className="h-4 w-4 mr-2" />
                Okunmuşları Temizle
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Bildirim Ayarları
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sağ Kolon - Bildirim Listesi */}
        <div className="xl:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Bildirimler</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Bildirim ara..." className="pl-10 w-64" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border ${notification.bgColor} ${notification.borderColor} ${
                      !notification.read ? 'ring-2 ring-primary/20' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full ${notification.bgColor}`}>
                        <notification.icon className={`h-5 w-5 ${notification.color}`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm mb-1">{notification.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {notification.time}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 ml-4">
                            {!notification.read && (
                              <Badge variant="default" className="text-xs">
                                Yeni
                              </Badge>
                            )}
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {notifications.length === 0 && (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Bildirim bulunamadı</h3>
                  <p className="text-muted-foreground">Şu anda okunmamış bildiriminiz yok.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alt Bilgi Kartı */}
      <div className="mt-6">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Bell className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-1">Toplam Bildirim</h3>
                <p className="text-2xl font-bold text-blue-500">6</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Mail className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-semibold mb-1">Okunmamış</h3>
                <p className="text-2xl font-bold text-green-500">2</p>
              </div>
              
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-1">Son 24 Saat</h3>
                <p className="text-2xl font-bold text-orange-500">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 