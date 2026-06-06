"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import Image from "next/image";
import { CreditCard, Smartphone, Shield, Zap, TrendingUp, CheckCircle, ArrowRight, Wallet } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Smartphone, title: "Pagamento Digital", description: "Quite seu abastecimento direto pelo app, sem dinheiro nem maquininha" },
  { icon: Wallet, title: "Cashback Exclusivo", description: "Receba cashback em cada abastecimento na rede Cacique" },
  { icon: TrendingUp, title: "Controle Total", description: "Acompanhe suas despesas em tempo real com relatórios detalhados" },
  { icon: Shield, title: "Segurança", description: "Criptografia bancária e autenticação em todas as transações" },
  { icon: Zap, title: "Rápido e Prático", description: "Abasteça em segundos: aproxime o celular e pronto" },
  { icon: CreditCard, title: "Integração Cacique", description: "Aceito em todos os 58+ postos da rede no PI, MA e PE" },
];

const benefits = [
  "Cashback de até 5% em combustível",
  "Sem anuidade nem taxas escondidas",
  "Suporte 24/7 via app e telefone",
  "Histórico completo de transações",
  "Limite personalizado conforme seu perfil",
  "Integração com Cacique Fidelidade",
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
            {/* Logo Rota Pay — verde */}
            <div className="relative h-44 lg:h-64 w-full max-w-md mx-auto mb-8">
              <Image
                src="/images/logo-rotapay-color.png"
                alt="Rota Pay"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 1024px) 400px, 500px"
              />
            </div>
            <p className="text-white text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-lg">
              A maneira mais simples, rápida e inteligente de pagar seus abastecimentos.
              Cashback, controle e benefícios exclusivos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="#cadastrar" className="flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-0.5">
                Quero o Rota Pay
                <ArrowRight size={18} />
              </Link>
              <Link href="#como-funciona" className="flex items-center gap-2 border border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                Como funciona
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white" id="como-funciona">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#E6F4EE] text-[#00875A] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide border border-[#00875A]/20">
              Funcionalidades
            </span>
            <h2 className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              Tudo em um só app
            </h2>
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

      {/* Benefits */}
      <section className="section-padding bg-[#F8F9FB]" id="cadastrar">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#E6F4EE] text-[#00875A] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide border border-[#00875A]/20">
                Benefícios
              </span>
              <h2 className="font-heading font-black text-4xl text-gray-900 mb-6">
                Mais economia em cada abastecimento
              </h2>
              <ul className="flex flex-col gap-3 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle size={20} className="text-[#00875A] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contato" className="inline-flex items-center gap-2 bg-[#00875A] hover:bg-[#006544] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5">
                Quero saber mais
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00875A] to-[#003D29] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/10">
                  <div className="text-white/70 text-xs mb-2 uppercase tracking-wider">Saldo Disponível</div>
                  <div className="font-black text-4xl text-white mb-1">R$ 1.247,90</div>
                  <div className="text-[#F7B500] text-sm font-semibold">+ R$ 62,40 em cashback</div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-white text-sm font-bold">Abastecer</div>
                  </div>
                  <div className="bg-[#F7B500] rounded-xl p-3 text-center">
                    <div className="text-gray-900 text-sm font-bold">Pagar Agora</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-white/70 text-xs mb-2 uppercase tracking-wider">Última transação</div>
                  <div className="flex justify-between text-white text-sm">
                    <span>Posto Cacique 13 — Teresina</span>
                    <span className="font-bold">R$ 187,50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
