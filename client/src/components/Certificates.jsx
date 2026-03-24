import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

// Using the user-provided screenshots fromsrc/assets/certificates
import cipherSchoolsCert from '../assets/certificates/Screenshot 2025-08-15 203652.png';
import aiTechiesCert from '../assets/certificates/Screenshot 2026-03-24 225611.png';
import nptelPrivacyCert from '../assets/certificates/Screenshot 2026-03-24 225630.png';
import nptelCloudCert from '../assets/certificates/Screenshot 2026-03-24 225703.png';

const certificates = [
  {
    title: 'Data Structures Algorithms',
    issuer: 'CipherSchools',
    image: cipherSchoolsCert,
    date: 'July 2025',
    filename: 'cipherschools.png'
  },
  {
    title: 'Python using AI Workshop',
    issuer: 'AI for Techies',
    image: aiTechiesCert,
    date: 'March 2026',
    filename: 'aifortechies.png'
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    image: nptelPrivacyCert,
    date: 'Jul-Oct 2025',
    filename: 'nptel_privacy.png'
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    image: nptelCloudCert,
    date: 'Jul-Oct 2025',
    filename: 'nptel_cloud.png'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all group"
            >
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-[4/3] bg-dark-900 flex items-center justify-center">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain relative z-10 p-2 transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Error Fallback */}
                <div className="hidden absolute inset-0 z-0 flex-col items-center justify-center text-slate-500 p-6 text-center">
                  <Award size={48} className="mb-4 opacity-50 text-accent-500" />
                  <p className="text-sm">Image not found.</p>
                  <p className="text-xs mt-2">Could not load the certificate image. Please check the files in <code className="text-xs bg-dark-800 px-1 py-0.5 rounded">client/src/assets/certificates/</code></p>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-primary-500/80 font-medium text-sm mb-1">{cert.issuer}</p>
                </div>
                <div className="bg-dark-900 text-slate-400 text-xs py-1 px-3 rounded-full border border-dark-700 whitespace-nowrap ml-4">
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
