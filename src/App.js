import About from './About';
import './App.css';
import Career from './Career';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>

    <section className="App">
   <BrowserRouter>
      <Navbar />
      <Home />
      <Career />
      <About />
      <Contact />
   </BrowserRouter>

      {/* <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/career' Component={Career} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/contact' Component={Contact} />
        </Routes> */}
    </section>
    // </Router>
  );
}

export default App;
