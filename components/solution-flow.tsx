import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"

const steps = [
  { n: "01", label: "Visita" },
  { n: "02", label: "Confianza" },
  { n: "03", label: "Interés" },
  { n: "04", label: "WhatsApp" },
  { n: "05", label: "Consulta" },
]

export function SolutionFlow() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-xl text-center">
          <Eyebrow centered>La solución</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            La Solución Sistémica
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Construimos ecosistemas digitales enfocados en guiar al usuario hacia la acción.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, i) => {
              const active = step.n === "03"
              return (
                <li key={step.n} className="relative flex flex-col items-center text-center">
                  {i < steps.length - 1 && (
                    <span
                      className="absolute left-1/2 top-6 hidden h-px w-full bg-border lg:block"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-md border text-sm font-medium ${
                      active
                        ? "border-accent bg-accent/20 text-foreground"
                        : "border-border bg-card text-foreground"
                    }`}
                  >
                    {step.n}
                  </span>
                  <span
                    className={`mt-3 text-xs uppercase tracking-wide ${
                      active ? "font-semibold text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
