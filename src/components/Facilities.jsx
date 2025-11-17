import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBed, FaUtensils, FaPhone, FaParking, FaWifi, FaConciergeBell } from 'react-icons/fa';
import './Facilities.css';

const Facilities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const facilities = [
    {
      icon: <FaBed />,
      title: 'Luxury Rooms',
      description: 'Designed to inspire rest and relaxation with modern amenities and peaceful color tones.',
      image: '/img/bed.jpeg'
    },
    {
      icon: <FaUtensils />,
      title: 'Fine Dining',
      description: 'Exquisite meals from unique African cuisine to exotic international dishes and desserts.',
      image: '/img/buffet.jpg'
    },
    {
      icon: <FaPhone />,
      title: '24/7 Service',
      description: 'Round-the-clock assistance to ensure your comfort and satisfaction at all times.',
      image: '/img/whole.jpeg'
    },
    {
      icon: <FaParking />,
      title: 'Free Parking',
      description: 'Complimentary secure parking spaces available on a first-come, first-served basis.',
      image: '/img/view.jpeg'
    },
    {
      icon: <FaWifi />,
      title: 'High-Speed WiFi',
      description: 'Stay connected with fast and free WiFi available throughout the premises.',
      image: '/img/whole1.jpeg'
    },
    {
      icon: <FaConciergeBell />,
      title: 'Concierge Service',
      description: 'Personalized assistance for reservations, tours, and local recommendations.',
      image: '/img/bathroom.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="facilities-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Facilities & Services</h2>
          <p className="section-subtitle">
            Everything you need for a comfortable and memorable stay
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="facilities-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="facility-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="facility-image-wrapper">
                <img src={facility.image} alt={facility.title} className="facility-image" />
                <div className="facility-overlay">
                  <div className="facility-icon">
                    {facility.icon}
                  </div>
                </div>
              </div>
              <div className="facility-content">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Banner */}
        <motion.div
          className="features-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="banner-content">
            <h3>Premium Amenities in Every Room</h3>
            <div className="amenities-list">
              <motion.div 
                className="amenity-item"
                whileHover={{ scale: 1.1 }}
              >
                <FaBed />
                <span>King-Size Beds</span>
              </motion.div>
              <motion.div 
                className="amenity-item"
                whileHover={{ scale: 1.1 }}
              >
                <FaWifi />
                <span>Free WiFi</span>
              </motion.div>
              <motion.div 
                className="amenity-item"
                whileHover={{ scale: 1.1 }}
              >
                <span className="amenity-icon">📺</span>
                <span>Flat Screen TV</span>
              </motion.div>
              <motion.div 
                className="amenity-item"
                whileHover={{ scale: 1.1 }}
              >
                <span className="amenity-icon">❄️</span>
                <span>Air Conditioning</span>
              </motion.div>
              <motion.div 
                className="amenity-item"
                whileHover={{ scale: 1.1 }}
              >
                <span className="amenity-icon">🔒</span>
                <span>In-Room Safe</span>
              </motion.div>
              <motion.div 
                className="amenity-item"
                whileHover={{ scale: 1.1 }}
              >
                <span className="amenity-icon">🛁</span>
                <span>Luxury Bathroom</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="facilities-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Experience Luxury Like Never Before</h3>
          <p>Book your stay today and enjoy world-class facilities and services</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Your Room
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="facilities-decoration">
        <motion.div
          className="deco-circle circle-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="deco-circle circle-2"
          animate={{
            scale: [1, 1.3, 1],
            rotate: -360
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Facilities;