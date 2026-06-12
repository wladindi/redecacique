"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, BarChart3, Zap, UserCheck, RefreshCw, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Economia no abastecimento",
    description: "Reduza até 5% no custo de combustível da sua operação com condições exclusivas para frotas.",
  },
  {
    icon: BarChart3,
    title: "Plataforma digital",
    description: "Acompanhe consumo, notas fiscais e histórico de abastecimento em tempo real.",
  },
  {
    icon: Zap,
    title: "Sem burocracia",
    description: "Processo de abastecimento descomplicado para que sua operação não pare.",
  },
  {
    icon: UserCheck,
    title: "Consultor exclusivo",
    description: "Suporte humanizado e personalizado para cada operação da sua empresa.",
  },
  {
    icon: RefreshCw,
    title: "Integração total",
    description: "Integração com Rede Frota e demais soluções de pagamento e gestão para transportadoras.",
  },
  {
    icon: ShieldCheck,
    title: "Procedência garantida",
    description: "Testes de qualidade em cada carga. Segurança para o seu motor e para a sua operação.",
  },
];

interface FormData {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  cidade: string;
  veiculos: string;
  operacao: string;
}

interface FormErrors {
  nome?: string;
  empresa?: string;
  telefone?: string;
  email?: string;
  cidade?: string;
  veiculos?: string;
  operacao?: string;
}

export function FrotasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [data, setData] = useState<FormData>({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    cidade: "",
    veiculos: "",
    operacao: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (data.nome.length < 3) e.nome = "Nome obrigatório";
    if (data.empresa.length < 2) e.empresa = "Empresa obrigatória";
    if (data.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone inválido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "E-mail inválido";
    if (data.cidade.length < 2) e.cidade = "Cidade/Estado obrigatório";
    if (!data.veiculos) e.veiculos = "Selecione uma opção";
    if (!data.operacao) e.operacao = "Selecione uma opção";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/10 transition-all";

  return (
    <section
      ref={ref}
      id="cacique-frotas"
      className="section-padding bg-gradient-to-br from-[#0D0D0D] via-[#1a0005] to-[#0D0D0D] relative overflow-hidden"
      aria-labelledby="frotas-title"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8102E]/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F7B500]/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block bg-[#F7B500]/10 text-[#F7B500] text-sm font-bold px-4 py-2 rounded-full mb-4 tracking-wide uppercase border border-[#F7B500]/20">
            Seja um parceiro CACIQUE
          </span>
          <h2 id="frotas-title" className="font-heading font-black text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Abastecimento deixa de ser custo
            <br />
            <span className="text-[#F7B500]">e passa a ser estratégia</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            O setor comercial da Rede Cacique desenvolve soluções estratégicas de abastecimento para
            empresas, frotistas e transportadores que buscam eficiência, controle e previsibilidade.
            No modelo B2B, nossa equipe trabalha lado a lado com cada cliente para construir condições
            comerciais personalizadas que vão além do preço e geram resultado no dia a dia.
          </p>
          <p className="text-white/60 text-base max-w-2xl mx-auto mt-4 italic">
            Mais do que negociar combustível, O comercial da Rede Cacique entrega gestão,
            segurança e inteligência aplicada ao abastecimento.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 lg:mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-[#C8102E]/15 border border-[#C8102E]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <b.icon size={20} className="text-[#F7B500]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-sm mb-1">{b.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="inline-block bg-[#C8102E] text-white text-sm font-bold px-4 py-2 rounded-full mb-3 tracking-wide uppercase">
              Fale com o nosso time comercial
            </span>
            <h3 className="font-heading font-black text-3xl text-white">
              Reduza seu custo de combustível
            </h3>
            <p className="text-white/70 mt-2">Preencha o formulário e nosso consultor entra em contato</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={36} className="text-green-600" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">Cadastro recebido!</h3>
              <p className="text-gray-500 leading-relaxed">
                Nosso consultor entrará em contato em até 24 horas para apresentar uma proposta
                personalizada para sua frota.
              </p>
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome completo *</label>
                  <input value={data.nome} onChange={update("nome")} placeholder="Seu nome" className={inputClass} />
                  {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Empresa *</label>
                  <input value={data.empresa} onChange={update("empresa")} placeholder="Razão social" className={inputClass} />
                  {errors.empresa && <p className="text-red-500 text-xs mt-1">{errors.empresa}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone (WhatsApp) *</label>
                  <input value={data.telefone} onChange={update("telefone")} type="tel" placeholder="(86) 99999-0000" className={inputClass} />
                  {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail *</label>
                  <input value={data.email} onChange={update("email")} type="email" placeholder="seu@email.com" className={inputClass} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cidade/Estado de operação *</label>
                  <input value={data.cidade} onChange={update("cidade")} placeholder="Ex: Teresina-PI, Imperatriz-MA..." className={inputClass} />
                  {errors.cidade && <p className="text-red-500 text-xs mt-1">{errors.cidade}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Veículos na frota *</label>
                  <select value={data.veiculos} onChange={update("veiculos")} className={inputClass + " bg-white"}>
                    <option value="">Selecione</option>
                    <option value="1-5">1 a 5 veículos</option>
                    <option value="6-20">6 a 20 veículos</option>
                    <option value="21-50">21 a 50 veículos</option>
                    <option value="51-100">51 a 100 veículos</option>
                    <option value="100+">Mais de 100 veículos</option>
                  </select>
                  {errors.veiculos && <p className="text-red-500 text-xs mt-1">{errors.veiculos}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tipo de operação *</label>
                  <select value={data.operacao} onChange={update("operacao")} className={inputClass + " bg-white"}>
                    <option value="">Selecione</option>
                    <option value="transportadora">Transportadora</option>
                    <option value="agronegocio">Agronegócio</option>
                    <option value="construcao">Construção Civil</option>
                    <option value="industria">Indústria</option>
                    <option value="distribuidora">Distribuidora</option>
                    <option value="frota-leve">Frota leve / Empresa</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.operacao && <p className="text-red-500 text-xs mt-1">{errors.operacao}</p>}
                </div>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-6 bg-[#C8102E] hover:bg-[#8E001A] disabled:opacity-50 text-white font-bold text-base py-4 px-8 rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero reduzir meu custo de combustível
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
                Ao enviar, você concorda com nossa Política de Privacidade (LGPD)
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
