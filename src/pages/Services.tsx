import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Heart, 
  Users, 
  FileText, 
  Headphones, 
  Plane,
  Calendar,
  Shield,
  Camera,
  Car
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: MapPin,
      title: "Customized Travel Packages",
      description: "Tailor-made itineraries designed specifically for your preferences, budget, and travel style. From adventure seekers to luxury travelers, we create unique experiences.",
      features: ["Personal consultation", "Custom itinerary design", "Flexible booking options", "Local insider access"],
      price: "Starting from $299"
    },
    {
      icon: Heart,
      title: "Honeymoon Planning",
      description: "Make your romantic getaway unforgettable with our specialized honeymoon packages. We handle every detail so you can focus on each other.",
      features: ["Romantic destinations", "Couple activities", "Special arrangements", "Privacy guaranteed"],
      price: "Starting from $1,299"
    },
    {
      icon: Users,
      title: "Group Tours",
      description: "Perfect for families, friends, or corporate groups. We organize seamless group travel experiences with coordinated activities and accommodations.",
      features: ["Group discounts", "Coordinated logistics", "Group activities", "Dedicated guide"],
      price: "Starting from $899 per person"
    },
    {
      icon: FileText,
      title: "Visa Assistance",
      description: "Navigate complex visa requirements with ease. Our experts guide you through the entire process to ensure smooth travel documentation.",
      features: ["Document preparation", "Application guidance", "Status tracking", "Expert consultation"],
      price: "Starting from $149"
    },
    {
      icon: Headphones,
      title: "24/7 Travel Support",
      description: "Round-the-clock assistance throughout your journey. From emergency support to itinerary changes, we're always here to help.",
      features: ["Emergency assistance", "Real-time support", "Itinerary modifications", "Local emergency contacts"],
      price: "Included with packages"
    }
  ];

  const additionalServices = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best flight deals and seat selections"
    },
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Special occasions and celebrations abroad"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for peace of mind"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture memories with professional guides"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Airport transfers and local transport"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Travel Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive travel solutions designed to make your journey seamless, 
            memorable, and perfectly tailored to your dreams.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our flagship services that form the foundation of exceptional travel experiences.
            </p>
          </div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="bg-card shadow-travel rounded-lg p-8 border border-border/50">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gradient-hero p-4 rounded-full">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                        <p className="text-primary font-semibold">{service.price}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="lg" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg p-12 text-center">
                    <service.icon className="h-24 w-24 text-primary mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                        <p className="text-foreground font-medium">Professional Service</p>
                        <p className="text-muted-foreground text-sm">Expert guidance every step</p>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                        <p className="text-foreground font-medium">Personalized Approach</p>
                        <p className="text-muted-foreground text-sm">Tailored to your needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Complementary services to enhance your travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card shadow-soft rounded-lg p-8 hover:shadow-travel transition-all duration-300 transform hover:scale-105 border border-border/50">
                  <div className="mb-6">
                    <service.icon className="h-12 w-12 text-primary mx-auto group-hover:text-primary-light transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light">
                    Inquire Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Our simple, proven process for creating your perfect trip
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Tell us your travel dreams and preferences" },
              { step: "02", title: "Planning", description: "We craft a personalized itinerary for you" },
              { step: "03", title: "Booking", description: "Secure your reservations with our expertise" },
              { step: "04", title: "Travel", description: "Enjoy your journey with our 24/7 support" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-hero text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-sunset text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Perfect Trip?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team create a customized travel experience that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-card text-primary hover:bg-card/90 border border-border">
              Start Planning
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-card hover:text-primary">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;