import { ExternalLink } from "lucide-react"

interface Certification {
  title: string
  level: "Associate" | "Expert"
  badge: string
  href: string
}

const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    level: "Expert",
    badge: "/badges/expert.svg",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/",
  },
  {
    title: "Microsoft Certified: Azure AI Engineer Associate",
    level: "Associate",
    badge: "/badges/associate.svg",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    level: "Associate",
    badge: "/badges/associate.svg",
    href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
  },
]

function CertCard({ title, level, badge, href }: Certification) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md sm:p-8"
    >
      <img
        src={badge}
        alt={`${level} badge`}
        width={64}
        height={64}
        className="shrink-0"
      />

      <div className="flex flex-1 flex-col gap-2">
        <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
          {level}
        </span>
        <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-primary">
          <ExternalLink className="size-3.5" />
          View credential
        </span>
      </div>
    </a>
  )
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Certifications
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Credentials &amp; learning
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Current Microsoft Azure certifications — architecture, AI, and cloud administration.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}
