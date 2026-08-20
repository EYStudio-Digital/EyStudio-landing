import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"

const items = [
  {
    title: "Ingeniería sobre improvisación",
    body: "Cada decisión de diseño está respaldada por datos de usabilidad y principios comprobados de interacción humana.",
  },
  {
    title: "Conversión sobre decoración",
    body: "Rechazamos las tendencias visuales que distraen. Priorizamos la claridad y el flujo de la información.",
  },
  {
    title: "Rendimiento como estándar",
    body: "Velocidad de carga sub-segundo. Código minimizado. Optimización de activos nativa en toda la arquitectura.",
  },
]

export function Differentiators() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Fundamentos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Diferenciales Estructurales
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="border-t-2 border-accent pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
