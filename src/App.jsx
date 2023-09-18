import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./pages/Hero"
import ParticleBackground from "./components/ParticleBackground"
import Projects from "./pages/Projects"
import NotFound from "./pages/NotFound"
import { DarkModeProvider } from "./components/DarkModeContext"
import Mountain from "./components/Mountain"

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Mountain />
      <ParticleBackground />
      <Footer />
    </DarkModeProvider>
  )
}

export default App
