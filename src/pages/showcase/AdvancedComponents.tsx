import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AdaptiveCommandPalette } from "@/components/ui/advanced/AdaptiveCommandPalette";
import { LiveUserPresence } from "@/components/ui/advanced/LiveUserPresence";
import { ProgressRoadmap } from "@/components/ui/advanced/ProgressRoadmap";
import { AuroraBackground } from "@/components/ui/advanced/AuroraBackground";
import { Command, Users, Route } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function AdvancedComponents() {
  const [openPalette, setOpenPalette] = useState(false);

  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('showcase.advanced.pageTitle')} - React19 Admin</title>
        <meta name="description" content={t('showcase.advanced.metaDescription')} />
      </Helmet>

      <div className="space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t('showcase.advanced.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('showcase.advanced.description')}
          </p>
        </div>

        <AuroraBackground className="rounded-2xl p-8 space-y-12 relative overflow-hidden">
          <Card className="backdrop-blur-sm bg-background/70">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Command className="h-5 w-5 text-primary" /> {t('showcase.advanced.components.commandPalette.title')}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t('showcase.advanced.components.commandPalette.description')}
                </p>
              </div>
              <Badge variant="secondary">{t('showcase.advanced.badges.keyboard')}</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Button onClick={() => setOpenPalette(true)} size="sm">
                  {t('showcase.advanced.components.commandPalette.triggerText')}
                </Button>
                <span className="text-xs text-muted-foreground">
                  {t('showcase.advanced.components.commandPalette.tryText')}
                </span>
              </div>
              <AdaptiveCommandPalette open={openPalette} onOpenChange={setOpenPalette} />
            </CardContent>
          </Card>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="backdrop-blur-sm bg-background/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> {t('showcase.advanced.components.liveUserPresence.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t('showcase.advanced.components.liveUserPresence.description')}
                </p>
                <LiveUserPresence />
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-background/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5 text-primary" /> {t('showcase.advanced.components.progressRoadmap.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t('showcase.advanced.components.progressRoadmap.description')}
                </p>
                <ProgressRoadmap
                  steps={[
                    { id: "plan", title: t('showcase.advanced.components.roadmapSteps.plan'), description: t('showcase.advanced.components.roadmapSteps.planDesc') },
                    { id: "design", title: t('showcase.advanced.components.roadmapSteps.design'), description: t('showcase.advanced.components.roadmapSteps.designDesc') },
                    { id: "dev", title: t('showcase.advanced.components.roadmapSteps.dev'), description: t('showcase.advanced.components.roadmapSteps.devDesc') },
                    { id: "review", title: t('showcase.advanced.components.roadmapSteps.review'), description: t('showcase.advanced.components.roadmapSteps.reviewDesc') },
                    { id: "launch", title: t('showcase.advanced.components.roadmapSteps.launch'), description: t('showcase.advanced.components.roadmapSteps.launchDesc') }
                  ]}
                  initialActive="design"
                />
              </CardContent>
            </Card>
          </div>
        </AuroraBackground>
      </div>
    </>
  );
}
