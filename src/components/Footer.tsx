import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-sbie-dark-green via-sbie-olive to-sbie-dark-green text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-sbie-copper/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-sbie-beige/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-sbie-neutral-green/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="font-serif text-3xl font-bold">
                sbie
              </div>
              <div className="text-xs text-white/60">
                Sociedade Brasileira de Inteligência Emocional
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Sociedade Brasileira de Inteligência Emocional. 
              Transformando vidas através do desenvolvimento da inteligência emocional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-sbie-copper transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-sbie-copper transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-sbie-copper transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-sbie-copper transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-sbie-copper">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                "Quem Somos",
                "Nossa Metodologia", 
                "Rodrigo Fonseca",
                "Blog",
                "Imprensa",
                "Contato"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-sbie-copper transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-sbie-copper">
              Treinamentos
            </h3>
            <ul className="space-y-3">
              {[
                "LOTUS Inteligência Emocional",
                "LOTUS Legado",
                "Formação em IE",
                "Formação Master",
                "SBIE Business",
                "Embaixadores do Bem"
              ].map((course) => (
                <li key={course}>
                  <a href="#" className="text-white/80 hover:text-sbie-copper transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold text-sbie-copper">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-sbie-copper flex-shrink-0" />
                <a href="mailto:contato@sbie.com.br" className="text-white/80 hover:text-sbie-copper transition-colors">
                  contato@sbie.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sbie-copper flex-shrink-0" />
                <a href="tel:+5511940069695" className="text-white/80 hover:text-sbie-copper transition-colors">
                  +55 11 94006-9695
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-sbie-copper flex-shrink-0 mt-1" />
                <div className="text-white/80">
                  São Paulo, SP<br />
                  Brasil
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Seals */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex justify-center items-center space-x-8 mb-8">
            <img 
              src="https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2019/05/selo-cinza.png.webp" 
              alt="Selo SBIE" 
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://verboemmovimento.com/wp-content/uploads/2024/07/image.png" 
              alt="Selo MEC" 
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm text-center md:text-left">
            Copyright © 2025 Sbie - Todos os direitos reservados
            <br />
            Rua Curupá, 595 - Anália Franco - São Paulo - SP - 03355-010
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-sbie-copper transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-sbie-copper transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;