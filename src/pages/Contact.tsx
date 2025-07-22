import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@happinessplans.com",
      description: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Travel Street, Adventure City, AC 12345",
      description: "Visit us for personalized planning"
    },
    {
      icon: Clock,
      title: "Hours",
      value: "Mon-Fri: 9AM-7PM, Sat-Sun: 10AM-6PM",
      description: "We're here when you need us"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Ready to start planning your dream vacation? We'd love to hear from you 
            and help create your perfect travel experience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-card shadow-soft rounded-lg p-8 hover:shadow-travel transition-all duration-300 transform hover:scale-105 border border-border/50">
                  <div className="bg-gradient-hero p-4 rounded-full w-fit mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-primary font-medium mb-2">{item.value}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-card shadow-travel rounded-lg p-8 border border-border/50">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our travel experts will get back to you with 
                  personalized recommendations and planning assistance.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your dream vacation, travel dates, preferences, or any questions you have..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 p-6 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Quick Response Guarantee</h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent travel needs, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Map Placeholder */}
              <div className="bg-card shadow-travel rounded-lg overflow-hidden border border-border/50">
                <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Our Office Location</h3>
                    <p className="text-muted-foreground">
                      123 Travel Street<br />
                      Adventure City, AC 12345
                    </p>
                    <Button variant="outline" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>

              {/* Office Visit Info */}
              <div className="bg-card shadow-soft rounded-lg p-8 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">Visit Our Office</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer to meet in person? We'd love to welcome you to our office for a 
                  personalized consultation. Our travel experts will work with you to create 
                  the perfect itinerary.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground text-sm">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Parking Available</p>
                      <p className="text-muted-foreground text-sm">Free parking in our building</p>
                    </div>
                  </div>
                </div>

                <Button variant="travel" className="w-full mt-6">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book my trip?",
                answer: "We recommend booking 2-3 months in advance for domestic trips and 3-6 months for international travel. However, we can accommodate last-minute requests based on availability."
              },
              {
                question: "Do you charge consultation fees?",
                answer: "Initial consultations are completely free. We only charge service fees once you book a package with us, and these are clearly outlined upfront."
              },
              {
                question: "What if I need to cancel or change my trip?",
                answer: "We understand plans can change. Our flexible booking policies and travel insurance options help protect your investment. Specific terms depend on the suppliers and timing."
              },
              {
                question: "Do you provide travel insurance?",
                answer: "Yes, we offer comprehensive travel insurance options to protect your trip investment and provide peace of mind during your travels."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card shadow-soft rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;