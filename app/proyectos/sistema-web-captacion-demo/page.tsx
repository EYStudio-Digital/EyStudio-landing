import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { buildProjectMessage, buildWhatsAppHref } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Sistema Web de Captación — Demo | VAREKTA",
  description:
    "Proyecto conceptual de VAREKTA para odontología: arquitectura, UX/UI, desarrollo responsive, WhatsApp y conversión dentro de un sistema digital orientado a facilitar consultas.",
}

const solutionScope = ["Arquitectura", "UX/UI", "Desarrollo", "Responsive", "WhatsApp", "Conversión"]
const workFramework = ["Investigación", "Estrategia", "Arquitectura", "UX/UI", "Desarrollo", "Responsive", "Integración de contacto", "Performance"]

const objectives = [
  {
    number: "01",
    title: "Entender los tratamientos",
    text: "Organizar la información para que una persona pueda comprender qué ofrece la clínica y avanzar sin depender de una navegación confusa.",
  },
  {
    number: "02",
    title: "Percibir confianza",
    text: "Construir una experiencia clara, coherente y profesional que acompañe el proceso de evaluación antes de iniciar una consulta.",
  },
  {
    number: "03",
    title: "Iniciar una consulta",
    text: "Reducir fricción y mantener una acción de contacto visible para que el siguiente paso sea simple y directo.",
  },
]

const architecture = ["Contexto", "Tratamientos", "Confianza", "Contacto"]

const whatsappHref = buildWhatsAppHref(buildProjectMessage(null))

function DesktopPreview() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#d8e0e8] bg-[#f8fafc] text-[#111418] shadow-2xl">
      <div className="flex h-11 items-center justify-between border-b border-[#d8e0e8] bg-white px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#0b1f3a]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0b1f3a]">Dental / Demo</span>
        </div>
        <div className="hidden gap-4 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#667085] sm:flex">
          <span>Tratamientos</span>
          <span>Clínica</span>
          <span>Contacto</span>
        </div>
      </div>

      <div className="grid min-h-[390px] gap-8 p-6 sm:min-h-[470px] sm:grid-cols-[1.05fr_0.95fr] sm:p-10 lg:p-12">
        <div className="flex flex-col justify-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0b1f3a]">Odontología · Proyecto conceptual</p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Una experiencia dental más clara desde el primer contacto.
          </h2>
          <p className="mt-5 max-w-lg text-xs leading-6 text-[#475467] sm:text-sm sm:leading-7">
            Información organizada, señales de confianza y un recorrido preparado para facilitar el inicio de una consulta.
          </p>
          <span className="mt-7 inline-flex w-fit rounded-lg bg-[#0b1f3a] px-5 py-3 text-[10px] font-semibold text-[#f8fafc] sm:text-xs">
            Consultar por WhatsApp →
          </span>
        </div>

        <div className="relative hidden sm:block">
          <div className="absolute inset-0 rounded-[28px] border border-[#d8e0e8] bg-[#edf3f6]" />
          <div className="absolute left-6 right-6 top-6 grid gap-3">
            <div className="rounded-xl border border-[#d5dde5] bg-white p-4">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#0b1f3a]">Información principal</p>
              <div className="mt-3 h-2 w-4/5 rounded bg-[#dce4eb]" />
              <div className="mt-2 h-2 w-3/5 rounded bg-[#e7edf2]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#d5dde5] bg-white p-4">
                <span className="block h-7 w-7 rounded-full bg-[#25e6c8]" />
                <div className="mt-4 h-2 w-3/4 rounded bg-[#dce4eb]" />
              </div>
              <div className="rounded-xl border border-[#d5dde5] bg-white p-4">
                <span className="block h-7 w-7 rounded-full bg-[#0b1f3a]" />
                <div className="mt-4 h-2 w-2/3 rounded bg-[#dce4eb]" />
              </div>
            </div>
            <div className="rounded-xl bg-[#0b1f3a] p-4 text-[#f8fafc]">
              <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#25e6c8]">Siguiente paso</p>
              <div className="mt-3 h-2 w-2/3 rounded bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobilePreview() {
  return (
    <div className="mx-auto w-[210px] overflow-hidden rounded-[34px] border-[6px] border-[#536276] bg-[#f8fafc] p-4 text-[#111418] shadow-2xl sm:w-[235px]">
      <div className="mx-auto h-1.5 w-16 rounded-full bg-[#c5ced8]" />
      <p className="mt-7 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#0b1f3a]">Dental · Demo</p>
      <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-[-0.03em]">Entender tus opciones es parte del cuidado.</h3>
      <p className="mt-3 text-[10px] leading-5 text-[#667085]">Una estructura móvil simple, legible y orientada al siguiente paso.</p>
      <div className="mt-5 rounded-xl border border-[#d8e0e8] bg-[#edf3f6] p-3">
        <div className="h-16 rounded-lg bg-white" />
        <div className="mt-3 h-2 w-4/5 rounded bg-[#cfd9e2]" />
        <div className="mt-2 h-2 w-3/5 rounded bg-[#dbe3ea]" />
      </div>
      <div className="mt-4 rounded-xl border border-[#d8e0e8] bg-white p-3">
        <div className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full bg-[#25e6c8]" />
          <div className="flex-1">
            <div className="h-2 w-4/5 rounded bg-[#d5dee6]" />
            <div className="mt-2 h-2 w-3/5 rounded bg-[#e4eaf0]" />
          </div>
        </div>
      </div>
      <span className="mt-5 block rounded-lg bg-[#0b1f3a] px-4 py-3 text-center text-[10px] font-semibold text-[#f8fafc]">Iniciar consulta →</span>
      <div className="h-5" />
    </div>
  )
}

