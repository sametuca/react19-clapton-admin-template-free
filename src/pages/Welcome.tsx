import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ModernCard } from '@/components/ui/modern-card';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Badge } from '@/components/ui/badge';
import { AISearch } from '@/components/ui/ai/ai-search';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Palette, 
  Code, 
  Rocket,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor,
  Search,
  Bot,
  Database,
  ChevronDown
} from 'lucide-react';

// Simplified React Logo Component - No animations
const ReactLogo = ({ size = 120, className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 841.9 595.3"
      className="drop-shadow-lg"
    >
      <g fill="currentColor">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.2 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
        <circle cx="420.9" cy="296.5" r="45.7"/>
        <path d="m520.5 78.1z"/>
      </g>
    </svg>
  </div>
);

const Welcome = () => {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Components",
      description: "200+ unique, professionally designed React components"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "React 19 Powered",
      description: "Built with the latest React 19 and Vite for optimal performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Ready",
      description: "Production-grade React code with TypeScript support"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Modern React Patterns",
      description: "Hooks, Context, Suspense and latest React best practices"
    }
  ];

  const mobileFeatures = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Perfectly optimized for all mobile devices with touch-friendly interfaces",
      details: "Responsive breakpoints, touch gestures, and mobile-specific components"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Seamless experience across desktop, tablet, and mobile devices",
      details: "Adaptive layouts, flexible grids, and device-specific optimizations"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Progressive Web App",
      description: "Native app-like experience with offline capabilities and push notifications",
      details: "Service workers, app manifest, and mobile installation support"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Adaptive Theming",
      description: "Smart theme adaptation based on device preferences and system settings",
      details: "Dark/light mode, color schemes, and accessibility features"
    }
  ];

  const technologies = [
    { name: "React 19", icon: <Monitor className="w-6 h-6" />, color: "text-cyan-400" },
    { name: "TypeScript", icon: <Code className="w-6 h-6" />, color: "text-blue-400" },
    { name: "Vite", icon: <Zap className="w-6 h-6" />, color: "text-yellow-400" },
    { name: "Responsive", icon: <Smartphone className="w-6 h-6" />, color: "text-green-400" }
  ];

  const stats = [
    { number: "200+", label: "React Components" },
    { number: "50+", label: "Admin Pages" },
    { number: "100%", label: "Mobile Ready" },
    { number: "24/7", label: "Premium Support" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900" />
          
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/15 to-purple-600/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-blue-800/20" />
          </div>

          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-200 border border-white/20">
                Clapton Admin
              </span>
            </div>

            <div className="flex justify-center mb-8 animate-fade-in-delay-1">
              <ReactLogo size={140} className="text-cyan-400" />
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-delay-2">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Clapton
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay-3">
              The most advanced <span className="text-cyan-400 font-semibold">React 19</span> admin template with 
              <span className="text-purple-400 font-semibold"> AI-powered components</span>, 
              <span className="text-green-400 font-semibold"> mobile-first design</span>, and premium features
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-delay-4">
              <Button
                onClick={() => navigate('/get-started')}
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-4 text-xl font-semibold shadow-2xl shadow-cyan-500/25 transition-all duration-300"
              >
                Get Started
              </Button>
              
              <Button
                onClick={scrollToContent}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-10 py-4 text-xl font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 animate-fade-in-delay-5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>React 19 Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>AI Components</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Mobile-First</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Premium Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>PWA Ready</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="relative z-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <SpotlightCard
                key={index}
                title={stat.label}
                description=""
                icon={index === 0 ? Code : index === 1 ? Monitor : index === 2 ? Smartphone : Shield}
                spotlightColor={index === 0 ? "#06b6d4" : index === 1 ? "#3b82f6" : index === 2 ? "#10b981" : "#f59e0b"}
                className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:bg-white/15"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-3">{stat.number}</div>
              </SpotlightCard>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Built with <span className="text-cyan-400">Modern Tech</span>
              </h2>
              <p className="text-gray-400 text-xl">
                Cutting-edge technologies for the best developer experience and 
                <span className="text-green-400 font-semibold"> mobile performance</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <SpotlightCard
                  key={index}
                  title={tech.name}
                  description=""
                  icon={index === 0 ? Monitor : index === 1 ? Code : index === 2 ? Zap : Smartphone}
                  spotlightColor={index === 0 ? "#06b6d4" : index === 1 ? "#3b82f6" : index === 2 ? "#eab308" : "#10b981"}
                  className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:bg-white/15"
                >
                  <div className={`inline-flex p-4 rounded-full mb-6 ${tech.color} bg-white/10 group-hover:bg-white/20 transition-all duration-700`}>
                    {tech.icon}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">React</span> Clapton?
              </h2>
              <p className="text-gray-400 text-xl">
                Discover the React features that make us the best admin template
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <SpotlightCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={index === 0 ? Sparkles : index === 1 ? Zap : index === 2 ? Shield : Code}
                  spotlightColor={index === 0 ? "#8b5cf6" : index === 1 ? "#eab308" : index === 2 ? "#ef4444" : "#3b82f6"}
                  className={`backdrop-blur-lg text-center transition-all duration-700 ${
                    currentFeature === index 
                      ? 'bg-gradient-to-br from-cyan-500/30 to-purple-500/30 ring-2 ring-cyan-400 shadow-xl shadow-cyan-400/25 border-cyan-400/50' 
                      : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-full mb-6 transition-all duration-700 ${
                    currentFeature === index 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-110' 
                      : 'bg-white/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'
                  }`}>
                    {feature.icon}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Mobile Features Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="text-green-400">Mobile-First</span> Excellence
              </h2>
              <p className="text-gray-400 text-xl max-w-3xl mx-auto">
                Built for the mobile generation. Experience the future of admin interfaces with 
                <span className="text-green-400 font-semibold"> responsive design</span>, 
                <span className="text-blue-400 font-semibold"> touch interactions</span>, and 
                <span className="text-purple-400 font-semibold"> native app performance</span>
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileFeatures.map((feature, index) => (
                <SpotlightCard
                  key={`mobile-${index}`}
                  title={feature.title}
                  description={feature.description}
                  icon={index === 0 ? Smartphone : index === 1 ? Monitor : index === 2 ? Globe : Palette}
                  spotlightColor={index === 0 ? "#10b981" : index === 1 ? "#3b82f6" : index === 2 ? "#8b5cf6" : "#f59e0b"}
                  className="backdrop-blur-lg text-center transition-all duration-700 bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30 group"
                >
                  <div className="inline-flex p-4 rounded-full mb-6 transition-all duration-700 bg-white/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300">
                    {feature.icon}
                  </div>
                  <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="text-center mb-20">
            <Card className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-10 max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
              <div className="absolute top-6 right-6 opacity-10">
                <ReactLogo size={80} className="text-white" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                Start Building Today!
              </h3>
              <p className="text-cyan-100 mb-8 text-xl">
                Don't wait! Join the React revolution with Clapton Admin Template. 
                <span className="text-green-300 font-semibold"> Perfect for mobile-first applications</span>
              </p>
              
              <Button
                onClick={() => navigate('/get-started')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-5 text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-3 w-7 h-7" />
                Get Started Now
                <ArrowRight className="ml-3 w-7 h-7" />
              </Button>
            </Card>
          </div>

          <div className="text-center text-gray-400">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Clapton</h3>
              <p className="text-lg">Premium React Admin Template</p>
              <p className="text-sm text-gray-400 mt-1">Mobile-First • PWA Ready • Enterprise Grade</p>
            </div>
            <p className="text-lg">© 2025 React Clapton Admin Template. Premium quality, professional support.</p>
            <div className="flex items-center justify-center gap-3 mt-3 text-base text-gray-500">
              <span>Powered by</span>
              <ReactLogo size={20} className="text-cyan-400" />
              <span className="text-cyan-400 font-medium">React 19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
