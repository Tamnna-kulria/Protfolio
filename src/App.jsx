import Navbar from "./Navbar";
import Hero from "./First";
import About from "./About";
import Skills from "./Skill";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import './index.css'

function App() {
  return (
    <>
       <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education/>
      <Contact />
      <Footer />
    </>
  )
}

export default App