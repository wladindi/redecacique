import { NextResponse } from "next/server";

const banners = [
  {
    id: "1",
    title: "Hero Principal",
    subtitle: "Abastecimento com qualidade e confiança",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    ctaText: "Encontrar Posto",
    ctaLink: "/postos",
    isActive: true,
    order: 1,
  },
  {
    id: "2",
    title: "Programa Fidelidade",
    subtitle: "Cada abastecimento vale mais pontos",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    ctaText: "Cadastrar Grátis",
    ctaLink: "/fidelidade",
    isActive: true,
    order: 2,
  },
];

export async function GET() {
  const activeBanners = banners.filter((b) => b.isActive).sort((a, b) => a.order - b.order);

  return NextResponse.json(
    { data: activeBanners },
    {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
      },
    }
  );
}
