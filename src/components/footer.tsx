import { ArrowUp, ExternalLink, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons"
import { siteConfig } from "@/config/site"

const socials = [
  { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: "Twitter / X", href: siteConfig.social.twitter, Icon: XIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2 text-sm font-medium tracking-wide">
            <span className="h-4 w-px bg-primary" aria-hidden="true" />
            <span className="text-muted-foreground">{siteConfig.logo.first}</span>
            <span className="text-primary" aria-hidden="true">
              &middot;
            </span>
            <span className="font-semibold text-foreground">{siteConfig.logo.last}</span>
          </a>
          <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
            {siteConfig.footer.description}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-base text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {siteConfig.location}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Quick Links</h2>
          <nav className="mt-6 flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Resources</h2>
          <div className="mt-6 flex flex-col gap-4">
            {siteConfig.footer.resources.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer noopener" : undefined}
                className="inline-flex items-center gap-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <span>{item.label}</span>
                {item.external ? <ExternalLink className="size-4" /> : null}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Get in Touch</h2>
          <a
            href={siteConfig.footer.contact.href}
            className="mt-6 inline-flex items-center gap-3 text-lg text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-5" />
            {siteConfig.footer.contact.label}
          </a>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex size-11 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-border/80 pt-8 text-center text-base text-muted-foreground">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
      </div>

      <Button
        size="icon-lg"
        className="fixed right-6 bottom-6 rounded-full shadow-lg"
        asChild
      >
        <a href="#home" aria-label="Back to top">
          <ArrowUp className="size-5" />
        </a>
      </Button>
    </footer>
  )
}
