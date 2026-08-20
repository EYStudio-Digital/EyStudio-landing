import Image from "next/image"

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="EYStudio inicio">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary p-1.5">
        <Image
          src="/eystudio-isotipo.png"
          alt="Isotipo de EYStudio"
          width={36}
          height={36}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        EY<span className="font-normal text-muted-foreground">Studio</span>
      </span>
    </a>
  )
}
