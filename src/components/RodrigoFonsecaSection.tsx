import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Award, Globe } from "lucide-react";

const RodrigoFonsecaSection = () => {
  const achievements = [
    {
      icon: Users,
      title: "200k+",
      subtitle: "Vidas Transformadas",
      description: "Mais de 200 mil pessoas impactadas com Inteligência Emocional"
    },
    {
      icon: Award,
      title: "26 Anos",
      subtitle: "de Experiência",
      description: "Mais de duas décadas dedicadas ao desenvolvimento emocional"
    },
    {
      icon: BookOpen,
      title: "4 Best Sellers",
      subtitle: "Livros Publicados",
      description: "Autor de obras fundamentais sobre Inteligência Emocional"
    },
    {
      icon: Globe,
      title: "Professor FGV",
      subtitle: "MBA C-Levels",
      description: "Professor convidado em uma das principais instituições do país"
    }
  ];

  const celebrities = [
    "Juliana Paes", "Wolf Maya", "Júlio Cocielo", 
    "Fafá de Belém", "Cátia Fonseca"
  ];

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-white to-sbie-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-sbie-copper/10 rounded-full px-6 py-3 border border-sbie-copper/20">
            <Award size={20} className="mr-2 text-sbie-copper" />
            <span className="text-sbie-copper text-sm font-medium">Conheça o Presidente</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-sbie-dark-green leading-tight">
            Rodrigo Fonseca
          </h2>
          
          <p className="text-xl text-sbie-olive max-w-3xl mx-auto leading-relaxed">
            Presidente da Sociedade Brasileira de Inteligência Emocional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-sbie-olive leading-relaxed">
                Rodrigo Fonseca possui mais de <strong>26 anos de carreira</strong> como Mentor emocional 
                e já transformou a vida de mais de <strong>200 mil pessoas</strong> com a Inteligência Emocional, 
                dentre elas {celebrities.slice(0, 3).join(", ")} e muitas outras personalidades.
              </p>
              
              <p className="text-lg text-sbie-olive leading-relaxed">
                <strong>Mestrando pela Florida Christian University (FCU)</strong> em Neuromarketing, 
                Comunicólogo formado pela <strong>Universidade de São Paulo (USP)</strong> e membro da 
                International Society for Emotional Intelligence.
              </p>

              <p className="text-lg text-sbie-olive leading-relaxed">
                Palestrante para milhares de pessoas nas principais empresas do Brasil e exterior. 
                <strong>Professor Convidado da FGV</strong> no MBA de C-Levels e Conselheiro no 
                Instituto Êxito de Empreendedorismo.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-sbie-beige/50">
              <h3 className="font-serif text-xl font-bold text-sbie-dark-green mb-4">
                Principais Realizações
              </h3>
              <ul className="space-y-2 text-sbie-olive">
                <li>• Idealizador do Treinamento LOTUS Inteligência Emocional</li>
                <li>• Criador da primeira Formação em Inteligência Emocional do Brasil</li>
                <li>• Fundador da primeira Academia Emocional Online</li>
                <li>• Criador do maior evento de IE da América Latina: Conexão!</li>
                <li>• Maior influenciador digital em Inteligência Emocional</li>
              </ul>
            </div>

            {/* CTA */}
            <Button className="btn-sbie-primary group px-8 py-4 text-lg font-semibold">
              Conheça Mais Sobre Rodrigo
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="card-modern bg-white/80 backdrop-blur-sm border-0 hover-scale">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-sbie-copper/10 flex items-center justify-center">
                      <achievement.icon size={24} className="text-sbie-copper" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-serif text-2xl font-bold text-sbie-dark-green">
                        {achievement.title}
                      </div>
                      <div className="text-sm font-semibold text-sbie-copper">
                        {achievement.subtitle}
                      </div>
                      <p className="text-xs text-sbie-olive leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Books */}
            <Card className="card-modern bg-gradient-to-br from-sbie-copper/10 to-sbie-olive/10 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen size={24} className="text-sbie-copper" />
                  <h3 className="font-serif text-lg font-bold text-sbie-dark-green">
                    Livros Best Sellers
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-sbie-olive">
                  <li>• "Emoções – Descubra o que fazer com suas emoções na prática!"</li>
                  <li>• "Missão – Como viver uma vida de propósito"</li>
                  <li>• "Inteligência Emocional para Pais"</li>
                  <li>• "Riqueza Emocional"</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center bg-gradient-to-r from-sbie-dark-green to-sbie-olive rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
            Nova Missão
          </h3>
          <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
            "Multiplicar todo o meu conhecimento, formando novos Mentores que aplicam 
            minha metodologia em todo o mundo, alcançando, transformando e impactando 
            milhares de vidas ao redor do globo com a Inteligência Emocional."
          </p>
          <div className="mt-6 text-sm opacity-90">
            — Rodrigo Fonseca
          </div>
        </div>
      </div>
    </section>
  );
};

export default RodrigoFonsecaSection;