"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Shield } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cacique-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cacique-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cacique-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#C8102E] to-[#8E001A] p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Cookie size={20} />
                <span className="font-bold text-sm" id="cookie-title">
                  Política de Cookies
                </span>
              </div>
              <button
                onClick={decline}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Fechar aviso de cookies"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 leading-relaxed mb-4" id="cookie-desc">
                Utilizamos cookies para melhorar sua experiência, analisar o tráfego
                e personalizar conteúdo. Em conformidade com a{" "}
                <strong className="text-gray-900">LGPD</strong>.{" "}
                <Link href="/privacidade" className="text-[#C8102E] hover:underline">
                  Saiba mais
                </Link>
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                <Shield size={14} className="text-green-500" />
                <span>Seus dados estão seguros conosco</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={decline}
                  className="flex-1 px-3 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={accept}
                  className="flex-1 px-3 py-2.5 bg-[#C8102E] hover:bg-[#8E001A] text-white text-sm font-bold rounded-xl transition-colors"
                >
                  Aceitar Tudo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
