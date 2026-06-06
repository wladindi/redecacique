"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, GripVertical, Eye, EyeOff } from "lucide-react";

const initialBanners = [
  { id: "1", title: "Hero Principal", subtitle: "Abastecimento com qualidade e confiança", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", ctaText: "Encontrar Posto", ctaLink: "/postos", isActive: true, order: 1 },
  { id: "2", title: "Programa Fidelidade", subtitle: "Cadastre-se e comece a ganhar pontos", imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800", ctaText: "Cadastrar Grátis", ctaLink: "/fidelidade", isActive: true, order: 2 },
  { id: "3", title: "Cacique Lub Promo", subtitle: "Troca de óleo com 20% de desconto", imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800", ctaText: "Saiba Mais", ctaLink: "/lubrificantes", isActive: false, order: 3 },
];

export default function AdminBannersPage() {
  const [banners, setBanners] = useState(initialBanners);

  const toggleActive = (id: string) => {
    setBanners(prev => prev.map(b => b.id === id ? { ...b, isActive: !b.isActive } : b));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-black text-3xl text-gray-900">Banners</h1>
          <p className="text-gray-500 mt-1">Gerenciar banners e destaques visuais</p>
        </div>
        <button className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#8E001A] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all">
          <Plus size={16} />
          Novo Banner
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex hover:shadow-md transition-all">
            <div className="flex items-center px-3 text-gray-300 cursor-grab">
              <GripVertical size={20} />
            </div>
            <div className="w-32 h-20 flex-shrink-0 overflow-hidden">
              <img src={banner.imageUrl} alt={banner.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-4 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">#{banner.order}</span>
                <h3 className="font-semibold text-gray-900 text-sm">{banner.title}</h3>
              </div>
              <p className="text-gray-500 text-xs line-clamp-1">{banner.subtitle}</p>
              {banner.ctaText && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-400">CTA: <strong className="text-gray-700">{banner.ctaText}</strong></span>
                  <span className="text-xs text-gray-400">→ {banner.ctaLink}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 px-4 flex-shrink-0">
              <button
                onClick={() => toggleActive(banner.id)}
                className={`p-2 rounded-lg transition-colors ${banner.isActive ? "text-green-600 bg-green-50 hover:bg-green-100" : "text-gray-400 bg-gray-50 hover:bg-gray-100"}`}
                title={banner.isActive ? "Desativar" : "Ativar"}
              >
                {banner.isActive ? <Eye size={15} /> : <EyeOff size={15} />}
              </button>
              <button className="p-2 text-gray-400 hover:text-[#C8102E] transition-colors rounded-lg hover:bg-red-50">
                <Edit2 size={15} />
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-[#F6F7F9] rounded-2xl p-6 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-2">Dica de uso</h3>
        <p className="text-sm text-gray-500">Arraste os banners para reordenar. Banners inativos não aparecem no site mas ficam salvos para uso posterior.</p>
      </div>
    </>
  );
}
