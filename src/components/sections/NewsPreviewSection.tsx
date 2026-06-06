"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "@/data/news";
import { NewsCard } from "@/components/shared/NewsCard";

export function NewsPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const previewNews = news.slice(0, 3);

  return (
    <section className="section-padding bg-white overflow-hidden" aria-labelledby="news-title" ref={ref}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-red-50 text-[#C8102E] text-sm font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase">
              Notícias
            </span>
            <h2 id="news-title" className="font-heading font-black text-4xl lg:text-5xl text-gray-900">
              Fique por dentro
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/noticias"
              className="flex items-center gap-2 bg-gray-900 hover:bg-[#C8102E] text-white font-bold text-sm px-6 py-3 rounded-full transition-all"
            >
              Ver Todas
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewNews.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <NewsCard item={item} featured={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
