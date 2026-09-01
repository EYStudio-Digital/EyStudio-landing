import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const secondary = [
  {
    n: "02",
    title: "Landing de conversión",
    body: "Una experiencia enfocada en un objetivo principal: presentar una oferta, servicio o propuesta y conducir al usuario hacia una acción clara.",
    meta: "Servicios · Lanzamientos · Captación de consultas · Ofertas específicas · Validación",
    cta: "Quiero una landing",
  },
  {
    n: "03",
    title: "Sitio web institucional",
    body: "Una plataforma digital para presentar una empresa, organizar sus servicios, comunicar su propuesta con claridad y facilitar el contacto con potenciales clientes.",
    meta: "Arquitectura · UX/UI · Desarrollo · Responsive · Formularios · Integraciones · SEO técnico básico",
    cta: "Quiero un sitio institucional",
  },
]

const capabilities = ["WhatsApp", "Formularios", "Analytics", "CRM", "Mapas", "Reservas", "SEO técnico básico", "Integraciones externas"]

export function Services() {
  return (
    <section id="servicios" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">Soluciones</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Construimos la solución web que tu negocio necesita.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">Desde una landing enfocada en conversión hasta un sitio institucional completo, diseñamos y desarrollamos experiencias digitales adaptadas al objetivo de cada proyecto.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="h-full rounded-2xl border border-varekta-blue bg-varekta-blue p-7 text-varekta-white shadow-sm sm:p-8">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
                <span className="text-varekta-electric">01</span>
                <span className="text-white/90">Solución principal</span>
              </div>
              <h3 className="mt-6 max-w-lg font-display text-3xl font-bold tracking-tight sm:text-4xl">Sistema Web de Captación</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">Un sistema web diseñado para convertir la presencia digital de una empresa en una experiencia clara, profesional y orientada a generar oportunidades de contacto.</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Estrategia", "UX/UI", "Desarrollo", "Responsive", "Integración de contacto", "Performance"].map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/95">{item}</span>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-xs leading-5 text-slate-200 sm:text-sm">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-varekta-electric" aria-hidden="true" />
                Oferta formalizada actualmente para clínicas odontológicas.
              </div>

              <a href="#contacto" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-varekta-electric transition-transform hover:translate-x-1">Explorar esta solución <ArrowRight className="h-4 w-4" /></a>
            </article>
          </Reveal>

          <div className="grid gap-5">
            {secondary.map((item, index) => (
              <Reveal key={item.n} delay={80 + index * 80}>
                <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                  <span className="font-display text-sm font-bold text-varekta-blue dark:text-varekta-electric">{item.n}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.body}</p>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">{item.meta}</p>
                  <a href="#contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-varekta-blue dark:text-varekta-electric">{item.cta} <ArrowRight className="h-4 w-4" /></a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={220} className="mt-5 rounded-2xl border border-border bg-secondary/50 p-6 sm:p-7">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="font-display text-xl font-bold">¿Ya tenés una web?</h3>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">También podemos evaluar una plataforma existente y determinar si conviene rediseñarla, reconstruirla o plantear una solución diferente.</p>
            </div>
            <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-semibold text-varekta-blue dark:text-varekta-electric">Evaluar mi proyecto <ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>

        <Reveal delay={260} className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Capacidades complementarias según alcance</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {capabilities.map((item) => <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">{item}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
