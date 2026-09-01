import { Reveal } from "@/components/reveal"

const pillars = [
  {
    n: "01",
    title: "Estrategia",
    body: "Entendemos el negocio, el objetivo y el recorrido que debe realizar el usuario.",
  },
  {
    n: "02",
    title: "Diseño",
    body: "Convertimos información y objetivos en una experiencia clara, intuitiva y capaz de generar confianza.",
  },
  {
    n: "03",
    title: "Tecnología",
    body: "Construimos una solución rápida, estable, responsive y preparada para funcionar correctamente en situaciones reales.",
  },
]

export function ValueProposition() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">Nuestra propuesta</p>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Diseñamos experiencias digitales de alto rendimiento que convierten visitantes en oportunidades reales de negocio.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            En VAREKTA, estrategia, diseño y tecnología no funcionan como partes aisladas. Las integramos dentro de un sistema pensado alrededor de un objetivo: comunicar mejor, reducir fricción y facilitar que cada oportunidad pueda avanzar.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
          {pillars.map((pillar, index) => (
            <div key={pillar.n} className="contents">
              <Reveal delay={index * 90}>
                <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-varekta-blue dark:text-varekta-electric">
                    <span>{pillar.n}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{pillar.body}</p>
                </article>
              </Reveal>
              {index < pillars.length - 1 && (
                <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
                  <span className="h-px w-8 bg-varekta-electric" />
                </div>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={240} className="mt-8 rounded-2xl border border-varekta-blue/15 bg-varekta-blue p-6 text-varekta-white sm:p-8 dark:border-white/10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-varekta-electric">Sistema VAREKTA</p>
              <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">Estrategia + Diseño + Tecnología → Sistema digital → Experiencia de alto rendimiento</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-varekta-electric shadow-[0_0_0_8px_rgba(37,230,200,0.10)]" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={300} className="mt-10">
          <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">No entregamos una página. Construimos una herramienta diseñada para cumplir un objetivo.</p>
        </Reveal>
      </div>
    </section>
  )
}
