type LogoProps = {
  variant?: "auto" | "negative"
}

type ImagotypeProps = {
  negative?: boolean
  className?: string
}

function Imagotype({ negative = false, className = "" }: ImagotypeProps) {
  const structural = negative ? "#F8FAFC" : "#111418"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 700 185"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="24,44 52,44 107,105 90,129" fill={structural} />
      <polygon points="187,15 215,12 151,110 123,111" fill="#25E6C8" />
      <polygon points="113,124 141,124 115,164 99,142" fill={structural} />
      <text
        x="257"
        y="122"
        fill={structural}
        fontSize="86"
        fontWeight="700"
        letterSpacing="-2.58"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        VAREKTA
      </text>
    </svg>
  )
}

export function Logo({ variant = "auto" }: LogoProps) {
  const negative = variant === "negative"

  return (
    <a
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label="VAREKTA — volver al inicio"
    >
      {negative ? (
        <Imagotype negative className="h-8 w-auto" />
      ) : (
        <>
          <Imagotype className="h-8 w-auto dark:hidden" />
          <Imagotype negative className="hidden h-8 w-auto dark:block" />
        </>
      )}
    </a>
  )
}
