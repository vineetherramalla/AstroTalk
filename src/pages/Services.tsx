"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ServiceCard"
import { astrologerConfig } from "@/config/astrologer"
import { Sparkles } from "lucide-react"

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/videos/services-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-[1]" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-32 md:pt-40"
        >
          <div className="inline-block mb-6">
            <Sparkles className="h-12 w-12 text-accent animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-cosmic bg-clip-text text-white">
            Astrology Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Choose from our range of transformative consultations, each designed to provide deep insights into your
            cosmic blueprint and life path
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Services Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {astrologerConfig.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                
                details={service.details}
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
                  You'll receive a confirmation with preparation guidelines and a questionnaire to help me understand
                  your needs. Please have your birth details ready (date, time, and place).
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
                  You'll receive a detailed summary of our session, including key insights, recommendations, and
                  follow-up resources to continue your cosmic journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
