import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const NotificationWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    {
      name: "Maria Silva de São Paulo, Brasil",
      action: "se inscreveu no LOTUS Inteligência Emocional",
      time: "2 min atrás",
      location: "São Paulo, SP"
    },
    {
      name: "João Santos do Rio de Janeiro, Brasil", 
      action: "baixou o material da SBIE",
      time: "5 min atrás",
      location: "Rio de Janeiro, RJ"
    },
    {
      name: "Ana Costa de Belo Horizonte, Brasil",
      action: "iniciou a Formação em Inteligência Emocional",
      time: "8 min atrás", 
      location: "Belo Horizonte, MG"
    },
    {
      name: "Carlos Lima de Brasília, Brasil",
      action: "se inscreveu no SBIE Business",
      time: "12 min atrás",
      location: "Brasília, DF"
    },
    {
      name: "Julia Mendes de Porto Alegre, Brasil",
      action: "baixou o material LOTUS Legado",
      time: "15 min atrás",
      location: "Porto Alegre, RS"
    },
    {
      name: "Pedro Oliveira de Salvador, Brasil",
      action: "se inscreveu nos Embaixadores do Bem",
      time: "18 min atrás",
      location: "Salvador, BA"
    }
  ];

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setCurrentNotification(Math.floor(Math.random() * notifications.length));
    };

    const hideNotification = () => {
      setIsVisible(false);
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000);

    // Then show notifications every 15 seconds
    const interval = setInterval(() => {
      showNotification();
      // Hide after 8 seconds
      setTimeout(hideNotification, 8000);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const notification = notifications[currentNotification];

  return (
    <div className={cn(
      "fixed bottom-6 left-6 z-50 transition-all duration-500 ease-in-out transform",
      isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
    )}>
      <div className="bg-sbie-dark-green rounded-xl shadow-2xl border border-sbie-olive/30 p-4 max-w-sm">
        <div className="flex items-start space-x-4">
          {/* Notification Dot */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse shadow-lg border-2 border-white" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-white">
                  {notification?.name}
                </p>
                <p className="text-sm text-sbie-beige mt-1">
                  {notification?.action}
                </p>
                <div className="flex items-center mt-3 text-xs bg-sbie-olive/80 rounded-full px-3 py-1">
                  <span className="w-2 h-2 bg-sbie-copper rounded-full mr-2"></span>
                  <span className="text-white font-bold">Live</span>
                  <span className="mx-2 text-sbie-beige/50">•</span>
                  <span className="text-sbie-beige/80 font-medium">{notification?.time}</span>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 text-sbie-beige/50 hover:text-white transition-colors rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationWidget;