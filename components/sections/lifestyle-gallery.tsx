import Image from "next/image";

export default function LifestyleGallery() {
  const images = [
    { 
      // Foto de un terreno/cerro que recuerda al San Juan
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80", 
      label: "Entornos Naturales" 
    },
    { 
      // Arquitectura con madera de parota o estilo Nayarita
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80", 
      label: "Arquitectura Local" 
    },
    { 
      // Detalle de llaves o firma de contrato (Seguridad jurídica)
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80", 
      label: "Inversión Segura" 
    }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] py-20 border-y border-slate-100">
      <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[16/9] overflow-hidden group rounded-sm shadow-sm bg-slate-100">
            <Image 
              src={img.src} 
              alt={img.label} 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            {/* Overlay elegante con el color de marca (Terracota) al hacer hover */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-[#7D4F39]/40 transition-all duration-500 flex items-center justify-center">
              <span className="text-white font-serif italic text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}