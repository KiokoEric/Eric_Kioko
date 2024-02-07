import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Paths from './Components/Paths/Paths';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import Itrack from './Pages/Itrack/Itrack';
import Cook from './Pages/Cook/Cook';
import BetterHealth from './Pages/BetterHealth/BetterHealth';
import EBudget from './Pages/EBudget/EBudget';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <article>
        <section>
          <About />
        </section>
        <section>
          <Paths />
          <Routes>
            <Route path='/' element={ <Projects /> } />
            <Route path="/Skills" element={ <Skills /> } />
            <Route path="/Contact" element={ <Contact /> } />
            <Route path='/Itrack' element={<Itrack />} />
            <Route path='/Cook' element={ <Cook /> } />
            <Route path='/BetterHealth' element={ <BetterHealth />} />
            <Route path='/EBudget' element={<EBudget /> } />
          </Routes>
        </section>
      </article>
      <article>
      </article>
      <Footer />
    </div>

  );
}

export default App;
