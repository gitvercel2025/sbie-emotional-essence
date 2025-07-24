import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "QUEM SOMOS", href: "/about" },
    { name: "TREINAMENTOS", href: "/courses" },
    { name: "ONLINE", href: "#online" },
    { name: "BLOG", href: "#blog" },
    { name: "IMPRENSA", href: "#imprensa" },
    { name: "STORE", href: "#store" },
    { name: "CONTATO", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-sbie-dark-green text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href="mailto:contato@sbie.com.br" className="flex items-center space-x-2 hover:text-sbie-copper transition-colors">
              <Mail size={16} />
              <span>contato@sbie.com.br</span>
            </a>
            <a href="tel:+5511940069695" className="flex items-center space-x-2 hover:text-sbie-copper transition-colors">
              <Phone size={16} />
              <span>+55 11 94006-9695</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-sbie-copper transition-colors">Facebook</a>
            <a href="#" className="hover:text-sbie-copper transition-colors">YouTube</a>
            <a href="#" className="hover:text-sbie-copper transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-sbie-copper transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.imgur.com/2Qo6FUn.png" 
                alt="SBIE Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={cn(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}>
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300 font-medium text-sm uppercase tracking-wide rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;