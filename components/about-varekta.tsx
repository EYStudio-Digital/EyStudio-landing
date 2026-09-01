import { Reveal } from "@/components/reveal"

const principles = [
  {
    n: "01",
    title: "Ingeniería",
    lead: "Nada se construye sin un proceso.",
    body: "Entender, definir, construir, verificar y mejorar. Trabajamos de forma estructurada para que cada decisión tenga una razón.",
  },
  {
    n: "02",
    title: "Calidad",
    lead: "La calidad no se negocia.",
    body: "Cada proyecto debe superar un estándar interno de diseño, experiencia, desarrollo y funcionamiento antes de considerarse terminado.",
  },
  {
    n: "03",
    title: "Evolución",
    lead: "Nunca dejar de aprender y mejorar.",
    body: "La tecnología cambia. Los negocios cambian. Nuestro sistema también debe evolucionar a partir de conocimiento, experiencia y evidencia real.",
  },
]

export function AboutVarekta() {
  return (
    <section id="sobre-varekta" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">Sobre VAREKTA</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">Construimos tecnología con criterio de ingeniería.</h2>
          </Reveal>
          <Reveal delay={100} className="lg:pt-8">
            <p className="font-display text-xl font-bold leading-8 sm:text-2xl">VAREKTA nació de una idea simple: la tecnología debe resolver problemas reales.</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Diseñamos y desarrollamos soluciones digitales combinando ingeniería, estrategia y experiencia de usuario. No buscamos incorporar tecnología porque esté de moda ni construir productos únicamente para impresionar. Cada decisión debe responder a un objetivo y formar parte de un sistema pensado para funcionar.</p>
          </Reveal>
        </div>

        <Reveal delay={140} className="mt-14 rounded-3xl border border-varekta-blue bg-varekta-blue p-6 text-varekta-white sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Tres principios guían cómo trabajamos</p>
            <p className="font-display text-sm font-bold">Sistema VAREKTA</p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {principles.map((item) => (
              <article key={item.n} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  <span className="text-varekta-electric">{item.n}</span>
                  <span>{item.title}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold leading-7">{item.lead}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-t border-white/15 pt-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Filosofía</p>
            <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">La excelencia no es un resultado. Es un sistema.</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-200 sm:text-base">No entendemos la excelencia como perfección ni como una promesa publicitaria. La entendemos como la consecuencia de construir procesos que permitan mantener un estándar alto mientras VAREKTA evoluciona.</p>
          </div>
        </Reveal>

        <Reveal delay={220} className="mt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-varekta-blue dark:text-varekta-electric">Nuestra dirección</p>
          <h3 className="mt-4 max-w-4xl font-display text-2xl font-bold leading-tight sm:text-3xl">Construimos sobre lo que hacemos hoy, sin confundir visión futura con servicios actuales.</h3>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_auto_1.2fr] lg:items-center">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-varekta-blue dark:text-varekta-electric">Hoy</p>
              <p className="mt-3 font-display text-xl font-bold">Experiencias y sistemas digitales</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Soluciones que VAREKTA construye actualmente para empresas.</p>
            </div>

            <div className="hidden items-center gap-3 lg:flex" aria-hidden="true">
              <span className="h-px w-20 bg-varekta-electric" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Evolución</span>
              <span className="h-px w-20 bg-varekta-electric" />
            </div>

            <div className="rounded-2xl border border-[#313b46] bg-varekta-graphite p-6 text-varekta-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-varekta-electric">Visión</p>
              <p className="mt-3 font-display text-xl font-bold">Compañía tecnológica con estándares de excelencia internacional.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Soluciones digitales", "Software", "Inteligencia artificial", "Productos propios"].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-100">{item}</span>
                ))}
              </div>
              <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-300"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-varekta-electric" />Dirección futura — no representa servicios actuales de la V1.</p>
            </div>
          </div>

          <p className="mt-10 font-display text-xl font-bold text-varekta-blue dark:text-varekta-electric">Tecnología diseñada para crecer.</p>
        </Reveal>
      </div>
    </section>
  )
}
