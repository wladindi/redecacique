import Link from "next/link";
import NextImage from "next/image";
import { LayoutDashboard, MapPin, Image, Newspaper, Users, Settings, LogOut, BarChart3 } from "lucide-react";

const adminNav = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Postos", href: "/admin/postos", icon: MapPin },
  { label: "Banners", href: "/admin/banners", icon: Image },
  { label: "Notícias", href: "/admin/noticias", icon: Newspaper },
  { label: "Usuários", href: "/admin/usuarios", icon: Users },
  { label: "Relatórios", href: "/admin/relatorios", icon: BarChart3 },
  { label: "Configurações", href: "/admin/configuracoes", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F2540] flex flex-col fixed inset-y-0 left-0 z-50">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="flex flex-col gap-2">
            <div className="relative h-12 w-full rounded-lg overflow-hidden">
              <NextImage
                src="/images/logo-cacique.jpg"
                alt="Rede Cacique"
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
            <div className="text-blue-200/60 text-xs text-center tracking-widest uppercase">CMS Admin</div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {adminNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-blue-200/70 hover:text-white hover:bg-[#1B3A5C] transition-all group"
              >
                <item.icon size={18} className="group-hover:text-[#F7B500] transition-colors" />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3 px-3">
            <div className="w-8 h-8 bg-[#C8102E] rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
            <div>
              <div className="text-white text-sm font-medium">Admin</div>
              <div className="text-gray-500 text-xs">admin@cacique.com</div>
            </div>
          </div>
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <LogOut size={16} />
            Voltar ao site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen overflow-auto">
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
