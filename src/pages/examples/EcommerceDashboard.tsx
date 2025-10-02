import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Users, 
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Heart,
  ShoppingBag,
  Truck,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter
} from "lucide-react";

export default function EcommerceDashboard() {
  const stats = [
    {
      title: "Toplam Satış",
      value: "₺847,392",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Siparişler",
      value: "1,247",
      change: "+8.2%",
      changeType: "positive", 
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Ürün Sayısı",
      value: "2,847",
      change: "+15.3%",
      changeType: "positive",
      icon: Package,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Müşteriler",
      value: "8,429",
      change: "+5.7%",
      changeType: "positive",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const topProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      image: "/api/placeholder/60/60",
      sales: 342,
      revenue: "₺456,780",
      stock: 23,
      rating: 4.8,
      category: "Elektronik"
    },
    {
      id: 2,
      name: "MacBook Air M2",
      image: "/api/placeholder/60/60", 
      sales: 189,
      revenue: "₺298,450",
      stock: 12,
      rating: 4.9,
      category: "Bilgisayar"
    },
    {
      id: 3,
      name: "AirPods Pro",
      image: "/api/placeholder/60/60",
      sales: 567,
      revenue: "₺187,230",
      stock: 45,
      rating: 4.7,
      category: "Aksesuar"
    },
    {
      id: 4,
      name: "iPad Pro 12.9",
      image: "/api/placeholder/60/60",
      sales: 234,
      revenue: "₺312,890",
      stock: 8,
      rating: 4.8,
      category: "Tablet"
    }
  ];

  const recentOrders = [
    {
      id: "#ORD-2024-001",
      customer: "Ahmet Yılmaz",
      avatar: "/api/placeholder/40/40",
      amount: "₺2,450",
      status: "delivered",
      date: "2 saat önce",
      items: 3
    },
    {
      id: "#ORD-2024-002", 
      customer: "Fatma Demir",
      avatar: "/api/placeholder/40/40",
      amount: "₺1,890",
      status: "processing",
      date: "4 saat önce",
      items: 2
    },
    {
      id: "#ORD-2024-003",
      customer: "Mehmet Kaya",
      avatar: "/api/placeholder/40/40", 
      amount: "₺3,250",
      status: "shipped",
      date: "6 saat önce",
      items: 5
    },
    {
      id: "#ORD-2024-004",
      customer: "Ayşe Özkan",
      avatar: "/api/placeholder/40/40",
      amount: "₺890",
      status: "pending",
      date: "8 saat önce",
      items: 1
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      delivered: { label: "Teslim Edildi", variant: "default" as const, color: "text-green-600" },
      processing: { label: "İşleniyor", variant: "secondary" as const, color: "text-blue-600" },
      shipped: { label: "Kargoda", variant: "outline" as const, color: "text-orange-600" },
      pending: { label: "Bekliyor", variant: "destructive" as const, color: "text-red-600" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getStockStatus = (stock: number) => {
    if (stock > 20) return { color: "text-green-600", icon: CheckCircle };
    if (stock > 5) return { color: "text-orange-600", icon: Clock };
    return { color: "text-red-600", icon: AlertTriangle };
  };

  return (
    <>
      <Helmet>
        <title>E-Ticaret Dashboard - React19 Admin</title>
        <meta name="description" content="E-ticaret mağazanızın satış performansını takip edin" />
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              E-Ticaret Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Mağazanızın performansını takip edin ve satış analizlerini görüntüleyin
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
            </Button>
            <Button size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Rapor Al
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
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  En Çok Satan Ürünler
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  Mağazanızın en popüler ürünleri ve satış performansları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => {
                    const StockIcon = getStockStatus(product.stock).icon;
                    return (
                      <div key={product.id} className="p-4 rounded-xl border border-border/30 bg-gradient-to-r from-background/50 to-foreground/5 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar className="h-14 w-14 rounded-lg">
                              <AvatarImage src={product.image} alt={product.name} />
                              <AvatarFallback className="rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                                {product.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-white font-bold">
                              {index + 1}
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-foreground">{product.name}</h3>
                                <p className="text-sm text-foreground/60">{product.category}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold text-foreground">{product.revenue}</p>
                                <p className="text-sm text-foreground/60">{product.sales} satış</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm font-medium">{product.rating}</span>
                                </div>
                                <div className={`flex items-center gap-1 ${getStockStatus(product.stock).color}`}>
                                  <StockIcon className="w-4 h-4" />
                                  <span className="text-sm font-medium">{product.stock} adet</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Heart className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="glassmorphism-card border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-white" />
                  </div>
                  Son Siparişler
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  En son gelen siparişler ve durumları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="p-3 rounded-lg hover:bg-foreground/5 transition-colors duration-200">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={order.avatar} alt={order.customer} />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
                            {order.customer.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="text-sm font-semibold text-foreground truncate">
                                {order.customer}
                              </p>
                              <p className="text-xs text-foreground/60">
                                {order.id}
                              </p>
                            </div>
                            <p className="text-sm font-bold text-foreground">
                              {order.amount}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            {getStatusBadge(order.status)}
                            <div className="text-right">
                              <p className="text-xs text-foreground/50">{order.date}</p>
                              <p className="text-xs text-foreground/60">{order.items} ürün</p>
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
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-500" />
                Kargo Durumu
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Hazırlanıyor</span>
                  <span className="font-semibold">23</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Kargoda</span>
                  <span className="font-semibold">45</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Teslim Edildi</span>
                  <span className="font-semibold">156</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Satış Trendi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">₺124,580</p>
                <p className="text-sm text-foreground/60">Bu hafta</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">+18.2%</span>
                <span className="text-sm text-foreground/60">geçen haftaya göre</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                Müşteri Memnuniyeti
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">4.8</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground/60 text-center">
                2,847 değerlendirme
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
