import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { astrologerConfig } from "@/config/astrologer";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary animate-float" />
              <span className="font-serif text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Celestial Insights
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Illuminating your cosmic path through the wisdom of the stars.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{astrologerConfig.email}</li>
              <li>{astrologerConfig.phone}</li>
              <li>{astrologerConfig.location}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href={astrologerConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={astrologerConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={astrologerConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={astrologerConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Celestial Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
