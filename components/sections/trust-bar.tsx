import React from 'react';
import Image from 'next/image';

export default function TrustBar() {
  const metrics = [
    { label: "El Acompañamiento", value: "Integral", detail: "Búsqueda, evaluación legal y cierre seguro en cada etapa." },
    { label: "El Filtrado", value: "Efectivo", detail: "Solo prospectos calificados, optimizando tu tiempo y recursos." },
    { label: "La Cobertura", value: "Territorial", detail: "Especialista en Tepic, Xalisco y zonas clave de Nayarit." }
  ];

  return (
    <section className="w-full bg-[#F4F1EA] py-24 lg:py-32 relative overflow-hidden">
      
      {/* GIO de fondo decorativo */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.03] font-serif text-[25rem] pointer-events-none select-none italic text-[#1A1A1A]">
        GIO
      </div>

      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          {/* FOTO DE IMPACTO (Aquí puedes poner un terreno o un atardecer de Tepic) */}
          <div className="w-full lg:w-1/3 aspect-[3/4] relative overflow-hidden rounded-sm shadow-2xl animate-fade-in-up">
            <Image 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
              alt="Nayarit Landscapes"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#7D4F39]/10 mix-blend-multiply"></div>
          </div>

          {/* LAS MÉTRICAS */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {metrics.map((item, index) => (
              <div 
                key={index} 
                className="group animate-fade-in-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-6">
                  {item.label}
                </p>
                <h3 className="font-serif text-4xl text-[#1A1A1A] mb-4 leading-tight group-hover:italic transition-all">
                  {item.value}
                </h3>
                <div className="w-8 h-px bg-[#7D4F39]/30 group-hover:w-16 group-hover:bg-[#7D4F39] transition-all duration-700 mb-6"></div>
                <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-[300px]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bloque de Misión */}
        <div className="pt-20 border-t border-[#1A1A1A]/10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
             <h4 className="font-serif text-3xl lg:text-4xl text-[#1A1A1A] max-w-2xl leading-snug">
               “Mi compromiso es que cada paso de tu inversión sea <span className="italic text-[#7D4F39]">transparente y seguro</span>.”
             </h4>
             <div className="flex flex-col items-start bg-white p-8 border border-slate-100 shadow-sm">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">Asesoría Particular</span>
                <span className="font-serif text-2xl text-[#1A1A1A] italic">Gisselle Otaiz</span>
                <span className="text-[10px] mt-2 text-[#7D4F39] font-bold tracking-widest uppercase">Tepic, Nayarit</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}