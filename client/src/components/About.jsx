import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-10 rounded-full"></div>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            I am a passionate Data Scientist dedicated to solving complex problems through data. With a strong foundation in Machine Learning, Deep Learning, and statistical analysis, I specialize in extracting meaningful patterns from large datasets.
          </p>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            My experience spans across Python-based data ecosystems, crafting predictive models, and building insightful dashboards to drive data-informed decisions. I am constantly learning and adapting to the latest advancements in AI and data technologies.
          </p>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center justify-center">
            {[
              { label: 'Projects', value: '15+' },
              { label: 'Models Deployed', value: '10+' },
              { label: 'Coffee Consumed', value: '∞' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-dark-900 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-colors"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
