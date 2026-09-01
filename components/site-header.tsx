"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Logo } from "@/components/logo"

const nav = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Sobre VAREKTA", href: "/#sobre-varekta" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem("varekta-theme")
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldUseDark = saved ? saved === "dark" : systemDark
    setDark(shouldUseDark)
    document.documentElement.classList.toggle("dark", shouldUseDark)
    document.documentElement.classList.toggle("light", !shouldUseDark)
  }, [])

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current
      document.documentElement.classList.toggle("dark", next)
      document.documentElement.classList.toggle("light", !next)
      window.localStorage.setItem("varekta-theme", next ? "dark" : "light")
      return next
    })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted"
            aria-label={dark ? "Activar tema claro" : "Activar tema oscuro"}
          >
            {dark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>

          <a
            href="/#contacto"
            className="hidden items-center rounded-lg bg-varekta-blue px-5 py-2.5 text-sm font-semibold text-varekta-white transition-transform hover:-translate-y-0.5 dark:bg-varekta-white dark:text-varekta-blue sm:inline-flex"
          >
            Hablemos
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navegación principal móvil" className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col px-5 py-4 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-lg bg-varekta-blue px-5 py-3 text-sm font-semibold text-varekta-white dark:bg-varekta-white dark:text-varekta-blue"
            >
              Hablemos
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
