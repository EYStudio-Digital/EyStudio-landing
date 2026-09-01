"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import {
  SELECTOR_CONTEXT_EVENT,
  SELECTOR_CONTEXT_KEY,
  type SelectorContext,
} from "@/lib/contact"

const categories = [
  { label: "Salud", niches: ["Clínicas odontológicas", "Clínicas médicas", "Estética / estética médica"] },
  { label: "Servicios profesionales", niches: ["Estudios jurídicos", "Mentores / coaches", "Consultores / profesionales independientes"] },
  { label: "Negocios", niches: ["Gimnasios / fitness", "Inmobiliarias", "Gastronomía", "Belleza / servicios locales"] },
  { label: "E-commerce", niches: ["Tiendas online", "Marcas de productos"] },
  { label: "Otro", niches: [] },
]

const objectives = [
  "Conseguir más consultas u oportunidades",
  "Crear una presencia digital profesional",
  "Mejorar una web existente",
  "Lanzar un nuevo sitio",
  "No estoy seguro todavía",
]

function recommendationFor(context: SelectorContext) {
  if (context.niche === "Clínicas odontológicas") return "Sistema Web de Captación"
  return "Diagnóstico de solución"
}

export function SolutionSelector() {
  const [step, setStep] = useState(1)
  const [context, setContext] = useState<SelectorContext>({})

  const selectedCategory = useMemo(
    () => categories.find((item) => item.label === context.category),
    [context.category],
  )

  const persist = (next: SelectorContext) => {
    const withRecommendation = { ...next, recommendation: recommendationFor(next) }
    setContext(withRecommendation)
    window.localStorage.setItem(SELECTOR_CONTEXT_KEY, JSON.stringify(withRecommendation))
    window.dispatchEvent(new CustomEvent(SELECTOR_CONTEXT_EVENT, { detail: withRecommendation }))
  }

  const chooseCategory = (label: string) => {
    const category = categories.find((item) => item.label === label)!
    const next = { category: label, niche: undefined, objective: undefined, recommendation: undefined }
    setContext(next)
    if (category.niches.length === 0) {
      setStep(3)
      return
    }
    setStep(2)
  }

  const chooseNiche = (niche: string) => {
    setContext((current) => ({ ...current, niche }))
    setStep(3)
  }

  const chooseObjective = (objective: string) => {
    const next = { ...context, objective }
    persist(next)
    setStep(4)
  }

  const goBack = () => {
    if (step === 4) setStep(3)
    else if (step === 3) setStep(selectedCategory?.niches.length ? 2 : 1)
    else if (step === 2) setStep(1)
  }

  const options = step === 1 ? categories.map((item) => item.label) : step === 2 ? selectedCategory?.niches ?? [] : objectives

  return (
    <section id="selector" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">Encontrá tu solución</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Empecemos por entender tu negocio.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Elegí la opción que mejor represente tu actividad y te ayudamos a encontrar el camino más adecuado.</p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7 md:p-8">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-5">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {["Categoría", "Nicho", "Objetivo", "Recomendación"].map((label, index) => (
                <span key={label} className={index + 1 <= step ? "text-varekta-blue dark:text-varekta-electric" : undefined}>
                  {String(index + 1).padStart(2, "0")} {label}{index < 3 ? " ·" : ""}
                </span>
              ))}
            </div>
            {step > 1 && (
              <button type="button" onClick={goBack} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Volver
              </button>
            )}
          </div>

          {step < 4 ? (
            <div>
              <p className="mb-5 font-display text-xl font-bold sm:text-2xl">
                {step === 1 ? "¿En qué categoría está tu negocio?" : step === 2 ? "¿Qué tipo de negocio es?" : "¿Qué querés lograr?"}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {options.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => step === 1 ? chooseCategory(option) : step === 2 ? chooseNiche(option) : chooseObjective(option)}
                    className="group flex min-h-16 items-center justify-between rounded-xl border border-border bg-background px-5 py-4 text-left text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-varekta-blue/40 hover:shadow-sm dark:hover:border-varekta-electric/50"
                  >
                    <span>{option}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-varekta-electric/40 bg-varekta-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-varekta-blue dark:text-varekta-electric">
                  <Check className="h-3.5 w-3.5" /> Recomendación
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">{context.recommendation}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  {context.recommendation === "Sistema Web de Captación"
                    ? "Por el tipo de negocio y el objetivo elegido, esta es la solución formalizada actualmente por VAREKTA para clínicas odontológicas."
                    : "Todavía no formalizamos un paquete estándar para este caso. El siguiente paso es entender el contexto y definir la solución adecuada sin forzar un producto que quizás no corresponda."}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {context.category && <span className="rounded-full border border-border px-3 py-1.5">{context.category}</span>}
                  {context.niche && <span className="rounded-full border border-border px-3 py-1.5">{context.niche}</span>}
                  {context.objective && <span className="rounded-full border border-border px-3 py-1.5">{context.objective}</span>}
                </div>
              </div>
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-lg bg-varekta-blue px-6 py-3.5 text-sm font-semibold text-varekta-white transition-transform hover:-translate-y-0.5 dark:bg-varekta-white dark:text-varekta-blue">
                Quiero hablar sobre mi proyecto <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
