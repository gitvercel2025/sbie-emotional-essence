import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Download } from "lucide-react";

const ALEXSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-sbie-dark-green relative overflow-hidden">
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
            <span className="text-sbie-copper text-sm font-medium">Metodologia Rodrigo Fonseca</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight">
            Treinamentos{" "}
            <span className="text-sbie-copper">SBIE</span>{" "}
            <span className="text-sbie-copper">Inteligência Emocional</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Transforme sua vida através dos treinamentos da Sociedade Brasileira de Inteligência Emocional.
          </p>
        </div>

        {/* SBIE Trainings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "🧠",
              title: "LOTUS Inteligência Emocional",
              description: "Metodologia exclusiva para desenvolvimento da inteligência emocional aplicada."
            },
            {
              icon: "🌟", 
              title: "LOTUS Legado",
              description: "Treinamento avançado para transformação pessoal e construção de legado."
            },
            {
              icon: "🎓",
              title: "Formação em IE", 
              description: "Formação completa em Inteligência Emocional com certificação internacional."
            },
            {
              icon: "💼",
              title: "SBIE Business",
              description: "Programa corporativo de desenvolvimento emocional para empresas e líderes."
            },
            {
              icon: "🚀",
              title: "Formação Master",
              description: "Nível mais avançado de especialização em Inteligência Emocional."
            },
            {
              icon: "❤️",
              title: "Embaixadores do Bem",
              description: "Programa social de multiplicação da Inteligência Emocional."
            }
          ].map((item, index) => (
            <div key={index} className="card-modern bg-sbie-dark-green/50 backdrop-blur-sm border border-sbie-copper/20 p-6 group hover:bg-sbie-copper/10 transition-all duration-500">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-sbie-copper/20 to-sbie-olive/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-sbie-copper transition-colors duration-300">
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
              Desenvolvidos por Rodrigo Fonseca com mais de 26 anos de experiência, 
              nossos treinamentos já transformaram mais de 200 mil vidas através da 
              Inteligência Emocional aplicada de forma prática e eficiente.
            </p>
            
            <p className="text-lg leading-relaxed">
              Conquiste autoconhecimento, desenvolva liderança emocional e transforme sua vida pessoal e profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-sbie-primary group px-8 py-4 text-lg font-semibold"
              >
                <Play size={20} className="mr-2" />
                Conheça Nossos Treinamentos
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Stats/Profile Card */}
          <div className="relative">
            <div className="card-modern bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-white/10 transition-all duration-500">
              <div className="text-center space-y-6">
                <img 
                  src="https://i.imgur.com/iFAS2HT.jpeg" 
                  alt="Rodrigo Fonseca" 
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white/20"
                />
                
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Rodrigo Fonseca
                  </h3>
                  <p className="text-sbie-copper font-semibold">Mentor em Inteligência Emocional</p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-sbie-copper">26+</div>
                    <div className="text-xs text-white/70">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-sbie-copper">200k+</div>
                    <div className="text-xs text-white/70">Vidas Transformadas</div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-2xl font-bold text-sbie-copper">4</div>
                    <div className="text-xs text-white/70">Best Sellers</div>
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