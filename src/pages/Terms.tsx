import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
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
            Termos de Uso
          </h1>
          
          <div className="space-y-6 text-sbie-dark-green">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed">
                Ao utilizar os serviços da Sociedade Brasileira de Inteligência Emocional (SBIE), 
                você concorda em cumprir estes termos de uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">2. Serviços Oferecidos</h2>
              <p className="leading-relaxed">
                A SBIE oferece treinamentos, cursos e formações em inteligência emocional, 
                reconhecidos pelo MEC e desenvolvidos com base em mais de 26 anos de experiência.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">3. Responsabilidades do Usuário</h2>
              <p className="leading-relaxed">
                O usuário é responsável por fornecer informações precisas e manter a confidencialidade 
                de suas credenciais de acesso aos nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">4. Propriedade Intelectual</h2>
              <p className="leading-relaxed">
                Todo o conteúdo dos treinamentos e materiais da SBIE são protegidos por direitos autorais 
                e não podem ser reproduzidos sem autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">5. Alterações nos Termos</h2>
              <p className="leading-relaxed">
                A SBIE reserva-se o direito de modificar estes termos a qualquer momento, 
                com notificação prévia aos usuários.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-sbie-copper">6. Contato</h2>
              <p className="leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato através do e-mail: contato@sbie.com.br
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;