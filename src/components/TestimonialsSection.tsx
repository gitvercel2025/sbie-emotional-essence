import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Juliana Paes",
    username: "Atriz",
    videoId: "ysF7fk1pjeQ",
    thumbnail: "https://img.youtube.com/vi/ysF7fk1pjeQ/hqdefault.jpg"
  },
  {
    name: "Wolf Maya",
    username: "Diretor e Ator",
    videoId: "ENhzSaMsOQI",
    thumbnail: "https://img.youtube.com/vi/ENhzSaMsOQI/hqdefault.jpg"
  },
  {
    name: "Chris Flores",
    username: "Apresentadora",
    videoId: "dKBKJjxy2J4",
    thumbnail: "https://img.youtube.com/vi/dKBKJjxy2J4/hqdefault.jpg"
  },
  {
    name: "Catia Fonseca",
    username: "Apresentadora",
    videoId: "5gCzTc34VVo",
    thumbnail: "https://img.youtube.com/vi/5gCzTc34VVo/hqdefault.jpg"
  },
  {
    name: "Scheila Carvalho",
    username: "Dançarina e Apresentadora",
    videoId: "a9o4wfPvndI",
    thumbnail: "https://img.youtube.com/vi/a9o4wfPvndI/hqdefault.jpg"
  },
];

const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <section className="py-12 lg:py-20 bg-sbie-dark-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight">
            Depoimento de grandes <span className="text-sbie-light-copper">influenciadores</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Veja o que eles dizem sobre como nossos treinamentos transformaram suas vidas.
          </p>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map(({ videoId, thumbnail, name, username }) => (
              <div className="embla__slide p-4" key={videoId}>
                <a 
                  href={`https://www.youtube.com/watch?v=${videoId}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
                >
                  <img 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110" 
                    alt={`Thumbnail for ${name}'s testimonial`} 
                    src={thumbnail} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-end p-6">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <PlayCircle size={64} className="text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-white font-bold text-xl font-serif">{name}</h3>
                    <p className="text-white/80 text-sm">{username}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
