import { Briefcase, Cloud, GraduationCap } from "lucide-react"

const highlights = [
  {
    Icon: Briefcase,
    title: "Enterprise experience",
    body: "Fortune 500 companies and 15+ years at Microsoft.",
  },
  {
    Icon: Cloud,
    title: "Cloud & on-premises",
    body: "Planning, building, deploying, and supporting quality solutions.",
  },
  {
    Icon: GraduationCap,
    title: "Business-minded",
    body: "MBA from the University of Nebraska–Lincoln, 2021.",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          About
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A quick introduction
        </h2>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_40%,oklch(0.92_0.04_188)_0%,transparent_70%)]"
              aria-hidden="true"
            />
            <img
              src="/images/casey-toon-1.png"
              alt="Casey Kriutzfield"
              className="aspect-square w-full rounded-3xl border border-border bg-card object-cover shadow-sm"
            />
          </div>

          {/* Copy */}
          <div>
            <p className="text-lg leading-8 text-muted-foreground">
              I'm an Artificial Intelligence Consultant based in Charlotte, NC.
              I've worked with several Fortune 500 companies, and since 2010 I've
              called Microsoft home — providing advice, code samples, and deep
              technical experience that help organizations plan, build, deploy,
              and support quality solutions across the cloud and on-premises.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              While much of my work lives in deep technical challenges, I keep a
              strong focus on the business value behind every project, drawing on
              the MBA I earned from the University of Nebraska–Lincoln in 2021.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {highlights.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
