import BlueSectionLogo from "./BlueSectionLogo";

const highlights = [
  "Alcance Global: Atendimento para brasileiros no Brasil e no exterior",
  "Privacidade e Sigilo: Sessões via videochamada em plataforma segura",
  "Flexibilidade: Adaptação a diferentes fusos horários e rotinas",
  "Liberdade de Espaço: Você escolhe o seu ambiente de cuidado",
  "Sem barreiras: Cuidado especializado sem necessidade de deslocamento",
];

export default function OnlineCare() {
  return (
    <section className="bg-white overflow-hidden" id="atendimento" style={{ scrollMarginTop: "96px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-blue mb-4">Atendimento Online</h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Cuidado psicológico de qualidade, de onde você estiver. Com total sigilo, ética e presença.
          </p>
        </div>

        <div
          className="rounded-[28px] overflow-hidden bg-navy-blue text-white p-5 sm:p-8 md:p-12 lg:p-14 relative"
          style={{
            backgroundImage: "linear-gradient(rgba(8, 33, 74, 0.92), rgba(8, 33, 74, 0.92)), url('/mandala-azul-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <BlueSectionLogo className="pointer-events-none absolute left-[50%] top-8 hidden h-28 w-28 -translate-x-1/2 md:block lg:left-[48%] lg:top-24" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
            <div>
              <div className="mb-8 flex justify-center md:hidden">
                <BlueSectionLogo className="h-28 w-28" />
              </div>
              <div className="mb-6 hidden md:block md:h-20 lg:mb-0 lg:h-24" />
              <span className="inline-flex items-center gap-2 text-golden text-xs font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8">
                <span className="material-symbols-outlined text-base leading-none">star</span>
                Principal modalidade
              </span>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
                Consulta Online:
                <br />
                <span className="text-golden">Onde quer que você esteja.</span>
              </h3>

              <div className="space-y-5 text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl">
                <p>
                  O atendimento online é uma ponte que rompe fronteiras geográficas. Ofereço suporte
                  psicológico para brasileiros residentes no Brasil ou em qualquer lugar do mundo,
                  garantindo a mesma qualidade, ética e profundidade do encontro presencial.
                </p>
                <p>
                  Para a sua sessão, você tem a liberdade de escolher o local que preferir, desde que
                  seja um ambiente que assegure a sua total privacidade e o conforto necessário para que
                  você possa se expressar livremente.
                </p>
              </div>

              <ul className="mt-8 space-y-3 sm:space-y-4">
                {highlights.map((item) => {
                  const [label, ...rest] = item.split(": ");

                  return (
                    <li key={item} className="flex items-start gap-3 text-sm md:text-[15px] leading-relaxed text-white/90">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-golden text-navy-blue">
                        <span className="material-symbols-outlined text-[14px] leading-none">check</span>
                      </span>
                      <span>
                        <strong className="text-white">{label}:</strong> {rest.join(": ")}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={`https://wa.me/5571991827737?text=${encodeURIComponent("Olá, Gabriel. Conheci o seu site e senti vontade de iniciar meu processo terapêutico. Por favor, me passe as informações sobre os atendimentos, horários e valores para agendar minha sessão online.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded bg-golden px-6 py-3 font-bold text-navy-blue transition-all hover:bg-golden/90"
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                Agendar consulta
              </a>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
                <img
                  alt="Pessoa em atendimento psicológico online"
                  className="h-[320px] sm:h-[420px] md:h-[500px] w-full rounded-[24px] object-cover object-center shadow-2xl"
                  src="/foto video.png"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 rounded-b-[24px] bg-gradient-to-t from-navy-blue via-navy-blue/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
