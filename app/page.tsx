import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SolutionSelector } from "@/components/solution-selector"
import { Problem } from "@/components/problem"
import { ValueProposition } from "@/components/value-proposition"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Projects } from "@/components/projects"
import { Protocol } from "@/components/protocol"
import { AboutVarekta } from "@/components/about-varekta"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <SolutionSelector />
        <Problem />
        <ValueProposition />
        <Services />
        <Benefits />
        <Projects />
        <Protocol />
        <AboutVarekta />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
