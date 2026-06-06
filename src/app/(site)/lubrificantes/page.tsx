"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, Clock, Shield, Wrench, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Droplets, title: "Lubrificantes", description: "Distribuição oficial de lubrificantes para todos os mercados — automotivo, diesel e industrial.", time: "B2B" },
  { icon: Wrench, title: "Aditivos e Fluidos", description: "Aditivos automotivos, fluidos especializados e produtos para manutenção preventiva.", time: "B2B" },
  { icon: Shield, title: "Peças Automotivas", description: "Peças e soluções para mercados automotivo e diesel — qualidade e procedência garantida.", time: "B2B" },
  { icon: Clock, title: "Atendimento B2B", description: "Postos, lojas de auto peças, frotistas, agronegócio e operações diesel.", time: "PI · MA" },
];

const oils = [
  { name: "Sintético 5W-30", brand: "Shell Helix", type: "Sintético", compatible: "Veículos flex e gasolina modernos", price: "R$ 89,90" },
  { name: "Semi-sintético 10W-40", brand: "Castrol Magnatec", type: "Semi-sintético", compatible: "Motores diesel e gasolina", price: "R$ 64,90" },
  { name: "Sintético 0W-20", brand: "Mobil 1", type: "Sintético", compatible: "Motores de alto desempenho", price: "R$ 119,90" },
  { name: "Mineral 15W-40", brand: "Lubrax", type: "Mineral", compatible: "Motores antigos e diesel pesado", price: "R$ 39,90" },
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
        {/* Overlay escuro sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/75 via-[#0D0D0D]/40 to-[#0D0D0D]/65" />
        {/* Toque navy discreto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A5C]/30 via-transparent to-transparent" />
        {/* Vinheta para o centro */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Logo Cacique Lubrificantes — colorida natural */}
            <div className="relative h-48 lg:h-72 w-full max-w-3xl mx-auto mb-8">
              <Image
                src="/images/logo-lub-color.png"
                alt="Cacique Lubrificantes"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 700px, 900px"
              />
            </div>
            <p className="text-white text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Distribuidora oficial desde 1998. Lubrificantes, aditivos, fluidos automotivos,
              peças e soluções para mercados automotivo e diesel no Piauí e Maranhão.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/postos" className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#8E001A] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5">
                <Droplets size={18} />
                Encontrar Posto
              </Link>
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

      {/* Oils */}
      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl text-gray-900">
              Nossos Óleos
            </h2>
            <p className="text-gray-500 mt-3">Trabalhamos com as melhores marcas do mercado</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oils.map((oil, i) => (
              <motion.div
                key={oil.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Droplets size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{oil.name}</h3>
                <p className="text-[#C8102E] text-xs font-semibold mb-2">{oil.brand}</p>
                <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full mb-3">
                  {oil.type}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{oil.compatible}</p>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-lg text-gray-900">{oil.price}</span>
                  <span className="text-xs text-gray-400">/litro</span>
                </div>
              </motion.div>
            ))}
          </div>
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
