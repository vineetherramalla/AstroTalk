import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { astrologerConfig } from "@/config/astrologer";
import { Sparkles } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <Sparkles className="h-12 w-12 text-accent animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Astrology Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our range of transformative consultations, each designed to provide deep insights into your
            cosmic blueprint and life path
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {astrologerConfig.services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* What to Expect Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-nebula rounded-2xl p-8 md:p-12 shadow-card"
        >
          <h2 className="text-3xl font-serif font-bold mb-6 text-center">What to Expect</h2>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Before Your Session</h3>
              <p>
                You'll receive a confirmation email with preparation guidelines and a questionnaire to help me
                understand your needs. Please have your birth details ready (date, time, and place).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">During Your Session</h3>
              <p>
                We'll connect via video call for an intimate, personalized experience. I'll analyze your chart and
                answer your questions, providing actionable insights and guidance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">After Your Session</h3>
              <p>
                You'll receive a detailed PDF summary of our session, including key insights, recommendations, and
                follow-up resources to continue your cosmic journey.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
