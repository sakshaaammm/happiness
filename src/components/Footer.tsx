import { Link } from "react-router-dom";
import { Plane, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-6 w-6" />
              <span className="text-xl font-bold">Happiness Plans</span>
            </div>
            <p className="text-primary-foreground/80">
              Making your dream vacations happen with personalized travel experiences 
              and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-accent transition-colors">Home</Link>
              <Link to="/about" className="block hover:text-accent transition-colors">About Us</Link>
              <Link to="/services" className="block hover:text-accent transition-colors">Services</Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">Custom Travel Packages</p>
              <p className="text-primary-foreground/80">Honeymoon Planning</p>
              <p className="text-primary-foreground/80">Group Tours</p>
              <p className="text-primary-foreground/80">Visa Assistance</p>
              <p className="text-primary-foreground/80">24/7 Support</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">hello@happinessplans.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">123 Travel St, Adventure City, AC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Happiness Plans. All rights reserved. | Making dreams come true, one journey at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;