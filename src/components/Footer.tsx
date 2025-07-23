import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sbie-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="font-serif text-3xl font-bold">
              sbie
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

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {currentYear} SBIE - Sociedade Brasileira de Inteligência Emocional. Todos os direitos reservados.
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