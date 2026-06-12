"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smartphone, FileText, ArrowLeftRight, CreditCard, Banknote, Fuel, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Smartphone, title: "Recarga de Celular", description: "Recarregue qualquer operadora direto pelo Rota Pay." },
  { icon: FileText, title: "Pagamento de Boleto", description: "Pague boletos de forma rápida, prática e segura." },
  { icon: ArrowLeftRight, title: "Transferências", description: "Envie e receba transferências entre contas com facilidade." },
  { icon: CreditCard, title: "Compras no Débito", description: "Use seu saldo Rota Pay para pagar suas compras no débito." },
  { icon: Banknote, title: "Saques em Caixas 24h", description: "Acesse seu dinheiro a qualquer hora em caixas 24h." },
  { icon: Fuel, title: "Melhor Preço no Abastecimento", description: "Condições exclusivas ao abastecer nos Postos Cacique." },
];

export default function RotaPayPage() {
  return (
    <>
      {/* Hero — Cinematográfico com motorista Rota Pay */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Imagem de fundo — Motorista Rota Pay */}
        <Image
          src="/images/hero-rotapay.png"
          alt="Motorista com camisa Rota Pay"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay escuro sutil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/75 via-[#0D0D0D]/40 to-[#0D0D0D]/65" />
        {/* Toque verde discreto na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00875A]/30 via-transparent to-transparent" />
        {/* Vinheta para o centro */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />

        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Logo Rota Pay com glow azul nas letras */}
            <div className="relative h-36 lg:h-60 w-72 lg:w-[24rem] mx-auto mb-6">
              <Image
                src="/images/logo-rotapay.png"
                alt="Rota Pay"
                fill
                priority
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 25px rgba(27,58,92,0.95)) drop-shadow(0 0 50px rgba(27,58,92,0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                }}
                sizes="(max-width: 1024px) 288px, 384px"
              />
            </div>
            <p className="text-[#F7B500] font-bold text-xl lg:text-2xl mb-4 drop-shadow-lg">
              + Facilidades para você
            </p>
            <p className="text-white text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-lg">
              O banco que está com você em todos os caminhos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="#facilidades" className="flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5">
                Conheça as facilidades
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilidades */}
      <section className="section-padding bg-white" id="facilidades">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E6F4EE] text-[#00875A] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide border border-[#00875A]/20">
              Facilidades
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-4">
              Tudo o que você precisa em um só lugar
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              O Rota Pay reúne as facilidades do dia a dia para simplificar a sua rotina.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-[#F8F9FB] rounded-2xl border border-[#E8ECF0] hover:shadow-lg hover:border-[#00875A]/30 transition-all"
              >
                <div className="w-12 h-12 bg-[#00875A] rounded-2xl flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-[#00875A] to-[#003D29] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7B500]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-white mb-6 leading-tight">
              O banco que está com você
              <br />
              <span className="text-[#F7B500]">em todos os caminhos</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Rota Pay. + Facilidade para você.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
