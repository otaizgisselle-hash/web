import type { Metadata } from "next";
import { seoConfig } from "@/content/seo.config";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], style: ['normal', 'italic'], variable: "--font-serif" });

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand/gio-symbol.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="antialiased bg-[#FDFBF7] text-[#1A1A1A] min-h-screen">
        {children}
      </body>
    </html>
  );
}