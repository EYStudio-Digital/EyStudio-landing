import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"

const phases = [
  { n: "S01", label: "Diagnóstico" },
  { n: "S02", label: "Estrategia" },
  { n: "S03", label: "Diseño" },
  { n: "S04", label: "Desarrollo" },
  { n: "S05", label: "QA" },
  { n: "S06", label: "Lanzamiento" },
]

export function Protocol() {
  return (
    <section id="proceso" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Protocolo</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Un proceso diseñado para construir mejor
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ol className="mt-14 grid grid-cols-3 gap-y-10 md:grid-cols-6">
            {phases.map((phase, i) => (
              <li key={phase.n} className="relative flex flex-col items-start">
                {i < phases.length - 1 && (
                  <span className="absolute left-8 top-4 hidden h-px w-full bg-border md:block" aria-hidden="true" />
                )}
                <span className="relative z-10 flex h-8 min-w-14 items-center justify-center rounded-md border border-border bg-card px-2 font-display text-xs font-semibold text-foreground">
                  {phase.n}
                </span>
                <span className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{phase.label}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
