import { motion } from "framer-motion";
import { BookingForm } from "@/components/BookingForm";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Video, FileText } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Book Your Consultation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step on your cosmic journey. Fill out the form below to schedule your personalized reading.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 md:p-8 shadow-card border-border">
              <h2 className="text-2xl font-serif font-semibold mb-6">Consultation Details</h2>
              <BookingForm />
            </Card>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="p-6 shadow-card border-border">
              <h3 className="font-serif font-semibold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">1. Choose Your Date</p>
                    <p className="text-sm text-muted-foreground">Select your preferred date and time</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">2. Receive Confirmation</p>
                    <p className="text-sm text-muted-foreground">Get your booking details via email</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Video className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">3. Join Your Session</p>
                    <p className="text-sm text-muted-foreground">Connect via video call at scheduled time</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">4. Get Your Summary</p>
                    <p className="text-sm text-muted-foreground">Receive detailed insights and recommendations</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card border-border gradient-nebula">
              <h3 className="font-serif font-semibold mb-3">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                If you have questions or need assistance booking your consultation, feel free to reach out.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Email: <span className="text-foreground">stella@celestialinsights.com</span>
                </p>
                <p className="text-muted-foreground">
                  Phone: <span className="text-foreground">+1 (555) 123-4567</span>
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-card border-border bg-gradient-cosmic text-primary-foreground">
              <h3 className="font-serif font-semibold mb-2">Cancellation Policy</h3>
              <p className="text-sm text-primary-foreground/90">
                Please provide at least 24 hours notice for cancellations or rescheduling. Full refunds are available
                for cancellations made 48+ hours in advance.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
