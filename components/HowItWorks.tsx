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
      "Dedico nossa primeira sessão à escuta profunda daquilo que te levou à busca pelo processo terapêutico. Meu olhar acolhe o seu universo em sua totalidade — seja para lidar com um desafio pontual ou para iniciar uma jornada de autoconhecimento, construindo caminhos que respeitem o seu momento e sua autonomia.",
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
  return (
    <section className="py-24 bg-light-gray relative overflow-hidden" id="atendimento">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-golden text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Processo
          </span>
          <h2 className="text-3xl font-bold text-navy-blue">
            Como Funciona o Atendimento
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto relative">

          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-golden/30" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center px-8 relative">

              {/* Number + icon node */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative z-10">
                  <span className="material-symbols-outlined text-golden text-3xl">{step.icon}</span>
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-golden flex items-center justify-center text-navy-blue text-[10px] font-black">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-navy-blue font-bold text-lg mb-3">{step.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

              {/* Arrow between steps — desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute right-0 top-10 -translate-y-1/2 translate-x-1/2 z-20 w-6 h-6 rounded-full bg-golden items-center justify-center">
                  <span className="material-symbols-outlined text-navy-blue text-sm">chevron_right</span>
                </div>
              )}

              {/* Arrow between steps — mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden mt-8 mb-4 text-golden/50">
                  <span className="material-symbols-outlined text-2xl">expand_more</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-golden text-navy-blue px-10 py-4 rounded font-bold hover:bg-golden/90 transition-all"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Agendar minha consulta
          </a>
        </div>

      </div>
    </section>
  );
}
