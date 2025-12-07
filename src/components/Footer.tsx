import { Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Integrations", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "API", "Help Center", "Community"],
    Legal: ["Privacy", "Terms", "Security", "GDPR"],
  };

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center font-display font-bold text-xl text-primary-foreground">
                M
              </div>
              <span className="font-display font-bold text-2xl">Merito</span>
            </div>
            <p className="text-muted-foreground mb-2 max-w-sm">
              The data platform built for fast-growing online brands. 
              Smash your sales targets with unified analytics.
            </p>
            <div className="space-y-3 max-w-md">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <Input type="email" placeholder="Work email" className="bg-secondary/60 border-border/60" required />
                <Button type="submit" variant="hero" className="sm:min-w-[140px]">Get updates</Button>
              </form>
              <p className="text-xs text-muted-foreground">No spam. Product updates and playbooks only.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="mailto:hello@clickmerito.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Merito. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Made with ❤️ in India
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-muted-foreground">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
