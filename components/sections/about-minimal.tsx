import Image from "next/image";

export default function AboutMinimal() {
  return (
    <section className="w-full bg-[#FDFBF7] py-24 lg:py-40">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* FOTO DE FILOSOFÍA: Ahora con la imagen real */}
        <div className="flex-1 w-full aspect-[3/4] relative overflow-hidden rounded-sm group shadow-sm">
          <Image 
            src="/images/gio-philosophy.webp" 
            alt="Gisselle Otaiz - Filosofía de Asesoría Inmobiliaria"
            fill
            className="object-cover object-center grayscale-[10%] hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay sutil para mantener el tono crema de la web */}
          <div className="absolute inset-0 bg-[#7D4F39]/5 mix-blend-multiply pointer-events-none" />
        </div>

        {/* TEXTO NARRATIVO */}
        <div className="flex-1 max-w-xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-bold mb-8 block opacity-80">
            La Filosofía GIO
          </span>
          
          <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] leading-tight mb-10">
            “No vendo metros cuadrados, <br />
            <span className="italic font-light text-slate-400">asesoro destinos.”</span>
          </h2>

          <div className="space-y-8 font-sans text-slate-600 leading-relaxed text-lg">
            <p>
              Entiendo que una propiedad en Nayarit no es solo una transacción; es el refugio de una familia o el fruto de años de esfuerzo. 
            </p>
            <p className="border-l-2 border-[#7D4F39]/20 pl-6 italic text-slate-500">
              Mi enfoque es simple: **Honestidad radical**. Prefiero decirte por qué no comprar una propiedad hoy, a que te arrepientas mañana. 
            </p>
            <p>
              Mi compromiso es con tu tranquilidad, no con la comisión. Mi trabajo termina cuando tú duermes tranquilo en tu nueva inversión.
            </p>
          </div>

          <div className="mt-14 flex items-center gap-6">
            <div className="w-12 h-px bg-[#7D4F39]/30"></div>
            <div className="signature font-serif text-3xl text-[#1A1A1A] italic">
              Gisselle Otaiz
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}