"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Coffee, Sandwich, Wifi, Wind, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: ShoppingBag, title: "Tem Conveniência", description: "A versão mais completa. Conforto e eficiência para sua parada estratégica", color: "bg-amber-50 text-amber-600" },
  { icon: Clock, title: "Tem Autoatendimento", description: "Entrou, escolheu, pagou, seguiu. Simples assim — para paradas rápidas", color: "bg-green-50 text-green-600" },
  { icon: Coffee, title: "Tem Beer", description: "Seu ponto de pausa para relaxar. Bebidas geladas e ambiente descontraído", color: "bg-blue-50 text-blue-600" },
  { icon: Sandwich, title: "Tem Conveniência Premium", description: "Conveniência com experiência. Cafés especiais e produtos selecionados", color: "bg-purple-50 text-purple-600" },
  { icon: Wifi, title: "Variedade Completa", description: "Bebidas geladas, lanches, refeições rápidas e essenciais do dia a dia", color: "bg-cyan-50 text-cyan-600" },
  { icon: Wind, title: "Conforto e Velocidade", description: "Atendimento ágil, ambiente acolhedor e produtos sempre frescos", color: "bg-orange-50 text-orange-600" },
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
        {/* Imagem de fundo — Interior da Tem Conveniência */}
        <Image
          src="/images/hero-conveniencia.jpg"
          alt="Interior de uma loja Tem Conveniência"
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
            {/* Logo Tem Conveniência (colorida) */}
            <div className="relative h-56 lg:h-80 w-full max-w-2xl mx-auto mb-10">
              <Image
                src="/images/logo-tem-color.png"
                alt="Tem Conveniência"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 600px, 800px"
              />
            </div>
            <p className="text-white text-xl max-w-2xl mx-auto drop-shadow-lg">
              Tudo o que você precisa, em um só lugar. Variedade, agilidade e
              conveniência em quatro versões para cada momento da sua jornada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              O que você encontra aqui
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F6F7F9] rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
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
