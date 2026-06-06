"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";

const stats = [
  { value: "60+", label: "Unidades" },
  { value: "4", label: "Estados" },
  { value: "6+", label: "Décadas" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-start lg:items-center overflow-hidden"
      aria-label="Hero - Bem-vindo à Rede Cacique"
    >
      {/* === MOBILE: Foto da funcionária no topo + texto embaixo (estilo Decio) === */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-frentista.png"
          alt="Frentista Rede Cacique sorrindo"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient: topo transparente (rosto visível) → escuro embaixo (legibilidade do texto) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent" />
        {/* Toque vermelho discreto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8E001A]/40 via-transparent to-transparent" />
      </div>

      {/* === DESKTOP: Gradiente vermelho clássico + foto à direita === */}
      <div className="absolute inset-0 hidden lg:block animated-gradient noise-overlay">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 50%, rgba(247,181,0,0.3) 0%, transparent 50%),
                radial-gradient(circle at 75% 50%, rgba(200,16,46,0.3) 0%, transparent 50%)`,
            }}
          />
        </div>
        {/* Animated Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#F7B500]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pb-24 lg:pt-20 lg:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="mt-[55vh] lg:mt-0">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.05] mb-5 lg:mb-6 drop-shadow-lg"
            >
              Somos referência em abastecimento com
              <br />
              <span className="text-[#F7B500]">quase 6 décadas de excelência</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed mb-5 lg:mb-8 max-w-lg drop-shadow"
            >
              Mais de 60 postos nas principais rotas do Nordeste, com combustível
              testado e estrutura completa para sua jornada.
            </motion.p>

            {/* Badge — entre descrição e stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-5 lg:mb-8"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-[#F7B500] fill-[#F7B500]" />
                ))}
              </div>
              <span className="text-white text-xs sm:text-sm font-medium">
                Desde 1970 no Nordeste
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex gap-6 sm:gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white drop-shadow">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Foto da frentista (apenas desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow atrás */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F7B500]/30 to-transparent rounded-[3rem] blur-2xl" />

              {/* Container da foto */}
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="/images/hero-frentista.png"
                  alt="Frentista da Rede Cacique abastecendo um veículo"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 0px, 50vw"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge — 24h */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[#F7B500] text-gray-900 rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="font-black text-xl">24h</div>
                <div className="text-xs font-semibold">Aberto</div>
              </motion.div>

              {/* Floating badge — 50K+ */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C8102E]/10 rounded-xl flex items-center justify-center">
                    <Star size={18} className="text-[#C8102E] fill-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">50K+ clientes</div>
                    <div className="text-xs text-gray-500">no Fidelidade</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — apenas desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 z-10"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
