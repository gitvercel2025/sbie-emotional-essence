import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="notification-dot mr-3" />
              <span className="text-sm font-medium">Junte-se a 1000+ Líderes que Assumiram o Controle do Seu Futuro</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight">
                A resposta que você tanto busca,{" "}
                <span className="text-glow text-sbie-copper">está no lugar que você</span>{" "}
                <span className="font-serif text-4xl lg:text-6xl font-bold text-sbie-copper block mt-2">
                  nunca procurou
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Se você anda se sentindo perdido, não é fracasso, é falta de estratégia. 
              Equilibre suas emoções e descubra como criar a vida que sempre sonhou.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-sbie-copper">26</div>
                <div className="text-xs text-white/80 mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-sbie-copper">200k+</div>
                <div className="text-xs text-white/80 mt-1">Vidas Transformadas</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-sbie-copper">4</div>
                <div className="text-xs text-white/80 mt-1">Best Sellers - Livros Publicados</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-sbie-copper">FGV</div>
                <div className="text-xs text-white/80 mt-1">Professor FGV - MBA C-Levels</div>
              </div>
            </div>
          </div>

          {/* Rodrigo Fonseca Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="aspect-[4/5] bg-gradient-to-br from-sbie-copper to-sbie-olive relative overflow-hidden">
                <img 
                  src="https://www.sbie.com.br/wp-content/uploads/2023/05/IMG_0303-98-683x1024.jpg.webp" 
                  alt="Rodrigo Fonseca - Presidente SBIE" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sbie-dark-green/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-sbie-copper rounded-lg px-4 py-2 inline-block">
                    <span className="text-sm font-semibold">Presidente SBIE</span>
                    <div className="text-xs opacity-90">Mentor Emocional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;