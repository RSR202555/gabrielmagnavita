import BlueSectionLogo from "./BlueSectionLogo";

export default function Welcome() {
  return (
    <section
      className="bg-navy-blue py-16 sm:py-20 text-center text-white relative overflow-hidden md:min-h-screen flex items-center"
      id="boas-vindas"
      style={{
        backgroundImage: "url('/mandala-azul-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        scrollMarginTop: "96px",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full pb-12 sm:pb-0 relative z-10">
        <div className="mb-6 flex justify-center sm:mb-8">
          <BlueSectionLogo className="h-28 w-28 sm:h-32 sm:w-32" />
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 tracking-[0.01em] sm:tracking-[0.02em] lg:tracking-[0.03em] leading-[1.15] sm:leading-tight max-w-[18ch] sm:max-w-[20ch] lg:max-w-[22ch] mx-auto text-center">
          Seja bem-vindo(a) ao seu espaço de cuidado e autoconhecimento.
        </h2>
        <div className="space-y-5 text-sm sm:text-base font-light leading-7 sm:leading-relaxed opacity-90 max-w-xl sm:max-w-2xl mx-auto text-left sm:text-center">
          <p>
            Este ambiente foi criado com o compromisso de oferecer um ponto de apoio seguro, ético
            e profissional. Minha prática clínica busca integrar o conhecimento técnico à
            sensibilidade necessária para acolher o ser humano em todas as suas dimensões.
          </p>
          <p>
            Acredito que a Psicologia é uma ferramenta de autonomia. Por isso, foco meu trabalho
            na desmistificação da saúde mental e no fortalecimento do seu papel como protagonista
            da própria história. Aqui, coloco minha experiência à disposição para acompanhar você
            em seu processo de desenvolvimento e bem-estar integral.
          </p>
          <p className="font-medium">
            Vamos dar o próximo passo?<br />
            Sinta-se à vontade para explorar e agendar sua sessão.
          </p>
        </div>
        <a
          href={`https://wa.me/5571991827737?text=${encodeURIComponent("Olá, Gabriel. Conheci o seu site e senti vontade de iniciar meu processo terapêutico. Por favor, me passe as informações sobre os atendimentos, horários e valores para agendar minha sessão online.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto justify-center mt-10 bg-golden text-navy-blue px-8 py-3 rounded font-bold text-sm hover:bg-golden/90 transition-all"
        >
          Agendar minha sessão
        </a>
      </div>
    </section>
  );
}
