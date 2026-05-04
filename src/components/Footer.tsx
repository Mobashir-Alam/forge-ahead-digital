import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-display text-2xl font-bold">
              code<span className="gradient-text">shef</span>
            </Link>
            <p className="mt-4 text-sm text-charcoal-foreground leading-relaxed">
              High-performance websites & digital solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-charcoal-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Optimization</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-charcoal-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm text-charcoal-foreground leading-relaxed">
              Ready to start your project?<br />
              Let's build something great together.
            </p>
            <Link to="/contact" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
              Book a Free Consultation →
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-charcoal/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-foreground">
          <p>© 2026 codeshef. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
