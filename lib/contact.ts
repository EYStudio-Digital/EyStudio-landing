export const WHATSAPP_NUMBER = "5491157653009"

export type SelectorContext = {
  category?: string
  niche?: string
  objective?: string
  recommendation?: string
}

export const SELECTOR_CONTEXT_KEY = "varekta-selector-context"
export const SELECTOR_CONTEXT_EVENT = "varekta:selector-context"

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildProjectMessage(context?: SelectorContext | null) {
  if (!context || (!context.category && !context.objective && !context.recommendation)) {
    return "Hola, estuve viendo la web de VAREKTA y quisiera hablar sobre un proyecto."
  }

  const lines = ["Hola, estuve viendo la web de VAREKTA."]

  if (context.category) lines.push(`Mi categoría: ${context.category}`)
  if (context.niche) lines.push(`Mi negocio: ${context.niche}`)
  if (context.objective) lines.push(`Mi objetivo: ${context.objective}`)
  if (context.recommendation) lines.push(`Me recomendaron: ${context.recommendation}`)

  lines.push("Quisiera hablar sobre mi proyecto.")

  return lines.join("\n\n")
}
