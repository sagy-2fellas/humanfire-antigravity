import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const principles = [
{
  title: 'Expert-led, future ready.',
  description: 'We bring deep experience and forward-thinking talent strategy',
  imageUrl: '/images/d8265a566_Principles_expertled.jpg'
},
{
  title: 'Bold by design.',
  description: 'We challenge norms with brand-focused energy',
  imageUrl: '/images/1fa3d0de3_Principles_boldbydesign.jpg'
},
{
  title: 'Human at heart.',
  description: 'Empathy drives everything we create',
  imageUrl: '/images/1b800d194_Principles_humanatheart.jpg'
},
{
  title: 'Fast and purposeful.',
  description: 'We build adaptive, immersive solutions with speed and intent',
  imageUrl: '/images/0d0e2a922_AdobeStock_1404579333.jpg'
},
{
  title: 'Smart meets stunning.',
  description: 'Our work blends strategic depth with creative beauty',
  imageUrl: '/images/171f184a5_coverpage.jpg'
}];


export default function PrinciplesSectionHorizontalScroll() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / principles.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : principles.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < principles.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="py-8 sm:py-10 md:py-12 relative bg-slate-50">

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-6 sm:mb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-2">
            Our Principles
            <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full ml-1.5 sm:ml-2 ember-pulse"></span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 px-2">
            Five pillars that guide every strategy we design and every partnership we build.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center">
              <Button
                onClick={handlePrev}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white border-2 border-slate-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                size="icon">

                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
              </Button>
              <Button
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white border-2 border-slate-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                size="icon">

                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto snap-x snap-mandatory hide-scrollbar" ref={scrollContainerRef}>
            <div className="flex gap-4 sm:gap-5 md:gap-6 pb-3 sm:pb-4">
              {principles.map((principle, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] snap-center">

                  <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                    <motion.img
                    src={principle.imageUrl}
                    alt={principle.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }} />


                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 lg:p-12">
                      <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }} className="px-20">

                        <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600/80 backdrop-blur-sm rounded-full mb-3 sm:mb-4">
                          <span className="text-white text-xs sm:text-sm font-bold">0{index + 1}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                          {principle.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
                          {principle.description}
                        </p>
                      </motion.div>
                    </div>

                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/60 text-xs sm:text-sm">
                      {index + 1} / {principles.length}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {principles.map((_, index) =>
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-red-600 w-6 sm:w-8' : 'bg-slate-400 hover:bg-slate-500'}`
              } />

            )}
          </div>
        </div>
      </div>
    </motion.section>);

}