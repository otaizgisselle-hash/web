"use client";
import { siteConfig, createWhatsAppLink } from "@/content/site.config";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#7D4F39]/5">
      <nav className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link href="/" className="group">
          <span className="font-serif text-2xl tracking-tighter text-[#1A1A1A]">
            Giselle <span className="italic font-light text-[#7D4F39]">Otaiz</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {["Inicio", "Servicios", "Propiedades"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 hover:text-[#7D4F39] transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <a 
            href={createWhatsAppLink("Hola Gisselle, me gustaría agendar una consulta.")}
            target="_blank"
            className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#7D4F39] transition-all rounded-sm"
          >
            Contacto
          </a>
        </div>

        {/* Mobile (Simplificado para el "Ya") */}
        <div className="md:hidden">
           <a href={createWhatsAppLink("Consulta rápida")} className="text-[#7D4F39] font-bold text-[10px] uppercase tracking-widest">
             Agendar →
           </a>
        </div>
      </nav>
    </header>
  );
}