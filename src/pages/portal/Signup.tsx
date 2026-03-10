import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { account, databases } from "@/lib/appwrite";
import { ID } from "appwrite";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const signupUser = async () => {
  try {

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    // create auth user
    const user = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    // add to users table
    await databases.createDocument(
      "69ae1bb900277c963edf",
      "users",
      ID.unique(),
      {
        name,
        email,
        role: "client",
        company: "",
        phone: "",
      }
    );

    // login session
    await account.createEmailPasswordSession(
      email,
      password
    );

    navigate("/dashboard");

  }catch (err: any) {
  console.log("ERROR:", err);
  alert(err?.message || "Signup failed");
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
            <CardTitle className="font-display text-xl">Create an account</CardTitle>
            <CardDescription>Get started with your client portal</CardDescription>
          </CardHeader>
          <CardContent>
            <form
  onSubmit={(e) => {
    e.preventDefault();
    signupUser();
  }} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <Input id="confirm" type="password" placeholder="••••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
              </div>
             <Button
  type="submit"
  variant="hero"
  size="lg"
  className="w-full mt-2"
>
  Create Account
</Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
