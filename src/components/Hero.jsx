import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      {/* Parallax Background */}
      <div 
        className="hero-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Animated Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              opacity: 0,
              y: Math.random() * 100,
              x: Math.random() * 100
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -100, -200],
              x: Math.random() * 50 - 25
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Welcome to <span className="highlight">Aape</span> Motel
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Come as a Guest, Leave as a Friend
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Experience luxury and comfort in the heart of Kamuli District
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <a href="#rooms" className="btn btn-primary">
              Explore Rooms
            </a>
            <a href="#contact" className="btn btn-outline">
              Book Now
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Features */}
        <motion.div 
          className="floating-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🏨</div>
            <h3>Luxury Rooms</h3>
            <p>Premium comfort</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🍽️</div>
            <h3>Fine Dining</h3>
            <p>Exquisite cuisine</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🌟</div>
            <h3>24/7 Service</h3>
            <p>Always available</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FaChevronDown />
      </motion.div>

      {/* Decorative Elements */}
      <div className="hero-decoration">
        <motion.div
          className="decoration-circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="decoration-circle circle-2"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;