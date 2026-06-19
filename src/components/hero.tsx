import { MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons"
import { siteConfig } from "@/config/site"

const socials = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "Twitter / X", href: siteConfig.social.twitter, Icon: XIcon },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.96_0.02_188)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mt-5 text-2xl font-bold text-primary sm:text-3xl">
          {siteConfig.title}
        </p>

        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          {siteConfig.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" />
            {siteConfig.location}
          </span>
          <span className="text-primary" aria-hidden="true">
            &middot;
          </span>
          <span>{siteConfig.education}</span>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
