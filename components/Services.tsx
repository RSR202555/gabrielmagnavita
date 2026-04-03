const secondaryServices = [
  {
    icon: "person",
    title: "Consultório Presencial",
    description:
      "Atendimento individualizado em ambiente acolhedor, com total atenção e sigilo.",
  },
  {
    icon: "clinical_notes",
    title: "Avaliação Psicológica",
    description:
      "Avaliação técnica para diagnósticos e acompanhamento clínico, focado na saúde integral.",
  },
  {
    icon: "groups",
    title: "Acompanhamento",
    description:
      "Suporte contínuo para famílias e indivíduos, visando integração e equilíbrio emocional.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="atuacoes">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">
            Atendimento Online
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Cuidado psicológico de qualidade, de onde você estiver. Com total sigilo, ética e presença.
          </p>
        </div>

        {/* Featured — Online */}
        <div className="bg-navy-blue rounded-2xl overflow-hidden mb-10 grid grid-cols-1 lg:grid-cols-2"
          style={{ backgroundImage: "url('/mandala-azul-bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }}
        >
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-golden text-xs font-bold uppercase tracking-widest mb-4">
              <span className="material-symbols-outlined text-base">star</span>
              Principal modalidade
            </span>
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">
              Consulta Online:<br />
              <span className="text-golden">Onde quer que você esteja.</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              O atendimento online é uma ponte que rompe fronteiras geográficas. Ofereço suporte
              psicológico para brasileiros residentes no Brasil ou em qualquer lugar do mundo,
              garantindo a mesma qualidade, ética e profundidade do encontro presencial.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Para a sua sessão, você tem a liberdade de escolher o local que preferir, desde que
              seja um ambiente que assegure a sua total privacidade e o conforto necessário para
              que você possa se expressar livremente.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Alcance Global: Atendimento para brasileiros no Brasil e no exterior",
                "Privacidade e Sigilo: Sessões via videochamada em plataforma segura",
                "Flexibilidade: Adaptação a diferentes fusos horários e rotinas",
                "Liberdade de Espaço: Você escolhe o seu ambiente de cuidado",
                "Sem barreiras: Cuidado especializado sem necessidade de deslocamento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="w-5 h-5 rounded-full bg-golden flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-navy-blue text-xs">check</span>
                  </span>
                  <span>
                    <strong className="text-white">{item.split(":")[0]}:</strong>
                    {item.includes(":") ? item.slice(item.indexOf(":") + 1) : ""}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              className="self-start inline-flex items-center gap-2 bg-golden text-navy-blue px-8 py-3 rounded font-bold hover:bg-golden/90 transition-all"
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              Agendar consulta
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center p-10">
            <img
              src="/foto video.png"
              alt="Atendimento Online Gabriel Magnavita"
              className="w-full max-w-sm rounded-2xl object-cover shadow-2xl"
              style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* Secondary services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryServices.map((service) => (
            <div
              key={service.title}
              className="p-7 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 bg-navy-blue/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-navy-blue text-2xl">
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-navy-blue mb-2">{service.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
