import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, Github, Chrome, Facebook, Twitter, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  const socialLogins = [
    { name: "Google", icon: Chrome, color: "bg-red-500 hover:bg-red-600" },
    { name: "GitHub", icon: Github, color: "bg-gray-800 hover:bg-gray-900" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600 hover:bg-blue-700" },
    { name: "Twitter", icon: Twitter, color: "bg-sky-500 hover:bg-sky-600" },
  ];

  return (
    <>
      <Helmet>
        <title>Giriş Yap - React19 Admin</title>
        <meta name="description" content="Hesabınıza giriş yapın" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="w-full max-w-md">
          {/* Dashboard Return Button */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Ana Sayfaya Dön
              </Link>
            </Button>
          </div>

          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Hoş Geldiniz
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Hesabınıza giriş yaparak devam edin
            </p>
          </div>

          {/* Login Card */}
          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl font-semibold text-center">
                Giriş Yap
              </CardTitle>
              <CardDescription className="text-center">
                E-posta ve şifrenizi girin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {socialLogins.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className={`${social.color} text-white border-0 hover:scale-105 transition-transform`}
                    size="sm"
                  >
                    <social.icon className="h-4 w-4 mr-2" />
                    {social.name}
                  </Button>
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-800 px-2 text-muted-foreground">
                    veya e-posta ile giriş
                  </span>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="ornek@email.com"
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10 h-11"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Beni hatırla
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    Şifremi unuttum
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Giriş yapılıyor...
                    </div>
                  ) : (
                    "Giriş Yap"
                  )}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  Hesabınız yok mu?{" "}
                </span>
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Hemen kayıt olun
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8 text-xs text-muted-foreground">
            <p>© 2024 React19 Admin. Tüm hakları saklıdır.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/privacy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Gizlilik
              </Link>
              <Link to="/terms" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Şartlar
              </Link>
              <Link to="/help" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Yardım
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
