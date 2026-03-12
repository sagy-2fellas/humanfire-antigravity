import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const principles = [
{
  title: 'Expert-led, future ready.',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/e288ba045_AdobeStock_12012901651.jpg'
},
{
  title: 'Bold by design.',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/e20565eda_AdobeStock_287806654.jpg'
},
{
  title: 'Human at heart.',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/71dab13e9_AdobeStock_7980500081.jpg'
},
{
  title: 'Fast and purposeful.',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/0d0e2a922_AdobeStock_1404579333.jpg'
},
{
  title: 'Smart meets stunning.',
  imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/4065b64d6_AdobeStock_1341901434.jpg'
}];


export default function PrinciplesSectionRollingImages() {
  // Duplicate principles for seamless infinite scroll
  const leftColumnImages = [...principles, ...principles, ...principles];
  const rightColumnImages = [...principles, ...principles, ...principles];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="py-12 lg:py-20 relative bg-slate-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Static Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8">

            <div>
              <motion.h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"

              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>Layout 2 Our Principles



              </motion.h2>
              
              <motion.p
                className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}>

                We bring deep experience and forward-thinking talent strategy that challenges norms with brand-focused energy.
              </motion.p>

              <motion.p
                className="text-lg text-slate-400 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}>

                Empathy drives everything we create as we build adaptive, immersive solutions with speed and intent. Our work blends strategic depth with creative beauty.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}>

              <Link to={createPageUrl("BookDemo")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">

                  About us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Rolling Images (Two Columns) */}
          <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl">
            {/* Gradient overlays for fade effect */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 h-full">
              {/* LEFT COLUMN - Scrolling UP */}
              <motion.div
                className="flex-1 flex flex-col gap-4"
                animate={{
                  y: [0, -1 * (principles.length * 220)] // 200px height + 20px gap
                }}
                transition={{
                  y: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}>

                {leftColumnImages.map((principle, index) =>
                <div
                  key={`left-${index}`}
                  className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group">

                    <img
                    src={principle.imageUrl}
                    alt={principle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm leading-tight">
                        {principle.title}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* RIGHT COLUMN - Scrolling DOWN */}
              <motion.div
                className="flex-1 flex flex-col gap-4"
                animate={{
                  y: [-1 * (principles.length * 220), 0] // Start from negative, animate to 0
                }}
                transition={{
                  y: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}>

                {rightColumnImages.map((principle, index) =>
                <div
                  key={`right-${index}`}
                  className="relative w-full h-[200px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group">

                    <img
                    src={principle.imageUrl}
                    alt={principle.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm leading-tight">
                        {principle.title}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>);

}