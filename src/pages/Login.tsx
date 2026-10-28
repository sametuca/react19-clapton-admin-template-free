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
    { name: "Google", icon: Chrome, color: "" },
    { name: "GitHub", icon: Github, color: "" },
    { name: "Facebook", icon: Facebook, color: "" },
    { name: "Twitter", icon: Twitter, color: "" },
  ];

  return (
    <>
      <Helmet>
        <title>{t('auth.loginTitle')}</title>
        <meta name="description" content={t('auth.loginMeta')} />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="w-full max-w-md">
          {/* Dashboard Return Button */}
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {t('auth.backHome')}
              </Link>
            </Button>
          </div>

          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-brand-2 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">A</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t('auth.welcomeBack')}
            </h1>
            <p className="text-muted-foreground">
              {t('auth.loginSubtitle')}
            </p>
          </div>

          {/* Login Card */}
          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl font-semibold text-center">
                {t('auth.signIn')}
              </CardTitle>
              <CardDescription className="text-center">
                {t('auth.signInDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {socialLogins.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    className="hover:bg-muted"
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
                  <span className="bg-card px-2 text-muted-foreground">
                    {t('auth.orEmailLogin')}
                  </span>
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('auth.email')}</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('auth.emailPlaceholder')}
                      className="pl-10 h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t('auth.password')}</Label>
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
                      {t('auth.rememberMe')}
                    </Label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline transition-colors"
                  >
                    {t('auth.forgot')}
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-gradient-to-r from-primary to-brand-2 text-primary-foreground hover:opacity-90 font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      {t('auth.signingIn')}
                    </div>
                  ) : (
                    t('auth.signIn')
                  )}
                </Button>
              </form>

              {/* Sign Up Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {t('auth.noAccount')}{" "}
                </span>
                <Link
                  to="/register"
                  className="text-primary hover:underline font-medium transition-colors"
                >
                  {t('auth.signUpNow')}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8 text-xs text-muted-foreground">
            <p>{t('auth.rights')}</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/privacy" className="hover:text-muted-foreground transition-colors">
                {t('auth.privacy')}
              </Link>
              <Link to="/terms" className="hover:text-muted-foreground transition-colors">
                {t('auth.terms')}
              </Link>
              <Link to="/help" className="hover:text-muted-foreground transition-colors">
                {t('auth.help')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
