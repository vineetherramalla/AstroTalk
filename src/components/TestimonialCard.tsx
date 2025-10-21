import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  location: string;
}

export const TestimonialCard = ({ name, rating, text, location }: TestimonialCardProps) => {
  return (
    <Card className="shadow-card border-border">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-foreground mb-4 italic">"{text}"</p>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};
