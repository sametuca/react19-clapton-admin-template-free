import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, Lock, User, Phone, Building, Github, Chrome, Facebook, Twitter, CheckCircle, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const socialLogins = [
    { name: "Google", icon: Chrome, color: "" },
    { name: "GitHub", icon: Github, color: "" },
    { name: "Facebook", icon: Facebook, color: "" },
    { name: "Twitter", icon: Twitter, color: "" },
  ];

  const steps = [
    { number: 1, title: t('auth.step1Title'), description: t('auth.step1Desc') },
    { number: 2, title: t('auth.step2Title'), description: t('auth.step2Desc') },
    { number: 3, title: t('auth.step3Title'), description: t('auth.step3Desc') },
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="firstName"
                    type="text"
                    placeholder={t('auth.firstNamePh')}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="lastName"
                    type="text"
                    placeholder={t('auth.lastNamePh')}
                    className="pl-10 h-11"
                    required
                  />
                </div>
              </div>
            </div>
            
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
              <p className="text-xs text-muted-foreground">
                {t('auth.passwordHint')}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-11"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-11 px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">{t('auth.phone')}</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+90 (5XX) XXX XX XX"
                  className="pl-10 h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">{t('auth.company')}</Label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="company"
                  type="text"
                  placeholder={t('auth.companyPh')}
                  className="pl-10 h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">{t('auth.position')}</Label>
              <Input
                id="position"
                type="text"
                placeholder={t('auth.positionPh')}
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">{t('auth.website')}</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://example.com"
                className="h-11"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="mx-auto w-16 h-16 bg-success/15 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold">{t('auth.almostDone')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('auth.almostDoneDesc')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                  required
                />
                <div className="space-y-1">
                  <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('auth.acceptTerms')}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    <Link to="/terms" className="text-primary hover:underline">{t('auth.termsOfUse')}</Link>{" & "}
                    <Link to="/privacy" className="text-primary hover:underline">{t('auth.privacyPolicy')}</Link>{" "}{t('auth.termsRead')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletter"
                  checked={acceptNewsletter}
                  onCheckedChange={(checked) => setAcceptNewsletter(checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('auth.newsletter')}
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    {t('auth.newsletterDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('auth.registerTitle')}</title>
        <meta name="description" content={t('auth.registerMeta')} />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center  p-4">
        <div className="w-full max-w-2xl">
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
              {t('auth.createAccount')}
            </h1>
            <p className="text-muted-foreground">
              {t('auth.registerSubtitle')}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.number
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{step.number}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      currentStep > step.number ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step) => (
                <div key={step.number} className="text-center flex-1">
                  <p className={`text-xs font-medium ${
                    currentStep >= step.number ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Register Card */}
          <Card className="shadow-xl border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl font-semibold text-center">
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription className="text-center">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login Buttons - Only show in first step */}
              {currentStep === 1 && (
                <>
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
                        {t('auth.orEmailRegister')}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* Step Content */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="px-6"
                    >
                      {t('auth.back')}
                    </Button>
                  )}
                  
                  <Button
                    type="submit"
                    className={`${
                      currentStep === 1 ? "ml-auto" : ""
                    } px-6 bg-gradient-to-r from-primary to-brand-2 text-primary-foreground hover:opacity-90 font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        {currentStep === 3 ? t('auth.creating') : t('auth.processing')}
                      </div>
                    ) : currentStep === 3 ? (
                      t('auth.createBtn')
                    ) : (
                      t('auth.continue')
                    )}
                  </Button>
                </div>
              </form>

              {/* Sign In Link */}
              <div className="text-center text-sm">
                <span className="text-muted-foreground">
                  {t('auth.haveAccount')}{" "}
                </span>
                <Link
                  to="/login"
                  className="text-primary hover:underline font-medium transition-colors"
                >
                  {t('auth.signInLink')}
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
