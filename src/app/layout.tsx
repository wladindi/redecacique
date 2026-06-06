import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redecacique.com.br"),
  title: {
    default: "Rede Cacique | Postos de Combustível no Piauí, Maranhão e Pernambuco",
    template: "%s | Rede Cacique",
  },
  description:
    "A Rede Cacique é uma das maiores redes de postos de combustível do Piauí, Maranhão e Pernambuco. Tradição desde 1968 em Teresina. 58 filiais e crescendo.",
  keywords: [
    "postos de combustível",
    "rede cacique",
    "cacique petróleo",
    "gasolina",
    "etanol",
    "diesel",
    "Piauí",
    "Maranhão",
    "Pernambuco",
    "Teresina",
    "Imperatriz",
    "Recife",
    "programa fidelidade",
    "conveniência",
    "lubrificantes",
  ],
  authors: [{ name: "Rede Cacique" }],
  creator: "Rede Cacique",
  publisher: "Rede Cacique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://redecacique.com.br",
    siteName: "Rede Cacique",
    title: "Rede Cacique | Postos de Combustível no Piauí, Maranhão e Pernambuco",
    description:
      "A Rede Cacique é uma das maiores redes de postos de combustível do Piauí, Maranhão e Pernambuco.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rede Cacique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rede Cacique | Postos no PI, MA e PE",
    description:
      "A Rede Cacique é uma das maiores redes de postos do Piauí, Maranhão e Pernambuco.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://redecacique.com.br",
  },
};

export const viewport: Viewport = {
  themeColor: "#C8102E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rede Cacique",
              url: "https://redecacique.com.br",
              logo: "https://redecacique.com.br/logo.svg",
              description:
                "Rede de postos de combustível no Piauí, Maranhão e Pernambuco. Fundada em 1º de maio de 1968 em Teresina-PI por Audir Lages de Carvalho e Maria Inês Pearce de Sousa Carvalho.",
              foundingDate: "1968-05-01",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressRegion: "PI",
                addressLocality: "Teresina",
                streetAddress: "Rua Tabelião José Basílio, 1795, Andar 1 - Fátima",
                postalCode: "64049-524",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-86-3228-8888",
                contactType: "customer service",
                availableLanguage: "Portuguese",
                areaServed: ["BR-PI", "BR-MA", "BR-PE"],
              },
              sameAs: [
                "https://www.facebook.com/PostosCacique",
                "https://www.instagram.com/postoscacique",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
