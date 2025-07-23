import Header from "@/components/Header";
import CoursesSection from "@/components/CoursesSection";
import Footer from "@/components/Footer";
import NotificationWidget from "@/components/NotificationWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <CoursesSection />
      </div>
      <Footer />
      <NotificationWidget />
      <WhatsAppButton />
    </div>
  );
};

export default Courses;