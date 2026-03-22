import React from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Captación estratégica",
      description: "Posicionamos tu propiedad frente al comprador ideal en Nayarit. No solo listamos; creamos el valor necesario para un cierre efectivo.",
      tag: "Vendedores",
      // Imagen de edificio moderno/negocios (Optimizado q=60 para carga rápida)
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=60&w=800&auto=format&fit=crop" 
    },
    {
      title: "Búsqueda Particular",
      description: "Encontramos el terreno, casa o rancho que se alinea con tu visión patrimonial en Tepic y zonas exclusivas.",
      tag: "Compradores",
      // Imagen de terreno/Naturaleza (Optimizado q=60)
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=60&w=800&auto=format&fit=crop" 
    },
    {
      title: "Asesoría Legal",
      description: "Claridad absoluta en contratos, trámites y situación legal. Seguridad jurídica para tu tranquilidad patrimonial.",
      tag: "Patrimonio",
      // Cambiamos a una imagen de "Firma de contrato/Manos" (Más real y rápida de cargar)
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=60&w=800&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-24 lg:py-40 text-[#FDFBF7] overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24 relative z-10">
        
        {/* Encabezado de Sección Editorial */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-6 block">
              Servicios Boutique
            </span>
            <h2 className="font-serif text-5xl lg:text-7xl leading-tight text-white">
              Especialización <br />
              <span className="italic font-light text-slate-400 text-4xl lg:text-6xl">en el detalle.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-400 max-w-[280px] leading-relaxed italic border-l border-[#7D4F39] pl-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            “No somos una inmobiliaria de volumen. Somos una consultoría de resultados.”
          </p>
        </div>

        {/* Grid de Servicios con Imágenes Fijas y Tinte de Marca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 lg:p-16 transition-all duration-700 relative overflow-hidden min-h-[500px] flex flex-col justify-between"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* IMAGEN DE FONDO FIJA (Visible en escritorio y móvil) */}
              <div className="absolute inset-0 z-0 scale-105 group-hover:scale-100 transition-transform duration-1000">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw" // Crucial para móviles
                  className="object-cover"
                />
                
                {/* SUPERPOSICIÓN DE COLOR (Tinte de Marca #7D4F39) */}
                {/* En escritorio es más oscuro (#1A1A1A) y en hover se vuelve terracota sutil */}
                <div className="absolute inset-0 bg-[#1A1A1A]/90 group-hover:bg-[#7D4F39]/80 transition-colors duration-700"></div>
                
                {/* Degradado negro adicional para asegurar legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
              </div>

              {/* Contenido (Encima de la imagen) */}
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <span className="text-[9px] uppercase tracking-widest text-[#7D4F39] font-bold mb-12 block bg-[#1A1A1A]/60 backdrop-blur-sm w-fit px-3 py-1.5 rounded-sm">
                  {service.tag}
                </span>
                
                <h3 className="font-serif text-3xl lg:text-4xl mb-8 group-hover:translate-x-2 transition-transform duration-500 text-white">
                  {service.title}
                </h3>
                
                <p className="font-sans text-sm text-slate-200 leading-relaxed mb-12 max-w-[320px]">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className="w-10 h-px bg-[#7D4F39] group-hover:w-full transition-all duration-1000"></div>
                
                {/* Número de servicio decorativo */}
                <span className="absolute -bottom-10 -right-6 text-[10rem] font-serif opacity-[0.05] select-none italic group-hover:opacity-[0.15] transition-opacity text-white">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}