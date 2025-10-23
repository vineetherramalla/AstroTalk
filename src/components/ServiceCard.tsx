"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ReadMoreModal } from "./ReadMoreModal"

interface ServiceCardProps {
  title: string
  description: string
  image?: string
  delay?: number
  details?: {
    intro: string
    sections: Array<{
      title: string
      description: string
    }>
    categories?: string[]
  }
}

export const ServiceCard = ({ title, description, image, delay = 0, details }: ServiceCardProps) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="h-full flex flex-col shadow-card hover:shadow-cosmic transition-smooth border-border group overflow-hidden">
          {image && (
            <div className="w-full h-48 overflow-hidden bg-muted">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="font-serif text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground mb-4">{description}</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            {details && (
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="font-semibold  px-8 border-primary hover:shadow-glow transition-smooth"
              >
                Read More
              </Button>
            )}
            <Button
              onClick={() => navigate("/contact")}
              className={`${details ? "flex-1" : "w-full"} gradient-cosmic text-primary-foreground font-semibold hover:shadow-glow transition-smooth`}
            >
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {details && (
        <ReadMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title} details={details} />
      )}
    </>
  )
}
