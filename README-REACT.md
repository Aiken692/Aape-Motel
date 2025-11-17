# Aape Motel - Premium React Website

A luxurious, Dubai-level motel website built with React, featuring stunning animations, modern design, and responsive layouts.

## 🌟 Features

- **Modern Design**: Sleek, professional design inspired by luxury hotels
- **Smooth Animations**: Powered by Framer Motion for fluid, eye-catching transitions
- **Responsive Layout**: Fully optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: 
  - Animated navigation with scroll effects
  - Parallax hero section
  - Interactive room cards with hover effects
  - Restaurant carousel with image galleries
  - Masonry gallery with lightbox
  - Animated facilities showcase
- **Performance Optimized**: Fast loading with Vite build tool
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🚀 Technologies Used

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Advanced animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - Scroll-triggered animations

## 📦 Installation

1. Navigate to the project directory:
```bash
cd aape-motel-react
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
aape-motel-react/
├── public/
│   └── img/              # All images
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Rooms.jsx
│   │   ├── Restaurant.jsx
│   │   ├── Facilities.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── Gallery.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## 🎨 Key Sections

### Home Page
- **Hero Section**: Full-screen parallax background with animated text
- **Rooms & Suites**: Interactive cards showcasing different room types
- **Facilities**: Grid layout with hover effects
- **Restaurant**: Carousel with menu items and dining information

### Gallery Page
- **Masonry Layout**: Responsive grid with category filters
- **Lightbox**: Full-screen image viewer with navigation
- **Smooth Transitions**: Animated filtering and image loading

## 🎯 Features Highlights

### Animations
- Scroll-triggered animations using Intersection Observer
- Smooth page transitions
- Hover effects on cards and buttons
- Parallax scrolling effects
- Floating particles and decorative elements

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px, 1200px
- Touch-friendly navigation
- Optimized images for different screen sizes

### Performance
- Lazy loading images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Fast build times with Vite

## 🎨 Color Scheme

- **Primary**: #8B0000 (Dark Red)
- **Secondary**: #C41E3A (Crimson)
- **Accent**: #D4AF37 (Gold)
- **Dark Background**: #1a1a1a
- **Light Background**: #f8f8f8

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #8B0000;
  --secondary-color: #C41E3A;
  --accent-gold: #D4AF37;
  /* ... */
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

### Modifying Content
- Room data: `src/components/Rooms.jsx`
- Menu items: `src/components/Restaurant.jsx`
- Facilities: `src/components/Facilities.jsx`
- Gallery images: `src/pages/Gallery.jsx`

## 📞 Contact Information

- **Address**: Plot ###, Namwendwa Rd, Kamuli District
- **Phone**: +256 706 700 953
- **Email**: info@aapemotel.com
- **Hours**: Always Open 24/7

## 📄 License

This project is created for Aape Motel. All rights reserved.

## 🙏 Acknowledgments

- Design inspiration from luxury hotels worldwide
- Images from Aape Motel
- Built with modern web technologies

---

**Enjoy your stay at Aape Motel! 🏨✨**
