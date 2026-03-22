import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import LifestyleGallery from "@/components/sections/lifestyle-gallery"; // Galería de estilo de vida
import AboutMinimal from "@/components/sections/about-minimal";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Portfolio from "@/components/sections/portfolio"; // Tu grid de intenciones (Comprar/Vender)
import ConciergeForm from "@/components/sections/concierge-form"; // El micro-formulario
import FAQ from "@/components/sections/faq";
import ContactCTA from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <main className="bg-[#FDFBF7] selection:bg-[#7D4F39] selection:text-white">
      
      {/* 1. IMPACTO: Bienvenida visual con Gisselle */}
      <Hero />

      {/* 2. VALIDACIÓN: Los 3 pilares rápidos de confianza */}
      <TrustBar />

      {/* 3. CONTEXTO VISUAL: Fotos de Tepic/Nayarit que dan color y "venden" la zona */}
      <LifestyleGallery />

      {/* 4. CONEXIÓN: La filosofía de GIO (La cara humana) */}
      <AboutMinimal />

      {/* 5. AUTORIDAD: Qué hacemos (Bloque de Contraste Negro) */}
      <Services />

      {/* 6. MÉTODO: Cómo lo hacemos (Los 3 actos) */}
      <Process />

      {/* 7. INTENCIONES: Acceso directo (Quiero Comprar, Vender, etc.) */}
      <Portfolio />

      {/* 8. FILTRADO: El micro-formulario de perfil de búsqueda */}
      <ConciergeForm />

      {/* 9. CLARIDAD: Preguntas frecuentes para cerrar objeciones */}
      <FAQ />

      {/* 10. CIERRE: Invitación final a la consulta privada */}
      <ContactCTA />
  
    </main>
  );
}