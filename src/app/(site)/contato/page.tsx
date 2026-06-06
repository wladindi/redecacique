"use client";

export const dynamic = "force-dynamic";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Headphones, Building } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Telefone", value: "(86) 3228-8888", sub: "Sede em Teresina-PI", href: "tel:8632288888", color: "bg-green-50 text-green-600" },
  { icon: Mail, title: "E-mail", value: "contato@redecacique.com.br", sub: "Respondemos em até 24h", href: "mailto:contato@redecacique.com.br", color: "bg-blue-50 text-blue-600" },
  { icon: MapPin, title: "Sede", value: "R. Tabelião José Basílio, 1795", sub: "Fátima · Teresina-PI · CEP 64049-524", href: null, color: "bg-red-50 text-[#C8102E]" },
  { icon: Clock, title: "Atendimento", value: "Seg a Sex: 8h - 18h", sub: "SAC 24h: (86) 3228-8888", href: null, color: "bg-amber-50 text-amber-600" },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", phone: "", type: "general", subject: "", message: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (formData.name.length < 3) newErrors.name = "Nome deve ter pelo menos 3 caracteres";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "E-mail inválido";
    if (formData.subject.length < 5) newErrors.subject = "Assunto muito curto";
    if (formData.message.length < 20) newErrors.message = "Mensagem muito curta (mínimo 20 caracteres)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C8102E] transition-colors";

  return (
    <>
      <section className="bg-gradient-to-br from-[#C8102E] to-[#8E001A] pt-32 pb-24 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
              Fale com a gente
            </span>
            <h1 className="font-heading font-black text-5xl lg:text-6xl text-white mb-6">Entre em Contato</h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Estamos aqui para ajudar. Nosso time responderá o mais brevemente possível.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                {info.href ? (
                  <a href={info.href} className="flex items-start gap-4 p-5 bg-[#F6F7F9] rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                    <div className={`w-10 h-10 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}><info.icon size={18} /></div>
                    <div><div className="font-semibold text-gray-900 text-sm group-hover:text-[#C8102E] transition-colors">{info.title}</div><div className="text-gray-700 text-sm font-medium mt-0.5">{info.value}</div><div className="text-gray-400 text-xs mt-0.5">{info.sub}</div></div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-5 bg-[#F6F7F9] rounded-2xl border border-gray-100">
                    <div className={`w-10 h-10 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}><info.icon size={18} /></div>
                    <div><div className="font-semibold text-gray-900 text-sm">{info.title}</div><div className="text-gray-700 text-sm font-medium mt-0.5">{info.value}</div><div className="text-gray-400 text-xs mt-0.5">{info.sub}</div></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-gray-900 mb-4">Como podemos ajudar?</h3>
                {[
                  { icon: MessageSquare, title: "Sugestões e Elogios", desc: "Compartilhe sua experiência" },
                  { icon: Headphones, title: "SAC - Reclamações", desc: "Resolvemos em 24h" },
                  { icon: Building, title: "Parcerias Comerciais", desc: "Oportunidades de negócio" },
                  { icon: MapPin, title: "Franquia", desc: "Seja um parceiro Cacique" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                    <div className="w-9 h-9 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon size={15} className="text-[#C8102E]" /></div>
                    <div><div className="font-semibold text-gray-900 text-sm">{item.title}</div><div className="text-gray-500 text-xs">{item.desc}</div></div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-[#C8102E] to-[#8E001A] rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">Precisa de ajuda rápida?</h3>
                <p className="text-white/70 text-sm mb-4">Nosso SAC está disponível 24 horas por dia, 7 dias por semana.</p>
                <a href="tel:8632288888" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm px-4 py-3 rounded-xl transition-all">
                  <Phone size={16} /> (86) 3228-8888 (Gratuito)
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-lg h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"><CheckCircle size={36} className="text-green-600" /></div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Mensagem enviada!</h3>
                  <p className="text-gray-500">Nossa equipe responderá em até 24 horas. Obrigado pelo contato!</p>
                </motion.div>
              ) : (
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                  <h2 className="font-heading font-bold text-2xl text-gray-900 mb-6">Envie sua mensagem</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome *</label>
                      <input value={formData.name} onChange={update("name")} placeholder="Seu nome" className={inputClass} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail *</label>
                      <input value={formData.email} onChange={update("email")} type="email" placeholder="seu@email.com" className={inputClass} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone</label>
                      <input value={formData.phone} onChange={update("phone")} type="tel" placeholder="(86) 99999-0000" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tipo</label>
                      <select value={formData.type} onChange={update("type")} className={inputClass + " bg-white"}>
                        <option value="general">Informações gerais</option>
                        <option value="complaint">Reclamação</option>
                        <option value="suggestion">Sugestão / Elogio</option>
                        <option value="partnership">Parceria Comercial</option>
                        <option value="franchise">Franquia</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Assunto *</label>
                      <input value={formData.subject} onChange={update("subject")} placeholder="Resumo do seu contato" className={inputClass} />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensagem *</label>
                      <textarea value={formData.message} onChange={update("message")} rows={5} placeholder="Escreva sua mensagem..." className={inputClass + " resize-none"} />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full mt-6 bg-[#C8102E] hover:bg-[#8E001A] disabled:opacity-50 text-white font-bold text-base py-4 px-8 rounded-2xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {loading ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Enviando...</> : <><Send size={18} /> Enviar Mensagem</>}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
