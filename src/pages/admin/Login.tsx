import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4">
      <div className="absolute inset-0 hero-light-bg opacity-50" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Launch<span className="gradient-text">Forge</span>
          </Link>
          <div className="flex items-center justify-center gap-2 mt-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <p className="text-muted-foreground">Admin Panel</p>
          </div>
        </div>
        <Card className="shadow-lg border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="font-display text-xl">Admin Login</CardTitle>
            <CardDescription>Sign in to the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="admin@launchforge.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Link to="/admin/dashboard">
                <Button variant="hero" size="lg" className="w-full mt-2">Sign In</Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
