import { Calendar, ExternalLink, Newspaper } from "lucide-react"

interface Article {
  title: string
  description: string
  source: string
  date: string
  href: string
  image?: string
}

const featuredArticle: Article = {
  title: "The Agentic Fantasy Football Experiment",
  description:
    "Surely AI Agents can play fantasy football, right? What if I selected 10 different AI models and then had them compete together in a league? I built a league so I can find out.",
  source: "Substack",
  date: "2026",
  href: "https://indefinitec.substack.com/p/the-agentic-fantasy-football-experiment?r=1rfmq1&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  image: "/images/agentic-fantasy-football.jpg",
}

const articles: Article[] = [
  {
    title: "Container? Why not App Services?",
    description:
      "A walkthrough on putting containers into Azure App Services — when to choose App Services over other container hosting options.",
    source: "Microsoft DevBlogs",
    date: "2019",
    href: "https://devblogs.microsoft.com/premier-developer/container-why-not-app-services/",
  },
  {
    title: "How Microsoft Tracks Santa",
    description:
      "A behind-the-scenes look at how Microsoft builds the Santa tracking experience — architecture, scale, and a lot of holiday cheer.",
    source: "Microsoft DevBlogs",
    date: "2019",
    href: "https://devblogs.microsoft.com/premier-developer/how-microsoft-tracks-santa/",
  },
]

function FeaturedArticleCard({ title, description, source, date, href, image }: Article) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${title} — ${description}`}
      className="group mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:mx-0 md:max-w-none"
    >
      <div className="relative w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Newspaper className="size-3.5" />
            {source}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {date}
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
          <ExternalLink className="size-4" />
          View
        </span>
      </div>
    </a>
  )
}

function ArticleCard({ title, description, source, date, href }: Article) {
  return (
    <div className="group flex flex-1 flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted">
            <Newspaper className="size-5 text-primary" />
          </div>
          <h3 className="text-lg font-bold leading-snug text-foreground sm:text-xl">
            {title}
          </h3>
        </div>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Newspaper className="size-3.5" />
            {source}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {date}
          </span>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ExternalLink className="size-4" />
          View
        </a>
      </div>
    </div>
  )
}

export function Articles() {
  return (
    <section
      id="articles"
      className="scroll-mt-24 border-t border-border/60 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Articles
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Published writing
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          There aren't a lot, but the ones I've had published are here.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-[minmax(0,320px)_1fr] lg:grid-cols-[minmax(0,360px)_1fr]">
          <FeaturedArticleCard {...featuredArticle} />

          <div className="flex flex-col gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
