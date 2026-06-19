export const siteConfig = {
  name: "Casey Kriutzfield",
  logo: {
    first: "casey",
    last: "kriutzfield",
  },
  title: "Artificial Intelligence Consultant",
  tagline: "Generally Awesome. Also into aeronautics, economics, and other -ics'.",
  location: "Charlotte, NC",
  education: "University of Nebraska, Lincoln",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Certifications", href: "#certifications" },
    { label: "Articles", href: "#articles" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/caseykriutzfield",
    github: "https://github.com/ckriutz",
    twitter: "https://twitter.com/ckriutzfield",
  },
  footer: {
    description:
      "From AI consulting to software delivery, I help turn ideas into practical systems, clear roadmaps, and useful products.",
    contact: {
      label: "Let's Talk",
      href: "#contact",
    },
    resources: [
      {
        label: "Resume",
        href: "#home",
        external: false,
      },
      {
        label: "GitHub",
        href: "https://github.com/ckriutz",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/caseykriutzfield",
        external: true,
      },
    ],
  },
}

export type SiteConfig = typeof siteConfig
