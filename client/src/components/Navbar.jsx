import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md shadow-lg shadow-black/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500"
        >
          Gourav Sharma
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {['About', 'Education', 'Skills', 'Projects', 'Certificates', 'Profiles', 'Contact'].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-slate-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
