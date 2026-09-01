export function Logo() {
  return (
    <a
      href="#top"
      className="inline-flex items-center"
      aria-label="VAREKTA — volver al inicio"
    >
      <picture aria-hidden="true">
        <source
          media="(prefers-color-scheme: dark)"
          srcSet="/brand/VAREKTA_Imagotipo_Negativo.svg"
        />
        <img
          src="/brand/VAREKTA_Imagotipo_Master.svg"
          alt=""
          className="h-8 w-auto"
        />
      </picture>
    </a>
  )
}
