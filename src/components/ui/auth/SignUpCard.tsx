import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function SignUpCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Create Account</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Jane Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Checkbox id="terms" />
          <Label htmlFor="terms">I agree with Terms & Privacy</Label>
        </div>
        <Button className="w-full">Create account</Button>
      </CardContent>
      <CardFooter className="text-sm flex justify-center">
        Already have an account? <button className="ml-1 text-primary hover:underline">Sign in</button>
      </CardFooter>
    </Card>
  );
}
