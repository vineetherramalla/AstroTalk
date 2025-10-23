"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface ReadMoreModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  details: {
    intro: string
    sections: Array<{
      title: string
      description: string
    }>
    categories?: string[]
  }
}

export const ReadMoreModal = ({ isOpen, onClose, title, details }: ReadMoreModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border">
              {/* Header */}
              <div className="sticky top-0 bg-primary p-6 flex items-center justify-between border-b border-border">
                <h2 className="text-2xl font-serif font-bold text-white">{title}</h2>
                <button onClick={onClose} className="text-muted-foreground hover:opacity-80 transition-opacity">
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground text-lg font-semibold">{details.intro}</p>

                <div className="space-y-4">
                  {details.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                    </div>
                  ))}
                </div>

                {/* Categories Section */}
                {details.categories && details.categories.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Contact for expert consultancy on these categories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {details.categories.map((category, index) => (
                        <div
                          key={index}
                          className="bg-primary/10 rounded-lg p-3 text-foreground font-medium hover:bg-primary/20 transition-smooth"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Close Button */}
                <div className="pt-4">
                  <Button
                    onClick={onClose}
                    className="w-full gradient-cosmic text-primary-foreground font-semibold hover:shadow-glow transition-smooth"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
