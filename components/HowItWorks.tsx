import BlueSectionLogo from "./BlueSectionLogo";

const steps = [
  {
    number: "01",
    label: "Conexão e Agendamento",
    description:
      "O seu processo começa com o agendamento da consulta. Realizo todos os meus atendimentos exclusivamente na modalidade online, o que nos permite estabelecer um vínculo profissional com total sigilo, ética e flexibilidade, independentemente de onde você esteja no mundo.",
    icon: "chat",
  },
  {
    number: "02",
    label: "Escuta Integral e Acolhimento",
    description:
      "Dedico nossa primeira sessão à escuta profunda daquilo que te levou à busca pelo processo terapêutico. Meu olhar acolhe o seu universo em sua totalidade, seja para lidar com um desafio pontual ou para iniciar uma jornada de autoconhecimento, construindo caminhos que respeitem o seu momento e sua autonomia.",
    icon: "hearing",
  },
  {
    number: "03",
    label: "Acompanhamento e Evolução",
    description:
      "A terapia é uma construção única, sem fórmulas mágicas. O respeito do seu tempo é essencial nesse processo. Para sustentar essa jornada, trabalhamos com dia e horário fixos, focando em sua evolução constante. Juntos, começamos a construir caminhos de cuidado integral para sua vida.",
    icon: "trending_up",
  },
];

export default function HowItWorks() {
  const whatsappHref = `https://wa.me/5571991827737?text=${encodeURIComponent("Olá, Gabriel. Conheci o seu site e senti vontade de iniciar meu processo terapêutico. Por favor, me passe as informações sobre os atendimentos, horários e valores para agendar minha sessão online.")}`;

  return (
    <section
      className="bg-navy-blue relative overflow-hidden md:min-h-screen flex items-center"
      id="processo"
      style={{
        scrollMarginTop: "96px",
        backgroundImage: "url('/mandala-azul-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full relative z-10">
        <BlueSectionLogo className="absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 sm:top-12 sm:h-28 sm:w-28 lg:top-14 lg:h-32 lg:w-32" />
        <div className="text-center mb-14 sm:mb-20">
          <div className="mb-24 sm:mb-28" />
          <span className="text-golden text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Processo
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Como Funciona o Atendimento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-white/20" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-2 sm:px-8 relative max-w-sm mx-auto">
              <div className="relative mb-5 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-white/15 shadow-xl flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-golden text-3xl">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-golden flex items-center justify-center text-navy-blue text-[10px] font-black">
                  {step.number}
                </span>
              </div>

              <h3 className="text-white font-bold text-base sm:text-lg mb-3">{step.label}</h3>
              <p className="text-white/95 text-sm leading-relaxed [text-shadow:0_1px_1px_rgba(0,0,0,0.18)]">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute right-0 top-10 -translate-y-1/2 translate-x-1/2 z-20 w-6 h-6 rounded-full bg-golden items-center justify-center">
                  <span className="material-symbols-outlined text-navy-blue text-sm">chevron_right</span>
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 mb-4 text-golden/50">
                  <span className="material-symbols-outlined text-2xl">expand_more</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-golden text-navy-blue px-8 sm:px-10 py-4 rounded font-bold hover:bg-golden/90 transition-all"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Agendar minha consulta
          </a>
        </div>
      </div>
    </section>
  );
}
