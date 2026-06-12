"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Fuel, ShoppingBag, Droplets, ArrowRight, CheckCircle, CreditCard, Briefcase, Star } from "lucide-react";

const segments = [
  {
    id: "postos",
    icon: Fuel,
    title: "Postos Cacique",
    subtitle: "",
    logoImage: "/images/logo-postos.png",
    headerImage: "/images/hero-postos-entardecer.jpg",
    description:
      "Mais de 60 postos nas principais rotas do Norte e Nordeste, com combustível testado e estrutura completa para sua jornada.",
    features: [
      "Combustível testado em cada carga",
      "Estrutura completa nas principais rotas",
      "Atendimento referência no Norte e Nordeste",
    ],
    cta: "Ver Postos",
    href: "/postos",
    color: "from-[#C8102E] to-[#8E001A]",
    bgColor: "bg-red-50",
    textColor: "text-[#C8102E]",
    featured: true,
  },
  {
    id: "conveniencia",
    icon: ShoppingBag,
    title: "Tem Conveniência",
    subtitle: "",
    logoImage: "/images/logo-tem.png",
    headerImage: "/images/hero-conveniencia-fachada.jpg",
    description:
      "Tudo o que você precisa, em um só lugar. Variedade, agilidade e conveniência em cada parada.",
    features: [
      "Bebidas geladas e variedade de snacks",
      "Refeições rápidas e essenciais do dia a dia",
      "Tem Autoatendimento — Entrou, escolheu, pagou, seguiu",
      "Tem Beer — Pausa para relaxar com pessoas",
      "Tem Conveniência Café — Cafés especiais",
      "Ambiente acolhedor e produtos selecionados",
    ],
    cta: "Saiba Mais",
    href: "/conveniencia",
    color: "from-[#2D6FB4] to-[#1B4F8A]",
    bgColor: "bg-[#EAF2FB]",
    textColor: "text-[#2D6FB4]",
    featured: false,
  },
  {
    id: "fidelidade",
    icon: Star,
    title: "Cacique Fidelidade",
    subtitle: "",
    logoImage: "/images/logo-fidelidade.png",
    headerImage: "/images/app-fidelidade.jpg",
    description:
      "Abasteça, pontue e transforme cada parada em vantagem. Mais de 100 itens com descontos exclusivos.",
    features: [
      "Pontos a cada litro abastecido",
      "Mais de 100 itens com descontos exclusivos",
      "Para motoristas, caminhoneiros, frotistas e clientes locais",
      "Programa 100% digital, sem cartão físico",
      "Cadastro gratuito e pontos automáticos",
      "App disponível no Google Play e App Store",
    ],
    cta: "Cadastrar Grátis",
    href: "/fidelidade",
    color: "from-[#F7B500] to-[#D49A00]",
    bgColor: "bg-[#FFF6D9]",
    textColor: "text-[#D49A00]",
    featured: false,
  },
  {
    id: "rota-pay",
    icon: CreditCard,
    title: "Rota Pay",
    subtitle: "",
    logoImage: "/images/logo-rotapay.png",
    headerImage: "/images/hero-rotapay.png",
    description:
      "+ Facilidades para você. O banco que está com você em todos os caminhos.",
    features: [
      "Recarga de Celular",
      "Pagamento de Boleto",
      "Transferências",
      "Compras no Débito",
      "Saques em Caixas 24h",
      "Melhor Preço no Abastecimento",
    ],
    cta: "Conhecer Rota Pay",
    href: "/rota-pay",
    color: "from-[#00875A] to-[#006544]",
    bgColor: "bg-[#E6F4EE]",
    textColor: "text-[#00875A]",
    featured: false,
  },
  {
    id: "lubrificantes",
    icon: Droplets,
    title: "Cacique Lub",
    subtitle: "",
    logoImage: "/images/logo-lub-novo.png",
    headerImage: "/images/hero-lub.jpeg",
    description:
      "Distribuidora oficial desde 1998. Lubrificantes, aditivos, fluidos automotivos, peças e soluções para mercados automotivo e industrial.",
    features: [
      "Lubrificantes premium para todos os motores",
      "Aditivos e fluidos automotivos",
      "Peças e soluções para mercado automotivo e industrial",
      "Atendimento B2B: postos, lojas e frotas",
      "Suporte para agronegócio e operações industriais",
      "Presença estratégica em PI e MA",
    ],
    cta: "Conhecer",
    href: "/lubrificantes",
    color: "from-[#1B3A5C] to-[#0F2540]",
    bgColor: "bg-[#EBF2FA]",
    textColor: "text-[#1B3A5C]",
    featured: false,
  },
  {
    id: "trr",
    icon: Briefcase,
    title: "TRR Cacique",
    subtitle: "Transportadora Revendedora Retalhista",
    logoImage: "/images/logo-trr.png",
    headerImage: "/images/hero-trr-base.png",
    description:
      "Distribuição de diesel e combustíveis para grandes consumidores: projetos agrícolas, frotas, construtoras e indústrias.",
    features: [
      "Diesel S-10 e S-500 para grandes volumes",
      "Atendimento ao agronegócio",
      "Logística especializada",
      "Frota própria para entrega",
      "Atendimento B2B em PI, MA, TO e BA",
      "Desde 1992 no mercado",
    ],
    cta: "Falar com Vendas",
    href: "/trr",
    color: "from-[#C8102E] to-[#8E001A]",
    bgColor: "bg-red-50",
    textColor: "text-[#C8102E]",
    featured: false,
  },
];

