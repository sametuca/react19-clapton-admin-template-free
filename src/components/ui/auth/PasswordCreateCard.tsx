import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function PasswordCreateCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Create New Password</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-2">
          <Label htmlFor="password">New Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm">Confirm Password</Label>
          <Input id="confirm" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Update password</Button>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Use at least 8 characters, including numbers and symbols.
      </CardFooter>
    </Card>
  );
}
