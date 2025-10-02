import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Info, 
  Bell, 
  Mail,
  MessageSquare,
  Star,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Send,
  Reply,
  Forward,
  Archive,
  Trash2,
  Flag,
  Bookmark,
  Share2,
  Download,
  Upload,
  Save,
  Edit,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  Zap,
  Target,
  Award,
  Crown,
  Sparkles,
  Rocket,
  Globe,
  Users,
  User,
  Settings,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Building,
  Camera,
  Video,
  Music,
  Image,
  FileText,
  Code,
  Database,
  Palette,
  Layers,
  Monitor,
  Smartphone,
  Tablet,
  Headphones,
  Coffee,
  Gift,
  Trophy,
  Medal,
  Diamond,
  Gem,
  Flame,
  Droplets,
  Wind,
  Mountain,
  Sun,
  Moon,
  Atom,
  Waves,
  Loader2,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero
} from "lucide-react";

export default function FeedbackComponents() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Yeni mesaj", message: "Ahmet Yılmaz size bir mesaj gönderdi", time: "2 dk önce", read: false, type: "info" },
    { id: 2, title: "Sistem güncellemesi", message: "Sistem başarıyla güncellendi", time: "1 saat önce", read: false, type: "success" },
    { id: 3, title: "Güvenlik uyarısı", message: "Şifrenizi güncellemeniz öneriliyor", time: "3 saat önce", read: true, type: "warning" }
  ]);

  const showToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: { title: "Başarılı!", description: "İşlem başarıyla tamamlandı." },
      error: { title: "Hata!", description: "Bir hata oluştu. Lütfen tekrar deneyin.", variant: "destructive" as const },
      warning: { title: "Uyarı!", description: "Bu işlem geri alınamaz." },
      info: { title: "Bilgi", description: "Yeni güncelleme mevcut." }
    };
    
    toast(messages[type]);
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const AlertExamples = () => (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Bilgi</AlertTitle>
        <AlertDescription>
          Bu bir bilgi mesajıdır. Kullanıcıya önemli bilgi vermek için kullanılır.
        </AlertDescription>
      </Alert>

      <Alert className="border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Başarılı</AlertTitle>
        <AlertDescription>
          İşlem başarıyla tamamlandı. Verileriniz güvenli şekilde kaydedildi.
        </AlertDescription>
      </Alert>

      <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Uyarı</AlertTitle>
        <AlertDescription>
          Bu işlem geri alınamaz. Devam etmek istediğinizden emin misiniz?
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Hata</AlertTitle>
        <AlertDescription>
          Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya destek ekibiyle iletişime geçin.
        </AlertDescription>
      </Alert>
    </div>
  );

  const ToastExamples = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Button onClick={() => showToast('success')} className="flex-col h-20 gap-2">
        <CheckCircle className="h-5 w-5" />
        <span className="text-xs">Başarılı</span>
      </Button>
      <Button onClick={() => showToast('error')} variant="destructive" className="flex-col h-20 gap-2">
        <XCircle className="h-5 w-5" />
        <span className="text-xs">Hata</span>
      </Button>
      <Button onClick={() => showToast('warning')} variant="outline" className="flex-col h-20 gap-2">
        <AlertTriangle className="h-5 w-5" />
        <span className="text-xs">Uyarı</span>
      </Button>
      <Button onClick={() => showToast('info')} variant="secondary" className="flex-col h-20 gap-2">
        <Info className="h-5 w-5" />
        <span className="text-xs">Bilgi</span>
      </Button>
    </div>
  );

  const LoadingStates = () => (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Buton Yükleme</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={simulateLoading} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Yükleniyor...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Gönder
              </>
            )}
          </Button>
          
          <Button variant="outline" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                İşleniyor...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Kaydet
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>İlerleme Çubuğu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Yükleme İlerlemesi</span>
              <span>{uploadProgress}%</span>
            </div>
            <Progress value={uploadProgress} className="h-3" />
          </div>
          
          <Button onClick={simulateUpload} variant="outline" className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Yüklemeyi Başlat
          </Button>
          
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Dosya yükleniyor...
            </div>
          )}
          
          {uploadProgress === 100 && (
            <div className="flex items-center gap-2 text-sm text-green-600">
              <CheckCircle className="h-4 w-4" />
              Yükleme tamamlandı!
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skeleton Yükleme</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ModalExamples = () => (
    <div className="grid gap-4 md:grid-cols-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="h-20 flex-col gap-2">
            <MessageSquare className="h-6 w-6" />
            <span className="text-sm">Bilgi Modal</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Bilgi
            </DialogTitle>
            <DialogDescription>
              Bu bir bilgi modalıdır. Kullanıcıya detaylı bilgi vermek için kullanılır.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Modal içeriği buraya gelir. Formlar, tablolar veya diğer komponentler eklenebilir.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline">İptal</Button>
            <Button>Tamam</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="h-20 flex-col gap-2">
            <AlertTriangle className="h-6 w-6" />
            <span className="text-sm">Onay Modal</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Emin misiniz?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Bu işlem geri alınamaz. Seçili öğeler kalıcı olarak silinecektir.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700">
              Evet, Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="h-20 flex-col gap-2">
            <User className="h-6 w-6" />
            <span className="text-sm">Form Modal</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Kullanıcı Ekle</DialogTitle>
            <DialogDescription>
              Yeni kullanıcı bilgilerini girin.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Ad Soyad</label>
              <input className="w-full px-3 py-2 border rounded-lg" placeholder="Kullanıcı adı" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">E-posta</label>
              <input className="w-full px-3 py-2 border rounded-lg" type="email" placeholder="email@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Rol</label>
              <select className="w-full px-3 py-2 border rounded-lg">
                <option>Admin</option>
                <option>Editör</option>
                <option>Kullanıcı</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline">İptal</Button>
            <Button>Kullanıcı Ekle</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );

  const NotificationCenter = () => {
    const markAsRead = (id: number) => {
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    };

    const removeNotification = (id: number) => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    };

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Bildirim Merkezi
            </CardTitle>
            <Badge variant="destructive" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
              {notifications.filter(n => !n.read).length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border transition-all duration-200 ${
                  notification.read 
                    ? 'bg-muted/30 border-border/50' 
                    : 'bg-primary/5 border-primary/20 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notification.read ? 'bg-muted-foreground' : 'bg-primary animate-pulse'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-medium text-sm ${
                          notification.read ? 'text-muted-foreground' : 'text-foreground'
                        }`}>
                          {notification.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          {notification.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => markAsRead(notification.id)}
                            className="h-6 w-6 p-0"
                          >
                            <CheckCircle className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeNotification(notification.id)}
                          className="h-6 w-6 p-0"
                        >
                          <XCircle className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {notifications.length === 0 && (
            <div className="text-center py-8">
              <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Bildirim bulunamadı</p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const RatingAndReviews = () => {
    const [userRating, setUserRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Değerlendirme ve Yorumlar
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Ürünü Değerlendirin</h3>
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setUserRating(star)}
                    className={`p-1 transition-colors ${
                      star <= (hoveredRating || userRating) 
                        ? 'text-yellow-500' 
                        : 'text-muted-foreground hover:text-yellow-300'
                    }`}
                  >
                    <Star className={`h-8 w-8 ${star <= (hoveredRating || userRating) ? 'fill-current' : ''}`} />
                  </button>
                ))}
              </div>
              {userRating > 0 && (
                <p className="text-sm text-muted-foreground">
                  {userRating} yıldız verdiniz
                </p>
              )}
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Son Yorumlar</h4>
              {[
                { user: "Ahmet Y.", rating: 5, comment: "Mükemmel ürün, çok memnunum!", time: "2 gün önce" },
                { user: "Zeynep K.", rating: 4, comment: "Kaliteli ve hızlı kargo.", time: "1 hafta önce" },
                { user: "Mehmet D.", rating: 5, comment: "Tavsiye ederim, harika!", time: "2 hafta önce" }
              ].map((review, index) => (
                <div key={index} className="p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{review.user}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${
                              i < review.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Faydalı
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 px-2">
                      <Reply className="h-3 w-3 mr-1" />
                      Yanıtla
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Helmet>
        <title>Geri Bildirim Komponentleri - React19 Admin</title>
        <meta name="description" content="Kullanıcı geri bildirimi ve etkileşim komponentleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Geri Bildirim Komponentleri
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kullanıcı etkileşimi ve geri bildirim için tasarlanmış modern komponentler
          </p>
        </div>

        {/* Alert Messages */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Uyarı Mesajları</h2>
            <Badge variant="secondary">Alert</Badge>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Farklı Uyarı Türleri</CardTitle>
            </CardHeader>
            <CardContent>
              <AlertExamples />
            </CardContent>
          </Card>
        </section>

        {/* Toast Notifications */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Toast Bildirimleri</h2>
            <Badge variant="default">Interactive</Badge>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Toast Örnekleri</CardTitle>
            </CardHeader>
            <CardContent>
              <ToastExamples />
            </CardContent>
          </Card>
        </section>

        {/* Loading States */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Yükleme Durumları</h2>
            <Badge variant="outline">Loading</Badge>
          </div>
          <LoadingStates />
        </section>

        {/* Modal Examples */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Modal ve Dialog</h2>
            <Badge variant="secondary">Dialog</Badge>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Modal Örnekleri</CardTitle>
            </CardHeader>
            <CardContent>
              <ModalExamples />
            </CardContent>
          </Card>
        </section>

        {/* Notification Center */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Bildirim Merkezi</h2>
            <Badge variant="default">Live</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <NotificationCenter />
            <RatingAndReviews />
          </div>
        </section>

        {/* Feedback Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Geri Bildirim Özellikleri</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Gerçek Zamanlı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Anlık bildirimler ve canlı güncellemeler
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  Hedefli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Kullanıcı davranışına göre özelleştirilmiş
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-500" />
                  Çok Dilli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Tüm mesajlar için dil desteği
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  Güvenli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  XSS koruması ve güvenli içerik
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}