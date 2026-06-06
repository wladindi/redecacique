import type { Metadata } from "next";
import { MapPin, Newspaper, Image, Users, TrendingUp, Eye, ArrowUpRight } from "lucide-react";
import { stations } from "@/data/stations";
import { news } from "@/data/news";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | Admin Rede Cacique",
  robots: { index: false, follow: false },
};

const stats = [
  { label: "Postos Ativos", value: stations.filter(s => s.isActive).length.toString(), icon: MapPin, color: "bg-red-50 text-[#C8102E]", change: "+2 este mês", href: "/admin/postos" },
  { label: "Notícias Publicadas", value: news.length.toString(), icon: Newspaper, color: "bg-blue-50 text-blue-600", change: "+1 esta semana", href: "/admin/noticias" },
  { label: "Banners Ativos", value: "3", icon: Image, color: "bg-amber-50 text-amber-600", change: "Sem alteração", href: "/admin/banners" },
  { label: "Usuários Cadastrados", value: "1", icon: Users, color: "bg-green-50 text-green-600", change: "Administrador", href: "/admin/usuarios" },
];

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-heading font-black text-3xl text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Bem-vindo ao painel administrativo da Rede Cacique</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon size={18} />
              </div>
              <ArrowUpRight size={16} className="text-gray-300 group-hover:text-[#C8102E] transition-colors" />
            </div>
            <div className="font-heading font-black text-3xl text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
              <TrendingUp size={12} />
              {stat.change}
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Stations */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="font-heading font-bold text-gray-900">Postos Recentes</h2>
            <Link href="/admin/postos" className="text-[#C8102E] text-sm font-medium hover:underline">Ver todos</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {stations.slice(0, 4).map((station) => (
              <div key={station.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-[#C8102E]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#C8102E]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 text-sm truncate">{station.name}</div>
                  <div className="text-gray-500 text-xs">{station.city} — {station.hours}</div>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${station.isActive ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-500"}`}>
                  {station.isActive ? "Ativo" : "Inativo"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent News */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <h2 className="font-heading font-bold text-gray-900">Últimas Notícias</h2>
            <Link href="/admin/noticias" className="text-[#C8102E] text-sm font-medium hover:underline">Ver todas</Link>
          </div>
          <div className="divide-y divide-gray-50">
            {news.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Newspaper size={16} className="text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 text-sm line-clamp-1">{item.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {new Date(item.publishedAt).toLocaleDateString("pt-BR")} · {item.category}
                  </div>
                </div>
                <Link href={`/noticias/${item.slug}`} className="p-1.5 text-gray-400 hover:text-[#C8102E] transition-colors" target="_blank">
                  <Eye size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-gradient-to-r from-[#C8102E] to-[#8E001A] rounded-2xl p-6">
        <h2 className="font-heading font-bold text-white text-lg mb-4">Ações Rápidas</h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Adicionar Posto", href: "/admin/postos/novo", icon: MapPin },
            { label: "Nova Notícia", href: "/admin/noticias/novo", icon: Newspaper },
            { label: "Novo Banner", href: "/admin/banners/novo", icon: Image },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all"
            >
              <action.icon size={15} />
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
