import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NotificationWidget from "@/components/NotificationWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactForm />
      </div>
      <Footer />
      <NotificationWidget />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;