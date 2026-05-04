import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedCard } from "@/components/SectionHeading";
import { Mail, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="hero-glow top-0 left-1/3" />
        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Contact</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-navy-foreground mt-3 mb-4">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg text-charcoal-foreground max-w-xl">
              Ready to start your project? Book a free consultation and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <AnimatedCard>
                <div className="p-8 md:p-10 rounded-2xl border border-border bg-card">
                  <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">Book a Free Consultation</h2>
                  <p className="text-muted-foreground mb-8">Tell us about your project and we'll get back to you within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                        <Input required placeholder="John Smith" className="h-12" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                        <Input required type="email" placeholder="john@company.com" className="h-12" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                        <Input placeholder="Your Company" className="h-12" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Service Type *</label>
                        <Select required>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="app">App</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details *</label>
                      <Textarea required placeholder="Tell us about your project, goals, and timeline..." className="min-h-[140px]" />
                    </div>
                    <Button variant="hero" size="xl" type="submit" className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </AnimatedCard>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <AnimatedCard delay={0.1}>
                <div className="p-8 rounded-xl border border-border bg-card">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm">hello@codeshef.com</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.2}>
                <div className="p-8 rounded-xl border border-border bg-card">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground text-sm">We respond within 24 hours on business days.</p>
                </div>
              </AnimatedCard>
              <AnimatedCard delay={0.3}>
                <div className="p-8 rounded-xl gradient-bg">
                  <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">Why Book a Call?</h3>
                  <ul className="space-y-2 text-sm text-primary-foreground/90">
                    <li>✓ Free project consultation</li>
                    <li>✓ Custom strategy tailored to your needs</li>
                    <li>✓ Transparent pricing and timeline</li>
                    <li>✓ No commitment required</li>
                  </ul>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
