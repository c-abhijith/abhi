import './App.css';
import About from './components/About/About';
import { Certificates } from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Project } from './components/Project/Project';
import Qulification from './components/Qulifications/Qulification';
import Skills from './components/Skills/Skills';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        {/* <Skills/> */}
        <Project/>
        <Qulification/>
        <Certificates/>
        {/* <Contact/> */}
        <Footer/>
      </main>
      <ScrollUp/>
    </div>
  );
}

export default App;
