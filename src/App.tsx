import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="mx-auto max-w-290 px-4 md:px-16">
      <Header name="Hashir A" />
      <main>
        <Hero
          name="Hashir A"
          intro="Full-Stack Developer focused on building reliable applications, scalable architectures, and high-performance digital solutions."
        />

      </main>
    </div>
  )
}

export default App