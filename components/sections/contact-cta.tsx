import { getWhatsAppUrl } from "@/lib/utils/url";

export default function ContactCTA() {
  const waLink = getWhatsAppUrl("Hola Gisselle, me gustaría agendar una consulta sobre una propiedad.");

  return (
    <section className="w-full bg-[#F4F1EA] py-32 lg:py-48 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center animate-fade-in-up">
        
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#7D4F39] font-bold mb-10 block">
          Contacto Directo
        </span>

        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] leading-[1.1] mb-12">
          Hablemos de tu <br />
          <span className="italic font-light text-slate-400 text-5xl md:text-8xl">próximo paso.</span>
        </h2>

        <p className="font-sans text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-16 leading-relaxed">
          Sin presiones, sin intermediarios. Una charla honesta para darte la claridad que tu patrimonio necesita en Tepic.
        </p>

        <div className="relative inline-block group">
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center justify-center px-12 py-6 bg-[#1A1A1A] text-[#FDFBF7] font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#7D4F39] transition-all duration-700 shadow-2xl"
          >
            Iniciar Consulta Privada
          </a>
          {/* Aura decorativa de fondo */}
          <div className="absolute inset-0 bg-[#7D4F39]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-left">
            <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">Ubicación</p>
            <p className="font-sans text-sm font-medium text-[#1A1A1A]">Tepic, Nayarit. México.</p>
          </div>
          <div className="text-left">
            <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-1">Horario de Atención</p>
            <p className="font-sans text-sm font-medium text-[#1A1A1A]">Lunes a Viernes • 9:00 - 19:00</p>
          </div>
        </div>

      </div>
    </section>
  );
}