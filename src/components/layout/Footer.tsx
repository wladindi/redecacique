"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  empresa: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Nossa História", href: "/sobre#historia" },
    { label: "Missão e Valores", href: "/sobre#valores" },
    { label: "Notícias", href: "/noticias" },
    { label: "Trabalhe Conosco", href: "https://redecacique.gupy.io/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnO_f0alzsV67PATDxxGC0_dJvJ0sWnEGk0zHbIFzmeyYCwMnNofykL1VBlX0_aem_WbATSZf1YEKi74AnpRyxag", external: true },
  ],
  segmentos: [
    { label: "Postos Cacique", href: "/postos" },
    { label: "Tem Conveniência", href: "/conveniencia" },
    { label: "Cacique Lub", href: "/lubrificantes" },
    { label: "Rota Pay", href: "/rota-pay" },
    { label: "TRR Cacique", href: "/trr" },
    { label: "Cacique Fidelidade", href: "/fidelidade" },
  ],
  suporte: [
    { label: "Encontrar Posto", href: "/postos" },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "LGPD", href: "/lgpd" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative h-20 w-56 mb-8 -ml-4" aria-label="Rede Cacique">
              <Image
                src="/images/logo-cacique-white.jpg"
                alt="Rede Cacique — Com você em todos os caminhos"
                fill
                className="object-contain object-left"
                style={{
                  filter: "grayscale(1) contrast(50)",
                  mixBlendMode: "screen",
                }}
                sizes="224px"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Desde 1968 no Nordeste. Mais de 60 postos nas principais rotas com
              combustível testado e estrutura completa. Quase 6 décadas de excelência.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="tel:86994362307" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} className="text-[#C8102E] flex-shrink-0" />
                <span>(86) 99436-2307 · Sede Teresina</span>
              </a>
              <a href="mailto:contato@redecacique.com.br" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} className="text-[#C8102E] flex-shrink-0" />
                <span>contato@redecacique.com.br</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                <span>R. Tabelião José Basílio, 1795 · Fátima · Teresina-PI</span>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.instagram.com/postoscacique/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#d6249f] rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 text-white"
                aria-label="Instagram @postoscacique"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/5586994362307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 text-white"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white mb-5">
                {key === "empresa" ? "Empresa" : key === "segmentos" ? "Segmentos" : "Suporte"}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => {
                  const isExternal = "external" in link && link.external;
                  return (
                    <li key={link.href}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rede Cacique. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p className="flex items-center gap-1">
            Desenvolvido com
            <span className="text-[#C8102E]"> ♥ </span>
            no Piauí
          </p>
        </div>
      </div>
    </footer>
  );
}
