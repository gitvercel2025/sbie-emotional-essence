import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnlineDropdownOpen, setIsOnlineDropdownOpen] = useState(false);

  const navigation = [
    { 
      name: "QUEM SOMOS", 
      href: "/about",
      hasDropdown: true,
      submenu: [
        { name: "CONHEÇA A SBIE", href: "/about" },
        { name: "NOSSA METODOLOGIA", href: "/about#metodologia" },
        { name: "RODRIGO FONSECA", href: "/about#rodrigo" },
      ]
    },
    { 
      name: "TREINAMENTOS", 
      href: "/courses",
      hasDropdown: true,
      submenu: [
        { name: "LOTUS INTELIGÊNCIA EMOCIONAL", href: "/courses#lotus" },
        { name: "LOTUS LEGADO", href: "/courses#legado" },
        { name: "FORMAÇÃO EM INTELIGÊNCIA EMOCIONAL", href: "/courses#formacao" },
        { name: "FORMAÇÃO MASTER EM INTELIGÊNCIA EMOCIONAL", href: "/courses#master" },
        { name: "SBIE BUSINESS", href: "/courses#business" },
        { name: "EMBAIXADORES DO BEM", href: "/courses#embaixadores" },
      ]
    },
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
            <a href="https://www.facebook.com/sbie.oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-sbie-copper transition-colors">Facebook</a>
            <a href="https://www.youtube.com/sbiemocional" target="_blank" rel="noopener noreferrer" className="hover:text-sbie-copper transition-colors">YouTube</a>
            <a href="https://www.linkedin.com/school/sbie/" target="_blank" rel="noopener noreferrer" className="hover:text-sbie-copper transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/sbie.oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-sbie-copper transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* MEC Recognition Banner */}
      <div className="bg-gradient-to-r from-sbie-copper to-sbie-olive text-white py-4 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" 
              alt="Selo MEC" 
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold uppercase tracking-wide">
              🏆 Treinamentos Reconhecidos pelo MEC
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
            <a href="/" className="flex flex-col items-start space-y-1 group">
                <img 
                  src="https://i.imgur.com/vnMj83l.png" 
                  alt="SBIE Logo" 
                  className="h-20 w-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide"
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-sbie-neutral-green/20 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {item.submenu?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-5 py-3 text-sm text-sbie-dark-green hover:bg-gradient-to-r hover:from-sbie-beige/30 hover:to-sbie-copper/10 transition-all duration-200 hover:pl-7 font-medium"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
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