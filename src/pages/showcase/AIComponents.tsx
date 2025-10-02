import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AISearch, AIChat, AIInsights } from '@/components/ui/ai';
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Brain, 
  MessageSquare, 
  Search, 
  BarChart3, 
  Sparkles,
  Bot,
  Lightbulb,
  Zap,
  Star,
  Globe,
  Shield,
  Users
} from 'lucide-react';

const AIComponents = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('ai-chat');
  const [showAIChat, setShowAIChat] = useState(false);

  const aiFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: t('showcase.ai.features.aiChat.title'),
      description: t('showcase.ai.features.aiChat.description'),
      features: [t('showcase.ai.features.aiChat.features.nlp'), t('showcase.ai.features.aiChat.features.contextRetention'), t('showcase.ai.features.aiChat.features.multiLanguage')]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: t('showcase.ai.features.aiSearch.title'),
      description: t('showcase.ai.features.aiSearch.description'),
      features: [t('showcase.ai.features.aiSearch.features.semanticSearch'), t('showcase.ai.features.aiSearch.features.autoComplete'), t('showcase.ai.features.aiSearch.features.resultRanking')]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('showcase.ai.features.aiInsights.title'),
      description: t('showcase.ai.features.aiInsights.description'),
      features: [t('showcase.ai.features.aiInsights.features.predictiveAnalytics'), t('showcase.ai.features.aiInsights.features.trendAnalysis'), t('showcase.ai.features.aiInsights.features.smartRecommendations')]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t('showcase.ai.features.machineLearning.title'),
      description: t('showcase.ai.features.machineLearning.description'),
      features: [t('showcase.ai.features.machineLearning.features.imageRecognition'), t('showcase.ai.features.machineLearning.features.textClassification'), t('showcase.ai.features.machineLearning.features.anomalyDetection')]
    }
  ];

  const stats = [
    { number: "99.9%", label: t('showcase.ai.stats.aiAccuracy') },
    { number: "< 100ms", label: t('showcase.ai.stats.responseTime') },
    { number: "50+", label: t('showcase.ai.stats.aiModels') },
    { number: "24/7", label: t('showcase.ai.stats.availability') }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.ai.pageTitle')}</title>
        <meta name="description" content={t('showcase.ai.metaDescription')} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-4"
              >
                <Brain className="w-16 h-16 text-purple-500" />
              </motion.div>
              <Badge variant="secondary" className="px-6 py-2 text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('showcase.ai.badges.ai')}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t('showcase.ai.title')}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {' '}Components
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('showcase.ai.description')}
            </p>
          </motion.div>

          {/* AI Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const gradients = [
                'from-purple-500/20 to-blue-500/20 border-purple-500/30',
                'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                'from-cyan-500/20 to-green-500/20 border-cyan-500/30',
                'from-green-500/20 to-purple-500/20 border-green-500/30'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className={`bg-gradient-to-br ${gradient} backdrop-blur-lg text-center p-6 group transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 border`}>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-200">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* AI Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t('showcase.ai.sections.components')}
              </h2>
              <p className="text-gray-300 text-lg">
                {t('showcase.ai.sections.componentsDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 bg-gray-800/50 border-gray-700/50">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {feature.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <Zap className="w-4 h-4 mr-2 text-purple-500" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive AI Demos */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800/50 border border-gray-700/50">
              <TabsTrigger value="ai-chat" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">{t('showcase.ai.tabs.aiChat')}</TabsTrigger>
              <TabsTrigger value="ai-search" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">{t('showcase.ai.tabs.aiSearch')}</TabsTrigger>
              <TabsTrigger value="ai-insights" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">{t('showcase.ai.tabs.aiInsights')}</TabsTrigger>
            </TabsList>

            {/* AI Chat Demo */}
            <TabsContent value="ai-chat" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{t('showcase.ai.tabs.aiChat')}</h2>
                <p className="text-gray-300">{t('showcase.ai.tabs.aiChatDescription')}</p>
              </div>

              <Card className="p-8 bg-gray-800/50 border border-gray-700/50">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      <Bot className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white">{t('showcase.ai.tabs.aiChatTitle')}</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    {t('showcase.ai.tabs.aiChatDescriptionLong')}
                  </p>
                  
                  <Button
                    onClick={() => setShowAIChat(true)}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {t('showcase.ai.buttons.launchAIChat')}
                  </Button>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/30">
                      <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">{t('showcase.ai.tabs.aiChatSecure')}</h4>
                      <p className="text-sm text-gray-300">{t('showcase.ai.tabs.aiChatSecureDescription')}</p>
                    </div>
                    <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                      <Globe className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">{t('showcase.ai.tabs.aiChatMultiLanguage')}</h4>
                      <p className="text-sm text-gray-300">{t('showcase.ai.tabs.aiChatMultiLanguageDescription')}</p>
                    </div>
                    <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                      <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <h4 className="font-semibold text-white mb-1">{t('showcase.ai.tabs.aiChatCollaborative')}</h4>
                      <p className="text-sm text-gray-300">{t('showcase.ai.tabs.aiChatCollaborativeDescription')}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* AI Chat Component */}
              {showAIChat && <AIChat />}
            </TabsContent>

            {/* AI Search Demo */}
            <TabsContent value="ai-search" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{t('showcase.ai.tabs.aiSearch')}</h2>
                <p className="text-gray-300">{t('showcase.ai.tabs.aiSearchDescription')}</p>
              </div>

              <Card className="p-8 bg-gray-800/50 border border-gray-700/50">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-semibold text-white mb-6 text-center">{t('showcase.ai.tabs.aiSearchTitle')}</h3>
                  <AISearch />
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">{t('showcase.ai.tabs.aiSearchFeatures')}</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                          {t('showcase.ai.tabs.aiSearchFeaturesSemantic')}
                        </li>
                        <li className="flex items-center">
                          <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
                          {t('showcase.ai.tabs.aiSearchFeaturesIntelligent')}
                        </li>
                        <li className="flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-blue-500" />
                          {t('showcase.ai.tabs.aiSearchFeaturesRealTime')}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">{t('showcase.ai.tabs.aiSearchUseCases')}</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• {t('showcase.ai.tabs.aiSearchUseCasesGlobal')}</li>
                        <li>• {t('showcase.ai.tabs.aiSearchUseCasesDocument')}</li>
                        <li>• {t('showcase.ai.tabs.aiSearchUseCasesUser')}</li>
                        <li>• {t('showcase.ai.tabs.aiSearchUseCasesAction')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* AI Insights Demo */}
            <TabsContent value="ai-insights" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">{t('showcase.ai.tabs.aiInsights')}</h2>
                <p className="text-gray-300">{t('showcase.ai.tabs.aiInsightsDescription')}</p>
              </div>

              <AIInsights />
            </TabsContent>
          </Tabs>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <Brain className="w-12 h-12 mr-4" />
                <Star className="w-8 h-8 text-yellow-300" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('showcase.ai.footer.title')}</h2>
              <p className="text-xl text-purple-100 mb-6">
                {t('showcase.ai.footer.description')}
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                {t('showcase.ai.footer.button')}
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AIComponents;
