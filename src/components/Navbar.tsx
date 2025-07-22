import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'nav-blur shadow-3d' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with 3D effect */}
          <Link to="/" className="flex items-center space-x-2 text-primary font-bold text-xl group nav-emerge">
            <Plane className="h-6 w-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            <span className="transition-all duration-300 group-hover:text-glow font-serif tracking-tight">Happiness Plans</span>
          </Link>

          {/* Desktop Navigation with enhanced effects */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group nav-emerge font-display ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-hero transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <ThemeToggle />
            <Button 
              variant="hero" 
              size="sm" 
              className="animate-glow-pulse btn-emerge font-display font-medium"
              onClick={() => {
                window.location.href = '/contact';
              }}
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with slide animation */}
        {isOpen && (
          <div className="md:hidden animate-slide-in-left">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-morphism border-t border-border/50">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:bg-accent/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center space-x-2">
                <ThemeToggle />
                <Button variant="hero" size="sm" className="flex-1">
                  Plan Your Trip
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;