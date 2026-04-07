export default function Welcome() {
  return (
    <section
      className="bg-navy-blue py-20 text-center text-white relative overflow-hidden min-h-screen flex items-center"
      id="boas-vindas"
      style={{ backgroundImage: "url('/mandala-azul-bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay", scrollMarginTop: "96px" }}
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-3xl font-bold mb-10 tracking-widest uppercase">
          Seja bem-vindo(a) ao seu espaço de cuidado e autoconhecimento.
        </h2>
        <div className="space-y-6 text-sm md:text-base font-light leading-relaxed opacity-90">
          <p>
            Este ambiente foi criado com o compromisso de oferecer um ponto de apoio seguro, ético
            e profissional. Minha prática clínica busca integrar o conhecimento técnico à
            sensibilidade necessária para acolher o ser humano em todas as suas dimensões.
          </p>
          <p>
            Acredito que a psicologia é uma ferramenta de autonomia. Por isso, foco meu trabalho
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
          className="inline-block mt-10 bg-golden text-navy-blue px-8 py-3 rounded font-bold text-sm hover:bg-golden/90 transition-all"
        >
          Agendar minha sessão
        </a>
      </div>
    </section>
  );
}
