import { Reveal } from "@/components/reveal"

const problems = [
  {
    n: "01",
    title: "Presencia fragmentada",
    body: "Información, servicios y canales de contacto distribuidos sin un recorrido claro para el usuario.",
  },
  {
    n: "02",
    title: "Fricción en la experiencia",
    body: "El visitante no entiende rápidamente qué ofrece el negocio, por qué debería elegirlo o cuál es el siguiente paso.",
  },
  {
    n: "03",
    title: "Digital sin un sistema",
    body: "Una web puede existir y verse bien, pero necesita estrategia, estructura, rendimiento y puntos de conversión para cumplir un objetivo comercial.",
  },
]

export function Problem() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-varekta-blue dark:text-varekta-electric">El problema</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Estar online no es lo mismo que estar preparado para convertir.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Una empresa puede tener web, redes y canales de contacto y aun así ofrecer una experiencia fragmentada, difícil de entender o sin un próximo paso claro. El problema no es simplemente estar o no estar online, sino cómo funciona todo el sistema digital alrededor del negocio.
            </p>
          </Reveal>

          <div className="divide-y divide-border border-y border-border">
            {problems.map((item, index) => (
              <Reveal key={item.n} delay={index * 90}>
                <article className="grid gap-4 py-7 sm:grid-cols-[64px_1fr] sm:py-8">
                  <span className="font-display text-sm font-bold text-varekta-blue/70 dark:text-varekta-electric">{item.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={180} className="mt-12 border-l-2 border-varekta-electric pl-5 sm:mt-16 sm:pl-7">
          <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">La solución no es agregar más tecnología. Es diseñar mejor el sistema.</p>
        </Reveal>
      </div>
    </section>
  )
}
