import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Github, Mail } from "lucide-react";

export function SignInCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <button className="text-primary hover:underline">Forgot password?</button>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button variant="outline" className="gap-2">
            <Github className="h-4 w-4" /> GitHub
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" /> Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Don’t have an account?</span>
        <button className="text-primary hover:underline">Create account</button>
      </CardFooter>
    </Card>
  );
}
