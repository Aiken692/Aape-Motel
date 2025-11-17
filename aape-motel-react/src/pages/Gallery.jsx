import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { id: 1, src: '/img/Aape.jpeg', category: 'exterior', title: 'Hotel Exterior' },
    { id: 2, src: '/img/bed.jpeg', category: 'rooms', title: 'Luxury Bedroom' },
    { id: 3, src: '/img/bathroom.jpeg', category: 'rooms', title: 'Modern Bathroom' },
    { id: 4, src: '/img/dulex.jpeg', category: 'rooms', title: 'Deluxe Suite' },
    { id: 5, src: '/img/twin.jpeg', category: 'rooms', title: 'Twin Room' },
    { id: 6, src: '/img/sing.jpeg', category: 'rooms', title: 'Single Room' },
    { id: 7, src: '/img/buffet.jpg', category: 'restaurant', title: 'Buffet Spread' },
    { id: 8, src: '/img/fish.jpg', category: 'restaurant', title: 'Fresh Seafood' },
    { id: 9, src: '/img/ribs.jpg', category: 'restaurant', title: 'BBQ Ribs' },
    { id: 10, src: '/img/pizza.jpg', category: 'restaurant', title: 'Artisan Pizza' },
    { id: 11, src: '/img/chicken.jpg', category: 'restaurant', title: 'Grilled Chicken' },
    { id: 12, src: '/img/breakfast.jpeg', category: 'restaurant', title: 'Breakfast' },
    { id: 13, src: '/img/view.jpeg', category: 'exterior', title: 'Scenic View' },
    { id: 14, src: '/img/whole.jpeg', category: 'rooms', title: 'Room Overview' },
    { id: 15, src: '/img/key.jpeg', category: 'facilities', title: 'Room Keys' },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'facilities', name: 'Facilities' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <motion.div
        className="gallery-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore the beauty and elegance of Aape Motel
          </motion.p>
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <div className="container">
        <motion.div
          className="gallery-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery-grid"
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-item-overlay">
                  <h3>{image.title}</h3>
                  <p>Click to view</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.button
              className="lightbox-close"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>

            <motion.button
              className="lightbox-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>

            <motion.button
              className="lightbox-nav next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>

            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;