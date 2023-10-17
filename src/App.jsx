import { Route, Routes } from "react-router-dom"
import { DarkModeProvider } from "./components/DarkModeContext"
import ParticleBackground from "./components/ParticleBackground"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import ProjectsList from "./pages/ProjectsList"
import Project from "./pages/Project"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <DarkModeProvider>
      <ParticleBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path=":id" element={<Project />} />
        <Route path="/projects">
          <Route index element={<ProjectsList />} />
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </DarkModeProvider>
  )
}

export default App
