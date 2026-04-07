export default function Hero() {
  return (
    <section className="bg-light-gray overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center w-full">
        <div className="py-16 lg:py-0">
          <span className="text-sm font-bold text-slate-500 tracking-[0.2em] mb-4 block">
            PSICÓLOGO
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-blue leading-none mb-4 uppercase">
            Gabriel<br />Magnavita
          </h1>
          <div className="w-20 h-1.5 bg-golden mb-8"></div>
        </div>
        <div className="relative flex justify-end">
          <img
            alt="Gabriel Magnavita"
            className="w-full max-w-md lg:max-w-lg object-cover grayscale-0 brightness-105"
            src="/gabriel-magnavita.png"
            style={{
              maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
