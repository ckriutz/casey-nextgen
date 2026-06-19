import { useState } from "react"
import { FileText, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-sm font-medium tracking-wide">
          <span className="h-4 w-px bg-primary" aria-hidden="true" />
          <span className="text-muted-foreground">{siteConfig.logo.first}</span>
          <span className="text-primary" aria-hidden="true">
            &middot;
          </span>
          <span className="font-semibold text-foreground">{siteConfig.logo.last}</span>
        </a>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {siteConfig.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                i === 0
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
            <FileText className="size-4" />
            Resume
          </Button>
          <Button size="sm" className="gap-2" asChild>
            <a href="#contact">
              <Mail className="size-4" />
              Let&apos;s Talk
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="justify-start gap-2">
                <FileText className="size-4" />
                Resume
              </Button>
              <Button size="sm" className="justify-start gap-2" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Mail className="size-4" />
                  Let&apos;s Talk
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
