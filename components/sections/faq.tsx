export default function FAQ() {
  const faqs = [
    { q: "¿Qué zonas de Nayarit cubres?", a: "Principalmente Tepic y Xalisco, con especial enfoque en zonas residenciales y terrenos campestres/ranchos en los alrededores." },
    { q: "¿Cobras por la primera consulta?", a: "La entrevista inicial de claridad no tiene costo. Es fundamental para saber si mi metodología es la adecuada para tu necesidad patrimonial." },
    { q: "¿Me ayudas con el trámite notarial?", a: "Totalmente. Mi servicio es integral; acompaño el proceso desde la búsqueda hasta la firma final ante notario para garantizar seguridad jurídica." }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="font-serif text-4xl text-[#1A1A1A] mb-16 text-center">Consultas <span className="italic">Frecuentes</span></h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-8">
              <h3 className="font-serif text-xl text-[#1A1A1A] mb-4">{faq.q}</h3>
              <p className="font-sans text-slate-600 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}