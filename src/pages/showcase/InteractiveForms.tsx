import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Lock, 
  Building, 
  CreditCard, 
  Settings,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Heart,
  Sparkles
} from "lucide-react";

export default function InteractiveForms() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Company Info
    company: "",
    position: "",
    industry: "",
    // Preferences
    notifications: true,
    newsletter: false,
    plan: "pro",
    budget: [5000],
    features: [] as string[],
    // Rating
    satisfaction: 0,
    recommendation: 0
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (value: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`p-1 rounded-full transition-colors ${
              star <= value ? 'text-yellow-500' : 'text-muted-foreground hover:text-yellow-300'
            }`}
          >
            <Star className={`h-6 w-6 ${star <= value ? 'fill-current' : ''}`} />
          </button>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <User className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">{t('showcase.forms.steps.personalInfo.title')}</h3>
              <p className="text-muted-foreground">{t('showcase.forms.steps.personalInfo.description')}</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t('showcase.forms.steps.personalInfo.firstName')}</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  placeholder={t('showcase.forms.steps.personalInfo.firstNamePlaceholder')}
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t('showcase.forms.steps.personalInfo.lastName')}</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  placeholder={t('showcase.forms.steps.personalInfo.lastNamePlaceholder')}
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t('showcase.forms.steps.personalInfo.email')}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder={t('showcase.forms.steps.personalInfo.emailPlaceholder')}
                    className="pl-10 transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t('showcase.forms.steps.personalInfo.phone')}</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder={t('showcase.forms.steps.personalInfo.phonePlaceholder')}
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Building className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">{t('showcase.forms.steps.companyInfo.title')}</h3>
              <p className="text-muted-foreground">{t('showcase.forms.steps.companyInfo.description')}</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">{t('showcase.forms.steps.companyInfo.company')}</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder={t('showcase.forms.steps.companyInfo.companyPlaceholder')}
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">{t('showcase.forms.steps.companyInfo.position')}</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  placeholder={t('showcase.forms.steps.companyInfo.positionPlaceholder')}
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">{t('showcase.forms.steps.companyInfo.industry')}</Label>
                <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('showcase.forms.steps.companyInfo.industryPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">{t('showcase.forms.steps.companyInfo.industryOptions.technology')}</SelectItem>
                    <SelectItem value="finance">{t('showcase.forms.steps.companyInfo.industryOptions.finance')}</SelectItem>
                    <SelectItem value="healthcare">{t('showcase.forms.steps.companyInfo.industryOptions.healthcare')}</SelectItem>
                    <SelectItem value="education">{t('showcase.forms.steps.companyInfo.industryOptions.education')}</SelectItem>
                    <SelectItem value="retail">{t('showcase.forms.steps.companyInfo.industryOptions.retail')}</SelectItem>
                    <SelectItem value="manufacturing">{t('showcase.forms.steps.companyInfo.industryOptions.manufacturing')}</SelectItem>
                    <SelectItem value="other">{t('showcase.forms.steps.companyInfo.industryOptions.other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>{t('showcase.forms.steps.companyInfo.budget')}</Label>
                <div className="px-2">
                  <Slider
                    value={formData.budget}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                    max={20000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$1,000</span>
                    <span className="font-medium text-primary">${formData.budget[0].toLocaleString()}</span>
                    <span>$20,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Settings className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">{t('showcase.forms.steps.preferences.title')}</h3>
              <p className="text-muted-foreground">{t('showcase.forms.steps.preferences.description')}</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-medium">{t('showcase.forms.steps.preferences.plan')}</h4>
                <RadioGroup value={formData.plan} onValueChange={(value) => setFormData(prev => ({ ...prev, plan: value }))}>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      { id: 'basic', title: t('showcase.forms.steps.preferences.planOptions.basic.title'), price: t('showcase.forms.steps.preferences.planOptions.basic.price'), features: [t('showcase.forms.steps.preferences.planOptions.basic.features.feature1'), t('showcase.forms.steps.preferences.planOptions.basic.features.feature2')] },
                      { id: 'pro', title: t('showcase.forms.steps.preferences.planOptions.pro.title'), price: t('showcase.forms.steps.preferences.planOptions.pro.price'), features: [t('showcase.forms.steps.preferences.planOptions.pro.features.feature1'), t('showcase.forms.steps.preferences.planOptions.pro.features.feature2'), t('showcase.forms.steps.preferences.planOptions.pro.features.feature3')] },
                      { id: 'enterprise', title: t('showcase.forms.steps.preferences.planOptions.enterprise.title'), price: t('showcase.forms.steps.preferences.planOptions.enterprise.price'), features: [t('showcase.forms.steps.preferences.planOptions.enterprise.features.feature1'), t('showcase.forms.steps.preferences.planOptions.enterprise.features.feature2'), t('showcase.forms.steps.preferences.planOptions.enterprise.features.feature3')] }
                    ].map((plan) => (
                      <div key={plan.id} className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.plan === plan.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}>
                        <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                        <label htmlFor={plan.id} className="cursor-pointer">
                          <div className="text-center space-y-2">
                            <h5 className="font-semibold">{plan.title}</h5>
                            <div className="text-2xl font-bold text-primary">{plan.price}</div>
                            <div className="space-y-1">
                              {plan.features.map((feature, idx) => (
                                <div key={idx} className="text-sm text-muted-foreground">{feature}</div>
                              ))}
                            </div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-lg font-medium">{t('showcase.forms.steps.preferences.features')}</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    t('showcase.forms.steps.preferences.features.feature1'),
                    t('showcase.forms.steps.preferences.features.feature2'),
                    t('showcase.forms.steps.preferences.features.feature3'),
                    t('showcase.forms.steps.preferences.features.feature4'),
                    t('showcase.forms.steps.preferences.features.feature5'),
                    t('showcase.forms.steps.preferences.features.feature6')
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <Label htmlFor={feature} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-lg font-medium">{t('showcase.forms.steps.preferences.notifications')}</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-sm font-medium">
                      {t('showcase.forms.steps.preferences.notifications.email')}
                    </Label>
                    <Switch
                      id="notifications"
                      checked={formData.notifications}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newsletter" className="text-sm font-medium">
                      {t('showcase.forms.steps.preferences.notifications.newsletter')}
                    </Label>
                    <Switch
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <CheckCircle className="h-12 w-12 mx-auto text-green-500" />
              <h3 className="text-2xl font-semibold">{t('showcase.forms.steps.rating.title')}</h3>
              <p className="text-muted-foreground">{t('showcase.forms.steps.rating.description')}</p>
            </div>
            
            <div className="space-y-6">
              <StarRating 
                value={formData.satisfaction}
                onChange={(value) => setFormData(prev => ({ ...prev, satisfaction: value }))}
                label={t('showcase.forms.steps.rating.satisfaction')}
              />
              
              <StarRating 
                value={formData.recommendation}
                onChange={(value) => setFormData(prev => ({ ...prev, recommendation: value }))}
                label={t('showcase.forms.steps.rating.recommendation')}
              />

              <div className="space-y-2">
                <Label htmlFor="feedback">{t('showcase.forms.steps.rating.feedback')}</Label>
                <Textarea
                  id="feedback"
                  placeholder={t('showcase.forms.steps.rating.feedbackPlaceholder')}
                  className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  {t('showcase.forms.steps.rating.summary')}
                </h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('showcase.forms.steps.rating.summary.firstName')}</span>
                    <span>{formData.firstName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('showcase.forms.steps.rating.summary.lastName')}</span>
                    <span>{formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('showcase.forms.steps.rating.summary.email')}</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('showcase.forms.steps.rating.summary.company')}</span>
                    <span>{formData.company || t('showcase.forms.steps.rating.summary.companyNotProvided')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('showcase.forms.steps.rating.summary.plan')}</span>
                    <Badge variant="secondary">{formData.plan}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('showcase.forms.steps.rating.summary.features')}</span>
                    <span>{formData.features.length} {t('showcase.forms.steps.rating.summary.featuresCount')}</span>
                  </div>
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
        <title>{t('showcase.forms.pageTitle')}</title>
        <meta name="description" content={t('showcase.forms.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.forms.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.forms.description')}
          </p>
        </div>

        <Tabs defaultValue="wizard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="wizard">{t('showcase.forms.sections.wizard')}</TabsTrigger>
            <TabsTrigger value="advanced">{t('showcase.forms.sections.advanced')}</TabsTrigger>
            <TabsTrigger value="validation">{t('showcase.forms.sections.validation')}</TabsTrigger>
          </TabsList>

          <TabsContent value="wizard" className="space-y-6">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>{t('showcase.forms.cardTitle')}</CardTitle>
                    <Badge variant="outline">{t('showcase.forms.stepCounter', {current: currentStep, total: totalSteps})}</Badge>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderStepContent()}
                
                <div className="flex justify-between pt-6">
                  <Button 
                    variant="outline" 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {t('showcase.forms.buttons.previous')}
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button onClick={nextStep} className="flex items-center gap-2">
                      {t('showcase.forms.buttons.next')}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4" />
                      {t('showcase.forms.buttons.finish')}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.forms.advanced.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>{t('showcase.forms.advanced.creditCard')}</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder={t('showcase.forms.advanced.creditCardPlaceholder')} className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>{t('showcase.forms.advanced.securityCode')}</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input type="password" placeholder={t('showcase.forms.advanced.securityCodePlaceholder')} className="pl-10" maxLength={4} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>{t('showcase.forms.advanced.experienceLevel')}</Label>
                    <Slider defaultValue={[3]} max={5} min={1} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{t('showcase.forms.advanced.experienceLevelBeginner')}</span>
                      <span>{t('showcase.forms.advanced.experienceLevelExpert')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.forms.advanced.selectionComponents')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Label>{t('showcase.forms.advanced.favoriteColors')}</Label>
                    {[t('showcase.forms.advanced.favoriteColors.blue'), t('showcase.forms.advanced.favoriteColors.green'), t('showcase.forms.advanced.favoriteColors.red'), t('showcase.forms.advanced.favoriteColors.purple')].map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox id={color} />
                        <Label htmlFor={color}>{color}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Label>{t('showcase.forms.advanced.priorityLevel')}</Label>
                    <RadioGroup defaultValue="medium">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low">{t('showcase.forms.advanced.priorityLevelLow')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">{t('showcase.forms.advanced.priorityLevelMedium')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high">{t('showcase.forms.advanced.priorityLevelHigh')}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>{t('showcase.forms.validation.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>{t('showcase.forms.validation.email')}</Label>
                  <Input type="email" placeholder={t('showcase.forms.validation.emailPlaceholder')} />
                  <p className="text-xs text-green-600">{t('showcase.forms.validation.emailValid')}</p>
                </div>
                
                <div className="space-y-2">
                  <Label>{t('showcase.forms.validation.strongPassword')}</Label>
                  <Input type="password" placeholder={t('showcase.forms.validation.strongPasswordPlaceholder')} />
                  <div className="space-y-1">
                    <p className="text-xs text-green-600">{t('showcase.forms.validation.strongPasswordLength')}</p>
                    <p className="text-xs text-green-600">{t('showcase.forms.validation.strongPasswordUppercase')}</p>
                    <p className="text-xs text-red-600">{t('showcase.forms.validation.strongPasswordSpecialCharacter')}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>{t('showcase.forms.validation.username')}</Label>
                  <Input placeholder={t('showcase.forms.validation.usernamePlaceholder')} />
                  <p className="text-xs text-green-600">{t('showcase.forms.validation.usernameAvailable')}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
