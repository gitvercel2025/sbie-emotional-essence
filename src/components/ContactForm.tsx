import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      interest: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 lg:py-32 soft-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center bg-sbie-copper/10 rounded-full px-6 py-3 border border-sbie-copper/20">
            <Mail size={20} className="mr-2 text-sbie-copper" />
            <span className="text-sbie-copper text-sm font-medium">Entre em Contato</span>
          </div>
          
          <h2 className="font-serif text-4xl lg:text-6xl font-bold text-sbie-dark-green leading-tight">
            Transforme sua vida{" "}
            <span className="text-sbie-copper">hoje mesmo</span>
          </h2>
          
          <p className="text-xl text-sbie-olive max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar você a dar o primeiro passo na sua jornada de desenvolvimento emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="card-modern bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-sbie-copper/10 flex items-center justify-center">
                    <Mail size={20} className="text-sbie-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sbie-dark-green">Email</h3>
                    <a href="mailto:contato@sbie.com.br" className="text-sbie-olive hover:text-sbie-copper transition-colors">
                      contato@sbie.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-sbie-copper/10 flex items-center justify-center">
                    <Phone size={20} className="text-sbie-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sbie-dark-green">Telefone</h3>
                    <a href="tel:+5511940069695" className="text-sbie-olive hover:text-sbie-copper transition-colors">
                      +55 11 94006-9695
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-sbie-copper/10 flex items-center justify-center">
                    <MapPin size={20} className="text-sbie-copper" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sbie-dark-green">Localização</h3>
                    <p className="text-sbie-olive">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work With Us Card */}
            <Card className="card-modern bg-white/80 backdrop-blur-sm border-0">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-sbie-dark-green mb-3">
                  Trabalhe Conosco
                </h3>
                <p className="text-sbie-olive mb-6 leading-relaxed">
                  Faça parte da nossa missão de transformar vidas através da Inteligência Emocional.
                </p>
                <Button onClick={onOpenForm} size="lg" className="btn-sbie-primary w-full">
                  Ver Oportunidades
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-modern bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-sbie-dark-green font-serif text-2xl">
                  Envie sua Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sbie-dark-green">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                        className="border-sbie-beige focus:border-sbie-copper"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sbie-dark-green">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                        className="border-sbie-beige focus:border-sbie-copper"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sbie-dark-green">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="(11) 99999-9999"
                        className="border-sbie-beige focus:border-sbie-copper"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-sbie-dark-green">Interesse</Label>
                      <Select value={formData.interest} onValueChange={(value) => handleChange("interest", value)}>
                        <SelectTrigger className="border-sbie-beige focus:border-sbie-copper">
                          <SelectValue placeholder="Selecione seu interesse" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lotus">LOTUS Inteligência Emocional</SelectItem>
                          <SelectItem value="formacao">Formação em IE</SelectItem>
                          <SelectItem value="business">SBIE Business</SelectItem>
                          <SelectItem value="embaixadores">Embaixadores do Bem</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sbie-dark-green">Assunto *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Assunto da sua mensagem"
                      required
                      className="border-sbie-beige focus:border-sbie-copper"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sbie-dark-green">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Conte-nos como podemos ajudá-lo..."
                      rows={5}
                      required
                      className="border-sbie-beige focus:border-sbie-copper resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full btn-sbie-primary group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;