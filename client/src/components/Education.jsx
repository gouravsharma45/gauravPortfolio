import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const educationData = [
  {
    type: 'Graduation',
    degree: 'B.Tech',
    institution: 'Lovely Professional University',
    icon: <GraduationCap className="text-primary-500" size={24} />
  },
  {
    type: 'Intermediate',
    degree: 'Percentage: 78',
    institution: 'Delhi Heritage International School',
    icon: <School className="text-accent-500" size={24} />
  },
  {
    type: 'Matriculation',
    degree: 'Percentage: 98',
    institution: 'Delhi Heritage International School',
    icon: <School className="text-primary-400" size={24} />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Educational <span className="text-gradient">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-3xl border border-dark-700 hover:border-primary-500/50 transition-all hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-dark-900 rounded-2xl flex items-center justify-center mb-6 border border-dark-700 group-hover:bg-primary-500/10 transition-colors">
                {edu.icon}
              </div>
              <h3 className="text-primary-400 font-semibold mb-2 uppercase tracking-wider text-xs">{edu.type}</h3>
              <p className="text-2xl font-bold text-white mb-2">{edu.degree}</p>
              <p className="text-slate-400">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
