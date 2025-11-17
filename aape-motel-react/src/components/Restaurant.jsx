import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronLeft, FaChevronRight, FaUtensils, FaCocktail } from 'react-icons/fa';
import './Restaurant.css';

const Restaurant = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const menuItems = [
    {
      id: 1,
      name: 'Gourmet Buffet',
      image: '/img/buffet.jpg',
      category: 'Buffet',
      description: 'Experience our lavish buffet featuring international and local cuisines',
      price: 'From $15'
    },
    {
      id: 2,
      name: 'Fresh Seafood',
      image: '/img/fish.jpg',
      category: 'Main Course',
      description: 'Freshly caught fish prepared with exotic spices and herbs',
      price: '$22'
    },
    {
      id: 3,
      name: 'BBQ Ribs',
      image: '/img/ribs.jpg',
      category: 'Main Course',
      description: 'Tender, slow-cooked ribs with our signature BBQ sauce',
      price: '$25'
    },
    {
      id: 4,
      name: 'Artisan Pizza',
      image: '/img/pizza.jpg',
      category: 'Italian',
      description: 'Wood-fired pizza with premium toppings and fresh mozzarella',
      price: '$18'
    },
    {
      id: 5,
      name: 'Crispy Fries',
      image: '/img/Fries.jpg',
      category: 'Sides',
      description: 'Golden, crispy fries seasoned to perfection',
      price: '$8'
    },
    {
      id: 6,
      name: 'Grilled Chicken',
      image: '/img/chicken.jpg',
      category: 'Main Course',
      description: 'Succulent grilled chicken with aromatic herbs',
      price: '$20'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(menuItems.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(menuItems.length / 3)) % Math.ceil(menuItems.length / 3));
  };

  const getVisibleItems = () => {
    const itemsPerSlide = 3;
    const start = currentSlide * itemsPerSlide;
    return menuItems.slice(start, start + itemsPerSlide);
  };

  return (
    <section id="restaurant" className="restaurant-section">
      {/* Background Image with Parallax */}
      <div className="restaurant-bg-parallax">
        <div className="restaurant-overlay"></div>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-icon">
            <FaUtensils />
          </div>
          <h2 className="section-title">Fine Dining Restaurant</h2>
          <p className="section-subtitle">
            Indulge in exquisite flavors from around the world
          </p>
        </motion.div>

        {/* Restaurant Features */}
        <motion.div
          className="restaurant-features"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🍽️</div>
            <h3>International Cuisine</h3>
            <p>Diverse menu featuring dishes from around the globe</p>
          </motion.div>

          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">👨‍🍳</div>
            <h3>Expert Chefs</h3>
            <p>Prepared by our award-winning culinary team</p>
          </motion.div>

          <motion.div
            className="feature-box"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🌟</div>
            <h3>Premium Quality</h3>
            <p>Only the finest ingredients for exceptional taste</p>
          </motion.div>
        </motion.div>

        {/* Menu Carousel */}
        <div className="menu-carousel">
          <h3 className="carousel-title">Our Signature Dishes</h3>
          
          <div className="carousel-container">
            <motion.button
              className="carousel-btn prev"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="carousel-content"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {getVisibleItems().map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="menu-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="menu-image-container">
                      <img src={item.image} alt={item.name} className="menu-image" />
                      <div className="menu-overlay">
                        <span className="category-badge">{item.category}</span>
                      </div>
                    </div>
                    <div className="menu-content">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="menu-footer">
                        <span className="price">{item.price}</span>
                        <motion.button
                          className="order-btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Order Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.button
              className="carousel-btn next"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {[...Array(Math.ceil(menuItems.length / 3))].map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Bar Section */}
        <motion.div
          className="bar-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bar-content">
            <div className="bar-icon">
              <FaCocktail />
            </div>
            <h3>Premium Bar & Lounge</h3>
            <p>Unwind with our selection of fine wines, craft cocktails, and premium spirits in our elegant bar lounge</p>
            <motion.button
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Drinks Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Dining Hours */}
        <motion.div
          className="dining-hours"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Dining Hours</h3>
          <div className="hours-grid">
            <div className="hours-item">
              <span className="meal-type">Breakfast</span>
              <span className="time">6:00 AM - 10:00 AM</span>
            </div>
            <div className="hours-item">
              <span className="meal-type">Lunch</span>
              <span className="time">12:00 PM - 3:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="meal-type">Dinner</span>
              <span className="time">6:00 PM - 11:00 PM</span>
            </div>
            <div className="hours-item">
              <span className="meal-type">Bar</span>
              <span className="time">5:00 PM - 2:00 AM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Restaurant;