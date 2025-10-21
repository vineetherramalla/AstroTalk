import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Moon, Heart, Compass, Sparkles, Calendar, Hash, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  icon: string;
  delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
  Moon,
  Heart,
  Compass,
  Sparkles,
  Calendar,
  Hash,
};

export const ServiceCard = ({ title, description, price, duration, icon, delay = 0 }: ServiceCardProps) => {
  const navigate = useNavigate();
  const IconComponent = iconMap[icon] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full flex flex-col shadow-card hover:shadow-cosmic transition-smooth border-border group">
        <CardHeader>
          <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-serif text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{duration}</span>
            <span className="text-2xl font-serif font-bold text-primary">${price}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => navigate("/booking")}
            className="w-full gradient-cosmic text-primary-foreground font-semibold hover:shadow-glow transition-smooth"
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
