import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    {
      name: "QUEM SOMOS",
      hasDropdown: true,
      submenu: [
        { name: "CONHEÇA A SBIE", href: "https://www.sbie.com.br/conheca-a-sbie/" },
        { name: "NOSSA METODOLOGIA", href: "https://www.sbie.com.br/nossa-metodologia/" },
        { name: "RODRIGO FONSECA", href: "https://rodrigofonsecaie.com.br/" },
      ]
    },
    {
      name: "TREINAMENTOS",
      hasDropdown: true,
      submenu: [
        { name: "LOTUS INTELIGÊNCIA EMOCIONAL", href: "https://lp.sbie.com.br/lotus/?utm_source=sitesbie&utm_medium=menu&utm_campaign=lotus" },
        { name: "LOTUS LEGADO", href: "https://lp.sbie.com.br/lotus-legado/?utm_source=sitesbie&utm_medium=menu&utm_campaign=legado" },
        { name: "FORMAÇÃO EM INTELIGÊNCIA EMOCIONAL", href: "https://lp.sbie.com.br/formacao/?utm_source=sitesbie&utm_medium=menu&utm_campaign=formacao" },
        { name: "FORMAÇÃO MASTER EM INTELIGÊNCIA EMOCIONAL", href: "https://lp.sbie.com.br/formacao-master-oportunidade-unica/?utm_source=sitesbie&utm_medium=menu&utm_campaign=formacao-master" },
        { name: "SBIE BUSINESS", href: "https://lp.sbie.com.br/business/?utm_source=sitesbie&utm_medium=menu&utm_campaign=business" },
        { name: "EMBAIXADORES DO BEM", href: "https://lp.sbie.com.br/embaixadores-do-bem/?utm_source=sitesbie&utm_medium=menu&utm_campaign=embaixadores" },
      ]
    },
    {
      name: "ONLINE",
      hasDropdown: true,
      submenu: [
        { name: "SBIE ACADEMY", href: "#" },
        { name: "SBIE CARE", href: "#" },
        { name: "ACADEMIA EMOCIONAL", href: "#" },
        { name: "GERANDO COM AMOR", href: "#" },
        { name: "ALMAS GÊMEAS", href: "#" },
        { name: "LIVROS DIGITAIS", href: "#" },
      ]
    },
    { name: "BLOG", href: "https://www.sbie.com.br/blog/", hasDropdown: false },
    { name: "IMPRENSA", href: "https://www.sbie.com.br/imprensa/", hasDropdown: false },
    { name: "STORE", href: "https://www.sbie.com.br/store/", hasDropdown: false },
    { name: "CONTATO", href: "#contato", hasDropdown: false },
  ];

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-sbie-copper to-sbie-olive text-white py-2 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
          <div className="flex items-center space-x-2">
            <img src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" alt="Selo MEC" className="h-6 sm:h-7 w-auto" />
            <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider">🏆 Treinamentos Reconhecidos pelo MEC</span>
          </div>
        </div>
      </div>

      <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex-shrink-0">
              <img src="https://i.imgur.com/vnMj83l.png" alt="SBIE Logo" className="h-20 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide">
                      {item.name}
                      <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                  ) : (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wide">
                      {item.name}
                    </a>
                  )}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-sbie-neutral-green/20 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu?.map((subItem) => (
                        <a key={subItem.name} href={subItem.href} target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-sm text-sbie-dark-green hover:bg-gradient-to-r hover:from-sbie-beige/30 hover:to-sbie-copper/10 transition-all duration-200 hover:pl-7 font-medium">
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          <div className={cn("lg:hidden transition-all duration-300 ease-in-out overflow-y-auto", isMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0")}>
            <nav className="py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="px-2">
                  {item.hasDropdown ? (
                    <>
                      <button onClick={() => handleDropdownToggle(item.name)} className="w-full flex justify-between items-center px-2 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300 font-medium text-sm uppercase tracking-wide rounded-md">
                        <span>{item.name}</span>
                        <ChevronDown size={20} className={cn("transition-transform duration-300", openDropdown === item.name ? "rotate-180" : "")} />
                      </button>
                      <div className={cn("transition-all duration-300 ease-in-out overflow-hidden pl-4", openDropdown === item.name ? "max-h-96" : "max-h-0")}>
                        <div className="py-2 space-y-1">
                          {item.submenu?.map((subItem) => (
                            <a key={subItem.name} href={subItem.href} target="_blank" rel="noopener noreferrer" className="block px-2 py-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors duration-300 font-medium text-xs uppercase tracking-wide rounded-md" onClick={() => setIsMenuOpen(false)}>
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="block px-2 py-3 text-foreground hover:text-primary hover:bg-secondary/50 transition-colors duration-300 font-medium text-sm uppercase tracking-wide rounded-md" onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;