import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: {
    canonical: "/proyectos/sistema-web-captacion-demo",
  },
  openGraph: {
    url: "/proyectos/sistema-web-captacion-demo",
  },
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
