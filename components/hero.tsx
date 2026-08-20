import Image from "next/image"
import { Reveal } from "@/components/reveal"

const capabilities = [
  "Optimizado para conversión",
  "Conectado con WhatsApp",
  "Alto rendimiento y velocidad",
]

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="relative">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Ingeniería digital para clínicas
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Convertimos las visitas de su clínica en{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">consultas reales</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-accent/60" aria-hidden="true" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              EYStudio desarrolla experiencias web de alto rendimiento para clínicas odontológicas: diseñadas para
              transmitir confianza, guiar al paciente hacia la acción y facilitar el contacto por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491157653009"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Quiero atraer más clientes
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Ver cómo trabajamos
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {capabilities.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative rounded-2xl border border-border bg-secondary p-5 shadow-sm sm:p-8">
            <Image
              src="/hero-devices.png"
              alt="Sitio web de una clínica odontológica mostrado en una laptop y un teléfono móvil"
              width={900}
              height={720}
              priority
              className="h-auto w-full object-contain mix-blend-multiply"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
