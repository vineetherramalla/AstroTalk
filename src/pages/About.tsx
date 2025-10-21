import { motion } from "framer-motion";
import { astrologerConfig } from "@/config/astrologer";
import { Star, Sparkles, Hash, Sun } from "lucide-react";
import astrologerPortrait from "@/assets/astrologer-portrait.jpg";

const iconMap = {
  Star,
  Sparkles,
  Hash,
  Sun,
};

const About = () => {
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
            About {astrologerConfig.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {astrologerConfig.title}
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-cosmic opacity-20 blur-2xl rounded-full" />
              <img
                src={astrologerPortrait}
                alt={astrologerConfig.name}
                className="relative rounded-2xl shadow-cosmic w-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold">My Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {astrologerConfig.bio}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My practice is rooted in compassion, authenticity, and a deep reverence for the cosmic forces that
                shape our lives. I believe that astrology is not about predicting a fixed future, but about
                understanding the energies at play and making empowered choices aligned with your highest self.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">My Path to the Stars</h2>
            <p className="text-lg text-muted-foreground">
              A journey spanning two decades of cosmic exploration
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                year: "2003",
                title: "The Beginning",
                description:
                  "Discovered my calling during a transformative spiritual retreat in India, where I was introduced to Vedic astrology.",
              },
              {
                year: "2008",
                title: "Formal Training",
                description:
                  "Completed intensive certification in Vedic Astrology and began studying Tarot under renowned masters.",
              },
              {
                year: "2013",
                title: "Professional Practice",
                description:
                  "Opened my practice in Los Angeles, offering personalized readings and workshops to seekers worldwide.",
              },
              {
                year: "2018",
                title: "Expanded Offerings",
                description:
                  "Added Numerology and advanced predictive techniques, serving over 5,000 clients from diverse backgrounds.",
              },
              {
                year: "2023",
                title: "Present Day",
                description:
                  "Continuing to guide souls on their cosmic journey while mentoring aspiring astrologers and sharing wisdom online.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-serif font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2 shadow-glow" />
                <div className="flex-grow pb-8 border-l-2 border-border pl-6 -ml-2">
                  <h3 className="text-xl font-serif font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Specialized knowledge across multiple mystical disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {astrologerConfig.expertise.map((area, index) => {
              const IconComponent = iconMap[area.icon as keyof typeof iconMap] || Star;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-cosmic transition-smooth"
                >
                  <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
