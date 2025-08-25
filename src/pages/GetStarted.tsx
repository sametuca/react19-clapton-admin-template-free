import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Rocket, 
  Code, 
  Palette, 
  Zap, 
  Star, 
  Crown, 
  Download, 
  BookOpen, 
  Github, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Layers,
  Smartphone,
  Globe,
  Shield,
  Clock
} from "lucide-react";

export default function GetStarted() {
  const features = [
    {
      icon: Palette,
      title: "Modern UI Components",
      description: "100+ beautifully designed components with dark/light theme support",
      badge: "Core"
    },
    {
      icon: Zap,
      title: "Premium Features",
      description: "Advanced components, animations, and exclusive layouts",
      badge: "Premium"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach with perfect mobile and desktop experience",
      badge: "Core"
    },
    {
      icon: Globe,
      title: "Multi-language",
      description: "Built-in internationalization with easy language switching",
      badge: "Core"
    },
    {
      icon: Shield,
      title: "TypeScript",
      description: "Full TypeScript support with comprehensive type definitions",
      badge: "Core"
    },
    {
      icon: Clock,
      title: "Regular Updates",
      description: "Monthly updates with new components and features",
      badge: "Premium"
    }
  ];

  const quickStartSteps = [
    {
      step: "1",
      title: "Install Dependencies",
      code: "npm install",
      description: "Install all required packages and dependencies"
    },
    {
      step: "2",
      title: "Start Development Server",
      code: "npm run dev",
      description: "Launch the development server on localhost"
    },
    {
      step: "3",
      title: "Open in Browser",
      code: "http://localhost:5173",
      description: "View your application in the browser"
    },
    {
      step: "4",
      title: "Start Building",
      code: "Edit src/pages/*.tsx",
      description: "Begin customizing and building your application"
    }
  ];

  const techStack = [
    { name: "React 19", version: "Latest", color: "bg-blue-500" },
    { name: "TypeScript", version: "5.0+", color: "bg-blue-600" },
    { name: "Tailwind CSS", version: "3.4+", color: "bg-cyan-500" },
    { name: "Vite", version: "5.0+", color: "bg-purple-500" },
    { name: "Radix UI", version: "Latest", color: "bg-slate-600" },
    { name: "Lucide Icons", version: "Latest", color: "bg-green-500" }
  ];

  return (
    <>
      <Helmet>
        <title>Get Started - React19 Admin</title>
        <meta name="description" content="Get started with React19 Admin template - Installation guide and quick start" />
      </Helmet>

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Get Started
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to React19 Admin Template! This comprehensive guide will help you get up and running quickly.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download Template
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Quick Start Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="installation" className="gap-2">
              <Code className="h-4 w-4" />
              Installation
            </TabsTrigger>
            <TabsTrigger value="features" className="gap-2">
              <Star className="h-4 w-4" />
              Features
            </TabsTrigger>
            <TabsTrigger value="customization" className="gap-2">
              <Palette className="h-4 w-4" />
              Customization
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">100+ UI Components</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Dark/Light Theme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Responsive Layout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">TypeScript Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Premium Components</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    Tech Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                        <div>
                          <p className="text-sm font-medium">{tech.name}</p>
                          <p className="text-xs text-muted-foreground">{tech.version}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Start Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Quick Start Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {quickStartSteps.map((step) => (
                    <div key={step.step} className="text-center space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-lg font-bold text-primary">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="bg-muted rounded-lg p-2">
                        <code className="text-xs text-primary">{step.code}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Installation Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">1. Clone the Repository</h4>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-sm">git clone https://github.com/sametuca/react19-admin-template.git</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">2. Navigate to Project Directory</h4>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-sm">cd react19-admin-template</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">3. Install Dependencies</h4>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-sm">npm install</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">4. Start Development Server</h4>
                    <div className="bg-muted rounded-lg p-3">
                      <code className="text-sm">npm run dev</code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">5. Open in Browser</h4>
                    <p className="text-sm text-muted-foreground">Open your browser and navigate to <code className="bg-muted px-1 rounded">http://localhost:5173</code></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={feature.badge === "Premium" ? "default" : "secondary"}>
                        {feature.badge === "Premium" && <Crown className="h-3 w-3 mr-1" />}
                        {feature.badge}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="customization" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    Theme Customization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Custom color schemes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Dark/Light mode toggle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">CSS variables for easy theming</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Component-level customization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Code Customization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Modular component structure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">TypeScript interfaces</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Customizable layouts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Extensible architecture</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Now that you're set up, here are some recommended next steps:
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <Button variant="outline" className="justify-start gap-2">
                      <BookOpen className="h-4 w-4" />
                      Read Documentation
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <Palette className="h-4 w-4" />
                      Explore Components
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <Github className="h-4 w-4" />
                      View Examples
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" className="justify-start gap-2">
                      <Star className="h-4 w-4" />
                      Premium Features
                      <ArrowRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Premium CTA */}
        <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Unlock Premium Features</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get access to exclusive components, advanced animations, premium layouts, and priority support
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Crown className="h-4 w-4" />
                Upgrade to Premium
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Premium Features
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
