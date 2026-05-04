import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading, AnimatedCard } from "@/components/SectionHeading";
import { useContactModal } from "@/components/ContactFormModal";
import {
  Globe, Paintbrush, Rocket, ShoppingCart, Code2, Zap,
  Search, Plug, Bot, Wrench, CheckCircle2, ArrowRight,
  Star, Quote, Smartphone, MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";

const services = [
  { icon: Globe, title: "Business Website Development", desc: "Custom websites built for performance and conversions." },
  { icon: Paintbrush, title: "Website Redesign", desc: "Transform your outdated site into a modern experience." },
  { icon: Rocket, title: "Landing Page Design", desc: "High-converting landing pages that drive results." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Online stores built to sell and scale." },
  { icon: Code2, title: "Custom Web Applications", desc: "Tailored solutions for complex business needs." },
  { icon: Zap, title: "Website Speed Optimization", desc: "Blazing-fast load times for better UX and SEO." },
  { icon: Search, title: "Technical SEO Setup", desc: "Foundation-level SEO to boost organic visibility." },
  { icon: Plug, title: "API Integration", desc: "Seamless connections between your tools and platforms." },
  { icon: Bot, title: "AI Chatbot Integration", desc: "Intelligent automation for customer engagement." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing care to keep your site running perfectly." },
];

const portfolio = [
  { title: "Restaurant Business Website", desc: "A premium dining experience brought online with elegant design and reservation system.", img: portfolioRestaurant },
  { title: "Startup SaaS Landing Page", desc: "High-converting landing page that increased signups by 340% for a B2B startup.", img: portfolioSaas },
  { title: "Real Estate Website", desc: "Property listing platform with advanced search and virtual tour integration.", img: portfolioRealestate },
  { title: "E-commerce Store", desc: "Full-featured online store with 50K+ products and seamless checkout flow.", img: portfolioEcommerce },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals and project requirements." },
  { step: "02", title: "Strategy & Design", desc: "Creating modern UI/UX design focused on user experience." },
  { step: "03", title: "Development", desc: "Building fast and scalable solutions using modern technologies." },
  { step: "04", title: "Launch & Optimization", desc: "Deploying the project and optimizing performance." },
];

const benefits = [
  { icon: CheckCircle2, title: "Conversion-focused design" },
  { icon: Zap, title: "Fast loading websites" },
  { icon: Smartphone, title: "Mobile-first development" },
  { icon: Code2, title: "Scalable technology solutions" },
  { icon: MessageSquare, title: "Transparent communication" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVista", text: "codeshef completely transformed our online presence. The design quality exceeded our expectations, and we saw a 200% increase in conversions within the first month.", stars: 5 },
  { name: "Marcus Johnson", role: "Founder, GrowthLab", text: "Their professionalism is unmatched. They delivered on time, communicated clearly throughout, and the final product was pixel-perfect.", stars: 5 },
  { name: "Emily Rodriguez", role: "CMO, ScaleUp Inc", text: "Working with codeshef was seamless. They understood our vision immediately and built a website that truly represents our brand.", stars: 5 },
];

export default function Index() {
  const { setOpen } = useContactModal();

  return (
    <div>
      {/* Hero - Light blue animated background */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-light-bg">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
          <div className="hero-blob hero-blob-3" />
        </div>
        <div className="container-tight relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              High-Performance Websites & Digital Solutions for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We design and build fast, scalable, and conversion-focused websites that help businesses grow online.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={() => setOpen(true)}>
                Book a Free Consultation
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-surface border-b border-border">
        <div className="container-tight text-center">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-8">
            Trusted by growing businesses and startups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
            {["TechVista", "GrowthLab", "ScaleUp", "Nexora", "CloudPeak"].map((name) => (
              <span key={name} className="font-display text-xl md:text-2xl font-bold text-foreground">{name}</span>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground text-sm">
            Helping businesses build world-class digital experiences since 2020.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading label="What We Do" title="Our Core Services" description="End-to-end digital solutions to launch, grow, and scale your business online." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedCard key={s.title} delay={i * 0.05}>
                <div className="group p-6 rounded-xl border border-border bg-card hover-lift cursor-pointer">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
          {/* CTA after services */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
              Book a Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-surface">
        <div className="container-tight">
          <SectionHeading label="Our Work" title="Featured Projects" description="See how we've helped businesses transform their digital presence." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((p, i) => (
              <AnimatedCard key={p.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-display font-bold text-xl text-primary-foreground">{p.title}</h3>
                      <p className="text-sm text-primary-foreground/80 mt-1">{p.desc}</p>
                    </div>
                  </div>
                  <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="font-display font-bold text-lg text-card-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/portfolio">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button variant="hero" size="lg" onClick={() => setOpen(true)}>
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading label="How We Work" title="Our Simple Development Process" description="A streamlined approach to deliver exceptional results, every time." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <AnimatedCard key={p.step} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <span className="font-display text-5xl font-bold gradient-text">{p.step}</span>
                  <h3 className="font-display font-bold text-xl text-foreground mt-4 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-navy">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-3 block">Why Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground">
              Why Businesses Choose codeshef
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((b, i) => (
              <AnimatedCard key={b.title} delay={i * 0.08}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-navy-foreground text-sm">{b.title}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-tight">
          <SectionHeading label="Testimonials" title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedCard key={t.name} delay={i * 0.1}>
                <div className="p-8 rounded-xl border border-border bg-card hover-lift">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-tight text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Upgrade Your Website?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Book a free consultation and let's discuss your project.
            </p>
            <Button size="xl" className="bg-background text-foreground hover:bg-background/90 font-bold" onClick={() => setOpen(true)}>
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
