export default function About() {
  return (
    <section
      className="bg-navy-blue py-24 text-white overflow-hidden relative"
      id="sobre"
      style={{ backgroundImage: "url('/mandala-azul-bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "overlay" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold tracking-[0.2em] opacity-70 uppercase">
            Psicólogo Clínico
          </span>
          <h2 className="text-3xl font-bold uppercase tracking-wide">Gabriel Magnavita</h2>
          <span className="block text-golden text-xs font-bold tracking-widest uppercase -mt-2">
            CRP-03/15065
          </span>
          <div className="space-y-4 text-sm leading-relaxed opacity-90">
            <p>
              Minha jornada até a clínica foi construída com uma dedicação profunda à compreensão
              do ser humano em todas as suas nuances. Antes de me formar em Psicologia, cursei
              outras três graduações e concluí o Bacharelado Interdisciplinar em Humanidades. Essa
              trajetória me deu uma base ampla e sensível sobre a cultura e a sociedade, preparando
              o terreno para o encontro com a minha verdadeira vocação: o cuidado em saúde mental.
            </p>
            <p>
              Em minha prática clínica, atuo fundamentado na Psicologia Transpessoal. Busco ir
              além do tratamento de sintomas, integrando os aspectos emocionais, mentais e
              essenciais de cada pessoa — oferecendo um espaço seguro para reconexão consigo mesmo,
              cura emocional e trabalho em temas profundos como o resgate da criança interior.
            </p>
            <p>
              Acredito que o conhecimento sobre saúde mental deve ser acessível e transformador.
              Por isso, produzo conteúdo educativo nas redes sociais, propondo reflexões que
              aproximem a psicologia da vida real.
            </p>
            <p>
              Minha missão é oferecer um suporte técnico, humano e verdadeiramente acolhedor,
              caminhando ao seu lado para que você assuma o protagonismo da sua própria história.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              className="bg-golden text-navy-blue px-6 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-golden/90 transition-all"
              href="https://wa.me/5571991827737"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              AGENDE SUA CONSULTA
            </a>
            <a
              className="bg-golden text-navy-blue px-6 py-2 rounded text-xs font-bold flex items-center gap-2 hover:bg-golden/90 transition-all"
              href="https://www.instagram.com/psigabrielmagnavita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              INSTAGRAM
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-sm">
            <img
              alt="Gabriel Magnavita"
              className="w-full rounded-lg shadow-2xl relative z-10 brightness-90 grayscale-[0.2]"
              src="/gabriel-sobre.jpeg"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-golden rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
