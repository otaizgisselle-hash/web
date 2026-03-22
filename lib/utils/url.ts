export function getWhatsAppUrl(message: string) {
  const baseUrl = "https://wa.me/523115044110";
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}