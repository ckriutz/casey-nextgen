import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Certifications } from "@/components/certifications"
import { Articles } from "@/components/articles"
import { Footer } from "@/components/footer"

const sectionStubs = [
  {
    id: "about",
    eyebrow: "About",
    title: "A quick introduction",
    body:
      "This section will become the main overview of who Casey is, what he focuses on, and the kinds of consulting work he does best. For now, this placeholder gives the page enough depth to preview spacing, typography, and how the single-page navigation feels in practice.",
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Start a conversation",
    body:
      "This block will eventually become your real contact area with email, social links, and a clear call to action. For now, it shows how the final section anchors into place when someone clicks Contact or the Let's Talk button in the navigation.",
  },
] as const

function SectionStub({
  id,
  eyebrow,
  title,
  body,
}: (typeof sectionStubs)[number]) {
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
  const beforeArticles = sectionStubs.filter((s) => s.id === "about")
  const afterArticles = sectionStubs.filter((s) => s.id === "contact")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        {beforeArticles.map((section) => (
          <SectionStub key={section.id} {...section} />
        ))}
        <Certifications />
        <Articles />
        {afterArticles.map((section) => (
          <SectionStub key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default App
