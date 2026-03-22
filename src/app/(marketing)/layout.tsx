import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Navbar />
      {/* Agregamos un pt-20 para que el contenido no se pegue al Navbar fijo */}
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}