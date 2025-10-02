import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function LockScreenCard() {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="flex justify-center mb-2">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-lg">SY</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-2xl">Locked</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground">Enter your password to continue</p>
        <Input type="password" placeholder="••••••••" />
        <Button className="w-full">Unlock</Button>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground justify-center">
        Not you? <button className="ml-1 text-primary hover:underline">Switch account</button>
      </CardFooter>
    </Card>
  );
}
