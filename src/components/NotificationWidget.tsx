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
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm animate-slide-in-right">
        <div className="flex items-start space-x-3">
          {/* Notification Dot */}
          <div className="flex-shrink-0 mt-1">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-sbie-dark-green">
                  {notification?.name}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {notification?.action}
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <span className="text-green-600 font-medium">● Live</span>
                  <span className="mx-1">•</span>
                  <span>{notification?.time}</span>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
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