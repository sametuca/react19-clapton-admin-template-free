import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Edit, 
  Save, 
  Camera, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Globe, 
  Building,
  Award,
  Clock,
  Activity,
  Star,
  Users,
  FileText,
  Settings
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "login",
    description: "Sisteme giriş yapıldı",
    time: "2 dakika önce",
    icon: Activity,
    color: "text-green-500"
  },
  {
    id: 2,
    type: "update",
    description: "Profil bilgileri güncellendi",
    time: "1 saat önce",
    icon: Edit,
    color: "text-blue-500"
  },
  {
    id: 3,
    type: "file",
    description: "Yeni rapor yüklendi",
    time: "3 saat önce",
    icon: FileText,
    color: "text-purple-500"
  },
  {
    id: 4,
    type: "user",
    description: "Yeni kullanıcı eklendi",
    time: "1 gün önce",
    icon: Users,
    color: "text-orange-500"
  }
];

const stats = [
  { label: "Toplam Giriş", value: "1,247", icon: Activity, color: "text-blue-500" },
  { label: "Son Giriş", value: "2 dk önce", icon: Clock, color: "text-green-500" },
  { label: "Aktif Oturum", value: "1", icon: Users, color: "text-purple-500" },
  { label: "Toplam İşlem", value: "89", icon: FileText, color: "text-orange-500" }
];

const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-blue-600" },
  { name: "Node.js", level: 80, color: "bg-green-500" },
  { name: "PostgreSQL", level: 75, color: "bg-blue-400" },
  { name: "Docker", level: 70, color: "bg-blue-700" },
  { name: "AWS", level: 65, color: "bg-orange-500" }
];

export default function Profile() {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <Helmet>
        <title>Profil | React19 Admin</title>
        <meta name="description" content="Kullanıcı profil bilgileri ve aktivite geçmişi." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Profil</h1>
        <p className="text-muted-foreground mt-1">Kişisel bilgiler ve hesap ayarları</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Sol Kolon - Profil Kartı */}
        <div className="xl:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" alt="Profil" />
                    <AvatarFallback className="text-2xl">AY</AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold">Samet UCA</h2>
                  <p className="text-muted-foreground">Senior Developer</p>
                  <Badge variant="secondary" className="mt-2">Aktif</Badge>
                </div>

                <div className="w-full space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>ahmet@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+90 555 123 45 67</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>İstanbul, Türkiye</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>React19 Tech</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Katılım: Ocak 2023</span>
                  </div>
                </div>

                <Separator className="w-full" />

                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Proje Tamamlanan</span>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Müşteri Memnuniyeti</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Takım Üyesi</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>

                <Button className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Profili Düzenle
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* İstatistikler */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">İstatistikler</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sağ Kolon - Ana İçerik */}
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="genel" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="genel">Genel</TabsTrigger>
              <TabsTrigger value="beceriler">Beceriler</TabsTrigger>
              <TabsTrigger value="aktivite">Aktivite</TabsTrigger>
              <TabsTrigger value="ayarlar">Ayarlar</TabsTrigger>
            </TabsList>

            <TabsContent value="genel" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kişisel Bilgiler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Ad</Label>
                      <Input id="first-name" defaultValue="Ahmet" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Soyad</Label>
                      <Input id="last-name" defaultValue="Yılmaz" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input id="email" type="email" defaultValue="ahmet@example.com" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" defaultValue="+90 555 123 45 67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Konum</Label>
                      <Input id="location" defaultValue="İstanbul, Türkiye" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Şirket</Label>
                    <Input id="company" defaultValue="React19 Tech" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Pozisyon</Label>
                    <Input id="position" defaultValue="Senior Developer" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Hakkımda</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Kendiniz hakkında kısa bir açıklama yazın..."
                      defaultValue="5+ yıl deneyimli full-stack developer. React, Node.js ve modern web teknolojilerinde uzman. Ekip çalışmasına önem veren, problem çözme odaklı bir geliştirici."
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Değişiklikleri Kaydet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="beceriler" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Teknik Beceriler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sertifikalar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-yellow-500" />
                        <div>
                          <p className="font-medium">AWS Certified Developer</p>
                          <p className="text-sm text-muted-foreground">Amazon Web Services • 2023</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Aktif</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-blue-500" />
                        <div>
                          <p className="font-medium">React Developer Certification</p>
                          <p className="text-sm text-muted-foreground">Meta • 2022</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Aktif</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aktivite" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Son Aktiviteler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <div className={`p-2 rounded-full bg-muted`}>
                          <activity.icon className={`h-4 w-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.description}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ayarlar" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Hesap Ayarları</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>İki Faktörlü Doğrulama</Label>
                        <p className="text-sm text-muted-foreground">Hesap güvenliğini artır</p>
                      </div>
                      <Button variant="outline" size="sm">Etkinleştir</Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Şifre Değiştir</Label>
                        <p className="text-sm text-muted-foreground">Son değişiklik: 45 gün önce</p>
                      </div>
                      <Button variant="outline" size="sm">Değiştir</Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>E-posta Doğrulama</Label>
                        <p className="text-sm text-muted-foreground">E-posta adresi doğrulandı</p>
                      </div>
                      <Badge variant="secondary">Doğrulandı</Badge>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium">Bildirim Tercihleri</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>E-posta bildirimleri</span>
                        <Button variant="outline" size="sm">Düzenle</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Push bildirimleri</span>
                        <Button variant="outline" size="sm">Düzenle</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 