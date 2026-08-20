import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <Eyebrow>El problema</Eyebrow>
            <h2 className="mt-4 max-w-md font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
              Tener presencia digital no alcanza si su sitio no convierte visitas en consultas
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 self-end text-pretty leading-relaxed text-muted-foreground">
            <p>
              Muchas clínicas odontológicas invierten en tener un sitio web, pero ese sitio no funciona como un sistema
              de captación de pacientes. Sin una estructura orientada a la conversión, cada visita se pierde.
            </p>
            <p>
              El resultado es el mismo: tráfico que no consulta, números que no crecen y una herramienta digital que no
              justifica la inversión.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
