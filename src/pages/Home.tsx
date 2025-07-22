import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Clock, Award } from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import heroBeach from "@/assets/hero-beach.jpg";
import destinationMountains from "@/assets/destination-mountains.jpg";
import destinationOcean from "@/assets/destination-ocean-new.jpg";
import destinationCulture from "@/assets/destination-culture-new.jpg";

const Home = () => {
  const destinations = [
    {
      image: destinationMountains,
      title: "Alpine Adventures",
      description: "Experience breathtaking mountain landscapes and pristine alpine lakes.",
      price: "From $2,299"
    },
    {
      image: destinationOcean,
      title: "Tropical Paradise",
      description: "Relax on stunning beaches with crystal clear waters and golden sunsets.",
      price: "From $1,899"
    },
    {
      image: destinationCulture,
      title: "Cultural Heritage",
      description: "Immerse yourself in rich history and vibrant local traditions.",
      price: "From $1,599"
    }
  ];

  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Travelers" },
    { icon: MapPin, number: "50+", label: "Destinations" },
    { icon: Clock, number: "24/7", label: "Customer Support" },
    { icon: Award, number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBeach})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 animate-fade-in text-glow leading-tight">
            Making Your Dream
            <span className="block text-accent animate-slide-up floating-animation font-display">Vacations Happen</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up font-display font-light">
            Discover extraordinary destinations and create unforgettable memories 
            with our personalized travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 card-3d group btn-emerge font-display font-medium"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Planning
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 glass-morphism border-white text-white hover:bg-card hover:text-primary card-3d btn-emerge font-display"
              onClick={() => {
                const destinationsSection = document.getElementById('destinations');
                if (destinationsSection) {
                  destinationsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Destinations
            </Button>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white floating-animation">
          <div className="text-center group cursor-pointer">
            <p className="text-sm mb-2 transition-all duration-300 group-hover:text-glow">Discover More</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center glass-morphism group-hover:shadow-glow transition-all duration-300">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scale-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with 3D effects */}
      <section className="py-16 bg-gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glass"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="space-y-4 card-3d glass-morphism p-6 rounded-xl group"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <stat.icon className="h-10 w-10 mx-auto text-accent transition-all duration-500 group-hover:rotate-y group-hover:text-glow" />
                <div>
                  <p className="text-3xl font-bold text-glow">{stat.number}</p>
                  <p className="text-white/80 group-hover:text-white transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-background scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-display">
              Explore our handpicked destinations that offer unique experiences 
              and breathtaking beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="btn-emerge font-display">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real travelers who trusted us with their dreams.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section id="services" className="py-20 bg-gradient-ocean scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-display">
            Let our expert travel planners create the perfect itinerary for your next unforgettable journey.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="bg-card text-primary hover:bg-card/90 btn-emerge font-display font-medium border border-border"
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Plan Your Trip Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;