import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Happiness Plans made our honeymoon absolutely magical! Every detail was perfectly planned, and we created memories that will last a lifetime.",
    trip: "Maldives Honeymoon"
  },
  {
    id: 2,
    name: "Mike Chen",
    location: "Toronto, Canada",
    rating: 5,
    text: "The team went above and beyond to customize our family vacation. The kids loved every moment, and we couldn't have asked for better service.",
    trip: "European Family Tour"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Professional, friendly, and incredibly knowledgeable. They handled all the visa requirements and made our dream trip to Japan seamless.",
    trip: "Japan Cultural Experience"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative bg-accent/20 rounded-lg p-8 mx-auto max-w-4xl">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <blockquote className="text-lg text-foreground mb-6 italic">
          "{testimonials[currentIndex].text}"
        </blockquote>
        
        <div className="space-y-2">
          <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
          <p className="text-muted-foreground text-sm">{testimonials[currentIndex].location}</p>
          <p className="text-primary text-sm font-medium">{testimonials[currentIndex].trip}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-primary hover:text-primary-foreground"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-primary hover:text-primary-foreground"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;