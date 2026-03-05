import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCard } from "@/components/SectionHeading";
import { Globe, Paintbrush, ShoppingCart, Code2, Zap, Search, Wrench, Rocket } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Web Design & Development",
    desc: "We create stunning, high-performance websites tailored to your business goals.",
    items: ["Business Websites — Professional sites that build trust and drive leads.", "Landing Pages — Conversion-optimized pages that turn visitors into customers.", "Redesign Services — Modernize your existing website with cutting-edge design."],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Full-featured online stores built to sell, scale, and delight customers.",
    items: ["Shopify Stores — Custom Shopify themes and app integrations.", "WooCommerce Stores — Flexible WordPress-based e-commerce solutions."],
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    desc: "Tailored software solutions for complex business requirements.",
    items: ["Dashboards — Data visualization and admin panels.", "SaaS Platforms — Scalable software-as-a-service products.", "Internal Tools — Workflow automation and productivity apps."],
  },
  {
    icon: Zap,
    title: "Optimization Services",
    desc: "Maximize your website's speed and search engine visibility.",
    items: ["Website Speed Optimization — Sub-second load times.", "Technical SEO — Schema markup, Core Web Vitals, and crawlability."],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Keep your website secure, updated, and performing at its best.",
    items: ["Updates — Regular CMS and plugin updates.", "Bug Fixes — Rapid response to issues.", "Monitoring — 24/7 uptime and performance monitoring."],
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="hero-glow top-0 right-0" />
        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Services</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-navy-foreground mt-3 mb-4">
              Digital Solutions That <span className="gradient-text">Drive Growth</span>
            </h1>
            <p className="text-lg text-charcoal-foreground max-w-xl">
              From design to deployment, we deliver end-to-end digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight space-y-20">
          {categories.map((cat, i) => (
            <AnimatedCard key={cat.title} delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5">
                    <cat.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{cat.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{cat.desc}</p>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item} className="p-5 rounded-lg border border-border bg-card hover-lift">
                      <p className="text-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">Tell us about your project and get a free strategy consultation.</p>
          <Button size="xl" className="bg-background text-foreground hover:bg-background/90 font-bold" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
