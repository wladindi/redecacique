"use client";

import { useState } from "react";
import { Plus, Search, Edit2, Trash2, Eye, Tag } from "lucide-react";
import { news as initialNews } from "@/data/news";
import type { NewsItem } from "@/types";
import Link from "next/link";

export default function AdminNoticiasPage() {
  const [items] = useState<NewsItem[]>(initialNews);
  const [search, setSearch] = useState("");

  const filtered = items.filter(
    n => n.title.toLowerCase().includes(search.toLowerCase()) ||
         n.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading font-black text-3xl text-gray-900">Notícias</h1>
          <p className="text-gray-500 mt-1">Gerenciar conteúdo editorial</p>
        </div>
        <button className="flex items-center gap-2 bg-[#C8102E] hover:bg-[#8E001A] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all">
          <Plus size={16} />
          Nova Notícia
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 p-4 mb-6">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Buscar notícias..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C8102E] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-5 hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-[#C8102E]/10 text-[#C8102E] px-2 py-0.5 rounded-full font-semibold">{item.category}</span>
                <span className="text-xs text-gray-400">{new Date(item.publishedAt).toLocaleDateString("pt-BR")}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{item.title}</h3>
              <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{item.excerpt}</p>
              <div className="flex items-center gap-1 mt-2">
                {item.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-gray-400">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link href={`/noticias/${item.slug}`} target="_blank" className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50">
                <Eye size={15} />
              </Link>
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
    </>
  );
}
