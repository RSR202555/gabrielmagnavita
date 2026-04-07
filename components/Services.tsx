const pillars = [
  {
    icon: "self_improvement",
    title: "Autoconhecimento e Protagonismo",
    description:
      "Um convite para investigar suas bases emocionais, padrões de comportamento e crenças. O objetivo é devolver a você as ferramentas necessárias para assumir as rédeas da própria vida com mais clareza.",
  },
  {
    icon: "favorite",
    title: "Resgate da Criança Interior",
    description:
      "Um trabalho sensível de acolhimento e cura de feridas emocionais que ainda ecoam nas suas decisões do presente, permitindo a construção de relações mais saudáveis, autênticas e maduras.",
  },
  {
    icon: "spa",
    title: "Ferramentas Integrativas",
    description:
      "Como complemento à escuta clínica profunda, utilizo recursos práticos para auxiliar na regulação emocional e no ancoramento no presente, incluindo técnicas de respiração consciente, exercícios de visualização e práticas meditativas.",
  },
  {
    icon: "psychiatry",
    title: "Cuidado Além da Queixa",
    description:
      "Uma escuta voltada não apenas para a dor, mas para o seu potencial de saúde, criatividade e realização, ajudando você a encontrar mais propósito e equilíbrio na sua jornada diária.",
  },
];

export default function Services() {
  return (
    <section
      className="bg-light-gray min-h-screen flex items-center relative overflow-hidden"
      id="atuacoes"
      style={{ scrollMarginTop: "96px" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">

        {/* Header */}
        <div className="mb-14">
          <span className="text-golden text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Atuações
          </span>
          <h2 className="text-3xl font-bold text-navy-blue mb-6">
            A Psicologia Transpessoal
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Na minha prática, a Psicologia Transpessoal é o fio condutor que me permite enxergar você
              em sua totalidade. Mais do que focar apenas no alívio imediato de sintomas, essa abordagem
              busca compreender a raiz profunda das suas questões, integrando mente, corpo, emoções e a
              sua essência.
            </p>
            <p>
              Entendo o espaço terapêutico como um ambiente seguro para a expansão da consciência e o
              desenvolvimento pessoal. Dentro dessa visão, meu trabalho se sustenta em alguns pilares centrais:
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-5"
            >
              <div className="w-12 h-12 bg-navy-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="material-symbols-outlined text-golden text-2xl">{pillar.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-navy-blue mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing text + CTA */}
        <div className="max-w-3xl">
          <p className="text-sm text-slate-600 leading-relaxed mb-8">
            É um processo focado em quem deseja trilhar um caminho de transformação genuína, respeitando
            seu próprio ritmo e ampliando a percepção sobre si mesmo e sobre o mundo.
          </p>
          <a
            href={`https://wa.me/5571991827737?text=${encodeURIComponent("Olá, Gabriel. Conheci o seu site e senti vontade de iniciar meu processo terapêutico. Por favor, me passe as informações sobre os atendimentos, horários e valores para agendar minha sessão online.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-golden text-navy-blue px-8 py-3 rounded font-bold text-sm hover:bg-golden/90 transition-all"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Iniciar meu processo terapêutico
          </a>
        </div>

      </div>
    </section>
  );
}
