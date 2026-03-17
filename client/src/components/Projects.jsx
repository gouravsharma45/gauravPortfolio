import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Library Tracker',
    description: 'A comprehensive system to track library inventory, user borrowings, and analytics on popular books.',
    tags: ['Python', 'SQL', 'Pandas'],
    link: '#',
    github: '#'
  },
  {
    title: 'PowerBI Dashboard',
    description: 'Interactive business intelligence dashboard for sales forecasting and customer segmentation analysis.',
    tags: ['PowerBI', 'DAX', 'Data Modeling'],
    link: '#',
    github: '#'
  },
  {
    title: 'Electric Vehicle Analysis',
    description: 'Deep dive into EV market trends, battery efficiency prediction using ML models, and infrastructure mapping.',
    tags: ['Machine Learning', 'Scikit-Learn', 'Python'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-900 rounded-2xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all group hover:-translate-y-2"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 min-h-[80px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-accent-400 bg-accent-400/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors ml-auto">
                    <span className="text-sm">Live Demo</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
