import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Plot ###, Namwendwa Rd, Kamuli District'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: ['+256 706 700 953', '0393 242 882', '0702 943 456']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@aapemotel.com'
    },
    {
      icon: <FaClock />,
      title: 'Hours',
      content: 'Always Open 24/7'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Restaurant', path: '/#restaurant' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/#about' },
    { name: 'Contact', path: '/#contact' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', name: 'Facebook' },
    { icon: <FaTwitter />, url: '#', name: 'Twitter' },
    { icon: <FaInstagram />, url: '#', name: 'Instagram' },
    { icon: <FaLinkedin />, url: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="footer" id="contact">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="newsletter-text">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get exclusive offers and updates delivered to your inbox</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="footer-title">
                <span className="logo-aape">Aape</span>
                <span className="logo-motel">Motel</span>
              </h3>
              <p className="footer-description">
                Aape Motel is situated in the heart of Kamuli District with Fine Dining Restaurant, 
                Affordable Luxury Rooms, and Night Bar. Ideal for business and holiday travelers.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="column-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={link.path}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="column-title">Contact Info</h4>
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <h5>{item.title}</h5>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, idx) => (
                          <p key={idx}>{line}</p>
                        ))
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map/Location */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="column-title">Location</h4>
              <div className="map-placeholder">
                <img src="/img/view.jpeg" alt="Aape Motel Location" className="location-image" />
                <div className="map-overlay">
                  <FaMapMarkerAlt />
                  <span>Kamuli District</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Aape Motel. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Service</a>
              <span>|</span>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;