import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Certifications } from "@/components/certifications"
import { Articles } from "@/components/articles"
import { Footer } from "@/components/footer"

const contactStub = {
  id: "contact",
  eyebrow: "Contact",
  title: "Start a conversation",
  body:
    "This block will eventually become your real contact area with email, social links, and a clear call to action. For now, it shows how the final section anchors into place when someone clicks Contact or the Let's Talk button in the navigation.",
} as const

function SectionStub({
  id,
  eyebrow,
  title,
  body,
}: typeof contactStub) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card/80 p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Articles />
        <SectionStub {...contactStub} />
      </main>
      <Footer />
    </div>
  )
}

export default App
