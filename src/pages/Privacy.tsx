import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sbie-beige to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8 group hover:bg-sbie-copper hover:text-white transition-all duration-300"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Button>

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-sbie-dark-green mb-8">
            Política de Privacidade
          </h1>
          
          <div className="space-y-6 text-sbie-dark-green">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">1. Informações Gerais</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade descreve como a Sociedade Brasileira de Inteligência Emocional (SBIE) 
                coleta, usa e protege suas informações pessoais quando você utiliza nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">2. Coleta de Informações</h2>
              <p className="leading-relaxed">
                Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e outras 
                informações necessárias para a prestação de nossos serviços de treinamento em inteligência emocional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">3. Uso das Informações</h2>
              <p className="leading-relaxed">
                Utilizamos suas informações para fornecer nossos serviços, comunicar sobre cursos e treinamentos, 
                e melhorar sua experiência conosco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">4. Proteção de Dados</h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra 
                acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">5. Contato</h2>
              <p className="leading-relaxed">
                Para questões sobre esta política, entre em contato conosco através do e-mail: contato@sbie.com.br
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;