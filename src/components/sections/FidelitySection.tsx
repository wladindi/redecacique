"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Gift, Zap, CreditCard, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Pontos automáticos",
    description: "Acumule pontos a cada litro abastecido.",
    color: "text-amber-500 bg-amber-50",
  },
  {
    icon: Gift,
    title: "100+ itens com desconto",
    description: "Mais de 100 itens exclusivos para resgate na conveniência",
    color: "text-[#C8102E] bg-red-50",
  },
  {
    icon: CreditCard,
    title: "100% digital",
    description: "Sem cartão físico. Tudo pelo app, no Google Play e App Store",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Star,
    title: "Para todos os perfis",
    description: "Motoristas, caminhoneiros, frotistas e clientes locais",
    color: "text-purple-600 bg-purple-50",
  },
];

export function FidelitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#1a0005] to-[#0D0D0D]"
      aria-labelledby="fidelity-title"
      ref={ref}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8102E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F7B500]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(200,16,46,0.3) 40px,
              rgba(200,16,46,0.3) 41px
            )`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#F7B500]/10 text-[#F7B500] text-sm font-bold px-4 py-2 rounded-full mb-6 border border-[#F7B500]/20">
              <Star size={14} className="fill-[#F7B500]" />
              Programa Fidelidade
            </span>
            <h2 id="fidelity-title" className="font-heading font-black text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Abasteça, pontue e
              <br />
              <span className="text-[#F7B500]">transforme cada parada em vantagem</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              O programa de pontos da Rede Cacique que transforma o seu abastecimento
              em benefícios reais no dia a dia. Mais de 100 itens com descontos exclusivos
              esperam por você.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${benefit.color}`}>
                    <benefit.icon size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{benefit.title}</div>
                    <div className="text-white/50 text-xs mt-0.5 leading-relaxed">{benefit.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/fidelidade"
                className="flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                Cadastrar Grátis
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/fidelidade#saiba-mais"
                className="flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all"
              >
                Saiba Mais
              </Link>
            </div>
          </motion.div>

          {/* Right - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone mockup com imagem real do app */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
