import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Zap,
  Sun,
  Moon,
  Monitor,
  Globe,
  Clock,
  Save
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/hooks/useLanguage";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLanguage: 'tr' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <Helmet>
        <title>Ayarlar - React19 Admin</title>
        <meta name="description" content="Uygulama ayarlarını yönetin" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ayarlar</h1>
          <p className="text-muted-foreground">
            Uygulama ayarlarınızı ve tercihlerinizi yönetin
          </p>
        </div>

        <Tabs defaultValue="genel" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="genel" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              {t('settings.general')}
            </TabsTrigger>
            <TabsTrigger value="profil" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {t('settings.profile')}
            </TabsTrigger>
            <TabsTrigger value="bildirimler" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              {t('settings.notifications')}
            </TabsTrigger>
            <TabsTrigger value="güvenlik" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              {t('settings.security')}
            </TabsTrigger>
            <TabsTrigger value="görünüm" className="flex items-center gap-2">
              <Palette className="h-4 w-4" />
              {t('settings.appearance')}
            </TabsTrigger>
            <TabsTrigger value="gelişmiş" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              {t('settings.advanced')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="genel" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="h-5 w-5" />
                  Genel Ayarlar
                </CardTitle>
                <CardDescription>
                  Uygulama genel ayarlarını yapılandırın
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="appName">{t('settings.appName')}</Label>
                    <Input id="appName" defaultValue="React19 Admin" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">{t('settings.language')}</Label>
                    <Select value={language} onValueChange={handleLanguageChange}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tr" className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Türkçe
                        </SelectItem>
                        <SelectItem value="en" className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          English
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">{t('settings.timezone')}</Label>
                    <Select defaultValue="utc+3">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc+3" className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          UTC+3 (İstanbul)
                        </SelectItem>
                        <SelectItem value="utc+0" className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          UTC+0 (Londra)
                        </SelectItem>
                        <SelectItem value="utc-5" className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          UTC-5 (New York)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Tarih Formatı</Label>
                    <Select defaultValue="dd/mm/yyyy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Otomatik Güncelleme</Label>
                    <p className="text-sm text-muted-foreground">
                      Uygulama güncellemelerini otomatik olarak kontrol et
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Hata Raporlama</Label>
                    <p className="text-sm text-muted-foreground">
                      Hata raporlarını geliştirici ekibine gönder
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Kullanım İstatistikleri</Label>
                    <p className="text-sm text-muted-foreground">
                      Anonim kullanım verilerini topla
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profil" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profil Ayarları
                </CardTitle>
                <CardDescription>
                  Kişisel bilgilerinizi ve hesap ayarlarınızı güncelleyin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ad</Label>
                    <Input id="firstName" defaultValue="Ahmet" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input id="lastName" defaultValue="Yılmaz" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" type="email" defaultValue="ahmet@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" defaultValue="+90 555 123 45 67" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Şirket</Label>
                    <Input id="company" defaultValue="TechCorp" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Pozisyon</Label>
                    <Input id="position" defaultValue="Senior Developer" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Hakkında</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Kendiniz hakkında kısa bir açıklama yazın..."
                    defaultValue="Deneyimli yazılım geliştirici, modern web teknolojileri konusunda uzman."
                    rows={3}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Profil Görünürlüğü</Label>
                    <p className="text-sm text-muted-foreground">
                      Profilinizi diğer kullanıcılar görebilsin
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bildirimler" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Bildirim Ayarları
                </CardTitle>
                <CardDescription>
                  Bildirim tercihlerinizi ve kanallarınızı yapılandırın
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">E-posta Bildirimleri</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Günlük Özet</Label>
                        <p className="text-sm text-muted-foreground">
                          Günlük aktivite özeti e-postası al
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Güvenlik Uyarıları</Label>
                        <p className="text-sm text-muted-foreground">
                          Güvenlik ile ilgili önemli bildirimler
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Promosyonlar</Label>
                        <p className="text-sm text-muted-foreground">
                          Özel teklifler ve promosyonlar
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Push Bildirimleri</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Masaüstü Bildirimleri</Label>
                        <p className="text-sm text-muted-foreground">
                          Tarayıcı push bildirimleri
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Ses Bildirimleri</Label>
                        <p className="text-sm text-muted-foreground">
                          Bildirim sesleri çal
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Bildirim Zamanlaması</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Başlangıç Saati</Label>
                      <Select defaultValue="09:00">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Bitiş Saati</Label>
                      <Select defaultValue="18:00">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="19:00">19:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="güvenlik" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Güvenlik Ayarları
                </CardTitle>
                <CardDescription>
                  Hesap güvenliğinizi ve kimlik doğrulama ayarlarınızı yönetin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Kimlik Doğrulama</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>İki Faktörlü Kimlik Doğrulama (2FA)</Label>
                        <p className="text-sm text-muted-foreground">
                          Ek güvenlik için 2FA kullan
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Biometrik Giriş</Label>
                        <p className="text-sm text-muted-foreground">
                          Parmak izi veya yüz tanıma ile giriş
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Oturum Yönetimi</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Otomatik Çıkış</Label>
                        <p className="text-sm text-muted-foreground">
                          Belirli süre sonra otomatik çıkış yap
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="space-y-2">
                      <Label>Oturum Süresi (dakika)</Label>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15</SelectItem>
                          <SelectItem value="30">30</SelectItem>
                          <SelectItem value="60">60</SelectItem>
                          <SelectItem value="120">120</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Giriş Geçmişi</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Chrome - Windows</p>
                        <p className="text-xs text-muted-foreground">192.168.1.100 • 2 saat önce</p>
                      </div>
                      <Badge variant="secondary">Aktif</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Safari - iPhone</p>
                        <p className="text-xs text-muted-foreground">192.168.1.101 • 1 gün önce</p>
                      </div>
                      <Badge variant="outline">Sonlandırıldı</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Tüm Oturumları Sonlandır
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="görünüm" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Görünüm Ayarları
                </CardTitle>
                <CardDescription>
                  Uygulama görünümünü ve tema tercihlerinizi özelleştirin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('settings.theme')}</Label>
                      <p className="text-sm text-muted-foreground">Uygulama temasını seçin</p>
                    </div>
                    <ThemeSelector />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('settings.colorScheme')}</Label>
                      <p className="text-sm text-muted-foreground">Ana renk teması</p>
                    </div>
                    <Select defaultValue="blue">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blue">{t('settings.blue')}</SelectItem>
                        <SelectItem value="green">{t('settings.green')}</SelectItem>
                        <SelectItem value="purple">{t('settings.purple')}</SelectItem>
                        <SelectItem value="red">{t('settings.red')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{t('settings.fontSize')}</Label>
                      <p className="text-sm text-muted-foreground">Metin boyutunu ayarlayın</p>
                    </div>
                    <Select defaultValue="medium">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">{t('settings.small')}</SelectItem>
                        <SelectItem value="medium">{t('settings.medium')}</SelectItem>
                        <SelectItem value="large">{t('settings.large')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Görünüm Seçenekleri</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Animasyonlar</Label>
                        <p className="text-sm text-muted-foreground">
                          Sayfa geçiş animasyonlarını göster
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Gölgeler</Label>
                        <p className="text-sm text-muted-foreground">
                          Kart ve buton gölgelerini göster
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Yuvarlatılmış Köşeler</Label>
                        <p className="text-sm text-muted-foreground">
                          Kart ve buton köşelerini yuvarlat
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gelişmiş" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Gelişmiş Ayarlar
                </CardTitle>
                <CardDescription>
                  Gelişmiş yapılandırma seçenekleri ve geliştirici araçları
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Geliştirici Araçları</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Debug Modu</Label>
                        <p className="text-sm text-muted-foreground">
                          Geliştirici debug bilgilerini göster
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Performans İzleme</Label>
                        <p className="text-sm text-muted-foreground">
                          Sayfa performans metriklerini izle
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>API Logları</Label>
                        <p className="text-sm text-muted-foreground">
                          API çağrı loglarını kaydet
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Veri Yönetimi</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Önbellek Temizleme</Label>
                      <p className="text-sm text-muted-foreground">
                        Uygulama önbelleğini temizleyin
                      </p>
                      <Button variant="outline" size="sm">
                        Önbelleği Temizle
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Label>Veri Dışa Aktarma</Label>
                      <p className="text-sm text-muted-foreground">
                        Kullanıcı verilerinizi dışa aktarın
                      </p>
                      <Button variant="outline" size="sm">
                        Verileri Dışa Aktar
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-medium">Sistem Bilgileri</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Uygulama Versiyonu:</span>
                        <span>1.0.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">React Versiyonu:</span>
                        <span>18.3.1</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Node Versiyonu:</span>
                        <span>18.17.0</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tarayıcı:</span>
                        <span>Chrome 120.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">İşletim Sistemi:</span>
                        <span>Windows 11</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ekran Çözünürlüğü:</span>
                        <span>1920x1080</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-3">
          <Button variant="outline">İptal</Button>
          <Button className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Değişiklikleri Kaydet
          </Button>
        </div>
      </div>
    </>
  );
} 
