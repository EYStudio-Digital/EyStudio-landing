import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid min-h-[720px] max-w-[1280px] items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-varekta-blue dark:text-varekta-electric">
              Ingeniería digital · Tecnología aplicada
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[68px]">
              Convertimos oportunidades digitales en crecimiento.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
              Diseñamos y desarrollamos experiencias digitales de alto rendimiento que combinan estrategia, diseño y tecnología para ayudar a empresas a convertir mejor.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#selector"
                className="inline-flex items-center rounded-lg bg-varekta-blue px-6 py-3.5 text-sm font-semibold text-varekta-white transition-transform hover:-translate-y-0.5 dark:bg-varekta-white dark:text-varekta-blue"
              >
                Encontrar mi solución →
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Ver proyectos
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-3xl border border-border bg-secondary/70 p-8">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,31,58,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,31,58,0.06)_1px,transparent_1px)] bg-[size:58px_58px] dark:bg-[linear-gradient(to_right,rgba(248,250,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,250,252,0.05)_1px,transparent_1px)]" />

            <div className="absolute left-7 top-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-varekta-blue dark:text-varekta-electric">
              System / VAREKTA
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-varekta-blue shadow-sm dark:bg-varekta-white">
              <div className="h-5 w-5 rounded-full bg-varekta-electric" />
            </div>

            {[
              "left-[18%] top-[24%]",
              "right-[18%] top-[22%]",
              "right-[15%] bottom-[22%]",
              "left-[20%] bottom-[20%]",
              "left-1/2 top-[14%] -translate-x-1/2",
            ].map((position) => (
              <span
                key={position}
                className={`absolute h-2.5 w-2.5 rounded-full bg-varekta-electric ${position}`}
                aria-hidden="true"
              />
            ))}

            <div className="absolute inset-x-16 bottom-10 border-t border-border/70 pt-4 text-xs leading-5 text-muted-foreground">
              Estrategia · Diseño · Tecnología conectadas dentro de un sistema orientado a un objetivo.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
