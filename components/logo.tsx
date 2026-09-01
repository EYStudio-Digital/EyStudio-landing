type LogoProps = {
  variant?: "auto" | "negative"
}

export function Logo({ variant = "auto" }: LogoProps) {
  const negative = variant === "negative"

  return (
    <a
      href="#top"
      className="inline-flex items-center"
      aria-label="VAREKTA — volver al inicio"
    >
      <span className="inline-flex items-center gap-[6px] whitespace-nowrap" aria-hidden="true">
        {negative ? (
          <img
            src="/brand/VAREKTA_Isotipo_Negativo.svg"
            alt=""
            className="h-8 w-auto shrink-0"
          />
        ) : (
          <>
            <img
              src="/brand/VAREKTA_Isotipo_Master.svg"
              alt=""
              className="h-8 w-auto shrink-0 dark:hidden"
            />
            <img
              src="/brand/VAREKTA_Isotipo_Negativo.svg"
              alt=""
              className="hidden h-8 w-auto shrink-0 dark:block"
            />
          </>
        )}
        <span
          className={`font-display text-[15px] font-bold leading-none tracking-[-0.03em] ${
            negative ? "text-varekta-white" : "text-varekta-graphite dark:text-varekta-white"
          }`}
        >
          VAREKTA
        </span>
      </span>
    </a>
  )
}
