import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Certifications } from "@/components/certifications"
import { Articles } from "@/components/articles"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
