import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export function TwoFactorCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Two-Step Verification</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">Enter the 6-digit code from your authenticator app.</p>
        <div className="flex justify-center">
          <InputOTP maxLength={6} className="gap-2">
            <InputOTPGroup>
              {Array.from({ length: 6 }).map((_, i) => (
                <InputOTPSlot key={i} index={i} className="size-10 text-lg" />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button className="w-full">Verify</Button>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Didn’t receive the code? <button className="ml-1 text-primary hover:underline">Resend</button>
      </CardFooter>
    </Card>
  );
}
