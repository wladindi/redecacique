"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Propósito", text: "Conectar caminhos, gerar valor e crescer junto com quem move o Brasil. Um ecossistema completo que integra abastecimento, conveniência, distribuição e soluções para pessoas e empresas." },
  { icon: Eye, title: "Visão", text: "Ser referência em abastecimento e soluções integradas nas principais rotas do Norte e Nordeste do Brasil, conectando caminhos e impulsionando negócios com qualidade, confiança e presença regional." },
  { icon: Heart, title: "Valores", text: "Qualidade rigorosa • Confiança construída • Presença regional • Soluções completas • Compromisso com resultado." },
];

const timeline = [
  { year: "1968", title: "O início de tudo", description: "Fundação da Rede Cacique no Nordeste do Brasil. Começa uma história de quase 6 décadas movendo pessoas, empresas e o desenvolvimento da região." },
  { year: "1990", title: "Consolidação no Nordeste", description: "A Rede Cacique se firma como referência em abastecimento nas principais rotas do Nordeste do Brasil." },
  { year: "1998", title: "Cacique Lub", description: "Inauguração da Cacique Lubrificantes — distribuidora oficial de lubrificantes, aditivos e produtos automotivos para o mercado B2B." },
  { year: "2010", title: "Tem Conveniência", description: "Lançamento das lojas Tem Conveniência nos postos da rede, ampliando a experiência do cliente nas paradas." },
  { year: "2015", title: "Tem Autoatendimento", description: "Lançamento das unidades de autoatendimento — entrou, escolheu, pagou, seguiu. Simples assim." },
  { year: "2018", title: "TRR Cacique", description: "Distribuição em escala para grandes consumidores: agronegócio MATOPIBA, frotas e indústrias." },
  { year: "2022", title: "Cacique Frotas", description: "Lançamento das soluções B2B — abastecimento estratégico, gestão digital e consultor dedicado para frotistas." },
  { year: "2024", title: "Expansão e Fidelidade", description: "60+ unidades em 4 estados e consolidação do Programa Cacique Fidelidade 100% digital." },
  { year: "2026", title: "Era Digital", description: "Lançamento do Rota Pay e nova plataforma digital integrada — quase 6 décadas conectando caminhos." },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Imagem de fundo — Vista aérea do ecossistema Cacique completo */}
        <Image
          src="/images/hero-sobre-aereo.jpeg"
          alt="Vista aérea de um complexo Cacique completo com Postos, Tem Conveniência, Oficina e TRR"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay escuro sutil — mesmo padrão das outras heros */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/75 via-[#0D0D0D]/40 to-[#0D0D0D]/65" />
        {/* Toque vermelho discreto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8E001A]/25 via-transparent to-transparent" />
        {/* Vinheta para o centro */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/20"
              style={{
                textShadow: "0 0 15px rgba(27,58,92,0.9), 0 2px 6px rgba(0,0,0,0.7)",
              }}
            >
              Sobre a Rede Cacique
            </span>
            <h1
              className="font-heading font-black text-5xl lg:text-7xl text-white mb-6 leading-tight"
              style={{
                textShadow:
                  "0 0 25px rgba(27,58,92,0.95), 0 0 50px rgba(27,58,92,0.7), 0 4px 12px rgba(0,0,0,0.5)",
              }}
            >
              Quase 60 anos movendo
              <br />
              <span className="text-[#F7B500]">pessoas, empresas e o Norte e Nordeste</span>
            </h1>
            <p
              className="text-white text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{
                textShadow:
                  "0 0 15px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)",
              }}
            >
              Um ecossistema completo que integra abastecimento, conveniência, distribuição
              e soluções para pessoas e empresas, com qualidade e presença nas principais
              rotas do Norte e Nordeste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#F6F7F9] rounded-3xl p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#C8102E] rounded-2xl flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#F6F7F9]" id="historia">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#EBF2FA] text-[#1B3A5C] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide border border-[#C8DCEF]">
              Nossa Jornada
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              Linha do Tempo
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Linha vertical — navy sutil */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1B3A5C]/20 -translate-x-1/2 hidden md:block" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex md:items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8ECF0] hover:shadow-md hover:border-[#1B3A5C]/30 transition-all">
                    <span className="font-heading font-black text-2xl text-gray-900">{item.year}</span>
                    <h3 className="font-heading font-bold text-base text-gray-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {/* Dot central — navy marinho */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1B3A5C] rounded-full items-center justify-center border-4 border-white shadow-lg z-10">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
