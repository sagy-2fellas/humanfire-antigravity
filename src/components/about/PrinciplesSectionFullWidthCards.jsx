
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const principles = [
{
  title: 'Expert-led, future ready.',
  description: 'We bring deep experience and forward-thinking talent strategy',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/e288ba045_AdobeStock_12012901651.jpg'
},
{
  title: 'Bold by design.',
  description: 'We challenge norms with brand-focused energy',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/e20565eda_AdobeStock_287806654.jpg'
},
{
  title: 'Human at heart.',
  description: 'Empathy drives everything we create',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/71dab13e9_AdobeStock_7980500081.jpg'
},
{
  title: 'Fast and purposeful.',
  description: 'We build adaptive, immersive solutions with speed and intent',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/0d0e2a922_AdobeStock_1404579333.jpg'
},
{
  title: 'Smart meets stunning.',
  description: 'Our work blends strategic depth with creative beauty',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/4065b64d6_AdobeStock_1341901434.jpg'
}];


function PrincipleCard({ principle, index }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="sticky top-0 h-screen w-full flex items-center justify-center">

      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <img
            src={principle.imageUrl}
            alt={principle.title}
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/70 to-slate-900/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl">

            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/90 backdrop-blur-sm border-2 border-white/20">
                <span className="text-white font-bold text-2xl">0{index + 1}</span>
              </div>
            </div>

            <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              {principle.title}
            </h3>

            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              {principle.description}
            </p>

            <div className="flex items-center justify-center gap-2 mt-8">
              {principles.map((_, i) =>
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? 'w-12 bg-red-600' : 'w-8 bg-white/30'}`
                }>
              </div>
              )}
            </div>

            {index === 0 &&
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}>

                <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                  Scroll to explore
                </p>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
                  <motion.div
                  className="w-1.5 h-1.5 bg-white/60 rounded-full absolute left-1/2 top-2 -translate-x-1/2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}>
                </motion.div>
                </div>
              </motion.div>
            }
          </motion.div>
        </div>
      </div>
    </motion.div>);

}

export default function PrinciplesSectionFullWidthCards() {
  return (
    <section className="relative">
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>

            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Our Principles
              <span className="inline-block w-4 h-4 bg-red-600 rounded-full ml-3 ember-pulse"></span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Five pillars that guide every strategy we design and every partnership we build.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        {principles.map((principle, index) =>
        <PrincipleCard key={index} principle={principle} index={index} />
        )}
      </div>
    </section>);

}
