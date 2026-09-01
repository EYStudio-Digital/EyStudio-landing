export function Logo() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-3"
      aria-label="VAREKTA — volver al inicio"
    >
      <span className="flex h-8 w-10 shrink-0 items-center justify-center" aria-hidden="true">
        <img
          src="/brand/VAREKTA_Isotipo_Master.svg"
          alt=""
          className="h-8 w-auto dark:[filter:brightness(0)_invert(1)]"
        />
      </span>
      <span className="font-display text-[19px] font-bold tracking-[-0.03em] text-foreground">
        VAREKTA
      </span>
    </a>
  )
}
