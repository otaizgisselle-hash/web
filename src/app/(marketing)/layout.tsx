import { seoConfig } from "../../../content/seo.config";
import WhatsAppFloat from "@/components/ui/whatsapp-float"; // Importa el botón aquí

export const metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <main className="flex-1">
        {children}
      </main>
      
      {/* El botón flotante vive aquí */}
      <WhatsAppFloat /> 
    </div>
  );
}