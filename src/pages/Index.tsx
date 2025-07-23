import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ALEXSection from "@/components/ALEXSection";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import NotificationWidget from "@/components/NotificationWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ALEXSection />
      <CoursesSection />
      <Footer />
      <NotificationWidget />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
