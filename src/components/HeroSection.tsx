import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download, Users, Book, Award, Briefcase } from "lucide-react";

const StatItem = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <div className="flex items-center gap-4">
    <div className="bg-white/10 p-3 rounded-lg">
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sbie-dark-green text-white">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-sbie-copper/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-sbie-olive/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sbie-neutral-green/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24 lg:py-0">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 
              className="font-serif text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              A resposta que você tanto busca, está no{" "}
              <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-sbie-copper to-yellow-300">
                lugar que você nunca procurou
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Transforme sua carreira e seus relacionamentos. A SBIE oferece as ferramentas e o conhecimento para você assumir o controle da sua vida e alcançar resultados extraordinários.
            </p>

            {/* CTA Buttons */}
            <div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button size="lg" className="btn-sbie-primary w-full sm:w-auto">
                Conheça Nossos Treinamentos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-sbie-outline w-full sm:w-auto">
                Fale com um Especialista
              </Button>
            </div>
          </div>

          {/* Rodrigo Fonseca Image */}
          <div className="relative flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-[350px] h-[450px] lg:w-[400px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl bg-sbie-olive/20 p-2 backdrop-blur-sm">
                <img 
                  src="https://www.sbie.com.br/wp-content/uploads/2023/05/IMG_0303-98-683x1024.jpg.webp" 
                  alt="Rodrigo Fonseca - Presidente SBIE" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sbie-dark-green/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-black/30 backdrop-blur-md rounded-lg px-4 py-3">
                    <h3 className="font-bold text-lg">Rodrigo Fonseca</h3>
                    <p className="text-sm text-white/80">Presidente e Fundador da SBIE</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Stats - Moved below the main content */}
        <div 
          className="pb-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-left animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <StatItem icon={<Award size={24} className="text-sbie-copper" />} value="26+" label="Anos de Experiência" />
          <StatItem icon={<Users size={24} className="text-sbie-copper" />} value="200k+" label="Vidas Transformadas" />
          <StatItem icon={<Book size={24} className="text-sbie-copper" />} value="4" label="Best-Sellers Publicados" />
          <StatItem icon={<Briefcase size={24} className="text-sbie-copper" />} value="FGV" label="Professor MBA C-Levels" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;