"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, Clock, Shield, Wrench, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Droplets, title: "Lubrificantes", description: "Distribuição oficial de lubrificantes para todos os mercados — automotivo e industrial.", time: "B2B" },
  { icon: Wrench, title: "Aditivos e Fluidos", description: "Aditivos automotivos, fluidos especializados e produtos para manutenção preventiva.", time: "B2B" },
  { icon: Shield, title: "Peças e soluções", description: "Peças e soluções para mercados automotivo e industrial — qualidade e procedência garantida.", time: "B2B" },
  { icon: Clock, title: "Suporte para agronegócio", description: "Postos, lojas de auto peças, frotistas, agronegócio e operações industriais.", time: "PI · MA" },
];

export default function LubrificantesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Imagem de fundo — Depósito Cacique Lub */}
        <Image
          src="/images/hero-lub.jpeg"
          alt="Centro de distribuição Cacique Lubrificantes"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay escuro para destacar o logo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/85 via-[#0D0D0D]/65 to-[#0D0D0D]/80" />
        {/* Toque navy na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/45 via-transparent to-transparent" />
        {/* Vinheta forte para o centro destacar o logo */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, transparent 75%)" }} />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Logo Cacique Lubrificantes com glow azul nas letras */}
            <div className="relative h-56 lg:h-96 w-[24rem] lg:w-[52rem] max-w-full mx-auto mb-8">
              <Image
                src="/images/logo-lub-novo.png"
                alt="Cacique Lubrificantes"
                fill
                priority
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 25px rgba(27,58,92,0.95)) drop-shadow(0 0 50px rgba(27,58,92,0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                }}
                sizes="(max-width: 1024px) 384px, 832px"
              />
            </div>
            <p className="text-white text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Distribuidora oficial desde 1998. Lubrificantes, aditivos, fluidos automotivos,
              peças e soluções para mercados automotivo e industrial no Piauí e Maranhão.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a href="tel:8632288888" className="flex items-center gap-2 border border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                <Phone size={18} />
                Agendar Serviço
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Serviços
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              O que oferecemos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-[#F6F7F9] rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon size={24} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-gray-900">{service.title}</h3>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">{service.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Inscrição Cacique Frotas */}
      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-[#0D0D0D] via-[#1a0005] to-[#0D0D0D] rounded-3xl p-10 lg:p-16 text-center overflow-hidden shadow-2xl"
          >
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8102E]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F7B500]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <span className="inline-block bg-[#F7B500]/15 text-[#F7B500] text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide border border-[#F7B500]/30">
                Lubrificantes para sua frota
              </span>
              <h2 className="font-heading font-black text-3xl lg:text-5xl text-white mb-4 leading-tight">
                Solução completa em lubrificantes
                <br />
                <span className="text-[#F7B500]">para empresas e frotas</span>
              </h2>
              <p className="text-white/70 text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Atendimento B2B especializado, produtos homologados das melhores marcas e
                condições comerciais exclusivas. Reduza custos da sua operação com a Cacique Lub.
              </p>
              <Link
                href="/#cacique-frotas"
                className="inline-flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold text-base lg:text-lg px-8 lg:px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Quero me inscrever
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why */}
      <section className="section-padding bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl text-white">Por que escolher a Cacique Lub?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Técnicos Certificados", desc: "Equipe treinada e certificada pelos fabricantes para garantir o melhor serviço" },
              { title: "Garantia Total", desc: "Garantia em todos os serviços realizados. Sua tranquilidade é nossa prioridade" },
              { title: "Produtos Originais", desc: "Trabalhamos somente com produtos originais e homologados pelos fabricantes" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={24} className="text-[#F7B500]" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
