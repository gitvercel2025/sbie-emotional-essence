import { Button } from "@/components/ui/button";
import { Headset } from 'lucide-react';

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
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-sbie-dark-green to-sbie-olive hover:from-sbie-olive hover:to-sbie-dark-green shadow-2xl hover:shadow-sbie-copper/40 transition-all duration-300 transform hover:scale-110 group"
      size="icon"
    >
      <Headset className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
    </Button>
  );
};

export default WhatsAppButton;