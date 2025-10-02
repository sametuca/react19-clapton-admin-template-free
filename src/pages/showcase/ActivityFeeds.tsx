import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { ActivityFeed } from "@/components/ui/activity-feed";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Settings, BarChart3, Users, Shield, Zap } from "lucide-react";

export default function ActivityFeeds() {
  const { t } = useLanguage();

  const activities = [
    {
      id: "1",
      user: { name: t('showcase.activity.feeds.newUser'), initials: "AY" },
      action: t('showcase.activity.feeds.newUserAction'),
      target: t('showcase.activity.feeds.newUserTarget'),
      time: t('showcase.activity.times.justNow'),
      type: "success" as const,
      icon: FileText
    },
    {
      id: "2",
      user: { name: t('showcase.activity.feeds.securityUpdateUser'), initials: "FK" },
      action: t('showcase.activity.feeds.securityUpdateAction'),
      target: t('showcase.activity.feeds.securityUpdateTarget'),
      time: t('showcase.activity.times.minutesAgo', {minutes: 15}),
      type: "info" as const,
      icon: Settings
    },
    {
      id: "3",
      user: { name: t('showcase.activity.feeds.performanceAlertUser'), initials: "MD" },
      action: t('showcase.activity.feeds.performanceAlertAction'),
      target: t('showcase.activity.feeds.performanceAlertTarget'),
      time: t('showcase.activity.times.hoursAgo', {hours: 2}),
      type: "warning" as const,
      icon: BarChart3
    },
    {
      id: "4",
      user: { name: t('showcase.activity.feeds.newUserAddedUser'), initials: "AÖ" },
      action: t('showcase.activity.feeds.newUserAddedAction'),
      target: t('showcase.activity.feeds.newUserAddedTarget'),
      time: t('showcase.activity.times.hoursAgo', {hours: 3}),
      type: "success" as const,
      icon: Users
    },
    {
      id: "5",
      user: { name: t('showcase.activity.feeds.securitySettingsUser'), initials: "AA" },
      action: t('showcase.activity.feeds.securitySettingsAction'),
      target: t('showcase.activity.feeds.securitySettingsTarget'),
      time: t('showcase.activity.times.hoursAgo', {hours: 4}),
      type: "info" as const,
      icon: Shield
    }
  ];

  const criticalActivities = [
    {
      id: "6",
      user: { name: t('showcase.activity.feeds.criticalErrorUser'), initials: "SY" },
      action: t('showcase.activity.feeds.criticalErrorAction'),
      target: t('showcase.activity.feeds.criticalErrorTarget'),
      time: t('showcase.activity.times.justNow'),
      type: "error" as const,
      icon: Zap
    },
    {
      id: "7",
      user: { name: t('showcase.activity.feeds.backupFailedUser'), initials: "SY" },
      action: t('showcase.activity.feeds.backupFailedAction'),
      target: t('showcase.activity.feeds.backupFailedTarget'),
      time: t('showcase.activity.times.minutesAgo', {minutes: 10}),
      type: "warning" as const,
      icon: Settings
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.activity.pageTitle')}</title>
        <meta name="description" content={t('showcase.activity.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.activity.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.activity.description')}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">{t('showcase.activity.sections.feeds')}</h2>
              <Badge variant="secondary">{t('showcase.activity.badges.recent')}</Badge>
            </div>
            <ActivityFeed 
              activities={activities}
              title={t('showcase.activity.sections.userActivities')}
            />
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">{t('showcase.activity.sections.criticalEvents')}</h2>
              <Badge variant="destructive">{t('showcase.activity.badges.critical')}</Badge>
            </div>
            <ActivityFeed 
              activities={criticalActivities}
              title={t('showcase.activity.sections.systemAlerts')}
            />
          </section>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.activity.sections.features')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.activity.features.realtime')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.activity.features.realtimeDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.activity.features.tipCategories')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.activity.features.tipCategoriesDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.activity.features.userAvatars')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.activity.features.userAvatarsDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.activity.features.timeDisplay')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.activity.features.timeDisplayDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.activity.features.iconSupport')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.activity.features.iconSupportDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.activity.features.hoverEffects')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.activity.features.hoverEffectsDescription')}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
