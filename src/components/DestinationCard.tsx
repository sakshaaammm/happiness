import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const DestinationCard = ({ image, title, description, price }: DestinationCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden card-3d group glass-morphism border border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 image-optimized loaded"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-glow animate-glow-pulse">
          {price}
        </div>
        {/* 3D floating badge */}
        <div className="absolute top-4 left-4 glass-morphism px-2 py-1 rounded-full text-xs text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 floating-animation">
          Popular
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-glow transition-all duration-300 font-serif">{title}</h3>
        <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 font-display">{description}</p>
        
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-gradient-hero group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-soft group-hover:shadow-glow btn-emerge font-display"
          onClick={() => {
            window.location.href = '/services';
          }}
        >
          Explore Package
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default DestinationCard;