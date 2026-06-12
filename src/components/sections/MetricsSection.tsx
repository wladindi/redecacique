"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Fuel, Users, MapPin, Award } from "lucide-react";

const metrics = [
  {
    icon: MapPin,
    value: 60,
    suffix: "+",
    label: "Postos",
    description: "Distribuídos nas principais rotas do Norte e Nordeste",
    color: "bg-red-50 text-[#C8102E]",
  },
  {
    icon: Users,
    value: 40,
    suffix: "+",
    label: "Lojas de Conveniência",
    description: "Variedade, agilidade e praticidade",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Fuel,
    value: 14,
    suffix: "",
    label: "TRRs",
    description: "Distribuição em escala para grandes consumidores",
    color: "bg-[#EBF2FA] text-[#1B3A5C]",
  },
  {
    icon: Award,
    value: 2,
    suffix: "",
    label: "Distribuidoras",
    description: "Lubrificantes e produtos automotivos",
    color: "bg-green-50 text-green-600",
  },
];

export function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white relative overflow-hidden" aria-labelledby="metrics-title" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] via-[#F7B500] to-[#C8102E]" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="metrics-title" className="font-heading font-black text-4xl lg:text-5xl text-gray-900 mb-4">
            Estrutura que move seu negócio
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Há quase 60 anos abastecendo o Norte e Nordeste com combustível de qualidade,
            conveniência e soluções completas para quem precisa de um parceiro de verdade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl p-10 border border-gray-100 hover:border-[#C8102E]/30 hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/0 to-[#C8102E]/0 group-hover:from-[#C8102E]/3 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="font-heading font-black text-6xl lg:text-7xl text-gray-900 mb-3">
                  <AnimatedCounter
                    to={metric.value}
                    suffix={metric.suffix}
                  />
                </div>

                <div className="font-heading font-bold text-gray-900 text-xl mb-3">
                  {metric.label}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
