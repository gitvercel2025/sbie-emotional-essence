import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Users, Star, BookOpen, Feather, BrainCircuit, Crown, Sparkles, Building2, HeartHandshake } from "lucide-react";

const getIconForLevel = (level: string) => {
  const iconProps = { size: 28, className: "text-white drop-shadow-lg" };
  switch (level.toLowerCase()) {
    case 'iniciante':
      return <Feather {...iconProps} />;
    case 'avançado':
      return <BrainCircuit {...iconProps} />;
    case 'profissional':
      return <Crown {...iconProps} />;
    case 'master':
      return <Sparkles {...iconProps} />;
    case 'corporativo':
      return <Building2 {...iconProps} />;
    case 'social':
      return <HeartHandshake {...iconProps} />;
    default:
      return <BookOpen {...iconProps} />;
  }
};

const CoursesSection = () => {
  const courses = [
    {
      title: "LOTUS Inteligência Emocional",
      description: "Desenvolva sua inteligência emocional com metodologia comprovada. Aprenda a gerenciar emoções e melhorar relacionamentos.",
      duration: "40 horas",
      students: "500+",
      rating: "4.9",
      level: "Iniciante",
      image: "/lovable-uploads/5a9be274-6422-4a19-8a78-83cc343e4f3a.png"
    },
    {
      title: "LOTUS Legado",
      description: "Construa um legado duradouro através do desenvolvimento da liderança emocional e impacto positivo.",
      duration: "60 horas", 
      students: "300+",
      rating: "4.8",
      level: "Avançado",
      image: "/lovable-uploads/da379568-1dad-416f-bbda-a7a6535e0c62.png"
    },
    {
      title: "Formação em Inteligência Emocional",
      description: "Certificação completa para profissionais que desejam aplicar inteligência emocional em suas carreiras.",
      duration: "120 horas",
      students: "200+", 
      rating: "4.9",
      level: "Profissional",
      image: "/lovable-uploads/5a9be274-6422-4a19-8a78-83cc343e4f3a.png"
    },
    {
      title: "Formação Master em Inteligência Emocional",
      description: "O programa mais completo para formar especialistas em inteligência emocional com metodologia internacional.",
      duration: "200 horas",
      students: "150+",
      rating: "5.0", 
      level: "Master",
      image: "/lovable-uploads/da379568-1dad-416f-bbda-a7a6535e0c62.png"
    },
    {
      title: "SBIE Business",
      description: "Soluções corporativas em inteligência emocional para empresas que querem resultados excepcionais.",
      duration: "Personalizado",
      students: "50+ empresas",
      rating: "4.9",
      level: "Corporativo", 
      image: "/lovable-uploads/5a9be274-6422-4a19-8a78-83cc343e4f3a.png"
    },
    {
      title: "Embaixadores do Bem",
      description: "Programa social para multiplicar conhecimento em inteligência emocional em comunidades.",
      duration: "80 horas",
      students: "100+",
      rating: "4.8",
      level: "Social",
      image: "/lovable-uploads/da379568-1dad-416f-bbda-a7a6535e0c62.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 soft-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-sbie-copper/10 rounded-full px-6 py-3 border border-sbie-copper/20">
            <BookOpen size={20} className="mr-2 text-sbie-copper" />
            <span className="text-sbie-copper text-sm font-medium">Nossos Treinamentos</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-sbie-dark-green leading-tight">
            Transforme sua vida com{" "}
            <span className="text-sbie-copper">Inteligência Emocional</span>
          </h2>
          
          <p className="text-xl text-sbie-olive max-w-3xl mx-auto leading-relaxed">
            Descubra nossos programas desenvolvidos para cada etapa da sua jornada de desenvolvimento pessoal e profissional.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="card-modern group overflow-hidden bg-white border-0">
              <div className="relative overflow-hidden">
                {/* Course Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-sbie-copper/20 to-sbie-olive/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-sbie-dark-green/80 to-sbie-olive/80" />
                  <div className="relative text-center text-white p-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-sbie-copper to-sbie-olive backdrop-blur-sm flex items-center justify-center mb-4 shadow-2xl border-4 border-white/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-sbie-copper/40 group-hover:border-white">
                    {getIconForLevel(course.level)}
                  </div>
                    <div className="font-serif text-lg font-bold">{course.level}</div>
                  </div>
                </div>
                
                {/* Level Badge */}
                <div className="absolute top-4 left-4 bg-sbie-copper text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {course.level}
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl font-bold text-sbie-dark-green group-hover:text-sbie-copper transition-colors leading-tight tracking-wide">
                      {course.title}
                    </h3>
                    <p className="text-sbie-olive text-base leading-relaxed font-medium">
                      {course.description}
                    </p>
                  </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-sbie-olive">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-sbie-olive">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(parseFloat(course.rating)) ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-sbie-dark-green">{course.rating}</span>
                </div>

                {/* CTA Button */}
                <Button className="w-full btn-sbie-primary group mt-6">
                  Saiba Mais
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="btn-sbie-primary group px-8 py-4 text-lg font-semibold">
            Ver Todos os Cursos
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;