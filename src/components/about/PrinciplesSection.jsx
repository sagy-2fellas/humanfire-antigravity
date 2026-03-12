import React from 'react';
import { motion } from 'framer-motion';

const principles = [
{
  title: 'Expert-led, future ready.',
  description: 'We bring deep experience and forward-thinking talent strategy',
  imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Bold by design.',
  description: 'We challenge norms with brand-focused energy',
  imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Human at heart.',
  description: 'Empathy drives everything we create',
  imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Fast and purposeful.',
  description: 'We build adaptive, immersive solutions with speed and intent',
  imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'
},
{
  title: 'Smart meets stunning.',
  description: 'Our work blends strategic depth with creative beauty',
  imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80'
}];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function PrinciplesSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }} 
      className="py-3 relative">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16">

          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 uppercase">
            Our Principles
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
          </h3>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            These five pillars guide every strategy we design and every partnership we build.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {principles.map((principle, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/20 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-xl glass-effect"
            whileHover={{ y: -8, scale: 1.05 }}>

              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={principle.imageUrl}
                  alt={principle.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent group-hover:from-red-900/90 transition-all duration-300" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-slate-600 text-sm">{principle.description}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>);

}