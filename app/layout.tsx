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

const themeScript = `
  try {
    const saved = localStorage.getItem('varekta-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : systemDark;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.classList.toggle('light', !dark);
  } catch {}
`

export const metadata: Metadata = {
  title: 'VAREKTA — Ingeniería digital y tecnología aplicada',
  description:
    'VAREKTA desarrolla experiencias digitales de alto rendimiento que combinan estrategia, diseño y tecnología para ayudar a empresas a convertir mejor.',
  applicationName: 'VAREKTA',
  keywords: [
    'VAREKTA',
    'ingeniería digital',
    'experiencias digitales',
    'desarrollo web',
    'sistemas de conversión',
    'tecnología aplicada',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'VAREKTA',
    title: 'VAREKTA — Ingeniería digital y tecnología aplicada',
    description:
      'Experiencias digitales de alto rendimiento construidas con estrategia, diseño y tecnología.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAREKTA — Ingeniería digital y tecnología aplicada',
    description:
      'Experiencias digitales de alto rendimiento construidas con estrategia, diseño y tecnología.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1117' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-varekta-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-varekta-white"
        >
          Saltar al contenido
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
