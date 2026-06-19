import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
