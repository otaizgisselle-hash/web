import React from 'react';

export default function Services() {
  const services = [
    {
      title: "Captación & Estrategia",
      description: "Posicionamos tu propiedad frente al comprador ideal. No solo listamos; creamos el valor necesario para un cierre efectivo.",
      tag: "Vendedores"
    },
    {
      title: "Búsqueda Particular",
      description: "Encontramos el terreno, casa o rancho que se alinea con tu visión patrimonial en Tepic y zonas exclusivas de Nayarit.",
      tag: "Compradores"
    },
    {
      title: "Asesoría Legal",
      description: "Claridad absoluta en contratos, trámites y situación legal. Seguridad jurídica para que duermas tranquilo.",
      tag: "Patrimonio"
    }
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-24 lg:py-40 text-[#FDFBF7] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24">
        
        {/* Encabezado de Sección Editorial */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-6 block">
              Servicios Boutique
            </span>
            <h2 className="font-serif text-5xl lg:text-7xl leading-tight">
              Especialización <br />
              <span className="italic font-light opacity-60 text-white">en el detalle.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-400 max-w-[280px] leading-relaxed italic border-l border-white/10 pl-6">
            “No somos una inmobiliaria de volumen. Somos una consultoría de resultados.”
          </p>
        </div>

        {/* Grid de Servicios Estilo Galería */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border-y border-white/5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 lg:p-16 hover:bg-white/[0.02] transition-all duration-700 relative overflow-hidden"
            >
              <span className="text-[9px] uppercase tracking-widest text-[#7D4F39] font-bold mb-12 block">
                {service.tag}
              </span>
              
              <h3 className="font-serif text-3xl lg:text-4xl mb-8 group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
              </h3>
              
              <p className="font-sans text-sm text-slate-400 leading-relaxed mb-12 min-h-[80px]">
                {service.description}
              </p>

              <div className="w-10 h-px bg-white/20 group-hover:w-full group-hover:bg-[#7D4F39] transition-all duration-700"></div>
              
              {/* Número de servicio decorativo */}
              <span className="absolute -bottom-4 -right-2 text-[8rem] font-serif opacity-[0.03] select-none italic">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}