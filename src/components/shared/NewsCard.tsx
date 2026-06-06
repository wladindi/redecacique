import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { NewsItem } from "@/types";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
}

export function NewsCard({ item, featured = false }: NewsCardProps) {
  const date = new Date(item.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <article
      className={cn(
        "group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        featured && "md:flex"
      )}
      aria-label={item.title}
    >
      <div className={cn("relative overflow-hidden", featured ? "md:w-1/2 h-64 md:h-auto" : "h-52")}>
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute top-4 left-4 bg-[#1B3A5C] text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      <div className={cn("p-6", featured && "md:w-1/2 md:flex md:flex-col md:justify-center")}>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <User size={12} />
            {item.author}
          </span>
        </div>

        <h3 className={cn(
          "font-heading font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#C8102E] transition-colors",
          featured ? "text-2xl" : "text-lg"
        )}>
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {item.excerpt}
        </p>

        <Link
          href={`/noticias/${item.slug}`}
          className="flex items-center gap-1.5 text-[#C8102E] font-semibold text-sm hover:gap-3 transition-all"
          aria-label={`Leia mais sobre ${item.title}`}
        >
          Leia mais
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
