import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Results from './Pages/Results';
import Sticky from './components/Sticky';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App" style={{ maxWidth: '100%', margin: 0, padding: 0 }}>
        <Header/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Sticky/>
      </div>
    </Router>
  );
}

export default App;
