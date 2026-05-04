import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCard } from "@/components/SectionHeading";
import { Target, Heart, Lightbulb, Users, Shield, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every decision we make is focused on driving measurable outcomes." },
  { icon: Heart, title: "Client-First", desc: "We treat your project as our own, with genuine care and dedication." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of technology trends to deliver cutting-edge solutions." },
  { icon: Users, title: "Collaboration", desc: "Transparent communication and partnership at every step." },
  { icon: Shield, title: "Quality", desc: "No shortcuts. We deliver pixel-perfect, production-ready work." },
  { icon: Zap, title: "Speed", desc: "Rapid delivery without compromising on quality or attention to detail." },
];

export default function About() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="hero-glow top-0 right-1/4" />
        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">About Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-navy-foreground mt-3 mb-4">
              Building the <span className="gradient-text">Future of Web</span>
            </h1>
            <p className="text-lg text-charcoal-foreground max-w-xl">
              codeshef helps businesses build modern digital products that are fast, scalable, and designed to convert visitors into customers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedCard>
              <div>
                <span className="text-sm font-semibold text-primary tracking-widest uppercase">Our Mission</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Empowering businesses through exceptional digital experiences
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe every business deserves a world-class digital presence. Our mission is to bridge the gap between ambitious businesses and the technology they need to succeed online.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From startups launching their first product to established companies modernizing their digital infrastructure, we bring the same level of passion and precision to every project.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "150+", label: "Projects Delivered" },
                  { num: "98%", label: "Client Satisfaction" },
                  { num: "50+", label: "Happy Clients" },
                  { num: "5+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl border border-border bg-card text-center hover-lift">
                    <span className="font-display text-3xl font-bold gradient-text">{stat.num}</span>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading label="Our Values" title="What Drives Us" description="The principles that guide every project we take on." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedCard key={v.title} delay={i * 0.08}>
                <div className="p-8 rounded-xl border border-border bg-card hover-lift">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-card-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-3xl text-center">
          <SectionHeading label="Our Approach" title="Technology Meets Creativity" description="We combine cutting-edge technology with thoughtful design to create digital products that not only look stunning but perform exceptionally." />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our development process is iterative and transparent. We work closely with our clients, providing regular updates and incorporating feedback at every stage. This collaborative approach ensures the final product perfectly aligns with your vision and business objectives.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Work With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
