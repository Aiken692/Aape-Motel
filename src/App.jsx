import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle hash navigation
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rooms" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
