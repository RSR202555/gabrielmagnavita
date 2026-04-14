import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const siteTitle = "Gabriel Magnavita | Psicólogo Clínico";
const siteDescription =
  "Gabriel Magnavita - Psicólogo Clínico. Atendimento online. Cuidado psicológico de qualidade, de onde você estiver. Acompanhamento especializado com total sigilo, ética e presença.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gabrielmagnavita.com"),
  title: siteTitle,
  description: siteDescription,
  keywords:
    "psicólogo, psicologia clínica, psicoterapia, saúde mental, Gabriel Magnavita",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-mandala.png",
    shortcut: "/logo-mandala.png",
    apple: "/logo-mandala.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://gabrielmagnavita.com",
    siteName: "Gabriel Magnavita",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo-mandala.png",
        width: 512,
        height: 512,
        alt: "Mandala Gabriel Magnavita",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo-mandala.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
