import { Route, Routes } from "react-router-dom"
import { DarkModeProvider } from "./components/DarkModeContext"
import ParticleBackground from "./components/ParticleBackground"
import Header from "./components/Header"
import Hero from "./pages/Hero"
import Projects from "./pages/Projects"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Mountain from "./components/Mountain"
import Footer from "./components/Footer"

function App() {
  return (
    <DarkModeProvider>
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </DarkModeProvider>
  )
}

export default App
