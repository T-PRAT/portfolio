import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ParticleBackground from "./components/ParticleBackground"
import Projects from "./components/Projects"
import NotFound from "./components/NotFound"
import { DarkModeProvider } from "./components/DarkModeContext"

function App() {
  return (
    <DarkModeProvider>
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </DarkModeProvider>
  )
}

export default App
