"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MapPin, Search, ArrowRight } from "lucide-react";
import { stations } from "@/data/stations";
import { StationCard } from "@/components/shared/StationCard";

export function StationsPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [search, setSearch] = useState("");

  const filtered = stations
    .filter(
      (s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.city.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 3);

  return (
    <section className="section-padding bg-[#F6F7F9] overflow-hidden" aria-labelledby="stations-title" ref={ref}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#EBF2FA] text-[#1B3A5C] text-sm font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Nossos Postos
            </span>
            <h2 id="stations-title" className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              Sempre perto de você
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
          >
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Buscar por cidade..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-3 border border-[#CDD5DF] rounded-full text-sm bg-white focus:outline-none focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C]/20 transition-colors w-full sm:w-64"
                aria-label="Buscar postos por cidade"
              />
            </div>
            <Link
              href="/postos"
              className="flex items-center justify-center gap-2 bg-[#1B3A5C] hover:bg-[#0F2540] text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:shadow-lg whitespace-nowrap"
            >
              Ver Todos
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((station, i) => (
              <motion.div
                key={station.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <StationCard station={station} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <MapPin size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-medium">Nenhum posto encontrado</p>
            <p className="text-sm mt-1">Tente outra cidade ou consulte todos os postos</p>
          </div>
        )}

        {/* Map CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[#C8102E] to-[#8E001A] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-white text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl mb-2">
              Encontre o posto mais próximo
            </h3>
            <p className="text-white/70">
              Use nosso mapa interativo e veja rotas até o posto mais conveniente
            </p>
          </div>
          <Link
            href="/postos"
            className="flex items-center gap-2 bg-white text-[#C8102E] font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MapPin size={18} />
            Abrir no Mapa
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
