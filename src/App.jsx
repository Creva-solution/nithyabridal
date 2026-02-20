import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Pages
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Academy from './pages/Academy.jsx';
import Portfolio from './pages/Portfolio.jsx';
import About from './pages/About.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Booking from './pages/Booking.jsx';
import Contact from './pages/Contact.jsx';

// Scroll to top component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Animated route wrapper
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-sans bg-luxury-black text-luxury-nude overflow-x-hidden selection:bg-luxury-gold selection:text-luxury-black">
                <Navbar />
                <main className="flex-grow">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
