import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const capabilities = ["Investigación", "Estrategia", "Arquitectura", "UX/UI", "Desarrollo", "Responsive", "WhatsApp", "Performance"]

function DemoDesktop() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] border border-white/10 bg-[#f8fafc] shadow-2xl">
      <div className="flex h-9 items-center gap-2 border-b border-[#d9e0e8] bg-[#eef2f6] px-4">
        <span className="h-2 w-2 rounded-full bg-[#9aa7b4]" />
        <span className="h-2 w-2 rounded-full bg-[#9aa7b4]" />
        <span className="h-2 w-2 rounded-full bg-[#25e6c8]" />
      </div>
      <div className="grid h-[calc(100%-2.25rem)] grid-cols-1 gap-6 p-7 text-[#111418] sm:grid-cols-[1.1fr_0.9fr] sm:p-9">
        <div className="flex flex-col justify-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0b1f3a]">Clínica odontológica · Demo</p>
          <h4 className="mt-4 max-w-sm font-display text-2xl font-bold leading-tight sm:text-3xl">Una experiencia dental más clara desde el primer contacto.</h4>
          <p className="mt-4 max-w-sm text-xs leading-5 text-[#475467] sm:text-sm">Tratamientos explicados con claridad, confianza profesional y un camino directo para iniciar una consulta.</p>
          <span className="mt-6 inline-flex w-fit rounded-lg bg-[#0b1f3a] px-4 py-2.5 text-[10px] font-semibold text-[#f8fafc] sm:text-xs">Consultar por WhatsApp →</span>
        </div>
        <div className="relative hidden items-center justify-center sm:flex">
          <div className="absolute inset-4 rounded-2xl border border-[#d9e0e8] bg-[#eef4f7]" />
          <div className="relative h-24 w-24 rounded-full border-[18px] border-[#0b1f3a]/8">
            <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25e6c8]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DemoMobile() {
  return (
    <div className="relative mx-auto aspect-[9/17] w-[170px] overflow-hidden rounded-[28px] border-[5px] border-[#627286] bg-[#f8fafc] p-4 text-[#111418] shadow-2xl sm:w-[195px]">
      <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0b1f3a]">Odontología</p>
      <h4 className="mt-4 font-display text-lg font-bold leading-tight">Cuidar tu sonrisa empieza por entender tus opciones.</h4>
      <div className="mt-5 h-20 rounded-xl border border-[#d9e0e8] bg-[#eef4f7]" />
      <span className="mt-5 block rounded-lg bg-[#0b1f3a] px-3 py-2.5 text-center text-[10px] font-semibold text-[#f8fafc]">Iniciar consulta →</span>
    </div>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="border-b border-[#24303d] bg-[#0d1117] text-varekta-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-electric">Proyectos</p>
          <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">Diseñamos para resolver, no solamente para mostrar.</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">Exploramos cómo estrategia, experiencia y tecnología pueden integrarse dentro de una solución digital construida alrededor de un objetivo concreto.</p>
        </Reveal>

        <div id="demo-varekta" className="mt-12 grid scroll-mt-28 gap-8 xl:grid-cols-[1.25fr_0.75fr] xl:items-center">
          <Reveal className="relative rounded-3xl border border-[#26384a] bg-[#0a1728] p-5 sm:p-8">
            <DemoDesktop />
            <div className="absolute bottom-7 right-5 hidden sm:block md:right-9">
              <DemoMobile />
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Proyecto conceptual · Demo VAREKTA</p>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-[#2c3948] bg-[#151c25] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Proyecto conceptual · Odontología</p>
            <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white">Sistema Web de Captación — Demo</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">Demo desarrollado por VAREKTA desde cero para demostrar cómo estrategia, arquitectura, UX/UI y desarrollo pueden integrarse dentro de una solución orientada a facilitar consultas.</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {capabilities.map((item) => <span key={item} className="rounded-full border border-[#506176] bg-[#1b2531] px-3 py-1.5 text-xs font-medium text-slate-100">{item}</span>)}
            </div>

            <div className="mt-6 rounded-xl border border-[#35465a] bg-[#0d131b] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Demo VAREKTA</p>
              <p className="mt-2 text-xs leading-5 text-slate-200 sm:text-sm">No representa un cliente real ni utiliza métricas, testimonios o resultados comerciales inventados.</p>
            </div>

            <a href="#demo-varekta" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-varekta-electric transition-transform hover:translate-x-1">Ver proyecto <ArrowRight className="h-4 w-4" /></a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
