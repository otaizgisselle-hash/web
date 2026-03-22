import { ImageResponse } from 'next/og'
import { siteConfig } from '@/content/site.config'

// Configuración de la imagen (Tamaño estándar de redes sociales)
export const alt = `Gisselle Otaiz | ${siteConfig.tagline}`
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      // Este es el "diseño" de la tarjeta que se verá en WhatsApp/Facebook
      <div
        style={{
          background: '#FDFBF7', // Tu color Crema
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '20px solid #7D4F39', // Marco Terracota Boutique
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Monograma G (Simulado con texto para evitar errores de carga de imagen) */}
          <div style={{ fontSize: 100, fontFamily: 'serif', fontStyle: 'italic', color: '#7D4F39', marginBottom: 20 }}>
            G
          </div>
          
          <h1 style={{ fontSize: 80, color: '#1A1A1A', margin: 0, fontWeight: 'bold' }}>
            {siteConfig.businessName}
          </h1>
          
          <p style={{ fontSize: 30, color: '#7D4F39', marginTop: 20, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}