import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Replace 'YOUR_FORM_ID' with your actual Formspree ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdawppgw';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setStatus('error');
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
            <p className="text-slate-400 mb-8">
              Don't like forms? Send me an email. 👋
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center text-primary-500 shadow-lg border border-dark-700">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email Me</h4>
                <a href="mailto:gs3436094@gmail.com" className="text-lg text-slate-200 hover:text-primary-400 transition-colors">
                  gs3436094@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center text-accent-500 shadow-lg border border-dark-700">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Location</h4>
                <p className="text-lg text-slate-200">
                  India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-dark-900 p-8 rounded-3xl border border-dark-700 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all placeholder:text-slate-600 resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-medium py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center text-sm mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center text-sm mt-4">Failed to send message. Please try again or check your Formspree ID.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
