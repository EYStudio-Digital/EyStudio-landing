import { Logo } from "@/components/logo"

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Sobre VAREKTA", href: "#sobre-varekta" },
]

export function SiteFooter() {
  return (
    <footer className="bg-varekta-graphite text-varekta-white">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="[&_a]:text-varekta-white [&_span]:text-varekta-white"><Logo /></div>
            <p className="mt-4 max-w-xs font-display text-lg font-bold text-slate-100">Tecnología diseñada para crecer.</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Navegación</p>
            <nav className="mt-4 flex flex-col gap-3">
              {nav.map((item) => <a key={item.href} href={item.href} className="text-sm text-slate-300 transition-colors hover:text-varekta-electric">{item.label}</a>)}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Contacto</p>
            <p className="mt-4 text-sm font-medium text-slate-200">¿Tenés un proyecto?</p>
            <a href="#contacto" className="mt-3 inline-flex text-sm font-semibold text-varekta-electric">Hablar con VAREKTA →</a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 VAREKTA. Todos los derechos reservados.</span>
          <span>Los enlaces legales se incorporarán cuando los textos correspondientes estén validados.</span>
        </div>
      </div>
    </footer>
  )
}
