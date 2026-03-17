import React from 'react';
import { motion } from 'framer-motion';

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-12 bg-dark-900 border-y border-dark-800 overflow-hidden relative flex items-center">
      {/* Gradient Fades for the marquee edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-16 px-8 items-center"
        >
          {/* Duplicate the items to create a seamless infinite scroll loop */}
          {[...Array(2)].map((_, loopIndex) => (
             <React.Fragment key={loopIndex}>
                <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold font-mono text-slate-400">
                  <span className="text-yellow-500">LeetCode</span>
                  <span className="text-white">70 Solved</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-accent-500/50"></div>
                
                <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold font-mono text-slate-400">
                  <span className="text-green-500">GeeksforGeeks</span>
                  <span className="text-white">18 Solved</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary-500/50"></div>
                
                <div className="flex items-center gap-4 text-3xl md:text-5xl font-bold font-mono text-slate-400">
                  <span className="text-blue-500">HackerRank</span>
                  <span className="text-white">5 Star Profile</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-accent-500/50"></div>
             </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;
