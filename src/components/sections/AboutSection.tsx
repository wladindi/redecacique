"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  { title: "Qualidade rigorosa", description: "Combustível testado em cada carga, segurança para o seu motor" },
  { title: "Confiança construída", description: "Há quase 6 décadas no Norte e Nordeste do Brasil" },
  { title: "Presença regional", description: "Mais de 60 postos nas principais rotas do Nordeste" },
  { title: "Soluções completas", description: "Ecossistema integrado de abastecimento, conveniência e distribuição" },
];

const timeline = [
  { year: "1968", event: "Fundação da Rede Cacique no Nordeste do Brasil" },
  { year: "1990", event: "Consolidação como referência em abastecimento no Nordeste" },
  { year: "1998", event: "Inauguração da Cacique Lub — distribuidora oficial de lubrificantes" },
  { year: "2010", event: "Lançamento da Tem Conveniência nos postos da rede" },
  { year: "2018", event: "Expansão para 60+ unidades distribuídas em 4 estados" },
  { year: "2022", event: "Lançamento do Cacique Frotas — soluções B2B para frotistas" },
  { year: "2024", event: "Programa Cacique Fidelidade digital com pontos automáticos" },
  { year: "2026", event: "Rota Pay e nova plataforma digital integrada para clientes" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#F6F7F9] overflow-hidden" aria-labelledby="about-title" ref={ref} id="sobre">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-[#EBF2FA] text-[#1B3A5C] text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-wide uppercase border border-[#C8DCEF]">
                Nossa História
              </span>
              <h2 id="about-title" className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-6">
                Há quase 6 décadas,
                <span className="text-[#C8102E]"> impulsionando</span> quem move o Norte e Nordeste
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Com qualidade, confiança e eficiência. Mais de 60 postos estrategicamente
                distribuídos, com estrutura completa que inclui 16 lojas de conveniência,
                26 unidades de autoatendimento e 2 distribuidoras de lubrificantes e produtos automotivos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Presente nas principais rotas do Norte e Nordeste, atuamos diretamente no
                suporte ao transporte e ao escoamento da produção agrícola na MATOPIBA,
                conectando caminhos, impulsionando negócios e garantindo resultados.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <CheckCircle2 size={20} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{value.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{value.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#8E001A] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Conheça nossa história
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E8ECF0]">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-8">
                Nossa Linha do Tempo
              </h3>
              <div className="relative">
                {/* Linha vertical — navy sutil */}
                <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-[#1B3A5C]/20" />

                <div className="flex flex-col gap-7">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-5"
                    >
                      {/* Dot — navy marinho */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-11 h-11 bg-[#1B3A5C] rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                          <span className="text-white font-black text-[10px]">{item.year.slice(2)}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-1.5 flex-1 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                        <span className="font-heading font-bold text-sm text-gray-900">
                          {item.year}
                        </span>
                        <p className="text-gray-700 text-sm mt-0.5 leading-relaxed">
                          {item.event}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
