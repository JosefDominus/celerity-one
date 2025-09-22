import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook } from "lucide-react"
import { Youtube } from "lucide-react"
import { Github } from "lucide-react"
import Link from "next/link"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sample Change</CardTitle>
        <CardDescription>
          Login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Link href = "/pages/dashboard">
        <Button type="submit" className="w-full">
          Login
        </Button>
        </Link>
        <div className = "flex flex-row gap-2">
        <Link href="https://www.facebook.com/xSeffiro/" target = "_blank">
        <Button variant="outline" className="w-full">
         <Facebook />
        </Button>
        </Link>

        <Link href="https://www.youtube.com" target = "_blank">
        <Button variant="outline" className="w-full">
         <Youtube />
        </Button>
        </Link>

        <Link href="https://github.com/JosefDominus/celerity-one" target = "_blank">
        <Button variant="outline" className="w-full">
        <Github />
        </Button>
        </Link>
        </div>

        
      </CardFooter>
    </Card>
  )
}
