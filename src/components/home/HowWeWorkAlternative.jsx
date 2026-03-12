
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Feather, RefreshCw, Boxes, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const journeySteps = [
  {
    icon: Lightbulb,
    phase: "01",
    title: "Discover",
    tagline: "Understanding and alignment",
    color: "#B82E2B",
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/28ce1eb90_AdobeStock_12012901651.jpg'
  },
  {
    icon: Feather,
    phase: "02",
    title: "Shape",
    tagline: "Co-creation and design",
    color: "#6F88B5",
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/358961daf_culture5.jpg'
  },
  {
    icon: RefreshCw,
    phase: "03",
    title: "Mobilise",
    tagline: "Activation and momentum",
    color: "#1A6566",
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/67ae80d3a_AdobeStock_1330914614.jpg'
  },
  {
    icon: Boxes,
    phase: "04",
    title: "Enrich",
    tagline: "Sustainability and evolution",
    color: "#591E45",
    imageUrl: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/228465d5c_brandstatements2.jpg'
  }
];


export default function HowWeWorkAlternative({ hideLeftColumn = false, layout = "columns" }) {
  const leftColumnImages = [...journeySteps, ...journeySteps, ...journeySteps];
  const rightColumnImages = [...journeySteps, ...journeySteps, ...journeySteps];
  const horizontalImages = [...journeySteps, ...journeySteps, ...journeySteps, ...journeySteps];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="py-8 sm:py-10 md:py-12 lg:py-20 relative bg-slate-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            How We Work
            <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full ml-2 sm:ml-3 ember-pulse"></span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-3 sm:mb-4 max-w-4xl mx-auto px-2">
            A collaborative journey where your success is built through partnership, not prescription.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto px-2">
            <span className="font-bold text-red-400">This isn't a handoff.</span> We're a journey partner. We succeed when you succeed—and success means you're more capable, more confident, and more competitive because of the work we did together.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6"
            animate={{
              x: [0, -1 * (journeySteps.length * 400)]
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}>

            {horizontalImages.map((step, index) =>
              <div
                key={`horizontal-${index}`}
                className="relative w-[280px] sm:w-[320px] md:w-[350px] h-[220px] sm:h-[250px] md:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group">

                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                <div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`
                  }}>

                  {step.phase}
                </div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    {step.tagline}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 md:mt-12">

          <Link to={createPageUrl("ContactUs")}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto">

              Let's Start Your Journey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>);

}
