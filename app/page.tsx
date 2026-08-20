import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { SolutionFlow } from "@/components/solution-flow"
import { Services } from "@/components/services"
import { Protocol } from "@/components/protocol"
import { VisualContext } from "@/components/visual-context"
import { Differentiators } from "@/components/differentiators"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <SolutionFlow />
        <Services />
        <Protocol />
        <VisualContext />
        <Differentiators />
      </main>
      <SiteFooter />
    </>
  )
}
