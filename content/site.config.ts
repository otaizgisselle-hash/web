export const siteConfig = {
  businessName: "Gisselle Otaiz",
  tagline: "Claridad absoluta en el mercado de Tepic",
  contact: {
    // Usamos el formato puro para el enlace de WhatsApp
    whatsapp: "523115044110", 
    phone: "+52 1 311 504 4110", // Este es para mostrarlo visualmente
  },
  url: "https://gisselleotaiz.com", 
};

export function createWhatsAppLink(message: string) {
  // Aquí usamos el número de whatsapp definido arriba
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}