export default function SistemaWebCaptacionDemoPage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="border-b border-[#24303d] bg-[#0d1117] text-varekta-white">
          <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:py-24 lg:px-8">
            <Reveal>
              <a href="/#proyectos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition-colors hover:text-varekta-electric">
                <ArrowLeft className="h-4 w-4" /> Volver a proyectos
              </a>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-varekta-electric">Proyecto conceptual · Odontología</p>
              <h1 className="mt-5 max-w-5xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[72px]">
                Sistema Web de Captación — Demo
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Demo flagship desarrollado por VAREKTA para demostrar cómo estrategia, arquitectura, UX/UI y desarrollo pueden integrarse dentro de una solución digital orientada a facilitar consultas.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {solutionScope.map((item) => (
                  <span key={item} className="rounded-full border border-[#506176] bg-[#1b2531] px-3 py-1.5 text-xs font-medium text-slate-100">{item}</span>
                ))}
              </div>
              <div className="mt-8 max-w-3xl rounded-xl border border-[#35465a] bg-[#151c25] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Demo VAREKTA</p>
                <p className="mt-2 text-xs leading-5 text-slate-200 sm:text-sm">
                  Este proyecto no representa un cliente real y no utiliza métricas, testimonios, facturación, conversiones ni resultados comerciales inventados.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-12 rounded-3xl border border-[#26384a] bg-[#0a1728] p-4 sm:p-7 lg:p-9">
              <DesktopPreview />
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">01 · Objetivo conceptual</p>
              <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                Diseñar un recorrido que ayude a entender, confiar y actuar.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                El demo se construye alrededor de tres necesidades conceptuales definidas para el proyecto.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {objectives.map((item, index) => (
                <Reveal key={item.number} delay={index * 80}>
                  <article className="h-full rounded-2xl border border-border bg-card p-6 sm:p-7">
                    <span className="text-xs font-bold text-varekta-blue dark:text-varekta-electric">{item.number}</span>
                    <h3 className="mt-5 font-display text-2xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">02 · Arquitectura</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">La experiencia se organiza antes de desarrollar.</h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  Para este demo, la arquitectura visual propone una secuencia simple: presentar el contexto, facilitar la exploración de tratamientos, reforzar confianza y mantener el contacto como siguiente paso claro.
                </p>
              </Reveal>

              <Reveal delay={100} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Arquitectura conceptual propuesta</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-4">
                  {architecture.map((item, index) => (
                    <div key={item} className="relative rounded-xl border border-border bg-background p-4 text-center">
                      <span className="text-[10px] font-bold text-varekta-blue dark:text-varekta-electric">0{index + 1}</span>
                      <p className="mt-2 font-display text-sm font-bold">{item}</p>
                      {index < architecture.length - 1 && <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-varekta-electric sm:block" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
                <div className="mt-7 border-l-2 border-varekta-electric pl-5">
                  <p className="font-display text-xl font-bold">Claridad → confianza → acción</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">El sistema evita depender de una única pantalla o un CTA aislado: el recorrido completo prepara el siguiente paso.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-[#24303d] bg-[#0d1117] text-varekta-white">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-electric">03 · UX/UI + Responsive</p>
              <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">Una misma jerarquía, adaptada al dispositivo.</h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">La versión mobile conserva la prioridad del contenido y el contacto sin intentar reducir literalmente la composición desktop.</p>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
              <Reveal className="rounded-3xl border border-[#26384a] bg-[#0a1728] p-4 sm:p-7">
                <DesktopPreview />
              </Reveal>
              <Reveal delay={120} className="rounded-3xl border border-[#26384a] bg-[#151c25] p-8">
                <MobilePreview />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">04 · Alcance</p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Un demo construido como proyecto, no como una captura aislada.</h2>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  El marco aprobado contempla las disciplinas necesarias para evaluar el sistema completo cuando corresponda, desde la definición hasta el comportamiento responsive y el rendimiento.
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {workFramework.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">{item}</span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={100} className="rounded-2xl border border-varekta-blue bg-varekta-blue p-7 text-varekta-white sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-varekta-electric">Solución comunicable</p>
                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {solutionScope.map((item, index) => (
                    <div key={item} className="flex items-center justify-between py-4">
                      <span className="font-display text-lg font-bold">{item}</span>
                      <span className="text-xs font-semibold text-varekta-electric">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-varekta-blue text-varekta-white">
          <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-electric">¿Tenés un proyecto?</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">Podemos empezar por entender qué necesita tu negocio.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">No necesitás llegar con la solución definida. El primer paso es entender el contexto y el objetivo.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-varekta-electric px-6 py-3.5 text-sm font-semibold text-varekta-blue transition-transform hover:-translate-y-0.5">
                  Hablar con VAREKTA <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/#proyectos" className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5">Volver a proyectos</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
