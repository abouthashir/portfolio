import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Reveal from "./components/Reveal"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="mx-auto max-w-290 px-4 pb-16 md:px-16">
      <Header name="Hashir A" />
      <main className="flex flex-col gap-24">
        <Hero
          name="Hashir A"
          intro="Full-Stack Developer focused on building reliable applications, scalable architectures, and high-performance digital solutions."
        />
        <Reveal>
          <About />
        </Reveal>
        <hr className="border-border" />
        <Reveal>
          <Skills />
        </Reveal>
        <hr className="border-border" />
        <Reveal>
          <Projects />
        </Reveal>
        <hr className="border-border" />
        <Reveal>
          <Contact />
        </Reveal>
        <hr className="border-border" />
      </main>
    </div>
  )
}

export default App