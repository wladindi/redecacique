import type { Metadata } from "next";
import { news } from "@/data/news";
import { NewsCard } from "@/components/shared/NewsCard";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Fique por dentro das últimas novidades da Rede Cacique.",
};

export default function NoticiasPage() {
  const featured = news[0];
  const rest = news.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#C8102E] to-[#8E001A] pt-32 pb-16">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
            Notícias & Blog
          </span>
          <h1 className="font-heading font-black text-5xl lg:text-6xl text-white mb-4">
            Últimas Notícias
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Fique por dentro de tudo que acontece na Rede Cacique e no setor de energia
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F6F7F9]">
        <div className="container-custom">
          {/* Featured */}
          {featured && (
            <div className="mb-12">
              <NewsCard item={featured} featured />
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
