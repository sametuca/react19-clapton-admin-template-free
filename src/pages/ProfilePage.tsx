import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Globe, 
  Calendar, 
  Edit, 
  Save, 
  Camera,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Settings,
  Activity,
  Award,
  Star,
  Clock,
  TrendingUp,
  BarChart3,
  FileText,
  Users,
  Heart,
  Share2,
  Download,
  Upload,
  Trash2,
  Plus,
  Check,
  X,
  AlertTriangle,
  Info,
  CheckCircle,
  Crown,
  Zap,
  Target,
  Rocket,
  Sparkles,
  Code,
  Database,
  Palette,
  Layers,
  Monitor,
  Smartphone,
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
  Waves
} from "lucide-react";

interface UserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  bio: string;
  avatar: string;
  coverImage: string;
  company: {
    name: string;
    position: string;
    department: string;
  };
  address: {
    street: string;
    city: string;
    country: string;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
  preferences: {
    theme: string;
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
    };
    privacy: {
      profileVisible: boolean;
      showEmail: boolean;
      showPhone: boolean;
    };
  };
  stats: {
    joinDate: string;
    lastLogin: string;
    totalLogins: number;
    projectsCompleted: number;
    tasksCompleted: number;
    reputation: number;
  };
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [profile, setProfile] = useState<UserProfile>({
    id: 1,
    name: "Ahmet Yılmaz",
    username: "ahmet.yilmaz",
    email: "ahmet@company.com",
    phone: "+90 532 123 4567",
    website: "https://ahmetyilmaz.dev",
    bio: "Senior Full Stack Developer with 8+ years of experience in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and mentoring junior developers.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=200&fit=crop",
    company: {
      name: "TechCorp Solutions",
      position: "Senior Developer",
      department: "Engineering"
    },
    address: {
      street: "Atatürk Cad. No: 123",
      city: "İstanbul",
      country: "Türkiye"
    },
    social: {
      twitter: "@ahmetyilmaz",
      linkedin: "ahmet-yilmaz-dev",
      github: "ahmetyilmaz"
    },
    preferences: {
      theme: "dark",
      language: "tr",
      notifications: {
        email: true,
        push: true,
        sms: false
      },
      privacy: {
        profileVisible: true,
        showEmail: true,
        showPhone: false
      }
    },
    stats: {
      joinDate: "2023-01-15",
      lastLogin: "2 saat önce",
      totalLogins: 1247,
      projectsCompleted: 24,
      tasksCompleted: 156,
      reputation: 4.8
    }
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
    { name: "PostgreSQL", level: 75, color: "bg-blue-400" },
    { name: "AWS", level: 70, color: "bg-orange-500" },
    { name: "Docker", level: 85, color: "bg-blue-700" },
    { name: "GraphQL", level: 65, color: "bg-pink-500" }
  ];

  const achievements = [
    {
      title: "Proje Lideri",
      description: "5+ büyük projeyi başarıyla tamamladı",
      icon: Trophy,
      color: "text-yellow-500",
      date: "2024-03-15"
    },
    {
      title: "Kod Kalitesi Uzmanı",
      description: "Code review'larda %98 onay oranı",
      icon: Award,
      color: "text-blue-500",
      date: "2024-02-20"
    },
    {
      title: "Mentor",
      description: "10+ junior developer'ı mentorladı",
      icon: Users,
      color: "text-green-500",
      date: "2024-01-10"
    },
    {
      title: "İnovasyon Ödülü",
      description: "Yenilikçi çözümler için ödül aldı",
      icon: Rocket,
      color: "text-purple-500",
      date: "2023-12-05"
    }
  ];

  const recentActivities = [
    {
      action: "Yeni proje oluşturdu",
      target: "E-commerce Dashboard",
      time: "2 saat önce",
      icon: Plus,
      color: "text-blue-500"
    },
    {
      action: "Code review tamamladı",
      target: "Authentication Module",
      time: "4 saat önce",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      action: "Dokümantasyon güncelledi",
      target: "API Documentation",
      time: "1 gün önce",
      icon: FileText,
      color: "text-purple-500"
    },
    {
      action: "Bug fix yaptı",
      target: "User Management",
      time: "2 gün önce",
      icon: Settings,
      color: "text-orange-500"
    }
  ];

  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    toast({
      title: "Profil Güncellendi!",
      description: "Profil bilgileriniz başarıyla kaydedildi.",
    });
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleAvatarChange = () => {
    toast({
      title: "Fotoğraf Güncellendi!",
      description: "Profil fotoğrafınız başarıyla değiştirildi.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Profil - {profile.name}</title>
        <meta name="description" content={`${profile.name} kullanıcısının profil sayfası`} />
      </Helmet>

      <div className="space-y-8">
        {/* Profile Header */}
        <Card className="relative overflow-hidden">
          {/* Cover Image */}
          <div 
            className="h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative"
            style={{
              backgroundImage: `url(${profile.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-4 right-4">
              <Button variant="secondary" size="sm" className="gap-2">
                <Camera className="h-4 w-4" />
                Kapak Fotoğrafını Değiştir
              </Button>
            </div>
          </div>

          {/* Profile Info */}
          <CardContent className="relative -mt-16 pb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative">
                <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                  <AvatarImage src={profile.avatar} alt={profile.name} />
                  <AvatarFallback className="text-2xl">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                  onClick={handleAvatarChange}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold">{profile.name}</h1>
                    <p className="text-lg text-muted-foreground">@{profile.username}</p>
                    <p className="text-muted-foreground">{profile.company.position} at {profile.company.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="gap-1">
                      <Star className="h-3 w-3" />
                      {profile.stats.reputation}
                    </Badge>
                    <Button
                      variant={isEditing ? "destructive" : "outline"}
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? (
                        <>
                          <X className="h-4 w-4 mr-2" />
                          İptal
                        </>
                      ) : (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Düzenle
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {profile.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {profile.phone}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profile.address.city}, {profile.address.country}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Katıldı: {new Date(profile.stats.joinDate).toLocaleDateString('tr-TR')}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{profile.stats.projectsCompleted}</div>
                    <div className="text-sm text-muted-foreground">Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{profile.stats.tasksCompleted}</div>
                    <div className="text-sm text-muted-foreground">Görev</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{profile.stats.totalLogins}</div>
                    <div className="text-sm text-muted-foreground">Giriş</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{profile.stats.reputation}</div>
                    <div className="text-sm text-muted-foreground">Puan</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="edit">Profili Düzenle</TabsTrigger>
            <TabsTrigger value="activity">Aktiviteler</TabsTrigger>
            <TabsTrigger value="settings">Ayarlar</TabsTrigger>
            <TabsTrigger value="security">Güvenlik</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Teknik Beceriler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Son Aktiviteler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                            <activity.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">
                              {activity.action} <span className="text-primary">{activity.target}</span>
                            </p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Başarılar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <div className={`p-2 rounded-lg bg-background ${achievement.color}`}>
                            <achievement.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{achievement.title}</h4>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(achievement.date).toLocaleDateString('tr-TR')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      İstatistikler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Toplam Giriş</span>
                        </div>
                        <span className="font-semibold">{profile.stats.totalLogins}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Son Giriş</span>
                        </div>
                        <span className="font-semibold">{profile.stats.lastLogin}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">Tamamlanan Görev</span>
                        </div>
                        <span className="font-semibold">{profile.stats.tasksCompleted}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">Reputasyon</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-semibold">{profile.stats.reputation}</span>
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Edit Profile Tab */}
          <TabsContent value="edit" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kişisel Bilgiler</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-name">Ad Soyad</Label>
                      <Input
                        id="edit-name"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-username">Kullanıcı Adı</Label>
                      <Input
                        id="edit-username"
                        value={editedProfile.username}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="edit-email">E-posta</Label>
                    <Input
                      id="edit-email"
                      type="email"
                      value={editedProfile.email}
                      onChange={(e) => setEditedProfile(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-phone">Telefon</Label>
                      <Input
                        id="edit-phone"
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="edit-website">Website</Label>
                      <Input
                        id="edit-website"
                        value={editedProfile.website}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, website: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="edit-bio">Hakkımda</Label>
                    <Textarea
                      id="edit-bio"
                      value={editedProfile.bio}
                      onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Şirket Bilgileri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-company">Şirket Adı</Label>
                    <Input
                      id="edit-company"
                      value={editedProfile.company.name}
                      onChange={(e) => setEditedProfile(prev => ({ 
                        ...prev, 
                        company: { ...prev.company, name: e.target.value }
                      }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="edit-position">Pozisyon</Label>
                    <Input
                      id="edit-position"
                      value={editedProfile.company.position}
                      onChange={(e) => setEditedProfile(prev => ({ 
                        ...prev, 
                        company: { ...prev.company, position: e.target.value }
                      }))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="edit-department">Departman</Label>
                    <Select 
                      value={editedProfile.company.department} 
                      onValueChange={(value) => setEditedProfile(prev => ({ 
                        ...prev, 
                        company: { ...prev.company, department: value }
                      }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Engineering">Mühendislik</SelectItem>
                        <SelectItem value="Design">Tasarım</SelectItem>
                        <SelectItem value="Product">Ürün</SelectItem>
                        <SelectItem value="Marketing">Pazarlama</SelectItem>
                        <SelectItem value="Sales">Satış</SelectItem>
                        <SelectItem value="HR">İnsan Kaynakları</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-medium">Adres Bilgileri</h4>
                    <div className="space-y-2">
                      <Label htmlFor="edit-street">Adres</Label>
                      <Input
                        id="edit-street"
                        value={editedProfile.address.street}
                        onChange={(e) => setEditedProfile(prev => ({ 
                          ...prev, 
                          address: { ...prev.address, street: e.target.value }
                        }))}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-city">Şehir</Label>
                        <Input
                          id="edit-city"
                          value={editedProfile.address.city}
                          onChange={(e) => setEditedProfile(prev => ({ 
                            ...prev, 
                            address: { ...prev.address, city: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-country">Ülke</Label>
                        <Input
                          id="edit-country"
                          value={editedProfile.address.country}
                          onChange={(e) => setEditedProfile(prev => ({ 
                            ...prev, 
                            address: { ...prev.address, country: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleCancelEdit}>
                <X className="h-4 w-4 mr-2" />
                İptal
              </Button>
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Değişiklikleri Kaydet
              </Button>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Son Aktiviteler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                        <div className={`p-2 rounded-lg bg-muted ${activity.color}`}>
                          <activity.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.target}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Başarılar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                        <div className={`p-2 rounded-lg bg-muted ${achievement.color}`}>
                          <achievement.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(achievement.date).toLocaleDateString('tr-TR')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Bildirim Ayarları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>E-posta Bildirimleri</Label>
                      <p className="text-sm text-muted-foreground">Önemli güncellemeler için e-posta al</p>
                    </div>
                    <Switch
                      checked={editedProfile.preferences.notifications.email}
                      onCheckedChange={(checked) => setEditedProfile(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          notifications: { ...prev.preferences.notifications, email: checked }
                        }
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Bildirimleri</Label>
                      <p className="text-sm text-muted-foreground">Tarayıcı bildirimleri</p>
                    </div>
                    <Switch
                      checked={editedProfile.preferences.notifications.push}
                      onCheckedChange={(checked) => setEditedProfile(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          notifications: { ...prev.preferences.notifications, push: checked }
                        }
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS Bildirimleri</Label>
                      <p className="text-sm text-muted-foreground">Kritik uyarılar için SMS</p>
                    </div>
                    <Switch
                      checked={editedProfile.preferences.notifications.sms}
                      onCheckedChange={(checked) => setEditedProfile(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          notifications: { ...prev.preferences.notifications, sms: checked }
                        }
                      }))}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Gizlilik Ayarları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Profil Görünürlüğü</Label>
                      <p className="text-sm text-muted-foreground">Profilinizi diğer kullanıcılar görebilsin</p>
                    </div>
                    <Switch
                      checked={editedProfile.preferences.privacy.profileVisible}
                      onCheckedChange={(checked) => setEditedProfile(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          privacy: { ...prev.preferences.privacy, profileVisible: checked }
                        }
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>E-posta Görünürlüğü</Label>
                      <p className="text-sm text-muted-foreground">E-posta adresinizi göster</p>
                    </div>
                    <Switch
                      checked={editedProfile.preferences.privacy.showEmail}
                      onCheckedChange={(checked) => setEditedProfile(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          privacy: { ...prev.preferences.privacy, showEmail: checked }
                        }
                      }))}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Telefon Görünürlüğü</Label>
                      <p className="text-sm text-muted-foreground">Telefon numaranızı göster</p>
                    </div>
                    <Switch
                      checked={editedProfile.preferences.privacy.showPhone}
                      onCheckedChange={(checked) => setEditedProfile(prev => ({
                        ...prev,
                        preferences: {
                          ...prev.preferences,
                          privacy: { ...prev.preferences.privacy, showPhone: checked }
                        }
                      }))}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline">
                <X className="h-4 w-4 mr-2" />
                İptal
              </Button>
              <Button onClick={handleSaveProfile}>
                <Save className="h-4 w-4 mr-2" />
                Ayarları Kaydet
              </Button>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Güvenlik Ayarları
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                      <Label>Oturum Yönetimi</Label>
                      <p className="text-sm text-muted-foreground">Aktif oturumları yönet</p>
                    </div>
                    <Button variant="outline" size="sm">Görüntüle</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Güvenlik Geçmişi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Başarılı giriş</p>
                        <p className="text-xs text-muted-foreground">2 saat önce - Chrome, Windows</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                      <Info className="h-4 w-4 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Şifre değiştirildi</p>
                        <p className="text-xs text-muted-foreground">45 gün önce</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Şüpheli giriş denemesi</p>
                        <p className="text-xs text-muted-foreground">1 hafta önce - Engellendi</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}