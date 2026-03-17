import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const name = "Gourav Sharma";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const handleType = () => {
    const fullText = name;
    const updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1) 
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
      setTypingSpeed(100);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    } else if (isDeleting) {
      setTypingSpeed(50);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-primary-500 font-medium tracking-widest uppercase mb-4">Data Scientist</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight h-[120px] md:h-[160px]">
            Hi, I'm <br />
            <span className="text-gradient">
              {displayText}
              <span className="animate-pulse ml-1">|</span>
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Transforming raw data into actionable insights through Machine Learning, Deep Learning, and advanced analytics.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/30 transition-shadow">
              Hire Me
            </a>
            <a href="/Gourav_Sharma_CV.pdf" download="Gourav_Sharma_CV.pdf" className="px-8 py-3 bg-dark-800 text-white rounded-full font-medium border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all flex items-center gap-2">
              <Download size={18} />
              Download CV
            </a>
            <div className="flex gap-4 ml-0 md:ml-4">
              <a href="https://github.com/gouravsharma45" target="_blank" rel="noreferrer" className="p-3 bg-dark-800 rounded-full text-slate-300 hover:text-white hover:bg-dark-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/gouravsharma45/" target="_blank" rel="noreferrer" className="p-3 bg-dark-800 rounded-full text-slate-300 hover:text-white hover:bg-dark-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-1 shadow-2xl shadow-primary-500/20">
            <div className="w-full h-full bg-dark-900 rounded-full overflow-hidden border-4 border-dark-900">
              <img 
                src="./public/gourav.jpg" 
                alt="Gourav Sharma" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
