export default function Process() {
  const steps = [
    { num: "01", title: "Entrevista de Claridad", desc: "Escucho tus objetivos y analizamos la viabilidad real de tu búsqueda o venta." },
    { num: "02", title: "Filtrado Estratégico", desc: "Me encargo de la búsqueda y depuración legal. Tú solo visitas lo que realmente vale la pena." },
    { num: "03", title: "Cierre Blindado", desc: "Gestión absoluta de trámites y notarías para asegurar que tu patrimonio esté protegido." }
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-24 lg:py-32 text-[#FDFBF7]">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-4 block">El Camino</span>
          <h2 className="font-serif text-4xl lg:text-6xl">Tu tranquilidad en <span className="italic opacity-60">tres actos.</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="border-l border-white/10 pl-8 py-4 hover:border-[#7D4F39] transition-colors duration-500">
              <span className="font-serif text-[#7D4F39] text-xl mb-4 block">{step.num}</span>
              <h3 className="font-serif text-2xl mb-4">{step.title}</h3>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}