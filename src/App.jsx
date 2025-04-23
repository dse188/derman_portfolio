import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HeadBar from './components/HeadBar'
import ParticlesBackground from './components/ParticlesBackground'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import SuccessPage from './components/SuccessPage'; // or './pages/SuccessPage'

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <HeadBar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <AboutMe />
            <Experience />
            <Projects />
            <Contacts />
          </>
        } />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;