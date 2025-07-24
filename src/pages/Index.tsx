import { useState } from 'react';
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ALEXSection from "@/components/ALEXSection";
import RodrigoFonsecaSection from "@/components/RodrigoFonsecaSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import WorkWithUsForm from "@/components/WorkWithUsForm";
import ContactForm from "@/components/ContactForm";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import NotificationWidget from "@/components/NotificationWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ALEXSection />
      <RodrigoFonsecaSection />
      <CoursesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactForm onOpenForm={() => setIsFormOpen(true)} />
      <QuoteSection />
      <Footer />
      <NotificationWidget />
      <WhatsAppButton />

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="p-0 bg-transparent border-none max-w-2xl w-full">
          <WorkWithUsForm />
          <DialogClose className="absolute right-4 top-4 z-[9999] rounded-full bg-black/50 p-1.5 opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
