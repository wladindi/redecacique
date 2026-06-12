"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Phone } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white overflow-hidden" ref={ref} aria-label="Chamada para ação">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-[#C8102E] via-[#A50C26] to-[#8E001A] rounded-3xl overflow-hidden p-12 md:p-16 text-center"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F7B500]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(247,181,0,0.4) 0%, transparent 60%)`
          }} />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Star size={14} className="fill-[#F7B500] text-[#F7B500]" />
              Estrutura que move seu negócio
            </motion.div>

            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
              Onde o Brasil
              <br />
              <span className="text-[#F7B500]">se movimenta</span>
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Quase 60 anos abastecendo o Norte e Nordeste com combustível de qualidade,
              conveniência e soluções completas para quem precisa de um parceiro
              de verdade.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/fidelidade"
                className="flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold text-lg px-10 py-4 rounded-full transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Cadastrar no Fidelidade
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/postos"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-10 py-4 rounded-full transition-all"
              >
                <MapPin size={20} />
                Encontrar Posto
              </Link>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-white/60 text-sm">
              <a href="tel:8632288888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={16} />
                (86) 3228-8888 · Sede Teresina
              </a>
              <a href="mailto:contato@redecacique.com.br" className="hover:text-white transition-colors">
                contato@redecacique.com.br
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
