import type { ReactNode } from "react";
import Link from "next/link";

type Pillar = {
  title: string;
  description: string;
  icon: ReactNode;
};

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path
      d="M4 16.5V20h3.5L18 9.5 14.5 6 4 16.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 7L17 10.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 20H14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    <path
      d="M5 6.5C5 5.67 5.67 5 6.5 5H17.5C18.33 5 19 5.67 19 6.5V14.5C19 15.33 18.33 16 17.5 16H10L6 19V16H6.5C5.67 16 5 15.33 5 14.5V6.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
    <path
      d="M9.5 6.5C9.5 5.12 10.62 4 12 4C13.38 4 14.5 5.12 14.5 6.5V7.1C15.67 7.45 16.5 8.53 16.5 9.75C16.5 10.6 16.09 11.35 15.46 11.82C16.09 12.29 16.5 13.04 16.5 13.89C16.5 15.28 15.38 16.4 14 16.4H13.75V17C13.75 18.24 12.74 19.25 11.5 19.25C10.26 19.25 9.25 18.24 9.25 17V16.25C8.01 16.25 7 15.24 7 14V13.4C5.9 12.95 5.13 11.87 5.13 10.63C5.13 9.39 5.9 8.31 7 7.86V7.25C7 6.01 8.01 5 9.25 5H9.5V6.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LotusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
    <path
      d="M12 7C13.6 8.2 14.5 10 14.5 11.5C14.5 13 13.4 14.25 12 14.25C10.6 14.25 9.5 13 9.5 11.5C9.5 10 10.4 8.2 12 7Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 10.25C8.7 11 9.5 12.15 9.5 13.25C9.5 14.5 8.6 15.5 7.5 15.5C6.4 15.5 5.5 14.5 5.5 13.25C5.5 12.15 6.3 11 7.5 10.25Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 10.25C17.7 11 18.5 12.15 18.5 13.25C18.5 14.5 17.6 15.5 16.5 15.5C15.4 15.5 14.5 14.5 14.5 13.25C14.5 12.15 15.3 11 16.5 10.25Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 17.5H19.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
    <path
      d="M5.5 6.5C5.5 5.67 6.17 5 7 5H11C12.1 5 13 5.9 13 7V19C13 17.9 12.1 17 11 17H7C6.17 17 5.5 17.67 5.5 18.5V6.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 6.5C18.5 5.67 17.83 5 17 5H13C11.9 5 11 5.9 11 7V19C11 17.9 11.9 17 13 17H17C17.83 17 18.5 17.67 18.5 18.5V6.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const pillars: Pillar[] = [
  {
    icon: <BrainIcon />,
    title: "Reflexões acessíveis",
    description:
      "Textos pensados para aproximar a PSICOLOGIA do cotidiano com clareza, profundidade e acolhimento.",
  },
  {
    icon: <LotusIcon />,
    title: "Autoconhecimento na prática",
    description:
      "Conteúdos sobre saúde mental, cuidado emocional e caminhos possíveis para compreender melhor a si mesmo.",
  },
  {
    icon: <BookIcon />,
    title: "Leitura para continuar a jornada",
    description:
      "Um espaço para seguir em contato com ideias, perguntas e perspectivas entre uma sessão e outra.",
  },
];

export default function BlogHighlight() {
  return (
    <section className="bg-white overflow-hidden" id="blog" style={{ scrollMarginTop: "96px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-stretch">
          <div
            className="rounded-[28px] bg-navy-blue text-white p-6 sm:p-8 lg:p-10 relative overflow-hidden"
            style={{
              backgroundImage: "url('/mandala-azul-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-golden text-xs font-bold uppercase tracking-[0.2em] mb-5">
                <EditIcon />
                Conteudos do blog
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight max-w-[14ch]">
                Um espaço para aprofundar reflexões e cuidados em Saúde Mental.
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
                <p>
                  O blog foi criado para ampliar o dialogo sobre Psicologia,
                  autoconhecimento e bem-estar emocional de forma sensível e acolhedora.
                </p>
                <p>
                  Nele você encontra leituras que podem inspirar novas percepções,
                  provocar questionamentos e fortalecer o seu processo de autocuidado fora da sessão terapêutica.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center gap-2 rounded bg-golden px-6 py-3 text-sm font-bold text-navy-blue transition-all hover:bg-golden/90"
                >
                  <ArrowIcon />
                  Acessar o blog
                </Link>
                <a
                  href="https://wa.me/5571991827737?text=Ol%C3%A1%2C%20Gabriel.%20Conheci%20o%20seu%20site%20e%20quero%20saber%20mais%20sobre%20os%20atendimentos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all hover:border-golden hover:text-golden"
                >
                  <ChatIcon />
                  Tirar duvidas
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[24px] border border-slate-200 bg-light-gray p-6 sm:p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-golden text-navy-blue">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-blue">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
