import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
