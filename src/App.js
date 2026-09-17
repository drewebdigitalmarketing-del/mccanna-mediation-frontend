import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/services';
import ScrollToTop from './components/totop';
import Approach from './pages/approach';
import Landing from './pages/landing';
import Mediation from './pages/mediation';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <ScrollToTop />

      <Routes>
        <Route path='/' element={ <Landing/> } />
        <Route path='/services' element={ <Services/> } />
        <Route path='/approach' element={ <Approach/> } />
        <Route path='/mediation' element={ <Mediation/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/contact' element={ <Contact/> } />

      </Routes>
        
      </BrowserRouter>

    
    </div>
  );
}

export default App;
