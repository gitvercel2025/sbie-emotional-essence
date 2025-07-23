import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download } from "lucide-react";

const ALEXSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-sbie-dark-green relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-sbie-copper/10 backdrop-blur-sm rounded-full px-6 py-3 border border-sbie-copper/20">
            <div className="notification-dot mr-3" />
            <span className="text-sbie-copper text-sm font-medium">Conheça Alexandre Furlan</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight">
            Descubra o A.L.E.X.{" "}
            <span className="text-sbie-copper">Success Code</span> &{" "}
            <span className="text-sbie-copper">Assuma o Controle da Sua Vida</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Domine os quatro pilares da transformação e retome o controle da sua vida com uma estratégia clara.
          </p>
        </div>

        {/* ALEX Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              letter: "A",
              title: "Autoconsciência",
              description: "Desbloqueie o domínio emocional. Descubra os padrões ocultos por trás de suas decisões."
            },
            {
              letter: "L", 
              title: "Liderança",
              description: "Lidere com autenticidade. Construa confiança, inspire ação e comunique-se com intenção."
            },
            {
              letter: "E",
              title: "Execução", 
              description: "Use processos, métricas e foco para transformar estratégia em resultados."
            },
            {
              letter: "X",
              title: "eXpansão",
              description: "Escale sua vida. Projete sistemas que te oferecem liberdade, prosperidade e impacto contínuo."
            }
          ].map((item, index) => (
            <div key={index} className="card-modern bg-sbie-dark-green/50 backdrop-blur-sm border border-sbie-copper/20 p-6 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-lg border-2 border-sbie-copper flex items-center justify-center group-hover:bg-sbie-copper transition-colors duration-300">
                  <span className="font-serif text-2xl font-bold text-sbie-copper group-hover:text-white transition-colors duration-300">
                    {item.letter}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-white">
            <p className="text-lg leading-relaxed">
              Se você anda se sentindo perdido, não é fracasso, é falta de estratégia. 
              O A.L.E.X. Success Code usa 20 anos de experiência em grandes empresas ao redor 
              do mundo e transforma tudo isso em um sistema prático para sua vida.
            </p>
            
            <p className="text-lg leading-relaxed">
              Com ele, você conquista clareza, constrói riqueza e vive com mais propósito e impacto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-sbie-primary group px-8 py-4 text-lg font-semibold"
              >
                <Play size={20} className="mr-2" />
                Acesse o Código de Sucesso
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-sbie-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-sbie-dark-green px-8 py-4 text-lg font-semibold"
              >
                <Download size={20} className="mr-2" />
                Baixe o Guia Estratégico
              </Button>
            </div>
          </div>

          {/* Stats/Profile Card */}
          <div className="relative">
            <div className="card-modern bg-white/5 backdrop-blur-md border border-white/10 p-8">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-sbie-copper to-sbie-olive flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-white">AF</span>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Estrategista Global
                  </h3>
                  <p className="text-sbie-copper font-semibold">Strategic Coaching</p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-sbie-copper">20+</div>
                    <div className="text-xs text-white/70">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-sbie-copper">30+</div>
                    <div className="text-xs text-white/70">Países Atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-sbie-copper">1000+</div>
                    <div className="text-xs text-white/70">Vidas Transformadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ALEXSection;