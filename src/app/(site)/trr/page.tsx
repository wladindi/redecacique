"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplet, Truck, Factory, Tractor, Building2, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const products = [
  { icon: Droplet, title: "Diesel S-10", description: "Combustível com baixíssimo teor de enxofre para motores modernos" },
  { icon: Droplet, title: "Diesel S-500", description: "Diesel para aplicações industriais e equipamentos pesados" },
  { icon: Droplet, title: "Arla 32", description: "Agente redutor líquido automotivo para reduzir emissões" },
];

const audience = [
  { icon: Tractor, title: "Agronegócio", description: "Projetos agrícolas, fazendas e cooperativas" },
  { icon: Truck, title: "Transportadoras", description: "Frotas de caminhões e logística" },
  { icon: Building2, title: "Construtoras", description: "Obras, máquinas e equipamentos pesados" },
  { icon: Factory, title: "Indústrias", description: "Fábricas, geradores e processos industriais" },
];

export default function TRRPage() {
  return (
    <>
      {/* Hero — Cinematográfico com vista aérea do terminal TRR */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Imagem de fundo — Base TRR Cacique ao entardecer */}
        <Image
          src="/images/hero-trr-base.png"
          alt="Base TRR Cacique ao entardecer com caminhões-tanque e picape Cacique"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay escuro sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/75 via-[#0D0D0D]/40 to-[#0D0D0D]/65" />
        {/* Toque vermelho discreto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8E001A]/30 via-transparent to-transparent" />
        {/* Vinheta para o centro */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-lg">
              Transportadora Revendedora Retalhista. Distribuição de diesel e combustíveis
              para grandes consumidores no Piauí, Maranhão, Tocantins e Bahia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/#cacique-frotas" className="flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5">
                Falar com Vendas
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-50 text-[#C8102E] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Nossos Produtos
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              Combustíveis e Aditivos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F8F9FB] rounded-2xl p-6 border border-[#E8ECF0] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#C8102E] rounded-2xl flex items-center justify-center mb-4">
                  <p.icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="section-padding bg-[#F8F9FB]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl text-gray-900 mb-4">Para quem é o TRR Cacique</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Atendemos grandes consumidores que precisam de fornecimento confiável,
              entrega direta e relacionamento de longo prazo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E8ECF0] text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-[#1B3A5C] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <a.icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Bases */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#EBF2FA] text-[#1B3A5C] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide border border-[#C8DCEF]">
            Bases Operacionais
          </span>
          <h2 className="font-heading font-black text-4xl text-gray-900 mb-8">
            Logística no coração do Nordeste
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Teresina · PI", "Bom Jesus · PI", "Uruçuí · PI"].map((base) => (
              <div key={base} className="bg-[#F8F9FB] rounded-2xl p-6 border border-[#E8ECF0]">
                <CheckCircle size={20} className="text-[#C8102E] mx-auto mb-3" />
                <p className="font-heading font-bold text-gray-900">{base}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-[#C8102E] to-[#8E001A]">
        <div className="container-custom text-center">
          <h2 className="font-heading font-black text-4xl text-white mb-6">
            Combustível em grande escala para o seu negócio
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Entre em contato com nossa equipe comercial e descubra como o TRR Cacique pode atender sua empresa
          </p>
          <Link href="/#cacique-frotas" className="inline-flex items-center gap-2 bg-white text-[#C8102E] font-bold text-lg px-10 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5">
            Falar com Vendas
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
