import { getWhatsAppUrl } from "@/lib/utils/url";
import Image from "next/image";

export default function Portfolio() {
  const categories = [
    {
      title: "Terrenos & Lotes",
      desc: "Oportunidades de inversión, terrenos campestres y lotes urbanos en Tepic y alrededores.",
      msg: "Hola Gisselle, vi tu web y me interesan opciones de TERRENOS disponibles.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80", // Foto de campo/lote
      tag: "Inversión"
    },
    {
      title: "Casas en Venta",
      desc: "Propiedades residenciales listas para habitar. Buscamos la mejor opción para tu familia.",
      msg: "Hola Gisselle, me gustaría conocer el catálogo de CASAS EN VENTA que manejas actualmente.",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80", // Foto de casa real
      tag: "Patrimonio"
    },
    {
      title: "Rentas Disponibles",
      desc: "Casas y departamentos en renta con contratos seguros y atención personalizada.",
      msg: "Hola Gisselle, busco una PROPIEDAD EN RENTA. ¿Qué opciones tienes disponibles hoy?",
      image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80", // Foto de llaves/interior
      tag: "Servicio"
    },
    {
      title: "Vende tu Propiedad",
      desc: "¿Quieres vender o rentar? Nosotros nos encargamos de la promoción y el cierre legal.",
      msg: "Hola Gisselle, quiero que me ayudes a VENDER/RENTAR mi propiedad. ¿Cómo podemos iniciar?",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80", // Foto de contrato/trato
      tag: "Asesoría"
    }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] py-20 lg:py-32 border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24">
        
        <div className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-4 block">Portafolio</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A]">Inventario <span className="italic text-slate-400">Activo</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <a 
              key={index}
              href={getWhatsAppUrl(item.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 overflow-hidden rounded-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-widest font-bold text-[#7D4F39]">
                  {item.tag}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-3 group-hover:text-[#7D4F39] transition-colors">{item.title}</h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed mb-6">{item.desc}</p>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                  Ver opciones <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}