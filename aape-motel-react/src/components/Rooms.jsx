import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBed, FaUsers, FaWifi, FaCoffee, FaTv, FaSnowflake } from 'react-icons/fa';
import './Rooms.css';

const Rooms = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rooms = [
    {
      id: 1,
      name: 'Single Room',
      image: '/img/smallbed.jpeg',
      price: '$19',
      adults: 1,
      bedType: 'One Single Bed',
      description: 'Contemporary style with a splash of color, perfect for solo travelers seeking comfort and privacy.',
      amenities: ['Wifi', 'Breakfast', 'TV', 'AC', 'Self Contained']
    },
    {
      id: 2,
      name: 'Double Deluxe',
      image: '/img/dulex.jpeg',
      price: '$28',
      adults: 2,
      bedType: 'One King Size Bed',
      description: 'Spacious deluxe room with modern furnishings and luxury amenities for a comfortable stay.',
      amenities: ['Wifi', 'Breakfast', 'TV', 'AC', 'Mini Bar', 'Self Contained']
    },
    {
      id: 3,
      name: 'Twin Room',
      image: '/img/twin.jpeg',
      price: '$25',
      adults: 2,
      bedType: 'Two Single Beds',
      description: 'Spacious twin room with a relaxing living area, perfect for sharing with friends or family.',
      amenities: ['Wifi', 'Breakfast', 'TV', 'AC', 'Self Contained']
    },
    {
      id: 4,
      name: 'Double Room',
      image: '/img/bed.jpeg',
      price: '$24',
      adults: 2,
      bedType: 'One King Size Bed',
      description: 'Comfortable double room with elegant design and all essential amenities for couples.',
      amenities: ['Wifi', 'Breakfast', 'TV', 'AC', 'Self Contained']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      'Wifi': <FaWifi />,
      'Breakfast': <FaCoffee />,
      'TV': <FaTv />,
      'AC': <FaSnowflake />,
    };
    return icons[amenity] || null;
  };

  return (
    <section id="rooms" className="rooms-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Rooms & Suites</h2>
          <p className="section-subtitle">
            Experience luxury and comfort in our beautifully designed rooms
          </p>
          <p className="price-range">
            Our rooms range from <span className="highlight-price">$19 to $32</span> per night
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="rooms-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="room-image-container">
                <img src={room.image} alt={room.name} className="room-image" />
                <div className="room-overlay">
                  <motion.button
                    className="btn btn-primary view-details"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
                <div className="room-price-tag">
                  <span className="price">{room.price}</span>
                  <span className="period">/night</span>
                </div>
              </div>

              <div className="room-content">
                <h3 className="room-name">{room.name}</h3>
                
                <div className="room-info">
                  <div className="info-item">
                    <FaUsers />
                    <span>{room.adults} Adult{room.adults > 1 ? 's' : ''}</span>
                  </div>
                  <div className="info-item">
                    <FaBed />
                    <span>{room.bedType}</span>
                  </div>
                </div>

                <p className="room-description">{room.description}</p>

                <div className="room-amenities">
                  {room.amenities.map((amenity, idx) => (
                    <motion.div
                      key={idx}
                      className="amenity-badge"
                      whileHover={{ scale: 1.1 }}
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="btn btn-outline book-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="rooms-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>All rooms are fully equipped with state-of-the-art amenities</h3>
          <p>Including flat screen TV, in-room safe, plush towels and slippers, and high-speed WiFi</p>
          <motion.a
            href="/rooms"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Rooms
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="rooms-decoration">
        <motion.div
          className="deco-shape shape-1"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="deco-shape shape-2"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1]
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

export default Rooms;