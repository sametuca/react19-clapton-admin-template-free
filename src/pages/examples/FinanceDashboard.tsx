import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  CreditCard, 
  PiggyBank,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Building,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Download,
  BarChart3,
  LineChart,
  Target
} from "lucide-react";

export default function FinanceDashboard() {
  const stats = [
    {
      title: "Toplam Bakiye",
      value: "₺2,847,392",
      change: "+12.5%",
      changeType: "positive",
      icon: Wallet,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Aylık Gelir",
      value: "₺456,780",
      change: "+8.7%",
      changeType: "positive",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Aylık Gider",
      value: "₺234,560",
      change: "-3.2%",
      changeType: "negative",
      icon: TrendingDown,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Yatırımlar",
      value: "₺1,234,890",
      change: "+15.8%",
      changeType: "positive",
      icon: PiggyBank,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const accounts = [
    {
      id: 1,
      name: "Ana Hesap",
      type: "Vadesiz",
      balance: "₺847,392",
      accountNumber: "****1234",
      bank: "Ziraat Bankası",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Tasarruf Hesabı",
      type: "Vadeli",
      balance: "₺456,780",
      accountNumber: "****5678",
      bank: "İş Bankası",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Yatırım Hesabı",
      type: "Borsa",
      balance: "₺1,234,890",
      accountNumber: "****9012",
      bank: "Garanti BBVA",
      color: "bg-purple-500"
    },
    {
      id: 4,
      name: "Kredi Kartı",
      type: "Kredi",
      balance: "-₺23,450",
      accountNumber: "****3456",
      bank: "Akbank",
      color: "bg-red-500"
    }
  ];

  const transactions = [
    {
      id: 1,
      description: "Maaş Ödemesi",
      amount: "+₺15,000",
      type: "income",
      date: "2 saat önce",
      category: "Maaş",
      account: "Ana Hesap",
      status: "completed"
    },
    {
      id: 2,
      description: "Market Alışverişi",
      amount: "-₺450",
      type: "expense",
      date: "5 saat önce",
      category: "Gıda",
      account: "Kredi Kartı",
      status: "completed"
    },
    {
      id: 3,
      description: "Elektrik Faturası",
      amount: "-₺280",
      type: "expense",
      date: "1 gün önce",
      category: "Faturalar",
      account: "Ana Hesap",
      status: "completed"
    },
    {
      id: 4,
      description: "Hisse Senedi Satışı",
      amount: "+₺5,670",
      type: "income",
      date: "2 gün önce",
      category: "Yatırım",
      account: "Yatırım Hesabı",
      status: "pending"
    },
    {
      id: 5,
      description: "Kira Ödemesi",
      amount: "-₺3,500",
      type: "expense",
      date: "3 gün önce",
      category: "Konut",
      account: "Ana Hesap",
      status: "completed"
    }
  ];

  const investments = [
    {
      symbol: "BIST100",
      name: "Borsa İstanbul 100",
      value: "₺456,780",
      change: "+2.45%",
      changeType: "positive",
      allocation: 35
    },
    {
      symbol: "USD/TRY",
      name: "Dolar",
      value: "₺234,560",
      change: "-0.85%",
      changeType: "negative",
      allocation: 20
    },
    {
      symbol: "GOLD",
      name: "Altın",
      value: "₺345,670",
      change: "+1.23%",
      changeType: "positive",
      allocation: 25
    },
    {
      symbol: "CRYPTO",
      name: "Kripto Para",
      value: "₺197,880",
      change: "+5.67%",
      changeType: "positive",
      allocation: 20
    }
  ];

  const budgetCategories = [
    {
      category: "Konut",
      budget: "₺4,000",
      spent: "₺3,500",
      percentage: 87.5,
      color: "bg-blue-500"
    },
    {
      category: "Gıda",
      budget: "₺2,000",
      spent: "₺1,750",
      percentage: 87.5,
      color: "bg-green-500"
    },
    {
      category: "Ulaşım",
      budget: "₺800",
      spent: "₺650",
      percentage: 81.25,
      color: "bg-purple-500"
    },
    {
      category: "Eğlence",
      budget: "₺1,200",
      spent: "₺890",
      percentage: 74.17,
      color: "bg-orange-500"
    }
  ];

  const getTransactionIcon = (type: string) => {
    return type === "income" ? ArrowUpRight : ArrowDownRight;
  };

  const getTransactionColor = (type: string) => {
    return type === "income" ? "text-green-600" : "text-red-600";
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "Tamamlandı", variant: "default" as const, icon: CheckCircle },
      pending: { label: "Bekliyor", variant: "secondary" as const, icon: Clock },
      failed: { label: "Başarısız", variant: "destructive" as const, icon: AlertTriangle }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>Finans Dashboard - React19 Admin</title>
        <meta name="description" content="Finansal durumunuzu takip edin ve yatırımlarınızı yönetin" />
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Finans Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Finansal durumunuzu takip edin ve yatırımlarınızı yönetin
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Rapor Al
            </Button>
            <Button size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analiz
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
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-semibold ${
                    stat.changeType === "positive" ? "text-green-400" : "text-red-400"
                  }`}>
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
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  Hesaplarım
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  Tüm banka hesaplarınız ve bakiyeleriniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {accounts.map((account) => (
                    <div key={account.id} className="p-5 rounded-xl border border-border/30 bg-gradient-to-r from-background/50 to-foreground/5 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${account.color}`}></div>
                          <div>
                            <h3 className="font-semibold text-foreground">{account.name}</h3>
                            <p className="text-sm text-foreground/60">{account.type}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {account.accountNumber}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-foreground/60">Bakiye</span>
                          <span className={`text-lg font-bold ${
                            account.balance.startsWith('-') ? 'text-red-600' : 'text-foreground'
                          }`}>
                            {account.balance}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-border/20">
                          <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Building className="w-4 h-4" />
                            {account.bank}
                          </div>
                          <Button variant="ghost" size="sm">
                            Detay
                          </Button>
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
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  Son İşlemler
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  En son finansal hareketleriniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.slice(0, 4).map((transaction) => {
                    const Icon = getTransactionIcon(transaction.type);
                    return (
                      <div key={transaction.id} className="p-3 rounded-lg hover:bg-foreground/5 transition-colors duration-200">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-background to-foreground/10 flex items-center justify-center shadow-sm`}>
                            <Icon className={`w-5 h-5 ${getTransactionColor(transaction.type)}`} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <p className="text-sm font-semibold text-foreground truncate">
                                {transaction.description}
                              </p>
                              <span className={`text-sm font-bold ${getTransactionColor(transaction.type)}`}>
                                {transaction.amount}
                              </span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-foreground/60">{transaction.category}</p>
                                <p className="text-xs text-foreground/50">{transaction.date}</p>
                              </div>
                              {getStatusBadge(transaction.status)}
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
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <PiggyBank className="w-4 h-4 text-white" />
                </div>
                Yatırım Portföyü
              </CardTitle>
              <CardDescription className="text-foreground/60 text-base">
                Yatırımlarınızın performansı ve dağılımı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {investments.map((investment, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{investment.symbol}</h3>
                        <p className="text-sm text-foreground/60">{investment.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">{investment.value}</p>
                        <div className="flex items-center gap-1">
                          {investment.changeType === "positive" ? (
                            <ArrowUpRight className="w-3 h-3 text-green-400" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3 text-red-400" />
                          )}
                          <span className={`text-xs font-medium ${
                            investment.changeType === "positive" ? "text-green-400" : "text-red-400"
                          }`}>
                            {investment.change}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Portföy Oranı</span>
                        <span className="text-foreground">{investment.allocation}%</span>
                      </div>
                      <Progress value={investment.allocation} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg border border-border/30 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">Toplam Portföy Değeri</p>
                  <p className="text-2xl font-bold text-foreground">₺1,234,890</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">+15.8%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                Bütçe Takibi
              </CardTitle>
              <CardDescription className="text-foreground/60 text-base">
                Aylık harcama kategorileriniz ve limitleriniz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgetCategories.map((budget, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${budget.color}`}></div>
                        <span className="font-medium text-foreground">{budget.category}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-foreground">
                          {budget.spent} / {budget.budget}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Kullanım Oranı</span>
                        <span className={`font-medium ${
                          budget.percentage > 90 ? 'text-red-600' : 
                          budget.percentage > 75 ? 'text-orange-600' : 'text-green-600'
                        }`}>
                          {budget.percentage.toFixed(1)}%
                        </span>
                      </div>
                      <Progress value={budget.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg border border-border/30 bg-gradient-to-r from-background/80 to-foreground/5">
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-1">Toplam Aylık Bütçe</p>
                  <p className="text-2xl font-bold text-foreground">₺8,000</p>
                  <p className="text-sm text-foreground/60">₺6,790 kullanıldı</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