export function SegmentsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white overflow-hidden" aria-labelledby="segments-title" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-50 text-[#C8102E] text-sm font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
            Nossos Segmentos
          </span>
          <h2 id="segments-title" className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-4">
            Muito além de postos de combustível
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Um ecossistema completo para quem precisa ir além do básico:
            abastecimento, conveniência, distribuição e soluções B2B.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden ${segment.featured ? "lg:row-span-1" : ""}`}
            >
              {/* Card */}
              <div className="h-full bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Header com imagem de fundo */}
                <div className="relative h-56 overflow-hidden">
                  {/* Imagem de fundo */}
                  {"headerImage" in segment && segment.headerImage && (
                    <Image
                      src={segment.headerImage as string}
                      alt=""
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {/* Overlay escuro para destacar logo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

                  {/* Logo com glow azul nas letras */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {"logoImage" in segment && segment.logoImage ? (
                      <div
                        className={`relative ${
                          segment.id === "lubrificantes" ? "h-40 w-72" : "h-24 w-52"
                        }`}
                      >
                        <Image
                          src={segment.logoImage as string}
                          alt={segment.title}
                          fill
                          className="object-contain"
                          style={{
                            filter:
                              "drop-shadow(0 0 20px rgba(27,58,92,0.95)) drop-shadow(0 0 40px rgba(27,58,92,0.7)) drop-shadow(0 4px 10px rgba(0,0,0,0.6))",
                          }}
                          sizes={segment.id === "lubrificantes" ? "288px" : "208px"}
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <div
                          className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-2 mx-auto backdrop-blur-sm"
                          style={{
                            filter:
                              "drop-shadow(0 0 15px rgba(27,58,92,0.9)) drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
                          }}
                        >
                          <segment.icon size={24} className="text-white" />
                        </div>
                        {segment.subtitle && (
                          <div
                            className="text-white text-[10px] font-medium uppercase tracking-wide mb-0.5"
                            style={{
                              textShadow:
                                "0 0 15px rgba(27,58,92,0.95), 0 2px 6px rgba(0,0,0,0.7)",
                            }}
                          >
                            {segment.subtitle}
                          </div>
                        )}
                        <h3
                          className="font-heading font-black text-2xl text-white"
                          style={{
                            textShadow:
                              "0 0 20px rgba(27,58,92,0.95), 0 0 40px rgba(27,58,92,0.7), 0 4px 10px rgba(0,0,0,0.6)",
                          }}
                        >
                          {segment.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {segment.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-8">
                    {segment.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle size={15} className={segment.textColor} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={segment.href}
                    className={`flex items-center gap-2 w-full justify-center bg-gradient-to-r ${segment.color} text-white font-bold py-3.5 px-6 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm`}
                  >
                    {segment.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
