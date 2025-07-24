import { Button } from '@/components/ui/button';

type WorkWithUsCTAProps = {
  onOpenForm: () => void;
};

const WorkWithUsCTA = ({ onOpenForm }: WorkWithUsCTAProps) => {
  return (
    <section className="py-20 lg:py-24 bg-sbie-light-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="font-serif text-4xl font-bold text-sbie-dark-green mb-4">
            Trabalhe Conosco
          </h2>
          <p className="text-lg text-sbie-olive mb-8">
            Faça parte da nossa missão de transformar vidas através da Inteligência Emocional.
          </p>
          <Button onClick={onOpenForm} size="lg" className="btn-sbie-primary px-10">
            Ver Oportunidades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsCTA;
