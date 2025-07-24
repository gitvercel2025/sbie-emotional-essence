import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: "Como o uso excessivo do ChatGPT pode estar “emburrecendo” as pessoas e o que fazer a respeito",
    image: "https://i.imgur.com/pmYvvFd.png",
    link: "#", // Placeholder link
  },
  {
    title: "Inteligência emocional e saúde mental: estratégias para um ambiente de trabalho saudável",
    image: "https://i.imgur.com/usxUcaY.png",
    link: "#", // Placeholder link
  },
  {
    title: "Como desenvolver a autoconsciência emocional para melhorar a tomada de decisão",
    image: "https://www.sbie.com.br/wp-content/webp-express/webp-images/uploads/2025/07/485.jpg.webp",
    link: "#", // Placeholder link
  },
  {
    title: "Liderança emocionalmente inteligente: o futuro da gestão em ambientes híbridos",
    image: "https://i.imgur.com/yqgEhJl.png",
    link: "#", // Placeholder link
  },
  {
    title: "Dormir mal afeta suas emoções (e pode prejudicar sua saúde mental a longo prazo)",
    image: "https://i.imgur.com/6FPMzcb.png",
    link: "#", // Placeholder link
  },
  {
    title: "Inteligência emocional e Geração Z: como eles estão buscando essa soft skill",
    image: "https://i.imgur.com/kANLFo0.png",
    link: "#", // Placeholder link
  },
];

const BlogSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section id="blog" className="py-20 md:py-28 bg-gray-50 dark:bg-sbie-dark-green-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sbie-dark-green dark:text-white">Acompanhe conteúdos exclusivos da SBIE</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Artigos, vídeos e insights para acelerar sua jornada de desenvolvimento pessoal e profissional.
          </p>
        </div>

        <div className="embla -mx-4" ref={emblaRef}>
          <div className="embla__container">
            {blogPosts.map((post, index) => (
              <div className="embla__slide basis-full md:basis-1/2 lg:basis-1/3 p-4" key={index}>
                <div className="bg-white dark:bg-sbie-dark-gray/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-sbie-copper group flex flex-col h-full">
                  <div className="relative h-56">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-xl font-bold text-sbie-dark-green dark:text-white mb-3 leading-tight flex-grow">{post.title}</h3>
                    <Button 
                      onClick={() => window.open(post.link, '_blank')}
                      className="w-full btn-sbie-secondary mt-4"
                    >
                      Leia Mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
