import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { astrologerConfig } from "@/config/astrologer";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? I'd love to hear from you. Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 shadow-card border-border h-full">
              <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${astrologerConfig.email}`}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {astrologerConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href={`tel:${astrologerConfig.phone}`}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {astrologerConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">{astrologerConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-semibold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href={astrologerConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={astrologerConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={astrologerConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                  <a
                    href={astrologerConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Office Hours & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-card border-border">
              <h2 className="text-2xl font-serif font-semibold mb-6">Office Hours</h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card border-border gradient-nebula">
              <h2 className="text-2xl font-serif font-semibold mb-4">Ready to Begin?</h2>
              <p className="text-muted-foreground mb-6">
                Don't wait to unlock the cosmic insights that await you. Book your personalized consultation today and
                start your transformative journey.
              </p>
              <a
                href="/booking"
                className="inline-block px-6 py-3 gradient-cosmic text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-smooth"
              >
                Book Your Reading
              </a>
            </Card>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="overflow-hidden shadow-card border-border">
            <iframe
              src={astrologerConfig.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full"
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
