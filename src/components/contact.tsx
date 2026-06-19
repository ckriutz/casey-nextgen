import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons"
import { siteConfig } from "@/config/site"

const channels = [
  {
    label: "LinkedIn",
    description: "Best place to connect professionally",
    handle: "in/caseykriutzfield",
    href: siteConfig.social.linkedin,
    Icon: LinkedinIcon,
    featured: true,
  },
  {
    label: "Twitter / X",
    description: "Say hi or follow along",
    handle: "@ckriutzfield",
    href: siteConfig.social.twitter,
    Icon: XIcon,
    featured: true,
  },
  {
    label: "GitHub",
    description: "See what I'm building",
    handle: "@ckriutz",
    href: siteConfig.social.github,
    Icon: GithubIcon,
    featured: false,
  },
]

export function Contact() {
  const email = "casey.kriutzfield@live.com"

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's start a conversation
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Whether you're tackling a tough AI challenge, exploring what's
            possible, or just want to talk shop, I'd love to hear from you. The
            quickest way to reach me is on LinkedIn or X — drop a message and
            we'll go from there.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {channels.map(({ label, description, handle, href, Icon, featured }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className={
                "group flex flex-col items-center rounded-2xl border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md " +
                (featured
                  ? "border-primary/30 hover:border-primary/50"
                  : "border-border hover:border-primary/30")
              }
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              <p className="mt-3 text-sm font-medium text-primary">{handle}</p>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach me directly at{" "}
            <a
              href={`mailto:${email}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {email}
            </a>
            .
          </p>
          <Button size="lg" className="mt-6 gap-2" asChild>
            <a href={`mailto:${email}`}>
              <Mail className="size-4" />
              Send an email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
