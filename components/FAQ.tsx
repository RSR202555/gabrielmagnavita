const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta profunda daquilo que te trouxe à terapia. É o espaço para nos conhecermos, onde acolho o seu universo e começamos a construir, juntos, os caminhos para o seu cuidado integral e autoconhecimento.",
  },
  {
    question: "O atendimento online é tão eficaz quanto o presencial?",
    answer:
      "Sim. A psicologia online é regulamentada e oferece a mesma profundidade e eficácia do encontro presencial. A grande vantagem é a flexibilidade de horários e a possibilidade de realizar sua sessão em um ambiente onde você já se sente confortável e seguro(a), em qualquer lugar do mundo.",
  },
  {
    question: "Quais são os horários de atendimento? Trabalha com fuso horário diferente?",
    answer:
      "Sim, atendo brasileiros em diversos países e ajusto a agenda considerando as diferenças de fuso horário. Os atendimentos possuem dia e horário fixos para garantir a consistência do seu processo e evolução contínua.",
  },
  {
    question: "Quanto tempo dura o processo terapêutico?",
    answer:
      "A terapia é uma construção única e respeita o ritmo de cada indivíduo. Não trabalhamos com fórmulas mágicas ou prazos rígidos. O foco está em avançar com segurança, sem gerar sobrecarga, até que você sinta autonomia e clareza em sua jornada.",
  },
  {
    question: "Qual a plataforma utilizada para as sessões?",
    answer:
      "As sessões são realizadas via videochamada através do Google Meet, plataforma segura que garante o sigilo profissional e a proteção dos seus dados, conforme as normas de ética da Psicologia.",
  },
  {
    question: "Você atende convênios médicos?",
    answer:
      "Meus atendimentos são exclusivamente particulares. No entanto, posso emitir recibos para que você solicite o reembolso junto ao seu plano de saúde, caso ele ofereça essa opção.",
  },
];

export default function FAQ() {
  const whatsappHref = `https://wa.me/5571991827737?text=${encodeURIComponent("Olá, Gabriel. Conheci o seu site e senti vontade de iniciar meu processo terapêutico. Por favor, me passe as informações sobre os atendimentos, horários e valores para agendar minha sessão online.")}`;

  return (
    <section
      className="bg-navy-blue relative overflow-hidden"
      id="faq"
      style={{
        scrollMarginTop: "96px",
        backgroundImage: "url('/mandala-azul-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-golden text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Dúvidas comuns sobre o processo terapêutico
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Reuni aqui respostas objetivas para as perguntas que costumo receber antes do início do acompanhamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <span className="text-golden text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-navy-blue leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy-blue text-white transition-transform group-open:rotate-45">
                  <span className="material-symbols-outlined text-lg">add</span>
                </span>
              </summary>
              <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-golden text-navy-blue px-8 py-3 rounded font-bold text-sm hover:bg-golden/90 transition-all"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            Entre em contato e agende a sua consulta.
          </a>
        </div>
      </div>
    </section>
  );
}
