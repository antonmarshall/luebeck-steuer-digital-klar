
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Startseite", href: "#home" },
    { name: "Leistungen", href: "#services" },
    { name: "Über mich", href: "#about" },
    { name: "Vorgehensweise", href: "#process" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="text-steuerblau font-heading font-bold text-xl md:text-2xl">
          Steuerberater Lübeck
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-steuerblau-dark hover:text-steueraccent transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-accent btn-md"
          >
            Erstgespräch buchen
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-steuerblau focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <div className="container flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-steuerblau-dark hover:text-steueraccent transition-colors duration-200 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-accent btn-md self-start"
            onClick={() => setIsOpen(false)}
          >
            Erstgespräch buchen
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
