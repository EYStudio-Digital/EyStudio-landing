import { Eyebrow } from "@/components/eyebrow"
import { Reveal } from "@/components/reveal"

const services = [
  {
    n: "01",
    title: "Strategic Experience",
    body: "Análisis profundo del recorrido del paciente para estructurar la información con lógica persuasiva.",
  },
  {
    n: "02",
    title: "Conversion Engine",
    body: "Implementación de tácticas de UX/UI diseñadas específicamente para reducir fricción y maximizar captación.",
  },
  {
    n: "03",
    title: "UI Design",
    body: "Estética corporativa y pulcra que proyecta autoridad médica y confianza institucional inmediata.",
  },
  {
    n: "04",
    title: "Desarrollo Frontend",
    body: "Código limpio, modular y escalable. Interfaces que cargan rápido y funcionan en cualquier dispositivo.",
  },
  {
    n: "05",
    title: "Performance Metrics",
    body: "Optimización técnica obsesiva (Web Vitals) para asegurar tiempos de carga mínimos y mejor posicionamiento SEO.",
  },
  {
    n: "06",
    title: "WhatsApp Integration",
    body: "Conexión directa e inteligente con plataformas de mensajería para iniciar el diálogo sin demoras.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Módulos del sistema</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Arquitectura de Servicios
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.n} delay={i * 60} className="group bg-card">
              <div className="h-full p-7 transition-colors group-hover:bg-muted/60">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-accent-foreground/70">{service.n}</span>
                  <span className="h-4 w-px bg-border" />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
