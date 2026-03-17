import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Languages', items: ['Python', 'SQL', 'JavaScript'] },
  { category: 'Data & Analytics', items: ['NumPy', 'Pandas', 'PowerBI', 'Tableau'] },
  { category: 'Machine Learning', items: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'Deep Learning'] },
  { category: 'Tools & DB', items: ['Jupyter', 'MongoDB', 'Git', 'Docker'] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-2xl border border-dark-700 hover:shadow-lg hover:shadow-primary-500/10 transition-all group"
            >
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-primary-400 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-dark-900 text-slate-300 rounded-full text-sm font-medium border border-dark-700 group-hover:border-primary-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
