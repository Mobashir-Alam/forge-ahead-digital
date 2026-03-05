import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/SectionHeading";
import { Search, Lightbulb, Paintbrush, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We dive deep into your business, audience, and goals through research and stakeholder interviews.", color: "from-blue-500 to-blue-600" },
  { icon: Lightbulb, title: "Planning", desc: "We define the project scope, technical requirements, and create a detailed roadmap.", color: "from-indigo-500 to-indigo-600" },
  { icon: Paintbrush, title: "Design", desc: "Our designers craft stunning, user-centered interfaces with wireframes and interactive prototypes.", color: "from-violet-500 to-violet-600" },
  { icon: Code2, title: "Development", desc: "We build your solution using modern, scalable technologies with clean, maintainable code.", color: "from-purple-500 to-purple-600" },
  { icon: TestTube, title: "Testing", desc: "Rigorous QA testing across devices and browsers ensures a flawless user experience.", color: "from-fuchsia-500 to-fuchsia-600" },
  { icon: Rocket, title: "Launch", desc: "We deploy your project, monitor performance, and optimize for peak results.", color: "from-pink-500 to-pink-600" },
];

export default function Process() {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="hero-glow bottom-0 left-0" />
        <div className="container-tight relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Process</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-navy-foreground mt-3 mb-4">
              How We <span className="gradient-text">Build</span>
            </h1>
            <p className="text-lg text-charcoal-foreground max-w-xl">A proven process that delivers exceptional results.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, i) => (
                <AnimatedCard key={step.title} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-right" : ""}`}>
                      <span className="font-display text-4xl font-bold gradient-text">0{i + 1}</span>
                      <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full gradient-bg shrink-0 z-10">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-bg">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">Let's discuss your project and find the perfect solution.</p>
          <Button size="xl" className="bg-background text-foreground hover:bg-background/90 font-bold" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
