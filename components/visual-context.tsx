import Image from "next/image"
import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"

const points = [
  "Diseño orientado a la conversión desde el primer contacto visual",
  "Jerarquía visual que guía al usuario hacia la acción",
  "Integración nativa con ecosistemas de comunicación",
]

export function VisualContext() {
  return (
    <section id="nosotros" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Implementación</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Ingeniería Visual en Contexto
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <Reveal delay={100}>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              Cada interfaz se construye con precisión técnica, considerando el contexto específico de la práctica
              odontológica y las expectativas del paciente moderno.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            {/* El mockup es protagonista: enmarcado como producto real, dentro de un panel navy sobrio */}
            <div className="relative rounded-2xl bg-primary p-4 sm:p-6">
              {/* Marco de navegador */}
              <div className="overflow-hidden rounded-lg border border-white/10 bg-card shadow-xl">
                <div className="flex items-center gap-1.5 border-b border-black/5 bg-muted px-3 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" aria-hidden="true" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" aria-hidden="true" />
                  <span className="ml-3 hidden truncate rounded bg-background px-3 py-1 text-[11px] text-muted-foreground sm:block">
                    clinica-odontologica.com
                  </span>
                </div>
                <Image
                  src="/visual-context.png"
                  alt="Diseño de landing de una clínica odontológica optimizada para conversión"
                  width={1000}
                  height={780}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
