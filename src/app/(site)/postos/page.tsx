"use client";

export const dynamic = "force-dynamic";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, MapPin, Filter, List, Map } from "lucide-react";
import { stations, cities } from "@/data/stations";
import { StationCard } from "@/components/shared/StationCard";
import { StationMap } from "@/components/shared/StationMap";

export default function PostosPage() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showConvenience, setShowConvenience] = useState(false);
  const [showLub, setShowLub] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filtered = useMemo(() => {
    return stations.filter((s) => {
      const matchSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.city.toLowerCase().includes(search.toLowerCase()) ||
        s.address.toLowerCase().includes(search.toLowerCase());
      const matchCity = !selectedCity || s.city === selectedCity;
      const matchConv = !showConvenience || s.hasConvenience;
      const matchLub = !showLub || s.hasLubrificants;
      return matchSearch && matchCity && matchConv && matchLub;
    });
  }, [search, selectedCity, showConvenience, showLub]);

  return (
    <>
      {/* Hero — estilo cinematográfico igual ao da home */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Imagem de fundo — Posto Cacique ao entardecer */}
        <Image
          src="/images/hero-postos-entardecer.jpg"
          alt="Posto Cacique ao entardecer com céu colorido"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay escuro sutil — sem vermelho saturado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/75 via-[#0D0D0D]/40 to-[#0D0D0D]/65" />
        {/* Toque vermelho discreto apenas na base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#8E001A]/25 via-transparent to-transparent" />
        {/* Vinheta para o centro */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)" }} />

        <div className="container-custom text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Logo Postos Cacique com glow azul nas letras */}
            <div className="relative h-36 lg:h-64 w-80 lg:w-[36rem] mx-auto mb-8">
              <Image
                src="/images/logo-postos.png"
                alt="Postos Cacique"
                fill
                priority
                className="object-contain"
                style={{
                  filter:
                    "drop-shadow(0 0 25px rgba(27,58,92,0.95)) drop-shadow(0 0 50px rgba(27,58,92,0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                }}
                sizes="(max-width: 1024px) 320px, 576px"
              />
            </div>
            <p className="text-white text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-lg">
              Mais de 60 postos nas principais rotas do Norte e Nordeste, com combustível
              testado e estrutura completa para sua jornada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100 sticky top-[80px] z-40 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Buscar por nome, cidade ou endereço..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
                aria-label="Buscar postos"
              />
            </div>

            {/* City filter */}
            <div className="relative">
              <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="pl-8 pr-8 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#C8102E] bg-white appearance-none cursor-pointer"
                aria-label="Filtrar por cidade"
              >
                <option value="">Todas as cidades</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Toggle filters */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowConvenience(!showConvenience)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  showConvenience
                    ? "bg-amber-500 text-white border-amber-500"
                    : "border-gray-200 text-gray-600 hover:border-amber-500"
                }`}
              >
                Conveniência
              </button>
              <button
                onClick={() => setShowLub(!showLub)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  showLub
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-200 text-gray-600 hover:border-blue-600"
                }`}
              >
                Lub
              </button>
            </div>

            {/* View toggle */}
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-all ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500"}`}
                aria-label="Visualização em lista"
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`p-2 rounded-full transition-all ${viewMode === "map" ? "bg-white shadow-sm" : "text-gray-500"}`}
                aria-label="Visualização no mapa"
              >
                <Map size={16} />
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-3 text-sm text-gray-500">
            {filtered.length} posto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom">
          {viewMode === "list" ? (
            filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((station, i) => (
                  <motion.div
                    key={station.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <StationCard station={station} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <MapPin size={64} className="mx-auto mb-6 text-gray-200" />
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Nenhum posto encontrado</h3>
                <p className="text-gray-500">Tente ajustar os filtros de busca</p>
              </div>
            )
          ) : (
            <div className="rounded-3xl overflow-hidden h-[600px] shadow-lg">
              <StationMap stations={filtered} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
