export function Logo() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-3"
      aria-label="VAREKTA — volver al inicio"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-varekta-blue/15 bg-varekta-blue text-[10px] font-semibold tracking-[0.08em] text-varekta-white dark:border-white/15 dark:bg-varekta-white dark:text-varekta-blue"
        aria-hidden="true"
        title="Placeholder: reemplazar por el isotipo SVG maestro de VAREKTA"
      >
        V
      </span>
      <span className="font-display text-[19px] font-bold tracking-[-0.03em] text-foreground">
        VAREKTA
      </span>
    </a>
  )
}
