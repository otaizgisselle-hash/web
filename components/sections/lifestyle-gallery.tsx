import Image from "next/image";

export default function LifestyleGallery() {
  const images = [
    { src: "/images/st-1.jpg", label: "Entornos Naturales" },
    { src: "/images/st-2.jpg", label: "Arquitectura Local" },
    { src: "/images/st-3.jpg", label: "Inversión Segura" }
  ];

  return (
    <section className="w-full bg-[#FDFBF7] py-20 border-y border-slate-100">
      <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-[16/9] overflow-hidden group rounded-sm">
            <Image 
              src={img.src} 
              alt={img.label} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
              <span className="text-white font-serif italic text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}