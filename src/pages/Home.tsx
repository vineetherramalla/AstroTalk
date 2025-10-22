import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TestimonialCard } from "@/components/TestimonialCard";
import { astrologerConfig } from "@/config/astrologer";
import { Sparkles, Star, Moon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-cosmic.jpg";
import astrologerPortrait from "@/assets/astrologer-portrait.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block mb-6"
            >
              <Sparkles className="h-16 w-16 text-accent animate-float" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                {astrologerConfig.tagline}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-up">
              Discover clarity, purpose, and cosmic wisdom through personalized astrology readings
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="gradient-cosmic text-white font-semibold text-lg px-8 hover:shadow-glow transition-smooth"
              >
                Book Your Consultation
              </Button>
              <Button
                onClick={() => navigate("/services")}
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 border-primary hover:shadow-glow transition-smooth"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Star className="h-6 w-6 text-accent" />
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-nebula">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-cosmic opacity-20 blur-2xl rounded-full" />
              <img
                src={astrologerPortrait}
                alt={astrologerConfig.name}
                className="relative rounded-2xl shadow-cosmic w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Meet {astrologerConfig.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {astrologerConfig.bio}
              </p>
              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="border-primary hover:bg-primary/10 transition-smooth"
              >
                Learn More About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformative readings tailored to illuminate your unique cosmic path
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {astrologerConfig.services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-cosmic transition-smooth"
              >
                <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Moon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate("/services")}
              size="lg"
              variant="outline"
              className="border-primary hover:bg-primary/10 transition-smooth"
            >
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-nebula">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those who've discovered their cosmic truth
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {astrologerConfig.testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center gradient-cosmic rounded-3xl p-12 shadow-cosmic"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Discover Your Cosmic Path?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Book your personalized consultation and unlock the wisdom of the stars
            </p>
            <Button
              onClick={() => navigate("/contact")}
              size="lg"
              variant="secondary"
              className="font-semibold text-lg px-8 bg-background text-foreground hover:bg-background/90 transition-smooth"
            >
              Schedule Your Reading
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
