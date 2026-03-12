import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { XCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProblemSection({ title, problems, imageSrc, themeColor }) {
  const themes = {
    red: 'from-red-900/80 to-slate-900/90',
    blue: 'from-blue-900/80 to-slate-900/90',
    green: 'from-green-900/80 to-slate-900/90',
    purple: 'from-purple-900/80 to-slate-900/90',
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
      className="relative py-24 bg-slate-900"
    >
      <div className="absolute inset-0">
        <motion.img 
          style={{ y: backgroundY }}
          src={imageSrc}
          alt="Abstract background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                <p className="text-slate-300">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}