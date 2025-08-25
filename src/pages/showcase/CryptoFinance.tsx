import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Bitcoin, 
  DollarSign, 
  PieChart, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Crown,
  Lock,
  Wallet,
  CreditCard,
  Banknote,
  Calculator
} from "lucide-react";

export default function CryptoFinance() {
  const [isPremiumUser] = useState(false);

  const cryptoData = [
    { symbol: "BTC", name: "Bitcoin", price: 43250, change: 2.4, volume: "2.1B", marketCap: "847B" },
    { symbol: "ETH", name: "Ethereum", price: 2650, change: -1.2, volume: "1.8B", marketCap: "318B" },
    { symbol: "ADA", name: "Cardano", price: 0.48, change: 5.7, volume: "890M", marketCap: "17B" },
    { symbol: "SOL", name: "Solana", price: 98.45, change: 3.2, volume: "654M", marketCap: "42B" }
  ];

  const portfolioData = [
    { asset: "Bitcoin", amount: "0.5", value: 21625, allocation: 45 },
    { asset: "Ethereum", amount: "8.2", value: 21730, allocation: 35 },
    { asset: "Cardano", amount: "15000", value: 7200, allocation: 15 },
    { asset: "Solana", amount: "25", value: 2461, allocation: 5 }
  ];

  const PremiumOverlay = ({ children }: { children: React.ReactNode }) => (
    <div className="relative">
      {children}
      {!isPremiumUser && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
          <div className="text-center space-y-2">
            <Crown className="h-8 w-8 text-yellow-500 mx-auto" />
            <p className="text-sm font-medium">Premium Feature</p>
            <Button size="sm" className="gap-2">
              <Lock className="h-4 w-4" />
              Unlock Premium
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Crypto & Finance Components - React19 Admin</title>
        <meta name="description" content="Professional cryptocurrency and financial dashboard components" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Crypto & Finance Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional financial and cryptocurrency trading components
          </p>
        </div>

        {/* Portfolio Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Portfolio Overview</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Balance</p>
                    <p className="text-2xl font-bold">$53,016</p>
                  </div>
                  <Wallet className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1 text-green-500">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm font-medium">+12.5%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PremiumOverlay>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Today's P&L</p>
                      <p className="text-2xl font-bold text-green-500">+$1,245</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-green-500">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-sm font-medium">+2.4%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>

            <PremiumOverlay>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Invested</p>
                      <p className="text-2xl font-bold">$48,500</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="mt-4">
                    <Progress value={92} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">92% of goal</p>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>

            <PremiumOverlay>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Available Cash</p>
                      <p className="text-2xl font-bold">$4,516</p>
                    </div>
                    <Banknote className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <span className="text-sm">Ready to invest</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>
          </div>
        </section>

        {/* Crypto Market */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Market Overview</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bitcoin className="h-5 w-5 text-orange-500" />
                Cryptocurrency Prices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cryptoData.map((crypto, index) => (
                  <div key={crypto.symbol}>
                    {index > 1 ? (
                      <PremiumOverlay>
                        <CryptoRow crypto={crypto} />
                      </PremiumOverlay>
                    ) : (
                      <CryptoRow crypto={crypto} />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Portfolio Allocation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Portfolio Allocation</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Asset Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {portfolioData.map((asset, index) => (
                    <div key={asset.asset}>
                      {index > 1 ? (
                        <PremiumOverlay>
                          <AssetRow asset={asset} />
                        </PremiumOverlay>
                      ) : (
                        <AssetRow asset={asset} />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <PremiumOverlay>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance Chart
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Chart</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>
          </div>
        </section>

        {/* Trading Tools */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Trading Tools</h2>
          <PremiumOverlay>
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="converter">Converter</TabsTrigger>
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="calculator" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Investment Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Initial Investment</label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                              type="number"
                              placeholder="10000"
                              className="w-full pl-10 pr-4 py-2 border rounded-lg"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Monthly Contribution</label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                              type="number"
                              placeholder="500"
                              className="w-full pl-10 pr-4 py-2 border rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-medium mb-2">Projected Returns</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>1 Year:</span>
                              <span className="font-medium text-green-500">$18,240</span>
                            </div>
                            <div className="flex justify-between">
                              <span>5 Years:</span>
                              <span className="font-medium text-green-500">$94,680</span>
                            </div>
                            <div className="flex justify-between">
                              <span>10 Years:</span>
                              <span className="font-medium text-green-500">$228,950</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </PremiumOverlay>
        </section>

        {/* Premium Features Banner */}
        {!isPremiumUser && (
          <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <CardContent className="p-8 text-center">
              <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Unlock Premium Finance Tools</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Access advanced portfolio tracking, real-time market data, trading calculators, and 30+ premium financial components
              </p>
              <Button size="lg" className="gap-2">
                <Crown className="h-4 w-4" />
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

// Helper Components
function CryptoRow({ crypto }: { crypto: any }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{crypto.symbol}</span>
        </div>
        <div>
          <p className="font-medium">{crypto.name}</p>
          <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${crypto.price.toLocaleString()}</p>
        <div className={`flex items-center gap-1 ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {crypto.change >= 0 ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
          <span className="text-sm font-medium">{Math.abs(crypto.change)}%</span>
        </div>
      </div>
    </div>
  );
}

function AssetRow({ asset }: { asset: any }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{asset.asset}</p>
        <p className="text-sm text-muted-foreground">{asset.amount} tokens</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">${asset.value.toLocaleString()}</p>
        <div className="flex items-center gap-2">
          <Progress value={asset.allocation} className="w-16 h-2" />
          <span className="text-sm text-muted-foreground">{asset.allocation}%</span>
        </div>
      </div>
    </div>
  );
}