"use client";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import SectionTitle from "./SectionTitle";
import { PiMailboxThin, PiMapPinAreaThin, PiPhoneThin } from "react-icons/pi";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: <PiPhoneThin className="w-6 h-6 text-primary" />,
      title: "Telefone",
      content: "(11) 95410-1856"
    },
    {
      icon: <PiMailboxThin className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "anemastos01@hotmail.com"
    },
    {
      icon: <PiMapPinAreaThin className="w-6 h-6 text-primary" />,
      title: "Endereço",
      content: "Esperantina, PI, Brasil"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const result = await emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID || '', // Substitua pelo seu Service ID do EmailJS
        process.env.EMAILJS_TEMPLATE_ID || '', // Substitua pelo seu Template ID do EmailJS
        e.currentTarget,
        process.env.EMAILJS_PUBLIC_KEY || '' // Substitua pela sua Public Key do EmailJS
      );

      if (result.text === 'OK') {
        setFormStatus("success");
        formRef.current?.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-12 md:py-24 space-y-24 w-full flex flex-col items-center justify-center" id="contact">
      <SectionTitle title="Contato" />
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto px-4">
        {/* Formulário */}
        <div className="space-y-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Nome"
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] border-0 focus:ring-2 focus:ring-primary outline-none font-lato font-light text-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  placeholder="E-mail"
                  required
                  className="w-full px-4 py-3 bg-[#F5F5F5] border-0 focus:ring-2 focus:ring-primary outline-none font-lato font-light text-black"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensagem"
                required
                rows={6}
                className="w-full px-4 py-3 bg-[#F5F5F5] border-0 focus:ring-2 focus:ring-primary outline-none font-lato font-light resize-none text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 border border-transparent hover:border-primary border-l-primary border-b-primary text-primary font-lato uppercase tracking-[2px] text-sm transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
            
            {/* Mensagens de status */}
            {formStatus === "success" && (
              <p className="text-green-600 font-lato">Sua mensagem foi enviada com sucesso!</p>
            )}
            {formStatus === "error" && (
              <p className="text-red-600 font-lato">Ocorreu um erro. Por favor, tente novamente.</p>
            )}
          </form>
        </div>

        {/* Informações de Contato */}
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-l border-b border-primary">
                {info.icon}
              </div>
              <div>
                <h4 className="text-primary font-lato font-medium tracking-wider text-sm uppercase mb-1">
                  {info.title}
                </h4>
                <p className="text-[#505050] font-lato font-light">
                  {info.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 