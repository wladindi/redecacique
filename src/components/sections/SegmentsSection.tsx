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
    description:
      "Mais de 60 postos nas principais rotas do Nordeste, com combustível testado e estrutura completa para sua jornada.",
    features: [
      "Combustível testado em cada carga",
      "Estrutura completa nas principais rotas",
      "Gasolina Comum e Aditivada",
      "Etanol e Diesel S-10 / S-500",
      "Procedência garantida",
      "Atendimento referência no Nordeste",
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
    description:
      "Tudo o que você precisa, em um só lugar. Variedade, agilidade e conveniência em cada parada.",
    features: [
      "Bebidas geladas e variedade de snacks",
      "Refeições rápidas e essenciais do dia a dia",
      "Tem Autoatendimento — Entrou, escolheu, pagou, seguiu",
      "Tem Beer — Pausa para relaxar com pessoas",
      "Tem Conveniência Premium — Cafés especiais",
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
    id: "lubrificantes",
    icon: Droplets,
    title: "Cacique Lub",
    subtitle: "",
    logoImage: "/images/logo-lub.png",
    description:
      "Distribuidora oficial desde 1998. Lubrificantes, aditivos, fluidos automotivos, peças e soluções para mercados automotivo e diesel.",
    features: [
      "Lubrificantes premium para todos os motores",
      "Aditivos e fluidos automotivos",
      "Peças e soluções para mercado automotivo e diesel",
      "Atendimento B2B: postos, lojas e frotas",
      "Suporte para agronegócio e operações diesel",
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
    id: "rota-pay",
    icon: CreditCard,
    title: "Rota Pay",
    subtitle: "",
    logoImage: "/images/logo-rotapay.png",
    description:
      "Plataforma fintech da Rede Cacique para simplificar abastecimentos, oferecer benefícios e otimizar a gestão financeira de clientes e empresas.",
    features: [
      "Pagamento digital simplificado",
      "Cashback e benefícios exclusivos",
      "Controle de despesas em tempo real",
      "Integração com a rede Cacique",
      "Segurança e praticidade",
      "Aceito em todos os postos",
    ],
    cta: "Conhecer Rota Pay",
    href: "/rota-pay",
    color: "from-[#00875A] to-[#006544]",
    bgColor: "bg-[#E6F4EE]",
    textColor: "text-[#00875A]",
    featured: false,
  },
  {
    id: "fidelidade",
    icon: Star,
    title: "Cacique Fidelidade",
    subtitle: "",
    logoImage: "/images/logo-fidelidade.png",
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
    id: "trr",
    icon: Briefcase,
    title: "TRR Cacique",
    subtitle: "Transportadora Revendedora Retalhista",
    description:
      "Distribuição de diesel e combustíveis para grandes consumidores: projetos agrícolas, frotas, construtoras e indústrias.",
    features: [
      "Diesel S-10 e S-500 para grandes volumes",
      "Atendimento ao agronegócio",
      "Logística especializada",
      "Frota própria para entrega",
      "Atendimento B2B em PI, MA e PE",
      "Desde 1993 no mercado",
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
                {/* Header */}
                <div className={`bg-gradient-to-br ${segment.color} p-8`}>
                  {!("logoImage" in segment && segment.logoImage) && (
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <segment.icon size={28} className="text-white" />
                    </div>
                  )}
                  {"logoImage" in segment && segment.logoImage ? (
                    <div className="relative h-36 w-64">
                      <Image
                        src={segment.logoImage as string}
                        alt={segment.title}
                        fill
                        className="object-contain object-left drop-shadow-xl"
                        sizes="256px"
                      />
                    </div>
                  ) : (
                    <>
                      {segment.subtitle && (
                        <div className="text-white/70 text-sm font-medium uppercase tracking-wide mb-1">
                          {segment.subtitle}
                        </div>
                      )}
                      <h3 className="font-heading font-black text-2xl text-white">
                        {segment.title}
                      </h3>
                    </>
                  )}
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
