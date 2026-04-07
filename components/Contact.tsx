"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "online",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "5571991827737";
    const text = `Olá, Gabriel! Me chamo ${formData.name}.\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nTipo: ${formData.type}\nMensagem: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="bg-white min-h-screen flex items-center" id="contato" style={{ scrollMarginTop: "96px" }}>
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Entre em Contato</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Pronto para dar o primeiro passo? Entre em contato e agende sua consulta.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy-blue mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-golden rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-navy-blue">phone</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Telefone / WhatsApp</p>
                    <p className="text-navy-blue font-semibold">(71) 9 9182-7737</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-golden rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-navy-blue">mail</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Email</p>
                    <p className="text-navy-blue font-semibold">magnavita.gabriel@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-golden rounded flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-navy-blue">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Localização</p>
                    <p className="text-navy-blue font-semibold">Salvador, BA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-3xl">check</span>
                </div>
                <h3 className="text-xl font-bold text-navy-blue mb-2">Mensagem Enviada!</h3>
                <p className="text-slate-500 text-sm">Entraremos em contato em breve.</p>
                <button
                  className="mt-6 text-navy-blue font-semibold text-sm underline"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                    Tipo de atendimento
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden"
                  >
                    <option value="online">Online / Teleconsulta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-golden focus:ring-1 focus:ring-golden resize-none"
                    placeholder="Conte um pouco sobre o que você está buscando..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-golden text-navy-blue py-3 rounded font-bold text-sm hover:bg-golden/90 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
