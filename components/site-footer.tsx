import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
            Empecemos
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-primary-foreground/90 md:text-2xl">
            Estructuramos la presencia digital de su clínica para captar leads, escalar consultas y posicionar su marca
            con credibilidad.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/5491157653009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a EYStudio por WhatsApp"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.24 8.24Z" />
              </svg>
              Quiero atraer más clientes
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/50 sm:flex-row">
          <span className="flex items-center gap-2.5 font-display font-semibold tracking-tight text-primary-foreground/80">
            <Image
              src="/eystudio-isotipo.png"
              alt="Isotipo de EYStudio"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            EY<span className="font-normal">Studio</span>
          </span>
          <span>© {new Date().getFullYear()} EYStudio. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
