import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { UploadCloud, FileText, X } from 'lucide-react';

const WorkWithUsForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 25 * 1024 * 1024; // 25MB

      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Tipo de arquivo não permitido. Use PNG, JPG, PDF, DOC ou DOCX.');
        setFile(null);
        return;
      }

      if (selectedFile.size > maxSize) {
        setError('O arquivo excede o tamanho máximo de 25MB.');
        setFile(null);
        return;
      }

      setError(null);
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <div className="relative bg-sbie-dark-green text-white p-6 md:p-10 rounded-lg max-h-[90vh] overflow-y-auto">
        {/* O botão de fechar do Dialog em Index.tsx cuidará disso */}
        <div className="text-center space-y-3 mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold">
            Trabalhe Conosco
          </h2>
          <p className="text-lg text-sbie-beige max-w-2xl mx-auto">
            Faça parte de um time que transforma vidas. Envie seu currículo e venha crescer com a gente.
          </p>
        </div>

        <div className="bg-sbie-olive/20 p-6 rounded-lg border border-sbie-copper/20 backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sbie-beige mb-2">Nome *</label>
                <Input id="name" placeholder="Informe seu Nome" className="bg-sbie-dark-green/50 border-sbie-copper/30 text-white placeholder:text-sbie-neutral-green" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sbie-beige mb-2">Email *</label>
                <Input id="email" type="email" placeholder="Seu E-mail" className="bg-sbie-dark-green/50 border-sbie-copper/30 text-white placeholder:text-sbie-neutral-green" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-sbie-beige mb-2">Telefone *</label>
                <Input id="phone" placeholder="Seu Telefone de contato" className="bg-sbie-dark-green/50 border-sbie-copper/30 text-white placeholder:text-sbie-neutral-green" />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-sbie-beige mb-2">Área de Atuação *</label>
                <Input id="role" placeholder="Escolha Área de Atuação/Cargo" className="bg-sbie-dark-green/50 border-sbie-copper/30 text-white placeholder:text-sbie-neutral-green" />
              </div>
            </div>
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-sbie-beige mb-2">Quem é você? *</label>
              <Textarea id="about" placeholder="Nos conte um pouco sobre você." rows={5} className="bg-sbie-dark-green/50 border-sbie-copper/30 text-white placeholder:text-sbie-neutral-green" />
            </div>
            <div>
              <label className="block text-sm font-medium text-sbie-beige mb-2">Nos envie seu Currículo:</label>
              <p className="text-xs text-sbie-neutral-green mb-3">( PNG, JPG, PDF, DOC, DOCX ) ATÉ 25MB.</p>
              <div className="relative flex justify-center items-center w-full h-48 border-2 border-dashed border-sbie-copper/40 rounded-lg hover:bg-sbie-olive/10 transition-colors duration-300">
                <input 
                  type="file"
                  id="resume-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                />
                {!file ? (
                  <div className="text-center p-4">
                    <UploadCloud className="mx-auto h-12 w-12 text-sbie-neutral-green" />
                    <p className="mt-2 text-sm text-sbie-beige">Arraste e solte ou <span className="font-semibold text-sbie-copper">clique para enviar</span></p>
                  </div>
                ) : (
                  <div className="p-4 flex flex-col items-center text-center">
                    <FileText className="h-12 w-12 text-sbie-copper" />
                    <p className="mt-2 text-sm font-medium text-white truncate max-w-xs">{file.name}</p>
                    <p className="text-xs text-sbie-neutral-green">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <button 
                      type="button"
                      onClick={removeFile}
                      className="absolute top-2 right-2 p-1 bg-sbie-dark-green/50 rounded-full text-white hover:bg-red-500/50 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
              {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
            </div>
            <div className="text-center pt-4">
              <Button type="submit" size="lg" className="btn-sbie-primary w-full md:w-auto px-10">
                Cadastrar Currículo
              </Button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default WorkWithUsForm;
