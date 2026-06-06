"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Edit2, Trash2, MapPin, Phone, Clock, Eye } from "lucide-react";
import { stations as initialStations } from "@/data/stations";
import type { Station } from "@/types";

export default function AdminPostosPage() {
  const [stations, setStations] = useState<Station[]>(initialStations);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = stations.filter(
    s => s.name.toLowerCase().includes(search.toLowerCase()) ||
         s.city.toLowerCase().includes(search.toLowerCase())
  );

  const toggleActive = (id: string) => {
    setStations(prev => prev.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-black text-3xl text-gray-900">Postos</h1>
          <p className="text-gray-500 mt-1">Gerenciar postos da rede</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#8E001A] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all"
        >
          <Plus size={16} />
          Novo Posto
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Buscar postos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">{filtered.length} postos</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                <th className="text-left px-4 py-3">Posto</th>
                <th className="text-left px-4 py-3 hidden md:table-cell">Cidade</th>
                <th className="text-left px-4 py-3 hidden lg:table-cell">Telefone</th>
                <th className="text-left px-4 py-3 hidden lg:table-cell">Horário</th>
                <th className="text-left px-4 py-3">Serviços</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-right px-4 py-3">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((station, i) => (
                <motion.tr
                  key={station.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin size={14} className="text-[#C8102E]" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{station.name}</div>
                        <div className="text-gray-400 text-xs truncate max-w-[200px]">{station.address}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <span className="text-sm text-gray-700">{station.city} - {station.state}</span>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-sm text-gray-700">{station.phone}</span>
                  </td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    <span className="text-sm text-gray-700">{station.hours}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-1.5">
                      {station.hasConvenience && (
                        <span className="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">Conv.</span>
                      )}
                      {station.hasLubrificants && (
                        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Lub.</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => toggleActive(station.id)}
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-colors ${
                        station.isActive
                          ? "bg-green-50 text-green-600 hover:bg-green-100"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {station.isActive ? "Ativo" : "Inativo"}
                    </button>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 justify-end">
                      <a href={`/postos#${station.id}`} target="_blank" className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50">
                        <Eye size={14} />
                      </a>
                      <button className="p-1.5 text-gray-400 hover:text-[#C8102E] transition-colors rounded-lg hover:bg-red-50">
                        <Edit2 size={14} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
