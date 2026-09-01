import { Reveal } from "@/components/reveal"

const phases = [
  {
    n: "01",
    title: "Entender",
    subtitle: "Contexto y objetivo",
    body: "Revisamos la información del proyecto y entendemos el negocio, el problema, el usuario y el objetivo que debe cumplir la solución.",
    internal: "Brief · Investigación",
  },
  {
    n: "02",
    title: "Definir",
    subtitle: "Arquitectura y experiencia",
    body: "Organizamos la información y definimos cómo debe funcionar el recorrido antes de desarrollar.",
    internal: "Arquitectura · UX/UI · Contenido",
  },
  {
    n: "03",
    title: "Construir",
    subtitle: "Desarrollo e implementación",
    body: "Convertimos la solución definida en una experiencia funcional y preparada para distintos dispositivos.",
    internal: "Desarrollo · Responsive · SEO técnico básico · Integraciones",
  },
  {
    n: "04",
    title: "Verificar",
    subtitle: "QA y revisión",
    body: "Antes de presentar la solución, realizamos una revisión interna para detectar problemas y comprobar que el proyecto esté preparado para entrega.",
    internal: "Revisión interna · SOP-04",
  },
  {
    n: "05",
    title: "Entregar",
    subtitle: "Publicación y cierre",
    body: "Presentamos la solución terminada, realizamos la entrega correspondiente y cerramos formalmente el proyecto.",
    internal: "SOP-05",
  },
]

export function Protocol() {
  return (
    <section id="proceso" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">Proceso</p>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">De una necesidad concreta a una solución lista para funcionar.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">Cada proyecto avanza mediante un proceso estructurado. Entendemos el contexto, definimos qué construir, diseñamos la experiencia, desarrollamos la solución y la revisamos antes de entregarla.</p>
        </Reveal>

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-[8%] right-[8%] top-5 h-px bg-border" aria-hidden="true" />
          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase, index) => (
              <Reveal key={phase.n} delay={index * 70}>
                <article className="relative text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-varekta-blue bg-background font-display text-xs font-bold text-varekta-blue dark:border-varekta-electric dark:text-varekta-electric">{phase.n}</div>
                  <h3 className="mt-4 font-display text-lg font-bold">{phase.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{phase.subtitle}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {phases.map((phase, index) => (
            <Reveal key={phase.n} delay={index * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center gap-3 lg:hidden">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-varekta-blue font-display text-xs font-bold text-varekta-blue dark:border-varekta-electric dark:text-varekta-electric">{phase.n}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{phase.title}</h3>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{phase.subtitle}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{phase.body}</p>
                <p className="mt-5 border-t border-border pt-4 text-[10px] font-medium uppercase tracking-[0.1em] text-varekta-blue/70 dark:text-varekta-electric/80">{phase.internal}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350} className="mt-8 flex items-start gap-3 text-xs leading-5 text-muted-foreground">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-varekta-electric" aria-hidden="true" />
          La web resume el proceso en cinco fases. El detalle operativo interno se mantiene en los SOPs vigentes.
        </Reveal>
      </div>
    </section>
  )
}
