import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Award, Target, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Travel",
      description: "We live and breathe travel, bringing genuine enthusiasm to every trip we plan."
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "With connections worldwide, we offer authentic local experiences everywhere."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Every traveler is unique, and we tailor experiences to match your dreams."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "We maintain the highest standards in service quality and customer satisfaction."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      description: "20+ years in luxury travel with a passion for creating magical experiences."
    },
    {
      name: "David Park",
      role: "Head of Operations",
      description: "Expert in logistics and ensuring every detail of your journey is perfect."
    },
    {
      name: "Maria Santos",
      role: "Cultural Experience Director",
      description: "Specializes in authentic cultural immersion and local connections."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Happiness Plans
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been turning travel dreams into reality, 
            one carefully crafted journey at a time.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create transformative travel experiences that connect people with the world's 
                most beautiful destinations, diverse cultures, and unforgettable moments. We believe 
                that travel has the power to broaden perspectives, create lasting memories, and 
                bring happiness to people's lives.
              </p>
              <div className="bg-accent/20 p-6 rounded-lg">
                <p className="text-foreground font-medium">
                  "Every journey should be a story worth telling, filled with wonder, 
                  discovery, and pure joy."
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the world's most trusted travel companion, known for our unwavering 
                commitment to excellence, innovation in travel planning, and our ability to 
                turn every client's travel dreams into extraordinary realities that exceed 
                their wildest expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Sustainable tourism practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Innovative technology integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground">Global community building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-card shadow-soft rounded-lg p-8 hover:shadow-travel transition-all duration-300 transform hover:scale-105 border border-border/50">
                  <div className="mb-6">
                    <value.icon className="h-12 w-12 text-primary mx-auto group-hover:text-primary-light transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-xl text-muted-foreground">
                From humble beginnings to global adventures
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2009
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded by Sarah Mitchell after her own transformative travel experience, 
                    Happiness Plans started as a small agency with a big dream: making travel 
                    accessible and magical for everyone.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2015
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">
                    We expanded our network to include partners in over 30 countries, 
                    allowing us to offer authentic local experiences worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Digital Innovation</h3>
                  <p className="text-muted-foreground">
                    Adapted to changing times by launching our digital platform while 
                    maintaining the personal touch that makes us special.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Today</h3>
                  <p className="text-muted-foreground">
                    With over 10,000 happy travelers and 50+ destinations, we continue to 
                    innovate and create extraordinary experiences that bring happiness to lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate individuals behind your perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-card shadow-soft rounded-lg p-8 border border-border/50">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your dream vacation is just one conversation away.
          </p>
          <Button variant="hero" size="lg" className="bg-card text-primary hover:bg-card/90 border border-border">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;