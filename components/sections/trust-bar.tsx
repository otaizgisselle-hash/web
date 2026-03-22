import React from 'react';

export default function TrustBar() {
  const metrics = [
    { label: "El Acompañamiento", value: "Integral", detail: "Búsqueda, evaluación legal y cierre seguro." },
    { label: "El Filtrado", value: "Efectivo", detail: "Solo prospectos calificados, sin pérdida de tiempo." },
    { label: "La Cobertura", value: "Territorial", detail: "Especialista en Tepic, Nayarit y zonas rurales." }
  ];

  return (
    /* Cambiamos el blanco por un Arena Suave (#F4F1EA) para dar calidez */
    <section className="w-full bg-[#F4F1EA] py-24 lg:py-32 relative overflow-hidden">
      
      {/* Detalle decorativo sutil: un número de página o marca de agua editorial */}
      <div className="absolute top-10 right-10 opacity-5 font-serif text-[12rem] pointer-events-none select-none">
        GIO
      </div>

      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {metrics.map((item, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Badge en Terracota Suave */}
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-6">
                {item.label}
              </p>
              
              <h3 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-6 leading-tight">
                {item.value}
              </h3>
              
              {/* Divisor con color de acento */}
              <div className="w-12 h-px bg-[#7D4F39]/20 group-hover:w-24 group-hover:bg-[#7D4F39] transition-all duration-700 mb-6"></div>
              
              <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-[280px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bloque de Misión con contraste */}
        <div className="mt-32 pt-20 border-t border-[#1A1A1A]/5">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
             <h4 className="font-serif text-2xl lg:text-3xl text-[#1A1A1A] max-w-lg leading-snug">
               “Mi compromiso es que cada paso de tu inversión sea <span className="italic">transparente y seguro</span>.”
             </h4>
             <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Contacto Directo</span>
                <span className="font-sans font-bold text-[#1A1A1A] border-b border-[#7D4F39]">Gisselle Otaiz</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}