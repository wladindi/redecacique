import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { FrotasSection } from "@/components/sections/FrotasSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { FidelitySection } from "@/components/sections/FidelitySection";
import { StationsPreviewSection } from "@/components/sections/StationsPreviewSection";
import { NewsPreviewSection } from "@/components/sections/NewsPreviewSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Rede Cacique | Com você em todos os caminhos",
  description:
    "Desde 1968 no Nordeste. Mais de 60 postos nas principais rotas do Nordeste, com combustível testado e estrutura completa para sua jornada.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <FrotasSection />
      <AboutSection />
      <SegmentsSection />
      <FidelitySection />
      <StationsPreviewSection />
      <NewsPreviewSection />
      <CTASection />
    </>
  );
}
