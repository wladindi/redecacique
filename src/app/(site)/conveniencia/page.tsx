"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const variants = [
  {
    bg: "bg-[#F7B500]",
    badge: "CONVENIÊNCIA",
    title: "Sua parada com mais praticidade e conforto",
    paragraphs: [
      "A Tem Conveniência oferece variedade, agilidade e tudo o que você precisa em uma única parada.",
      "Bebidas geladas, snacks, alimentação rápida e itens essenciais para o dia a dia.",
      "Perfeita para quem quer resolver tudo com conforto, praticidade e rapidez.",
    ],
    textColor: "text-white",
  },
  {
    bg: "bg-[#2D6FB4]",
    badge: "CONVENIÊNCIA AUTOATENDIMENTO",
    customLogo: "/images/logo-tem-autoatendimento.png",
    title: "Rapidez e praticidade para seguir viagem",
    paragraphs: [
      "Na Tem Autoatendimento, você tem total autonomia: entra, escolhe, paga e segue viagem.",
      "Uma experiência rápida, sem filas e sem complicações.",
      "Ideal para paradas rápidas, sem perder tempo.",
    ],
    textColor: "text-white",
  },
  {
    bg: "bg-[#C8102E]",
    badge: "BEER",
    customLogo: "/images/logo-tem-beer.png",
    title: "O ponto de encontro para relaxar",
    paragraphs: [
      "A Tem Beer é o ambiente perfeito para uma pausa de verdade.",
      "Bebidas geladas, petiscos e um espaço descontraído pensado para você relaxar, encontrar amigos e aproveitar cada momento.",
    ],
    textColor: "text-white",
  },
  {
    bg: "bg-[#4A2C20]",
    badge: "CONVENIÊNCIA CAFÉ",
    customLogo: "/images/logo-tem-cafe.png",
    title: "Uma experiência mais completa e acolhedora",
    paragraphs: [
      "A Tem Conveniência Café une conveniência com experiência.",
      "Cafés especiais, produtos selecionados e um ambiente acolhedor que transforma sua parada em um momento de qualidade.",
      "Ideal para quem valoriza conforto, sofisticação e uma experiência diferenciada.",
    ],
    textColor: "text-white",
  },
];

const menu = [
  { category: "Café & Bebidas", items: ["Espresso", "Cappuccino", "Latte", "Suco natural", "Refrigerantes", "Água mineral", "Energéticos"] },
  { category: "Lanches", items: ["Croissant de presunto e queijo", "Wrap integral", "Sanduíche natural", "Pão de queijo", "Coxinha", "Esfiha"] },
  { category: "Doces & Snacks", items: ["Barra de cereal", "Chocolates", "Biscoitos", "Frutas frescas", "Iogurte"] },
  { category: "Conveniências", items: ["Produtos de higiene", "Pilhas e acessórios", "Revistas e jornais", "Brinquedos e adesivos"] },
];

export default function ConvenienciaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Imagem de fundo — Fachada Tem Conveniência à noite */}
        <Image
          src="/images/hero-conveniencia-fachada.jpg"
          alt="Fachada de uma loja Tem Conveniência iluminada à noite"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay sutil — escurece levemente para a imagem aparecer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2540]/55 via-[#1B3A5C]/50 to-[#0A0F1A]/65" />
        {/* Vinheta central para destacar a logo */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)" }} />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Logo Tem Conveniência com glow azul nas letras */}
            <div className="relative h-40 lg:h-72 w-72 lg:w-[34rem] mx-auto mb-10">
              <Image
                src="/images/logo-tem.png"
                alt="Tem Conveniência"
                fill
                priority
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 25px rgba(27,58,92,0.95)) drop-shadow(0 0 50px rgba(27,58,92,0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                }}
                sizes="(max-width: 1024px) 288px, 544px"
              />
            </div>
            <p className="text-white text-xl max-w-2xl mx-auto drop-shadow-lg">
              Tudo o que você precisa, em um só lugar. Variedade, agilidade e
              conveniência em quatro versões para cada momento da sua jornada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Variantes — 4 cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-4">
              Quatro experiências, um único compromisso
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Conheça as versões da Tem Conveniência pensadas para cada momento da sua jornada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {variants.map((v, i) => (
              <motion.div
                key={v.badge + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${v.bg} rounded-3xl p-6 lg:p-8 flex flex-col`}
              >
                {/* Logo card branco — quadrado uniforme, logo ajustada visualmente */}
                <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm overflow-hidden">
                  <div className="relative w-full h-16 lg:h-20">
                    <Image
                      src={"customLogo" in v && v.customLogo ? (v.customLogo as string) : "/images/logo-tem-color.png"}
                      alt={"customLogo" in v && v.customLogo ? `Tem ${v.badge}` : "Tem Conveniência"}
                      fill
                      className={`object-contain ${"customLogo" in v && v.customLogo ? "scale-150" : ""}`}
                      sizes="(max-width: 1024px) 240px, 320px"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`font-heading font-black text-xl lg:text-2xl ${v.textColor} mb-5 text-center leading-tight`}>
                  {v.title}
                </h3>

                {/* Paragraphs */}
                <div className="flex flex-col gap-3 flex-1">
                  {v.paragraphs.map((p, idx) => (
                    <p
                      key={idx}
                      className={`text-center text-sm leading-relaxed ${
                        v.textColor === "text-gray-900" ? "text-gray-800" : "text-white/90"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-amber-50 text-amber-600 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Cardápio
            </span>
            <h2 className="font-heading font-black text-4xl text-gray-900">
              Nossos Produtos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menu.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 pb-3 border-b border-gray-100">
                  {cat.category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading font-black text-4xl text-gray-900 mb-6">
            Encontre uma Tem Conveniência
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Nossas lojas de conveniência estão presentes nos principais postos da Rede Cacique
          </p>
          <Link
            href="/postos"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:shadow-xl"
          >
            Ver Postos com Conveniência
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
