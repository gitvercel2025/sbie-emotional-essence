import Header from "@/components/Header";
import RodrigoFonsecaSection from "@/components/RodrigoFonsecaSection";
import Footer from "@/components/Footer";
import NotificationWidget from "@/components/NotificationWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Heart, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Levar a prática da Inteligência Emocional, transformando vidas, organizações, famílias e escolas, presencialmente e online."
    },
    {
      icon: Users,
      title: "Visão",
      description: "Ser referência mundial no desenvolvimento humano através da Inteligência Emocional, impactando milhões de vidas."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Transformação, excelência, humanização, ética e comprometimento com o desenvolvimento emocional das pessoas."
    },
    {
      icon: Globe,
      title: "Impacto",
      description: "Formar uma rede global de mentores emocionais que multipliquem conhecimento e transformem comunidades."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="notification-dot mr-3" />
              <span className="text-sm font-medium">Conheça Nossa História</span>
            </div>
            
            <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight">
              Sociedade Brasileira de{" "}
              <span className="text-glow text-sbie-copper">Inteligência Emocional</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              Referência no desenvolvimento humano através de suas formações, treinamentos e imersões. 
              A SBIE tem como objetivo levar a prática da Inteligência Emocional, transformando 
              vidas, organizações, famílias e escolas, presencialmente e online.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 soft-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-sbie-dark-green leading-tight">
              Nossos Pilares
            </h2>
            <p className="text-xl text-sbie-olive max-w-3xl mx-auto leading-relaxed">
              Os valores que norteiam nossa jornada de transformação e desenvolvimento humano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-modern group overflow-hidden bg-white border-0 hover-scale">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-sbie-copper/10 flex items-center justify-center group-hover:bg-sbie-copper/20 transition-colors">
                      <value.icon size={32} className="text-sbie-copper" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-sbie-dark-green">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sbie-olive leading-relaxed text-lg">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <RodrigoFonsecaSection />
      
      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-sbie-dark-green to-sbie-olive text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl leading-relaxed">
            Junte-se a milhares de pessoas que já descobriram o poder da Inteligência Emocional.
          </p>
          <Button size="lg" className="btn-sbie-primary group px-8 py-4 text-lg font-semibold">
            Comece Agora
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
      <NotificationWidget />
      <WhatsAppButton />
    </div>
  );
};

export default About;