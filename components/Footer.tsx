export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo-mandala.png" alt="Logo Gabriel Magnavita" className="w-8 h-8 object-contain" />
            <div className="leading-none">
              <span className="block font-bold text-navy-blue">Gabriel Magnavita</span>
              <span className="text-[10px] text-golden uppercase font-bold">
                Psicólogo Clínico · CRP-03/15065
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <a
              className="text-navy-blue hover:text-golden transition-colors"
              href="https://wa.me/5571991827737"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a
              className="text-navy-blue hover:text-golden transition-colors"
              href="https://www.facebook.com/psigabrielmagnavita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined">share</span>
            </a>
            <a
              className="text-navy-blue hover:text-golden transition-colors"
              href="https://www.instagram.com/psigabrielmagnavita"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="material-symbols-outlined">camera</span>
            </a>
            <a
              className="text-navy-blue hover:text-golden transition-colors"
              href="mailto:magnavita.gabriel@gmail.com"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
          <p className="text-xs text-slate-400">
            © {currentYear} Gabriel Magnavita. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
