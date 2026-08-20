import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://eystudio.com'),
  title: 'EYStudio — Ingeniería digital para convertir visitas en oportunidades',
  description:
    'Diseñamos experiencias digitales de alto rendimiento para ayudar a clínicas y empresas a convertir mejor sus oportunidades online.',
  generator: 'v0.app',
  applicationName: 'EYStudio',
  keywords: [
    'ingeniería digital',
    'experiencias web',
    'conversión',
    'clínicas odontológicas',
    'desarrollo web de alto rendimiento',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://eystudio.com',
    siteName: 'EYStudio',
    title: 'EYStudio — Ingeniería digital para convertir visitas en oportunidades',
    description:
      'Diseñamos experiencias digitales de alto rendimiento para ayudar a clínicas y empresas a convertir mejor sus oportunidades online.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EYStudio — Ingeniería digital para convertir visitas en oportunidades',
    description:
      'Diseñamos experiencias digitales de alto rendimiento para ayudar a clínicas y empresas a convertir mejor sus oportunidades online.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F8FAFC',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
        >
          Saltar al contenido
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
