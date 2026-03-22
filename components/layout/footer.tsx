import { siteConfig } from "@/content/site.config";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDFBF7] pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Columna 1: Marca */}
          <div className="lg:col-span-2">
            <span className="font-serif text-4xl italic text-[#1A1A1A] block mb-6">G. Otaiz</span>
            <p className="font-sans text-sm text-slate-500 max-w-sm leading-relaxed">
              Asesoría inmobiliaria particular basada en la honestidad radical y la seguridad jurídica en el estado de Nayarit.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#7D4F39] font-bold block mb-8">Contacto</span>
            <ul className="space-y-4 text-sm font-sans text-slate-600">
              <li>Tepic, Nayarit, MX.</li>
              <li className="font-bold text-[#1A1A1A]">{siteConfig.contact.phone}</li>
              <li>Lunes — Viernes / 09:00 - 19:00</li>
            </ul>
          </div>

          {/* Columna 3: Legal / Info */}
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#7D4F39] font-bold block mb-8">Legal</span>
            <ul className="space-y-4 text-sm font-sans text-slate-600">
              <li className="hover:text-[#7D4F39] cursor-pointer">Aviso de Privacidad</li>
              <li className="hover:text-[#7D4F39] cursor-pointer">Términos de Servicio</li>
            </ul>
          </div>
        </div>

        {/* Créditos Finales */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-slate-400">
            © 2026 Gisselle Otaiz. Todos los derechos reservados.
          </p>
          
          <a 
            href="https://somoslazaro.marketing" 
            target="_blank"
            className="text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-[#7D4F39] transition-colors flex items-center gap-2 group"
          >
            Hecho con <span className="text-[#7D4F39] group-hover:scale-125 transition-transform">♥</span> por 
            <span className="font-bold text-slate-600">somoslazaro.marketing</span>
          </a>
        </div>
      </div>
    </footer>
  );
}