import { Helmet } from "react-helmet-async";
import { SignInCard } from "@/components/ui/auth/SignInCard";
import { SignUpCard } from "@/components/ui/auth/SignUpCard";
import { PasswordResetCard } from "@/components/ui/auth/PasswordResetCard";
import { PasswordCreateCard } from "@/components/ui/auth/PasswordCreateCard";
import { LockScreenCard } from "@/components/ui/auth/LockScreenCard";
import { TwoFactorCard } from "@/components/ui/auth/TwoFactorCard";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";

export default function AuthShowcase() {
  return (
    <>
      <Helmet>
        <title>Authentication Components - Showcase</title>
        <meta name="description" content="Beautiful authentication cards and flows" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Authentication</h1>
          <p className="text-muted-foreground">Polished, ready-to-use cards for auth flows.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SpotlightCard title="Sign In" description="Email/password with providers" icon={undefined as any} className="p-0">
            <div className="p-4">
              <SignInCard />
            </div>
          </SpotlightCard>
          <SpotlightCard title="Sign Up" description="Create a new account" icon={undefined as any} className="p-0">
            <div className="p-4">
              <SignUpCard />
            </div>
          </SpotlightCard>
          <SpotlightCard title="Reset Password" description="Send reset email" icon={undefined as any} className="p-0">
            <div className="p-4">
              <PasswordResetCard />
            </div>
          </SpotlightCard>
          <SpotlightCard title="Create Password" description="After reset link" icon={undefined as any} className="p-0">
            <div className="p-4">
              <PasswordCreateCard />
            </div>
          </SpotlightCard>
          <SpotlightCard title="Lock Screen" description="Unlock with password" icon={undefined as any} className="p-0">
            <div className="p-4">
              <LockScreenCard />
            </div>
          </SpotlightCard>
          <SpotlightCard title="Two-Factor" description="6-digit OTP" icon={undefined as any} className="p-0">
            <div className="p-4">
              <TwoFactorCard />
            </div>
          </SpotlightCard>
        </div>

        <div className="text-center">
          <Badge variant="secondary">All components are standalone and reusable</Badge>
        </div>
      </div>
    </>
  );
}
