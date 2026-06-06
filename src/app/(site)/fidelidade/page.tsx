"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ChevronDown, HelpCircle } from "lucide-react";

const faqItems = [
  { q: "Como me cadastro no Cacique Fidelidade?", a: "O cadastro é 100% digital e gratuito. Basta baixar o app na Google Play ou App Store e fazer o cadastro com seus dados." },
  { q: "Como acumulo pontos?", a: "Os pontos acumulam automaticamente a cada litro abastecido em qualquer posto Cacique. Sem necessidade de ação adicional." },
  { q: "Para quem é o programa?", a: "Motoristas, caminhoneiros, frotistas e clientes locais. Quem abastece na Rede Cacique pode participar e aproveitar os benefícios." },
  { q: "Como resgato meus pontos?", a: "Pelo app, você troca seus pontos por mais de 100 itens exclusivos com descontos especiais — produtos da conveniência, combustível e muito mais." },
  { q: "Preciso de cartão físico?", a: "Não. O programa é 100% digital, sem cartão físico. Tudo funciona pelo app no seu smartphone." },
  { q: "Quando começam a contar meus pontos?", a: "A partir do seu próximo abastecimento após o cadastro, os pontos começam a acumular automaticamente." },
];


export default function FidelidadePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0D0D0D] via-[#1a0005] to-[#0D0D0D] pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F7B500]/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto + logo à esquerda */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
              {/* Logo Cacique Fidelidade */}
              <div className="relative h-48 lg:h-64 w-full max-w-xl mx-auto lg:mx-0 mb-6">
                <Image
                  src="/images/logo-fidelidade-color.png"
                  alt="Cacique Fidelidade"
                  fill
                  priority
                  className="object-contain lg:object-left drop-shadow-2xl"
                  sizes="(max-width: 1024px) 550px, 700px"
                />
              </div>
              <p className="text-white/80 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
                Abasteça, pontue e transforme cada parada em vantagem. Programa de pontos
                100% digital com mais de 100 itens exclusivos para resgate.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#saiba-mais" className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#8E001A] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5">
                  Saiba mais
                </a>
              </div>
            </motion.div>

            {/* Mockup do celular — igual ao da home */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center lg:justify-end">
              <div className="relative w-72 mx-auto">
                <div className="bg-gradient-to-br from-[#1a0005] to-[#0D0D0D] rounded-[2.5rem] p-3 border border-white/10 shadow-2xl">
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
                    <Image
                      src="/images/app-fidelidade.jpg"
                      alt="App Cacique Fidelidade — Resgatar pontos"
                      fill
                      className="object-cover object-top"
                      sizes="288px"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por que fazer parte? */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-6">
              Por que fazer parte?
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
              Sua rotina começa a trabalhar a seu favor. Na Rede Cacique, você não abastece — apenas você ganha.
              Com o Cacique Fidelidade, você acumula pontos e resgata descontos em produtos e benefícios nos
              Postos da Rede Cacique, lojas Tem Conveniência e serviços de parceiros.
            </p>
            <div className="bg-red-50 border-l-4 border-[#C8102E] rounded-r-2xl px-6 py-4 inline-block">
              <p className="text-[#C8102E] font-semibold text-base lg:text-lg">
                São mais de 100 itens com descontos exclusivos, pensados para gerar economia de verdade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como funciona? */}
      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-red-50 rounded-3xl p-8 lg:p-12 border border-red-100">
            <h2 className="font-heading font-black text-3xl lg:text-4xl text-gray-900 text-center mb-10">
              Como funciona?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { num: 1, title: "Abasteça em um Posto Cacique", desc: "Qualquer abastecimento conta" },
                { num: 2, title: "Acumule pontos automaticamente", desc: "Sem fazer nada além de abastecer" },
                { num: 3, title: "Resgate descontos e vantagens exclusivas", desc: "Escolha entre +100 ofertas imperdíveis" },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-black text-white text-base">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-sm lg:text-base mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-xs lg:text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center pt-4 border-t border-red-200">
              <p className="font-bold text-gray-800 text-sm lg:text-base">
                Sem cartão físico. Sem burocracia. Tudo na palma da sua mão.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferencial Cacique */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-3 tracking-wide">
              DIFERENCIAL CACIQUE
            </h2>
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <span className="w-12 h-px bg-gray-300" />
              Fidelidade que gera retorno real
              <span className="w-12 h-px bg-gray-300" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#C8102E] rounded-2xl py-4 px-6 text-center mb-12"
          >
            <p className="text-white font-bold text-sm lg:text-base">
              O programa foi pensado para quem está na estrada e no dia a dia
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: "🚗", title: "Motoristas" },
              { icon: "🚌", title: "Caminhoneiros" },
              { icon: "🏠", title: "Clientes Locais" },
              { icon: "🚚", title: "Frotistas" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl lg:text-6xl mb-4 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-[#C8102E] text-base lg:text-lg">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<section className="section-padding bg-white" id="saiba-mais">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12"><h2 className="font-heading font-black text-4xl text-gray-900">Dúvidas Frequentes</h2></div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-[#F6F7F9] rounded-2xl overflow-hidden border border-gray-100">
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left" aria-expanded={openFaq === i}>
                  <span className="font-semibold text-gray-900 text-sm pr-4 flex items-center gap-2"><HelpCircle size={16} className="text-[#C8102E] flex-shrink-0" />{item.q}</span>
                  <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="px-5 pb-5"><p className="text-gray-600 text-sm leading-relaxed pl-6">{item.a}</p></motion.div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
