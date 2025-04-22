import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HeadBar from './components/HeadBar'
import ParticlesBackground  from './components/ParticlesBackground'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contacts from './components/Contacts'


function App() {

  return (
    <div>
      <ParticlesBackground />
      <HeadBar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Contacts />
      
    </div>
    /*<div>
      <Navbar />
      <Hero />
      <About />
    </div>*/
    
  );
}

export default App
