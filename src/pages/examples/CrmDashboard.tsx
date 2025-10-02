import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  UserPlus, 
  Phone, 
  Mail,
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Building,
  MapPin,
  Filter,
  Search
} from "lucide-react";

export default function CrmDashboard() {
  const stats = [
    {
      title: "Toplam Müşteri",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Aktif Fırsatlar",
      value: "₺1,247,890",
      change: "+18.7%",
      changeType: "positive",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Bu Ay Satış",
      value: "₺456,780",
      change: "+8.2%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Dönüşüm Oranı",
      value: "%24.8",
      change: "+2.1%",
      changeType: "positive",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];

  const leads = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      company: "TechCorp Ltd.",
      email: "ahmet@techcorp.com",
      phone: "+90 532 123 4567",
      value: "₺45,000",
      status: "hot",
      lastContact: "2 saat önce",
      avatar: "/api/placeholder/40/40",
      location: "İstanbul",
      source: "Web Sitesi"
    },
    {
      id: 2,
      name: "Fatma Demir",
      company: "Digital Solutions",
      email: "fatma@digital.com",
      phone: "+90 533 987 6543",
      value: "₺78,500",
      status: "warm",
      lastContact: "1 gün önce",
      avatar: "/api/placeholder/40/40",
      location: "Ankara",
      source: "Referans"
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      company: "StartupXYZ",
      email: "mehmet@startupxyz.com",
      phone: "+90 534 456 7890",
      value: "₺32,000",
      status: "cold",
      lastContact: "3 gün önce",
      avatar: "/api/placeholder/40/40",
      location: "İzmir",
      source: "LinkedIn"
    },
    {
      id: 4,
      name: "Ayşe Özkan",
      company: "E-Commerce Plus",
      email: "ayse@ecommerce.com",
      phone: "+90 535 789 0123",
      value: "₺125,000",
      status: "hot",
      lastContact: "30 dakika önce",
      avatar: "/api/placeholder/40/40",
      location: "Bursa",
      source: "Google Ads"
    }
  ];

  const activities = [
    {
      id: 1,
      type: "call",
      customer: "Ahmet Yılmaz",
      action: "Telefon görüşmesi yapıldı",
      time: "10 dakika önce",
      icon: Phone,
      color: "text-blue-500"
    },
    {
      id: 2,
      type: "email",
      customer: "Fatma Demir",
      action: "Teklif e-postası gönderildi",
      time: "1 saat önce",
      icon: Mail,
      color: "text-green-500"
    },
    {
      id: 3,
      type: "meeting",
      customer: "Mehmet Kaya",
      action: "Toplantı planlandı",
      time: "2 saat önce",
      icon: Calendar,
      color: "text-purple-500"
    },
    {
      id: 4,
      type: "deal",
      customer: "Ayşe Özkan",
      action: "Anlaşma kapatıldı",
      time: "3 saat önce",
      icon: CheckCircle,
      color: "text-orange-500"
    }
  ];

  const salesPipeline = [
    {
      stage: "Yeni Lead",
      count: 45,
      value: "₺234,500",
      color: "bg-blue-500"
    },
    {
      stage: "Nitelikli Lead",
      count: 32,
      value: "₺456,780",
      color: "bg-green-500"
    },
    {
      stage: "Teklif",
      count: 18,
      value: "₺789,230",
      color: "bg-purple-500"
    },
    {
      stage: "Müzakere",
      count: 12,
      value: "₺567,890",
      color: "bg-orange-500"
    },
    {
      stage: "Kapatıldı",
      count: 8,
      value: "₺345,670",
      color: "bg-red-500"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      hot: { label: "Sıcak", variant: "destructive" as const, color: "bg-red-100 text-red-800" },
      warm: { label: "Ilık", variant: "secondary" as const, color: "bg-orange-100 text-orange-800" },
      cold: { label: "Soğuk", variant: "outline" as const, color: "bg-blue-100 text-blue-800" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>CRM Dashboard - React19 Admin</title>
        <meta name="description" content="Müşteri ilişkilerini yönetin ve satış süreçlerini takip edin" />
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              CRM Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Müşteri ilişkilerini yönetin ve satış performansınızı takip edin
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
            </Button>
            <Button size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Yeni Lead
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-border/30">
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">
                    {stat.change}
                  </span>
                  <span className="text-sm text-foreground/60">
                    son 30 gün
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="glassmorphism-card border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  Aktif Lead'ler
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  En önemli müşteri adaylarınız ve durumları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div key={lead.id} className="p-5 rounded-xl border border-border/30 bg-gradient-to-r from-background/50 to-foreground/5 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={lead.avatar} alt={lead.name} />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-foreground">{lead.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-foreground/60">
                                <Building className="w-4 h-4" />
                                {lead.company}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-foreground text-lg">{lead.value}</p>
                              {getStatusBadge(lead.status)}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                            <div className="flex items-center gap-2 text-foreground/60">
                              <Mail className="w-4 h-4" />
                              <span className="truncate">{lead.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground/60">
                              <Phone className="w-4 h-4" />
                              <span>{lead.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground/60">
                              <MapPin className="w-4 h-4" />
                              <span>{lead.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-foreground/60">
                              <Clock className="w-4 h-4" />
                              <span>{lead.lastContact}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-border/20">
                            <Badge variant="outline" className="text-xs">
                              {lead.source}
                            </Badge>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                <Phone className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Mail className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Calendar className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="glassmorphism-card border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  Son Aktiviteler
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  Müşteri etkileşimleri ve işlemler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="p-3 rounded-lg hover:bg-foreground/5 transition-colors duration-200">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-background to-foreground/10 flex items-center justify-center ${activity.color} shadow-sm`}>
                          <activity.icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {activity.customer}
                          </p>
                          <p className="text-sm text-foreground/70 mt-1">
                            {activity.action}
                          </p>
                          <p className="text-xs text-foreground/50 mt-2">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              Satış Pipeline
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              Satış sürecinizdeki fırsatların dağılımı
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-5">
              {salesPipeline.map((stage, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">{stage.stage}</h3>
                    <div className={`w-full h-2 rounded-full ${stage.color} mb-3`}></div>
                  </div>
                  
                  <div className="p-4 rounded-xl border border-border/30 bg-gradient-to-br from-background/80 to-foreground/5 text-center">
                    <p className="text-2xl font-bold text-foreground mb-1">{stage.count}</p>
                    <p className="text-sm text-foreground/60 mb-2">fırsat</p>
                    <p className="text-lg font-semibold text-foreground">{stage.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-xl border border-border/30 bg-gradient-to-r from-primary/5 to-primary/10">
              <div className="grid gap-6 md:grid-cols-3 text-center">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Toplam Pipeline</p>
                  <p className="text-2xl font-bold text-foreground">₺2,394,070</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Ortalama Anlaşma</p>
                  <p className="text-2xl font-bold text-foreground">₺20,818</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Kapanma Süresi</p>
                  <p className="text-2xl font-bold text-foreground">18 gün</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
