
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = useMemo(() => [
    { text: "design", color: "#B82E2B" },
    { text: "assist", color: "#6F88B5" }, // Updated color for "assist"
    { text: "insight", color: "#1A6566" },
    { text: "culture", color: "#591E45" }
  ], []);

  useEffect(() => {
    const currentWord = words[currentWordIndex].text;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, currentWordIndex, isTyping, words]);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="bg-slate-900 relative heat-haze overflow-hidden">
      <div className="max-w-none xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[85vh] lg:min-h-screen pt-8 lg:pt-16">
        {/* Left Content */}
        <motion.div 
          className="px-4 flex flex-col justify-center sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 order-1 lg:order-1"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="py-8 lg:py-8 xl:py-16 2xl:py-24">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Badge variant="outline" className="mb-4 lg:mb-6 xl:mb-8 border-red-400/50 text-red-400 bg-white/5 backdrop-blur-sm text-xs sm:text-sm lg:text-base">
                HUMAN EXPERIENCE STRATEGY
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold text-white tracking-tight leading-tight flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="mb-2 xl:mb-4 relative">
                <span className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl 2xl:text-[10rem] font-bold absolute -left-6 sm:-left-8 md:-left-12 lg:-left-16 -top-3 sm:-top-4 md:-top-6 opacity-80">"</span>
                Driving Business Success Through<span className="inline-block w-2 h-2 sm:w-3 sm:h-3 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-red-600 rounded-full ml-2 ember-pulse"></span>
              </span>
              <span className="min-h-[1.2em] inline-block relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                <span className="text-white">human</span>
                <span style={{ color: words[currentWordIndex].color }}>{displayedText}</span>
                <span className="animate-pulse" style={{ color: words[currentWordIndex].color }}>|</span>
                <span className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl 2xl:text-[10rem] font-bold absolute -right-2 sm:-right-4 md:-right-8 lg:-right-12 -bottom-3 sm:-bottom-4 md:-bottom-8 opacity-80">"</span>
              </span>
            </motion.h1>

            <motion.p 
              className="mt-6 sm:mt-8 xl:mt-12 2xl:mt-16 max-w-lg xl:max-w-xl 2xl:max-2xl text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We blend human-centric strategy with technology to help you build a workforce that's ready for tomorrow.
            </motion.p>

            <motion.div 
              className="mt-8 sm:mt-12 xl:mt-16 2xl:mt-20 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 xl:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to={createPageUrl("BookDemo")} className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="fire-button text-white px-6 sm:px-8 py-3 sm:py-4 xl:px-10 xl:py-5 2xl:px-12 2xl:py-6 text-base sm:text-lg xl:text-xl 2xl:text-2xl group w-full sm:w-auto">
                    Get in touch
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 ml-2" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 border-2 border-white/50 group flex items-center justify-center gap-3 px-6 py-3 sm:px-6 sm:py-4 xl:px-8 xl:py-5 2xl:px-10 2xl:py-6 text-base sm:text-lg xl:text-xl 2xl:text-2xl w-full sm:w-auto">
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 20px rgba(255, 80, 0, 0.4)",
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-white" />
                  </motion.div>
                  <span>How it works</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Video/Image with Enhanced Parallax */}
        <div className="hidden lg:block relative overflow-hidden order-2 lg:order-2">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 w-full h-[120%]"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1950&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/20 to-slate-900"></div>
          
          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-20 h-20 bg-red-600/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </section>
  );
}
