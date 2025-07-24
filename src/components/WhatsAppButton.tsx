import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5511940069695";
  const message = "Olá! Gostaria de saber mais sobre os cursos da SBIE.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-sbie-copper hover:bg-sbie-copper/90 shadow-2xl hover:shadow-sbie-copper/25 transition-all duration-300 hover:scale-110 group border-2 border-white/20"
      size="icon"
    >
      {/* Brain with heart icon in SVG */}
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-white group-hover:animate-pulse"
      >
        <path 
          d="M12 2C8.5 2 6 4.5 6 8c0 1.5 0.5 3 1.5 4 1 1 2.5 1.5 4.5 1.5s3.5-0.5 4.5-1.5c1-1 1.5-2.5 1.5-4 0-3.5-2.5-6-6-6z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M12 22c-2.5 0-4.5-2-4.5-4.5 0-1 0.5-2 1.5-2.5" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M16.5 15c1 0.5 1.5 1.5 1.5 2.5 0 2.5-2 4.5-4.5 4.5" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M10 10c0 1.1 0.9 2 2 2s2-0.9 2-2-0.9-2-2-2-2 0.9-2 2z" 
          fill="currentColor"
        />
      </svg>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-sbie-olive rounded-full animate-pulse border-2 border-white" />
    </Button>
  );
};

export default WhatsAppButton;