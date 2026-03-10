import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Query } from "appwrite";
import { account, databases } from "@/lib/appwrite";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
useEffect(() => {
  let cancelled = false;

  const checkSession = async () => {
    try {

      const user = await account.get();

      if (cancelled) return;

      const res = await databases.listDocuments(
        "69ae1bb900277c963edf",
        "users",
        [Query.equal("email", user.email)]
      );

      const dbUser = res.documents[0];

      if (!dbUser) return;

      if (dbUser.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      // no session
    }
  };

  checkSession();

  return () => {
    cancelled = true;
  };

}, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async () => {
  try {

    try {
      await account.deleteSession("current");
    } catch (e) {}

    await account.createEmailPasswordSession(
      email,
      password
    );

    const user = await account.get();

    const res = await databases.listDocuments(
      "69ae1bb900277c963edf",
      "users",
      [Query.equal("email", user.email)]
    );

    const dbUser = res.documents[0];

    if (!dbUser) {
      alert("User not found in DB");
      return;
    }

    if (dbUser.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }

  } catch (err: any) {
    console.log(err);
    alert(err.message);
  }
};

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-4">
      <div className="absolute inset-0 hero-light-bg opacity-50" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
            Launch<span className="gradient-text">Forge</span>
          </Link>
          <p className="text-muted-foreground mt-2">Client Portal</p>
        </div>
        <Card className="shadow-lg border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="font-display text-xl">Welcome back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form
  onSubmit={(e) => {
    e.preventDefault();
    loginUser();
  }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            <Button
  type="submit"
  variant="hero"
  size="lg"
  className="w-full mt-2"
>
  Sign In
</Button>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
