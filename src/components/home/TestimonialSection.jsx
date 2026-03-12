import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
{
  quote: "Her depth of understanding and insight into best practices for the development of our HR strategy was apparent from the onset... Selma's competence was evident in aspiring to summit the peak of HR excellence, I would partner with her in a heartbeat.",
  name: "Lana Jackson",
  title: "HR and Development Manager, On the Dot",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
},
{
  quote: "Selma's talent management expertise was integral to the successful design and implementation of the Talent Management project. Her change management prowess added immense value in capacitating the HR Team for the rollout and adoption phases.",
  name: "Warren van Wyk",
  title: "HR & Capability Executive, Massmart Group",
  image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80"
},
{
  quote: "Selma is one of the consultants that will leave a lasting impression on you and your team. She is an absolute pleasure to work and collaborate with.",
  name: "Anneline Goliath",
  title: "Account Manager and Change Lead, Astron Energy",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
},
{
  quote: "Selma's ability to manage the complexity of the relationships in a diverse and geographically dispersed context was essential to the successful implementation of the new technology, which is still actively used and well embedded in across the group.",
  name: "Martin Sutherland",
  title: "Global Director, Peopletree Group",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
},
{
  quote: "In my view with Selma input and guidance this was a highly successful project that delivered significant value to the client.",
  name: "Paul Hobden",
  title: "Chief Operating Officer, Edge Learning Media",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
},
{
  quote: "Not only is she a Talent Management expert and champion in every sense of the word... I have full confidence that I can trust, has relevant innovative insights and advice that is fit for purpose.",
  name: "Vanessa Kodisang",
  title: "Head of HR, Massmart Group",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
}];


const variants = {
  enter: { opacity: 0, y: 20, scale: 0.95 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 }
};

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const activeTestimonial = testimonials[activeIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8 lg:mb-12">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 mb-3 sm:mb-4 lg:mb-6">
            What Our Clients Say<span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
          </h2>
        </motion.div>

        <motion.div className="bg-slate-800/50 px-4 py-4 rounded-2xl relative z-10 sm:rounded-3xl shadow-2xl sm:p-6 lg:p-10 xl:p-12 fire-glow glass-effect backdrop-blur-xl border-2 border-slate-700/50"

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{
          y: -8,
          shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(220, 38, 38, 0.1)"
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>

          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>

            <Quote className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 lg:-top-8 lg:-left-8 w-12 h-12 sm:w-20 sm:h-20 lg:w-32 lg:h-32 text-red-500/30" strokeWidth={2} />
            <Quote className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 lg:-bottom-8 lg:-right-8 w-12 h-12 sm:w-20 sm:h-20 lg:w-32 lg:h-32 text-red-500/30 rotate-180" strokeWidth={2} />
          </motion.div>

          <div className="min-h-[320px] sm:min-h-[350px] md:min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full">

                <motion.div
                  className="flex justify-center mb-3 sm:mb-4 lg:mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}>

                  {[...Array(5)].map((_, i) =>
                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      filter: "drop-shadow(0 0 8px rgba(220, 38, 38, 0.8))"
                    }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}>

                      <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  )}
                </motion.div>

                <motion.p
                  className="text-sm sm:text-base lg:text-lg font-medium text-slate-300 max-w-2xl mx-auto mb-4 sm:mb-6 lg:mb-8 leading-relaxed relative px-2 sm:px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}>

                  <span className="text-red-500 text-2xl sm:text-3xl lg:text-4xl font-bold absolute -left-1 sm:-left-2 -top-2 sm:-top-4 lg:-top-6 opacity-90">"</span>
                  {activeTestimonial.quote}
                  <span className="text-red-500 text-2xl sm:text-3xl lg:text-4xl font-bold absolute -right-1 sm:-right-2 -bottom-1 sm:-bottom-2 opacity-90">"</span>
                </motion.p>

                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3 lg:space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}>

                  <motion.img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover shadow-md"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)"
                    }}
                    transition={{ duration: 0.2 }} />

                  <div className="text-left">
                    <p className="font-bold text-slate-200 text-sm sm:text-base">{activeTestimonial.name}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{activeTestimonial.title}</p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-red-500/30 bg-slate-800/50 hover:bg-red-600 hover:border-red-600 text-slate-300 hover:text-white transition-all duration-300">

                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>

            <div className="flex justify-center space-x-1.5 sm:space-x-2 lg:space-x-3">
              {testimonials.map((_, index) =>
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-red-600 scale-125 ember-pulse' : 'bg-slate-600 hover:bg-slate-500'}`
                }
                whileHover={{
                  scale: activeIndex === index ? 1.4 : 1.2,
                  boxShadow: activeIndex === index ? "0 0 8px rgba(220, 38, 38, 0.5)" : "none"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                aria-label={`Go to testimonial ${index + 1}`} />

              )}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full border-2 border-red-500/30 bg-slate-800/50 hover:bg-red-600 hover:border-red-600 text-slate-300 hover:text-white transition-all duration-300">

                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>);

}