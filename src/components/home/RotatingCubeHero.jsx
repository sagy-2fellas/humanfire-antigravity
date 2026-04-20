
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const cubeData = [
{
  title: "human+design",
  imageUrl: "/images/eb016b0ba_AdobeStock_876973765.jpg",
  color: "#B82E2B"
},
{
  title: "human+assist",
  imageUrl: "/images/ff90d676f_AdobeStock_837363881.jpg",
  color: "#6F88B5"
},
{
  title: "human+insight",
  imageUrl: "/images/88cf9af30_AdobeStock_1423904126.jpg",
  color: "#1A6566"
},
{
  title: "human+culture",
  imageUrl: "/images/9eebaf541_AdobeStock_13128754921.jpg",
  color: "#591E45"
}];


export default function RotatingCubeHero() {
  const [currentFace, setCurrentFace] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cubeInteractionComplete, setCubeInteractionComplete] = useState(false);
  const lastScrollTime = useRef(Date.now());
  const [cubeFaceTranslateZ, setCubeFaceTranslateZ] = useState(85);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCubeFaceTranslateZ(238);
      } else {
        setCubeFaceTranslateZ(85);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop wheel event
  useEffect(() => {
    const handleWheel = (e) => {
      const scrollTop = window.scrollY;

      if (cubeInteractionComplete || scrollTop > 300) {
        return;
      }

      if (scrollTop > 100) {
        return;
      }

      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 800 || isAnimating) {
        return;
      }
      lastScrollTime.current = now;

      const delta = e.deltaY;

      if (delta > 0 && currentFace < 3) {
        setIsAnimating(true);
        setCurrentFace((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (delta < 0 && currentFace > 0) {
        setIsAnimating(true);
        setCurrentFace((prev) => prev - 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (delta > 0 && currentFace === 3) {
        setCubeInteractionComplete(true);
        setIsAnimating(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentFace, isAnimating, cubeInteractionComplete]);

  // Mobile touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      const scrollTop = window.scrollY;

      if (cubeInteractionComplete || scrollTop > 300 || scrollTop > 100) {
        return;
      }

      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const scrollTop = window.scrollY;

      if (cubeInteractionComplete || scrollTop > 300 || scrollTop > 100) {
        return;
      }

      // Prevent default scrolling while interacting with cube
      if (!cubeInteractionComplete && scrollTop <= 100) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      const scrollTop = window.scrollY;

      if (cubeInteractionComplete || scrollTop > 300 || scrollTop > 100) {
        return;
      }

      touchEndY.current = e.changedTouches[0].clientY;

      const now = Date.now();
      if (now - lastScrollTime.current < 800 || isAnimating) {
        return;
      }

      const swipeDistance = touchStartY.current - touchEndY.current;
      const minSwipeDistance = 50; // minimum distance for a swipe

      if (Math.abs(swipeDistance) < minSwipeDistance) {
        return;
      }

      lastScrollTime.current = now;

      if (swipeDistance > 0 && currentFace < 3) {
        // Swiped up -> next face
        setIsAnimating(true);
        setCurrentFace((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (swipeDistance < 0 && currentFace > 0) {
        // Swiped down -> previous face
        setIsAnimating(true);
        setCurrentFace((prev) => prev - 1);
        setTimeout(() => setIsAnimating(false), 800);
      } else if (swipeDistance > 0 && currentFace === 3) {
        // Reached last face -> release control
        setCubeInteractionComplete(true);
        setIsAnimating(false);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentFace, isAnimating, cubeInteractionComplete]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && cubeInteractionComplete) {
        setCubeInteractionComplete(false);
        setCurrentFace(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cubeInteractionComplete]);

  return (
    <section className="relative bg-slate-900 min-h-screen flex items-center py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* BACKGROUND - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Large flowing orb 1 - Warm Red */}
        <motion.div
          className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(184, 46, 43, 0.4) 0%, rgba(184, 46, 43, 0.1) 40%, transparent 70%)',
            top: '10%',
            left: '5%'
          }}
          animate={{
            x: [0, 50, 25, 0],
            y: [0, 40, 60, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.25, 0.35, 0.3, 0.25]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }} />


        {/* Large flowing orb 2 - Warm Coral/Orange */}
        <motion.div
          className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] rounded-full blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(185, 71, 44, 0.35) 0%, rgba(237, 205, 182, 0.15) 40%, transparent 70%)',
            top: '40%',
            right: '10%'
          }}
          animate={{
            x: [0, -40, -60, 0],
            y: [0, 50, 30, 0],
            scale: [1, 0.9, 1.1, 1],
            opacity: [0.2, 0.3, 0.25, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }} />


        {/* Medium flowing orb 3 - Deep Blue accent */}
        <motion.div
          className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(111, 136, 181, 0.3) 0%, rgba(111, 136, 181, 0.1) 50%, transparent 70%)',
            bottom: '15%',
            left: '20%'
          }}
          animate={{
            x: [0, 60, 40, 0],
            y: [0, -30, -50, 0],
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.15, 0.25, 0.2, 0.15]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }} />


        {/* Subtle flowing orb 4 - Warm neutral */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(242, 239, 234, 0.2) 0%, rgba(242, 239, 234, 0.05) 50%, transparent 70%)',
            top: '60%',
            right: '30%'
          }}
          animate={{
            x: [0, -25, -40, 0],
            y: [0, -40, -20, 0],
            scale: [1, 0.9, 1.05, 1],
            opacity: [0.1, 0.2, 0.15, 0.1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }} />


        {/* Accent flowing orb 5 - Teal/Green */}
        <motion.div
          className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-3xl opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(26, 101, 102, 0.25) 0%, rgba(26, 101, 102, 0.08) 50%, transparent 70%)',
            bottom: '30%',
            right: '15%'
          }}
          animate={{
            x: [0, 30, 50, 0],
            y: [0, 35, 20, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.12, 0.2, 0.15, 0.12]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }} />


        {/* Subtle gradient waves overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(184, 46, 43, 0.05) 0%, transparent 30%, rgba(111, 136, 181, 0.05) 70%, transparent 100%)'
          }}
          animate={{
            opacity: [0.3, 0.5, 0.4, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }} />


        {/* Subtle particle/noise texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }} />

      </div>

      {/* MAIN CONTENT - Mobile Responsive */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE - STATIC CONTENT */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white tracking-tight leading-tight mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0">
              Talent Strategy That Moves The Business<span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-red-600 rounded-full ml-1 sm:ml-2 align-middle"></span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-slate-200 mb-4 sm:mb-5 md:mb-7 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">We fuse talent management strategy and brand experience with AI-enabled technology and data intelligence to align your talent strategy with business ambition.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-start px-2 sm:px-0">
              <Link to={createPageUrl("ContactUs")} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto">
                  Get in touch
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE - ROTATING 3D CUBE */}
          <motion.div
            className="order-1 lg:order-2 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: "2000px" }}>

            <motion.div
              className="relative w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[476px] lg:h-[476px]"
              style={{
                transformStyle: "preserve-3d"
              }}
              animate={{ rotateY: currentFace * 90 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}>

              {/* Cube Faces - Mobile Optimized */}
              {cubeData.map((data, index) => {
                const rotations = [0, 90, 180, 270];
                return (
                  <div
                    key={index}
                    className="absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      transform: index === 0 
                        ? `translateZ(${cubeFaceTranslateZ}px)`
                        : `rotateY(${rotations[index]}deg) translateZ(${cubeFaceTranslateZ}px)`,
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <img
                      src={data.imageUrl}
                      alt={data.title}
                      className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    <h3
                      className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-12 left-0 right-0 text-center font-bold text-sm sm:text-base md:text-lg lg:text-3xl px-2"
                      style={{ color: data.color }}>

                      {data.title}
                    </h3>
                  </div>
                );
              })}
            </motion.div>
            
            {/* Scroll indicator - Mobile Responsive */}
            <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-12 lg:-bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm">
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider">
                  SCROLL TO EXPLORE ({currentFace + 1}/4)
                </span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>

                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>);

}
