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
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "TypeScript Ready",
      description: "Built with TypeScript for better development experience and type safety",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed with modern React patterns and best practices",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "Developer Experience",
      description: "Excellent DX with hot reload, ESLint, and comprehensive documentation",
      color: "from-orange-500 to-red-500"
    }
  ];

  const quickStartSteps = [
    {
      step: "1",
      title: "Clone Repository",
      description: "Clone the template from GitHub to your local machine",
      command: "git clone https://github.com/your-username/react19-admin-template.git",
      icon: Download
    },
    {
      step: "2",
      title: "Install Dependencies",
      description: "Install all required packages using npm or yarn",
      command: "npm install",
      icon: Code
    },
    {
      step: "3",
      title: "Start Development",
      description: "Run the development server and start building",
      command: "npm run dev",
      icon: Rocket
    }
  ];

  const techStack = [
    { name: "React 19", description: "Latest React with concurrent features", icon: Code },
    { name: "TypeScript", description: "Type-safe JavaScript development", icon: Shield },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: Palette },
    { name: "Vite", description: "Fast build tool and dev server", icon: Zap },
    { name: "Shadcn/ui", description: "Beautiful and accessible components", icon: Layers },
    { name: "React Router", description: "Declarative routing for React", icon: Globe }
  ];

  const nextSteps = [
    {
      title: "Explore Components",
      description: "Browse through all available UI components",
      icon: Palette,
      action: "View Components",
      url: "/showcase"
    },
    {
      title: "Read Documentation",
      description: "Learn how to use and customize components",
      icon: BookOpen,
      action: "Read Docs",
      url: "#"
    },
    {
      title: "Join Community",
      description: "Connect with other developers and get help",
      icon: Github,
      action: "Join Discord",
      url: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Get Started - React19 Admin Template</title>
        <meta name="description" content="Get started with React19 Admin Template - A modern, beautiful admin dashboard template built with React 19, TypeScript, and Tailwind CSS." />
      </Helmet>

      <div className="p-6 space-y-8">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Rocket className="h-8 w-8 text-blue-400" />
              <h1 className="text-5xl font-bold gradient-text-primary">
                Get Started
              </h1>
              <Rocket className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-xl text-white/70 max-w-4xl mx-auto text-center leading-relaxed">
              Welcome to React19 Admin Template! This guide will help you get up and running quickly.
              Built with modern technologies and best practices for creating beautiful admin dashboards.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                <Download className="w-5 h-5 mr-2" />
                Download Template
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold gradient-text-secondary">
              Why Choose This Template?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Packed with features that make development faster and more enjoyable
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-card p-6 rounded-xl">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start */}
        <Card className="glassmorphism-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold gradient-text-primary">
              Quick Start Guide
            </CardTitle>
            <p className="text-lg text-white/60">
              Get up and running in just a few minutes
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {quickStartSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <step.icon className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/70">
                      {step.description}
                    </p>
                    <div className="bg-black/20 rounded-lg p-3 border border-white/10">
                      <code className="text-green-400 font-mono text-sm">
                        {step.command}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold gradient-text-secondary">
              Technology Stack
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Built with modern, reliable technologies that developers love
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech, index) => (
              <div key={index} className="showcase-item group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <tech.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <Card className="glassmorphism-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold gradient-text-primary">
              What's Next?
            </CardTitle>
            <p className="text-lg text-white/60">
              Continue your journey with these helpful resources
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/70">
                      {step.description}
                    </p>
                  </div>
                  <Button className="button-glass w-full">
                    {step.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold gradient-text-primary">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Start building your next admin dashboard today with React19 Admin Template.
              Join thousands of developers who trust this template for their projects.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <BookOpen className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
