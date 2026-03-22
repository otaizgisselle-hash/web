import { getWhatsAppUrl } from "@/lib/utils/url";
import Image from "next/image";

export default function Hero() {
  const waLink = getWhatsAppUrl("Hola Gisselle, busco asesoría para una decisión patrimonial.");

  return (
    /* Contenedor de fondo que llena TODA la pantalla (Crema) */
    <section className="w-full bg-[#FDFBF7] flex justify-center overflow-hidden">
      
      {/* EL LIMITADOR: Aquí cuidamos que en monitores grandes no se expanda más de 1600px */}
      <div className="w-full max-w-[1600px] min-h-screen lg:h-screen flex flex-col lg:flex-row relative">
        
        {/* ZONA IZQUIERDA: CONTENIDO EDITORIAL */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20 lg:py-0 z-20 bg-[#FDFBF7]">
          <div className="max-w-md xl:max-w-lg animate-fade-in-up">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#7D4F39] font-sans mb-10 block font-bold opacity-80">
              Gisselle Otaiz • Asesoría Particular
            </span>
            
            <h1 className="font-serif text-5xl sm:text-7xl xl:text-[6rem] leading-[1] text-[#1A1A1A] mb-10">
              Decisiones <br />
              <span className="italic font-light text-slate-400">seguras,</span> <br />
              patrimonio <br />
              protegido.
            </h1>

            <div className="w-12 h-px bg-[#7D4F39] mb-10"></div>

            <p className="font-sans text-base xl:text-lg text-slate-500 leading-relaxed mb-12 max-w-sm">
              Tener a alguien confiable que te acompañe al tomar la decisión más importante en Tepic.
            </p>

            <div className="flex flex-col space-y-10">
              <a 
                href={waLink}
                target="_blank"
                className="group inline-flex items-center gap-6 font-sans text-[11px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]"
              >
                <span className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-700 ease-in-out shadow-sm">
                  →
                </span>
                <span className="border-b border-transparent group-hover:border-[#1A1A1A] transition-all">
                  Consultar vía WhatsApp
                </span>
              </a>
              
              <p className="text-[9px] text-slate-300 tracking-[0.4em] uppercase font-medium">
                Publicamos • Filtramos • Tú decides
              </p>
            </div>
          </div>
        </div>

        {/* ZONA DERECHA: FOTOGRAFÍA GIO (ENCUADRE PROTEGIDO) */}
        <div className="relative w-full h-[60vh] lg:h-full lg:flex-1 overflow-hidden">
          <Image 
            src="/images/gio-portrait.webp" 
            alt="Gisselle Otaiz - Asesoría Patrimonial"
            fill
            priority
            className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-[4s] ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Sutil sombra interna para que no se vea el "corte" de la foto seco */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] pointer-events-none" />
        </div>

        {/* DETALLE BOUTIQUE: Borde fino que separa las zonas en monitores grandes */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-1/2 bg-slate-100"></div>
      </div>

    </section>
  );
}