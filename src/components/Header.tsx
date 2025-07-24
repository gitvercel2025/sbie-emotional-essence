import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnlineDropdownOpen, setIsOnlineDropdownOpen] = useState(false);

  const navigation = [
    { name: "QUEM SOMOS", href: "/about" },
    { name: "TREINAMENTOS", href: "/courses" },
    { 
      name: "ONLINE", 
      href: "#online",
      hasDropdown: true,
      submenu: [
        { name: "SBIE ACADEMY", href: "#academy" },
        { name: "SBIE CARE", href: "#care" },
        { name: "ACADEMIA EMOCIONAL", href: "#academia-emocional" },
        { name: "GERANDO COM AMOR", href: "#gerando-amor" },
        { name: "ALMAS GÊMEAS", href: "#almas-gemeas" },
        { name: "LIVROS DIGITAIS", href: "#livros-digitais" },
      ]
    },
    { name: "BLOG", href: "#blog" },
    { name: "IMPRENSA", href: "#imprensa" },
    { name: "STORE", href: "#store" },
    { name: "CONTATO", href: "/contact" },
  ];

  return (
    <>
      {/* MEC Recognition Banner */}
      <div className="bg-white border-b border-sbie-neutral-green/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center space-x-4 text-sbie-dark-green">
            <img 
              src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" 
              alt="Selo MEC" 
              className="h-8 w-auto"
            />
            <span className="text-sm font-medium">
              Treinamentos Reconhecidos pelo MEC
            </span>
          </div>
        </div>
      </div>

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
              <a href="/" className="flex items-center space-x-3">
                <img 
                  src="https://i.imgur.com/BCg25F3.png" 
                  alt="SBIE Logo" 
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsOnlineDropdownOpen(!isOnlineDropdownOpen)}
                        className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isOnlineDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-sbie-neutral-green/20 py-2 z-50">
                          {item.submenu?.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-sbie-dark-green hover:bg-sbie-beige/50 transition-colors"
                              onClick={() => setIsOnlineDropdownOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
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