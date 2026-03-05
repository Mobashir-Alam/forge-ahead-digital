import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCard } from "@/components/SectionHeading";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";

const categories = ["All", "Business Websites", "Landing Pages", "E-commerce", "Web Applications"];

const projects = [
  { title: "Gourmet Bistro", category: "Business Websites", img: portfolioRestaurant, desc: "Premium restaurant website with online reservation system and menu management.", tech: ["React", "Node.js", "PostgreSQL"], result: "180% increase in online reservations" },
  { title: "CloudSync SaaS", category: "Landing Pages", img: portfolioSaas, desc: "High-converting SaaS landing page for a cloud collaboration startup.", tech: ["Next.js", "Tailwind CSS", "Framer Motion"], result: "340% increase in free trial signups" },
  { title: "PrimeProperty", category: "Business Websites", img: portfolioRealestate, desc: "Real estate platform with advanced property search and virtual tours.", tech: ["React", "TypeScript", "Mapbox"], result: "250% more qualified leads" },
  { title: "StyleVault", category: "E-commerce", img: portfolioEcommerce, desc: "Fashion e-commerce store with 50K+ products and personalized recommendations.", tech: ["Shopify", "Custom Theme", "AI Recommendations"], result: "420% revenue growth in 6 months" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="hero-glow top-0 left-1/2" />
        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Portfolio</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-navy-foreground mt-3 mb-4">
              Our <span className="gradient-text">Best Work</span>
            </h1>
            <p className="text-lg text-charcoal-foreground max-w-xl">Real results for real businesses.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "gradient-bg text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-xl border border-border bg-card overflow-hidden hover-lift"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-display font-bold text-xl text-card-foreground mt-2 mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-primary">📈 {p.result}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Have a Project in Mind?</h2>
          <p className="text-primary-foreground/80 mb-8">Let's create something remarkable together.</p>
          <Button size="xl" className="bg-background text-foreground hover:bg-background/90 font-bold" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
