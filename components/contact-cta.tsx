"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  SELECTOR_CONTEXT_EVENT,
  SELECTOR_CONTEXT_KEY,
  buildProjectMessage,
  buildWhatsAppHref,
  type SelectorContext,
} from "@/lib/contact"

export function ContactCta() {
  const [context, setContext] = useState<SelectorContext | null>(null)

  useEffect(() => {
    const read = () => {
      const raw = window.localStorage.getItem(SELECTOR_CONTEXT_KEY)
      if (!raw) {
        setContext(null)
        return
      }
      try {
        setContext(JSON.parse(raw) as SelectorContext)
      } catch {
        setContext(null)
      }
    }

    read()
    const handler = (event: Event) => {
      const custom = event as CustomEvent<SelectorContext>
      setContext(custom.detail ?? null)
    }
    window.addEventListener(SELECTOR_CONTEXT_EVENT, handler)
    return () => window.removeEventListener(SELECTOR_CONTEXT_EVENT, handler)
  }, [])

  const whatsappHref = useMemo(() => buildWhatsAppHref(buildProjectMessage(context)), [context])

  return (
    <section id="contacto" className="border-b border-[#22303d] bg-varekta-blue text-varekta-white">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-electric">Hablemos</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">¿Tenés un proyecto en mente? Empecemos por entenderlo.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">Contanos qué querés resolver. No necesitás llegar con la solución definida: podemos ayudarte a entender el contexto y determinar cuál es el siguiente paso más adecuado.</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-varekta-electric px-6 py-3.5 text-sm font-semibold text-varekta-blue transition-transform hover:-translate-y-0.5">
              Hablar con VAREKTA <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#selector" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5">Encontrar mi solución</a>
          </div>

          {context?.objective && (
            <p className="mx-auto mt-5 max-w-xl text-xs leading-5 text-slate-300">Tu selección se incluirá automáticamente como contexto inicial en WhatsApp.</p>
          )}

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-3 sm:text-center">
            {["01 Contexto", "02 Conversación", "03 Diagnóstico"].map((item, index) => (
              <div key={item} className="relative rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
                {item}
                {index < 2 && <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-varekta-electric sm:block" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
