import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Gabriel Magnavita | Psicólogo Clínico",
  description:
    "Gabriel Magnavita - Psicólogo Clínico. Atendimento presencial e online. Avaliação psicológica, psicoterapia individual e acompanhamento especializado.",
  keywords:
    "psicólogo, psicologia clínica, psicoterapia, saúde mental, Gabriel Magnavita",
  openGraph: {
    title: "Gabriel Magnavita | Psicólogo Clínico",
    description:
      "Atendimento psicológico humanizado, ético e personalizado. Cuide da sua saúde mental.",
    type: "website",
    locale: "pt_BR",
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
        <link rel="icon" href="/logo-mandala.png" type="image/png" />
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
