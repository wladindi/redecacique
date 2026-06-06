import { MapPin, Phone, Clock, Fuel, ShoppingBag, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Station } from "@/types";
import Link from "next/link";

interface StationCardProps {
  station: Station;
  compact?: boolean;
}

export function StationCard({ station, compact = false }: StationCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${station.lat},${station.lng}`;

  return (
    <article
      className={cn(
        "bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group",
        compact ? "p-4" : "p-6"
      )}
      aria-label={`Posto ${station.name}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500" aria-label="Ativo" />
            <span className="text-xs font-medium text-green-600">Aberto</span>
          </div>
          <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight truncate">
            {station.name}
          </h3>
        </div>
        <div className="flex gap-2 ml-3 flex-shrink-0">
          {station.hasConvenience && (
            <span title="Tem Conveniência" className="p-1.5 bg-amber-50 rounded-lg">
              <ShoppingBag size={14} className="text-amber-600" />
            </span>
          )}
          {station.hasLubrificants && (
            <span title="Cacique Lub" className="p-1.5 bg-blue-50 rounded-lg">
              <Droplets size={14} className="text-blue-600" />
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2.5 mb-5">
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <MapPin size={15} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
          <span>{station.address}, {station.city} - {station.state}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone size={15} className="text-[#C8102E] flex-shrink-0" />
          <a href={`tel:${station.phone}`} className="hover:text-[#C8102E] transition-colors">
            {station.phone}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={15} className="text-[#C8102E] flex-shrink-0" />
          <span>{station.hours}</span>
        </div>
      </div>

      {/* Services */}
      {!compact && (
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <Fuel size={13} className="text-gray-400" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Combustíveis</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {station.services.map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-[#EBF2FA] border border-[#C8DCEF] text-xs text-[#1B3A5C] rounded-lg font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#C8102E] hover:bg-[#8E001A] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all hover:shadow-md"
          aria-label={`Ver rota para ${station.name}`}
        >
          <MapPin size={14} />
          Ver Rota
        </a>
        <a
          href={`tel:${station.phone}`}
          className="flex items-center justify-center gap-1.5 border border-gray-200 hover:border-[#C8102E] hover:text-[#C8102E] text-gray-600 text-sm font-semibold py-2.5 px-4 rounded-xl transition-all"
          aria-label={`Ligar para ${station.name}`}
        >
          <Phone size={14} />
        </a>
      </div>
    </article>
  );
}
