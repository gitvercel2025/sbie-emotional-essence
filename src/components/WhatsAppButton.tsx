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
      className="fixed bottom-6 right-6 z-50 w-18 h-18 rounded-full bg-gradient-to-br from-sbie-copper to-sbie-olive hover:from-sbie-olive hover:to-sbie-copper shadow-2xl hover:shadow-sbie-copper/40 transition-all duration-500 hover:scale-110 group border-3 border-white/30 backdrop-blur-sm"
      size="icon"
    >
      {/* Thinking person icon */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-white group-hover:animate-bounce"
      >
        {/* Head */}
        <circle 
          cx="12" 
          cy="8" 
          r="3" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        />
        {/* Body */}
        <path 
          d="M12 14v6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        {/* Thinking bubbles */}
        <circle cx="16" cy="6" r="1" fill="currentColor" opacity="0.7" />
        <circle cx="18" cy="4" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="20" cy="2" r="2" fill="currentColor" opacity="0.3" />
        {/* Arms in thinking pose */}
        <path 
          d="M9 16l-2 2M15 16l2 2" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        {/* Hand to chin gesture */}
        <path 
          d="M10 10l-1 -1" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse border-2 border-white shadow-lg">
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">💬</span>
      </div>
    </Button>
  );
};

export default WhatsAppButton;