import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

const siteTitle = "Gabriel Magnavita - Psicólogo Clínico";
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
        url: "/gabriel-whatsapp-preview.jpg?v=3",
        width: 1200,
        height: 630,
        alt: "Gabriel Magnavita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/gabriel-whatsapp-preview.jpg?v=3"],
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NLB533C94W"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-NLB533C94W');
            `
          }}
        />
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
