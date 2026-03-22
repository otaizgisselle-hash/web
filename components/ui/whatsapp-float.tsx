import { getWhatsAppUrl } from "@/lib/utils/url";

export default function WhatsAppFloat() {
  const waLink = getWhatsAppUrl("Hola Gisselle, vi tu web y me gustaría iniciar una consulta.");

  return (
    <a 
      href={waLink}
      target="_blank"
      className="fixed bottom-8 right-8 z-[100] bg-[#1A1A1A] text-white p-5 rounded-full shadow-2xl hover:bg-[#7D4F39] transition-all duration-500 group flex items-center gap-3 overflow-hidden"
    >
      <span className="max-w-0 group-hover:max-w-xs transition-all duration-700 ease-in-out overflow-hidden font-sans text-[10px] uppercase tracking-widest whitespace-nowrap">
        Iniciar Consulta
      </span>
      <span className="text-xl">→</span>
    </a>
  );
}