import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Fotter from './components/Footer'
function App() {
  return (
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Fotter/>
    </>
  );
}

export default App;
