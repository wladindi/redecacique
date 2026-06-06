"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  {
    label: "Segmentos",
    href: "#",
    children: [
      { label: "Postos Cacique", href: "/postos" },
      { label: "Tem Conveniência", href: "/conveniencia" },
      { label: "Cacique Lub", href: "/lubrificantes" },
      { label: "Rota Pay", href: "/rota-pay" },
      { label: "TRR Cacique", href: "/trr" },
    ],
  },
  { label: "Fidelidade", href: "/fidelidade" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const headerBg = "bg-white shadow-sm border-b border-[#E8ECF0]";
  const textColor = "text-gray-900";

  return (
    <>
      {/* Top Bar — Azul Marinho */}
      <div className="hidden lg:block bg-[#1B3A5C] text-white text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <p className="font-medium tracking-wide">
            Desde 1968 · Qualidade, Tradição e Inovação no Nordeste
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:8632288888" className="flex items-center gap-1.5 hover:text-[#F7B500] transition-colors">
              <Phone size={13} />
              <span>(86) 3228-8888</span>
            </a>
            <Link href="/postos" className="flex items-center gap-1.5 hover:text-[#F7B500] transition-colors">
              <MapPin size={13} />
              <span>Encontrar Posto</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn("sticky top-0 z-50 w-full", headerBg)}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24 lg:h-28">
            {/* Logo Oficial */}
            <Link href="/" className="flex items-center group transition-transform hover:scale-105" aria-label="Rede Cacique - Página Inicial">
              <div className="relative h-20 lg:h-24 w-44 lg:w-72 flex-shrink-0">
                <Image
                  src="/images/logo-cacique-light.png"
                  alt="Rede Cacique — Com você em todos os caminhos"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 1024px) 176px, 288px"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Menu principal">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200",
                        "hover:bg-black/5",
                        textColor,
                        openDropdown === item.label && "bg-black/5"
                      )}
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown size={14} className={cn(
                        "transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200",
                        "hover:bg-black/5",
                        textColor,
                        pathname === item.href && "bg-black/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.children && (
                    <div
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15 }}
                            className="bg-white rounded-xl shadow-xl border border-[#E8ECF0] overflow-hidden min-w-48"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#1B3A5C] hover:text-white transition-colors group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] group-hover/item:bg-white transition-colors" />
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/fidelidade"
                className="hidden lg:flex items-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Programa Fidelidade
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-lg transition-colors",
                  textColor,
                  "hover:bg-white/10"
                )}
                aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
            >
              <nav className="container-custom py-4 flex flex-col gap-1" aria-label="Menu mobile">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                        >
                          {item.label}
                          <ChevronDown size={16} className={cn("transition-transform", openDropdown === item.label && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#C8102E] hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-4 py-3 rounded-lg font-semibold transition-colors",
                          pathname === item.href
                            ? "bg-red-50 text-[#C8102E]"
                            : "text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100 mt-2">
                  <Link
                    href="/fidelidade"
                    className="flex items-center justify-center gap-2 bg-[#F7B500] hover:bg-[#D49A00] text-gray-900 font-bold px-5 py-3 rounded-full transition-colors"
                  >
                    Programa Fidelidade
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
