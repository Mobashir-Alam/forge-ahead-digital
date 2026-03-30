import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoading(false);
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
      return;
    }

    // Check if user has admin role
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.user.id);

    const hasAdmin = roles?.some((r) => r.role === "admin");
    setLoading(false);

    if (!hasAdmin) {
      await supabase.auth.signOut();
      toast({ title: "Access denied", description: "You do not have admin privileges.", variant: "destructive" });
      return;
    }

    navigate("/admin/dashboard");
  };

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
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="admin@launchforge.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button variant="hero" size="lg" className="w-full mt-2" type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
