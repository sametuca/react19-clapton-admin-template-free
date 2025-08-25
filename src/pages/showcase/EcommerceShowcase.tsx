import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  TrendingUp, 
  Package, 
  CreditCard,
  Users,
  Eye,
  Filter,
  Search,
  Crown,
  Lock
} from "lucide-react";

export default function EcommerceShowcase() {
  const [isPremiumUser] = useState(false); // This would come from your auth context

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      originalPrice: 399,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 234,
      discount: 25,
      isPremium: false
    },
    {
      id: 2,
      name: "Ultra Smart Watch Pro",
      price: 599,
      originalPrice: 799,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 567,
      discount: 25,
      isPremium: true
    },
    {
      id: 3,
      name: "Professional Camera Kit",
      price: 1299,
      originalPrice: 1599,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 123,
      discount: 19,
      isPremium: true
    }
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
        <title>E-Commerce Components - React19 Admin</title>
        <meta name="description" content="Modern e-commerce UI components for online stores" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
            E-Commerce Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern e-commerce components for building professional online stores
          </p>
        </div>

        {/* Product Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Product Showcase</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                {product.isPremium && index > 0 ? (
                  <PremiumOverlay>
                    <ProductCard product={product} />
                  </PremiumOverlay>
                ) : (
                  <ProductCard product={product} />
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Shopping Cart */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <PremiumOverlay>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Shopping Cart (3 items)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="w-16 h-16 bg-muted rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-medium">Product {item}</h4>
                      <p className="text-sm text-muted-foreground">Color: Black, Size: M</p>
                    </div>
                    <div className="text-center">
                      <Label className="text-xs">Quantity</Label>
                      <Input type="number" defaultValue={1} className="w-16 h-8" />
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$99.00</p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total: $297.00</span>
                    <Button className="gap-2">
                      <CreditCard className="h-4 w-4" />
                      Checkout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </PremiumOverlay>
        </section>

        {/* Sales Dashboard */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Sales Dashboard</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Sales</p>
                    <p className="text-2xl font-bold">$24,567</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">+12% from last month</p>
                </div>
              </CardContent>
            </Card>

            <PremiumOverlay>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Orders</p>
                      <p className="text-2xl font-bold">1,234</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="mt-4">
                    <Progress value={60} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">+8% from last month</p>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>

            <PremiumOverlay>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Customers</p>
                      <p className="text-2xl font-bold">8,942</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="mt-4">
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">+15% from last month</p>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>

            <PremiumOverlay>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-2xl font-bold">$89,432</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="mt-4">
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">+22% from last month</p>
                  </div>
                </CardContent>
              </Card>
            </PremiumOverlay>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <PremiumOverlay>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((review) => (
                <Card key={review}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={`/api/placeholder/40/40`} />
                        <AvatarFallback>U{review}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">User {review}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "Amazing product quality and fast shipping. Highly recommended for anyone looking for premium items."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </PremiumOverlay>
        </section>

        {/* Premium Features Banner */}
        {!isPremiumUser && (
          <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
            <CardContent className="p-8 text-center">
              <Crown className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Unlock Premium E-Commerce Components</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get access to advanced shopping cart, sales analytics, customer management, and 50+ premium e-commerce components
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

// Product Card Component
function ProductCard({ product }: { product: any }) {
  return (
    <>
      <div className="relative">
        <div className="aspect-square bg-muted rounded-t-lg flex items-center justify-center">
          <Package className="h-16 w-16 text-muted-foreground" />
        </div>
        {product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500">
            -{product.discount}%
          </Badge>
        )}
        <Button variant="ghost" size="icon" className="absolute top-2 right-2">
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">${product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </>
  );
}