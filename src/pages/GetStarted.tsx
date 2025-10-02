import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
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
  Clock,
  Terminal,
  FolderOpen,
  Play,
  Settings,
  Users,
  BarChart3,
  FileText,
  Package,
  Wrench,
  Monitor,
  Coffee,
  Target,
  Lightbulb,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, translations } from "@/contexts/LanguageContext";

export default function GetStarted() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Palette,
      title: t('showcase.getStarted.features.items.components.title'),
      description: t('showcase.getStarted.features.items.components.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: t('showcase.getStarted.features.items.typeScript.title'),
      description: t('showcase.getStarted.features.items.typeScript.description'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: t('showcase.getStarted.features.items.performance.title'),
      description: t('showcase.getStarted.features.items.performance.description'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: t('showcase.getStarted.features.items.premium.title'),
      description: t('showcase.getStarted.features.items.premium.description'),
      color: "from-orange-500 to-red-500"
    }
  ];

  const installationSteps = [
    {
      step: "1",
      title: t('showcase.getStarted.installation.steps.prerequisites.title'),
      description: t('showcase.getStarted.installation.steps.prerequisites.description'),
      icon: CheckCircle,
      requirements: [
        t('showcase.getStarted.installation.steps.prerequisites.requirements.node'),
        t('showcase.getStarted.installation.steps.prerequisites.requirements.npm'),
        t('showcase.getStarted.installation.steps.prerequisites.requirements.git'),
        t('showcase.getStarted.installation.steps.prerequisites.requirements.vscode')
      ],
      commands: [
        t('showcase.getStarted.installation.steps.prerequisites.commands.node'),
        t('showcase.getStarted.installation.steps.prerequisites.commands.npm'),
        t('showcase.getStarted.installation.steps.prerequisites.commands.git')
      ]
    },
    {
      step: "2",
      title: t('showcase.getStarted.installation.steps.clone.title'),
      description: t('showcase.getStarted.installation.steps.clone.description'),
      icon: Download,
      commands: [
        t('showcase.getStarted.installation.steps.clone.commands.clone'),
        t('showcase.getStarted.installation.steps.clone.commands.cd')
      ],
      note: t('showcase.getStarted.installation.steps.clone.note')
    },
    {
      step: "3",
      title: t('showcase.getStarted.installation.steps.install.title'),
      description: t('showcase.getStarted.installation.steps.install.description'),
      icon: Package,
      commands: [
        t('showcase.getStarted.installation.steps.install.commands.npm'),
        t('showcase.getStarted.installation.steps.install.commands.or'),
        t('showcase.getStarted.installation.steps.install.commands.yarn'),
        t('showcase.getStarted.installation.steps.install.commands.bun')
      ],
      note: t('showcase.getStarted.installation.steps.install.note')
    },
    {
      step: "4",
      title: t('showcase.getStarted.installation.steps.start.title'),
      description: t('showcase.getStarted.installation.steps.start.description'),
      icon: Rocket,
      commands: [
        t('showcase.getStarted.installation.steps.start.commands.npm'),
        t('showcase.getStarted.installation.steps.start.commands.or'),
        t('showcase.getStarted.installation.steps.start.commands.yarn'),
        t('showcase.getStarted.installation.steps.start.commands.bun')
      ],
      note: t('showcase.getStarted.installation.steps.start.note')
    }
  ];

  const projectStructure = [
    {
      path: "src/",
      description: "Main source directory",
      children: [
        { path: "components/", description: "Reusable UI components" },
        { path: "pages/", description: "Application pages and routes" },
        { path: "contexts/", description: "React contexts for state management" },
        { path: "hooks/", description: "Custom React hooks" },
        { path: "lib/", description: "Utility functions and helpers" },
        { path: "layouts/", description: "Layout components" }
      ]
    },
    {
      path: "components/ui/",
      description: "Base UI components (shadcn/ui)",
      children: [
        { path: "button.tsx", description: "Button component with variants" },
        { path: "card.tsx", description: "Card component for content containers" },
        { path: "input.tsx", description: "Input component with validation" },
        { path: "table.tsx", description: "Table components for data display" }
      ]
    }
  ];

  const customizationGuide = [
    {
      key: 'theme',
      title: t('showcase.getStarted.customization.guides.theme.title'),
      description: t('showcase.getStarted.customization.guides.theme.description'),
      icon: Palette
    },
    {
      key: 'pages',
      title: t('showcase.getStarted.customization.guides.pages.title'),
      description: t('showcase.getStarted.customization.guides.pages.description'),
      icon: FileText
    },
    {
      key: 'components',
      title: t('showcase.getStarted.customization.guides.components.title'),
      description: t('showcase.getStarted.customization.guides.components.description'),
      icon: Layers
    },
    {
      key: 'build',
      title: t('showcase.getStarted.customization.guides.build.title'),
      description: t('showcase.getStarted.customization.guides.build.description'),
      icon: Rocket
    }
  ];

  const techStack = [
    { name: "React 19", description: "Latest React with concurrent features", icon: Code, version: "19.0.0" },
    { name: "TypeScript", description: "Type-safe JavaScript development", icon: Shield, version: "5.0+" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: Palette, version: "3.4+" },
    { name: "Vite", description: "Fast build tool and dev server", icon: Zap, version: "5.0+" },
    { name: "Shadcn/ui", description: "Beautiful and accessible components", icon: Layers, version: "Latest" },
    { name: "React Router", description: "Declarative routing for React", icon: Globe, version: "6.0+" }
  ];

  const nextSteps = [
    {
      title: t('showcase.getStarted.nextSteps.items.components.title'),
      description: t('showcase.getStarted.nextSteps.items.components.description'),
      icon: Palette,
      action: t('showcase.getStarted.nextSteps.items.components.action'),
      url: "/showcase",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: t('showcase.getStarted.nextSteps.items.dashboard.title'),
      description: t('showcase.getStarted.nextSteps.items.dashboard.description'),
      icon: BarChart3,
      action: t('showcase.getStarted.nextSteps.items.dashboard.action'),
      url: "/dashboard",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: t('showcase.getStarted.nextSteps.items.ai.title'),
      description: t('showcase.getStarted.nextSteps.items.ai.description'),
      icon: Sparkles,
      action: t('showcase.getStarted.nextSteps.items.ai.action'),
      url: "/showcase/ai",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: t('showcase.getStarted.nextSteps.items.docs.title'),
      description: t('showcase.getStarted.nextSteps.items.docs.description'),
      icon: BookOpen,
      action: t('showcase.getStarted.nextSteps.items.docs.action'),
      url: "/showcase",
      color: "from-orange-500 to-red-600"
    }
  ];

  const troubleshooting = [
    {
      issue: t('showcase.getStarted.troubleshooting.issues.portInUse.issue'),
      solution: t('showcase.getStarted.troubleshooting.issues.portInUse.solution'),
      icon: Monitor
    },
    {
      issue: t('showcase.getStarted.troubleshooting.issues.typeScript.issue'),
      solution: t('showcase.getStarted.troubleshooting.issues.typeScript.solution'),
      icon: Code
    },
    {
      issue: t('showcase.getStarted.troubleshooting.issues.buildFails.issue'),
      solution: t('showcase.getStarted.troubleshooting.issues.buildFails.solution'),
      icon: Wrench
    },
    {
      issue: t('showcase.getStarted.troubleshooting.issues.componentsNotFound.issue'),
      solution: t('showcase.getStarted.troubleshooting.issues.componentsNotFound.solution'),
      icon: FolderOpen
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.getStarted.pageTitle')}</title>
        <meta name="description" content={t('showcase.getStarted.metaDescription')} />
      </Helmet>

      <div className="p-6 space-y-8">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Rocket className="h-8 w-8 text-blue-400" />
              <h1 className="text-5xl font-bold gradient-text-primary">
                {t('showcase.getStarted.hero.title')}
              </h1>
              <Rocket className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-xl text-white/70 max-w-4xl mx-auto text-center leading-relaxed">
              {t('showcase.getStarted.hero.description')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  {t('showcase.getStarted.hero.buttons.viewDashboard')}
                </Button>
              </Link>
              <Link to="/showcase">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Palette className="w-5 h-5 mr-2" />
                  {t('showcase.getStarted.hero.buttons.browseComponents')}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Start Tabs */}
        <Tabs defaultValue="installation" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-gray-800/50 border border-gray-700/50">
            <TabsTrigger value="installation">{t('showcase.getStarted.tabs.installation')}</TabsTrigger>
            <TabsTrigger value="structure">{t('showcase.getStarted.tabs.structure')}</TabsTrigger>
            <TabsTrigger value="customization">{t('showcase.getStarted.tabs.customization')}</TabsTrigger>
            <TabsTrigger value="deployment">{t('showcase.getStarted.tabs.deployment')}</TabsTrigger>
            <TabsTrigger value="troubleshooting">{t('showcase.getStarted.tabs.troubleshooting')}</TabsTrigger>
          </TabsList>

          {/* Installation Tab */}
          <TabsContent value="installation" className="space-y-8">
            <Card className="glassmorphism-card">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold gradient-text-primary">
                  {t('showcase.getStarted.installation.title')}
                </CardTitle>
                <p className="text-lg text-white/60">
                  {t('showcase.getStarted.installation.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {installationSteps.map((step, index) => (
                    <div key={index} className="relative">
                      {index !== installationSteps.length - 1 && (
                        <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-primary/30 to-transparent" />
                      )}
                      
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                        
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center gap-3">
                            <step.icon className="w-6 h-6 text-blue-400" />
                            <h3 className="text-2xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="text-white/70 text-lg">
                            {step.description}
                          </p>

                          {step.requirements && (
                            <div className="space-y-2">
                              <h4 className="font-semibold text-white">Requirements:</h4>
                              <ul className="space-y-1">
                                {step.requirements.map((req, reqIndex) => (
                                  <li key={reqIndex} className="flex items-center gap-2 text-white/70">
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {step.commands && (
                            <div className="space-y-2">
                              <h4 className="font-semibold text-white">Commands:</h4>
                              <div className="bg-black/40 rounded-lg p-4 border border-white/10 space-y-2">
                                {step.commands.map((command, cmdIndex) => (
                                  <div key={cmdIndex}>
                                    {command.startsWith('#') ? (
                                      <p className="text-gray-400 text-sm italic">{command}</p>
                                    ) : (
                                      <code className="text-green-400 font-mono text-sm block">
                                        $ {command}
                                      </code>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {step.note && (
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                              <p className="text-blue-300 text-sm">
                                <Lightbulb className="w-4 h-4 inline mr-2" />
                                <strong>Note:</strong> {step.note}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Project Structure Tab */}
          <TabsContent value="structure" className="space-y-8">
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold gradient-text-primary text-center">
                  {t('showcase.getStarted.structure.title')}
                </CardTitle>
                <p className="text-lg text-white/60 text-center">
                  {t('showcase.getStarted.structure.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projectStructure.map((folder, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <FolderOpen className="w-5 h-5 text-blue-400" />
                        <div>
                          <h3 className="font-bold text-white">{folder.path}</h3>
                          <p className="text-white/70 text-sm">{folder.description}</p>
                        </div>
                      </div>
                      
                      {folder.children && (
                        <div className="ml-8 space-y-2">
                          {folder.children.map((child, childIndex) => (
                            <div key={childIndex} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors">
                              <div className="w-px h-4 bg-white/20 mr-2"></div>
                              <FileText className="w-4 h-4 text-gray-400" />
                              <div>
                                <span className="text-white/90 font-mono text-sm">{child.path}</span>
                                <p className="text-white/60 text-xs">{child.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customization Tab */}
          <TabsContent value="customization" className="space-y-8">
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold gradient-text-primary text-center">
                  {t('showcase.getStarted.customization.title')}
                </CardTitle>
                <p className="text-lg text-white/60 text-center">
                  {t('showcase.getStarted.customization.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {customizationGuide.map((guide, index) => (
                    <div key={index} className="showcase-item">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <guide.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {guide.title}
                            </h3>
                            <p className="text-white/70">
                              {guide.description}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-white">Steps:</h4>
                          <ol className="space-y-2">
                            {translations[language].showcase.getStarted.customization.guides[guide.key].steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-2 text-white/70">
                                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                                  {stepIndex + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Deployment Tab */}
          <TabsContent value="deployment" className="space-y-8">
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold gradient-text-primary text-center">
                  {t('showcase.getStarted.deployment.title')}
                </CardTitle>
                <p className="text-lg text-white/60 text-center">
                  {t('showcase.getStarted.deployment.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="showcase-item text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto">
                          <Globe className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{t('showcase.getStarted.deployment.platforms.netlify.name')}</h3>
                        <p className="text-white/70">{t('showcase.getStarted.deployment.platforms.netlify.description')}</p>
                        <div className="bg-black/40 rounded-lg p-3 border border-white/10">
                          {translations[language].showcase.getStarted.deployment.platforms.netlify.commands.map((command, idx) => (
                            <code key={idx} className="text-green-400 font-mono text-sm block">
                              {command}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="showcase-item text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto">
                          <Shield className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{t('showcase.getStarted.deployment.platforms.docker.name')}</h3>
                        <p className="text-white/70">{t('showcase.getStarted.deployment.platforms.docker.description')}</p>
                        <div className="bg-black/40 rounded-lg p-3 border border-white/10">
                          {translations[language].showcase.getStarted.deployment.platforms.docker.commands.map((command, idx) => (
                            <code key={idx} className="text-green-400 font-mono text-sm block">
                              {command}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{t('showcase.getStarted.deployment.buildProcess.title')}</h3>
                    <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                      <div className="space-y-2">
                        {translations[language].showcase.getStarted.deployment.buildProcess.commands.map((command, idx) => (
                          <code key={idx} className={command.startsWith('#') ? "text-gray-400 font-mono text-sm block" : "text-green-400 font-mono text-sm block"}>
                            {command}
                          </code>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Troubleshooting Tab */}
          <TabsContent value="troubleshooting" className="space-y-8">
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold gradient-text-primary text-center">
                  {t('showcase.getStarted.troubleshooting.title')}
                </CardTitle>
                <p className="text-lg text-white/60 text-center">
                  {t('showcase.getStarted.troubleshooting.subtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {troubleshooting.map((item, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-2">{item.issue}</h4>
                          <div className="bg-black/40 rounded-lg p-3 border border-white/10">
                            <code className="text-green-400 font-mono text-sm">
                              {item.solution}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Features Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold gradient-text-secondary">
              {t('showcase.getStarted.features.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('showcase.getStarted.features.subtitle')}
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

        {/* Tech Stack */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold gradient-text-secondary">
              {t('showcase.getStarted.techStack.title')}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('showcase.getStarted.techStack.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((tech, index) => (
              <div key={index} className="showcase-item group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <tech.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      v{tech.version}
                    </Badge>
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
              {t('showcase.getStarted.nextSteps.title')}
            </CardTitle>
            <p className="text-lg text-white/60">
              {t('showcase.getStarted.nextSteps.subtitle')}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center space-y-4 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/5 group">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/70">
                      {step.description}
                    </p>
                  </div>
                  {step.url.startsWith('/') ? (
                    <Link to={step.url}>
                      <Button className="button-glass w-full group-hover:bg-blue-500/20 transition-all duration-200">
                        {step.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  ) : (
                    <Button className="button-glass w-full" disabled>
                      {step.action}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Development Tips */}
        <Card className="glassmorphism-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold gradient-text-primary">
              {t('showcase.getStarted.tips.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-orange-400" />
                  {t('showcase.getStarted.tips.workflow.title')}
                </h3>
                <ul className="space-y-2">
                  {translations[language].showcase.getStarted.tips.workflow.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-400" />
                  {t('showcase.getStarted.tips.performance.title')}
                </h3>
                <ul className="space-y-2">
                  {translations[language].showcase.getStarted.tips.performance.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA Section */}
        <div className="cta-section">
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-red-400" />
              <h2 className="text-3xl font-bold gradient-text-primary">
                {t('showcase.getStarted.cta.title')}
              </h2>
              <Heart className="h-8 w-8 text-red-400" />
            </div>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {t('showcase.getStarted.cta.description')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  <Rocket className="w-5 h-5 mr-2" />
                  {t('showcase.getStarted.cta.buttons.start')}
                </Button>
              </Link>
              <Link to="/showcase">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {t('showcase.getStarted.cta.buttons.explore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
