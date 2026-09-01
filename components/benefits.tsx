import { Reveal } from "@/components/reveal"

const benefits = [
  {
    n: "01",
    from: "De información dispersa",
    to: "a claridad",
    title: "Tu propuesta se entiende mejor.",
    body: "Servicios, información y llamados a la acción se organizan para que el visitante pueda comprender rápidamente qué ofrecés y cómo avanzar.",
  },
  {
    n: "02",
    from: "De incertidumbre",
    to: "a confianza",
    title: "Tu presencia digital acompaña el nivel de tu negocio.",
    body: "Una experiencia profesional, coherente y cuidada ayuda a transmitir mayor solidez durante el proceso de evaluación del potencial cliente.",
  },
  {
    n: "03",
    from: "De fricción",
    to: "a una acción clara",
    title: "Contactarte se vuelve más simple.",
    body: "El recorrido y los puntos de contacto están diseñados para reducir pasos innecesarios y facilitar consultas, formularios, WhatsApp o la acción definida para el proyecto.",
  },
  {
    n: "04",
    from: "De una web aislada",
    to: "a una base digital preparada",
    title: "Obtenés una solución construida con criterio técnico.",
    body: "Responsive, rendimiento, estructura e integraciones se consideran desde el proyecto para construir una base funcional que pueda evolucionar cuando el negocio lo necesite.",
  },
]

export function Benefits() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">Beneficios</p>
          <h2 className="mt-4 max-w-5xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">Una experiencia digital mejor diseñada cambia cómo las personas entienden, perciben y utilizan tu negocio.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">El objetivo no es simplemente mejorar la apariencia de una web. Buscamos reducir fricción, comunicar con mayor claridad y facilitar que cada visitante pueda entender la propuesta y avanzar.</p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {benefits.map((item, index) => (
            <Reveal key={item.n} delay={index * 80}>
              <article className="grid gap-5 py-8 lg:grid-cols-[60px_360px_1fr] lg:items-center lg:gap-8">
                <span className="font-display text-sm font-bold text-muted-foreground">{item.n}</span>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
                  <span className="text-muted-foreground">{item.from}</span>
                  <span className="h-px w-8 bg-varekta-electric" aria-hidden="true" />
                  <span className="font-semibold text-varekta-blue dark:text-varekta-electric">{item.to}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-8 inline-flex flex-wrap gap-x-2 gap-y-1 rounded-xl border border-border bg-card px-4 py-3 text-xs font-medium text-muted-foreground">
          <span className="text-varekta-blue dark:text-varekta-electric">Variables que podemos controlar:</span>
          <span>claridad · experiencia · confianza · facilidad de contacto · calidad técnica.</span>
        </Reveal>
      </div>
    </section>
  )
}
