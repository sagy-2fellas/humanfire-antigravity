import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import RotatingCubeHero from "../components/home/RotatingCubeHero";
import StatsSection from "../components/home/StatsSection";
import InteractiveFrameworkSection from "../components/home/InteractiveFrameworkSection";
import HowWeWorkAlternative from "../components/home/HowWeWorkAlternative";
import PrinciplesSectionHorizontalScroll from "../components/about/PrinciplesSectionHorizontalScroll";
import NewsletterSignup from "../components/common/NewsletterSignup";
import WorkshopPopup from "../components/common/WorkshopPopup";

export default function Home() {
  const [isWorkshopPopupOpen, setIsWorkshopPopupOpen] = React.useState(false);

  React.useEffect(() => {
    const workshopEndDate = new Date('2026-03-25');
    const currentDate = new Date();
    
    if (currentDate < workshopEndDate) {
      const timer = setTimeout(() => {
        setIsWorkshopPopupOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const teamMembers = [
    {
      name: "selma de morney",
      role: "founder & lead strategist",
      img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/4b2a261a9_image_1762530973723_8qqsvj_1x1_1024x1024.png",
      email: "selma@humanfire.co",
      linkedin: "https://www.linkedin.com/in/selma-de-morney-a332733a/"
    },
    {
      name: "raeesah hassa",
      role: "People and Organisational Development",
      img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/3e67f85ae_image_1762531014275_9kww68_1x1_1024x1024.png",
      email: "raeesah@humanfire.co",
      linkedin: "https://www.linkedin.com/in/raeesah-hassa/"
    }
  ];


  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <WorkshopPopup 
        isOpen={isWorkshopPopupOpen} 
        onClose={() => setIsWorkshopPopupOpen(false)} 
      />

      {/* 1. Hero Section with Rotating Cube - DARK */}
      <RotatingCubeHero />

      {/* 2. Stats Section - LIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5
        }}
        className="py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 bg-slate-50"
      >
        <StatsSection />
      </motion.div>

      {/* 3. Principles Section */}
      <PrinciplesSectionHorizontalScroll />

      {/* 4. How We Work Section - LIGHT */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="bg-slate-50 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-20">
        <HowWeWorkAlternative hideLeftColumn={true} />
      </motion.div>

      {/* 5. Interactive Framework Section - DARK */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="bg-slate-950"
      >
        <InteractiveFrameworkSection />
      </motion.div>

      {/* 6. Team Section - LIGHT (Mobile Responsive) */}
      <motion.section
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="bg-slate-50 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2">
              Meet Our Leaders
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-red-600 rounded-full ml-1 sm:ml-1.5 md:ml-2 ember-pulse"></span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-600 px-2">The Experienced Team Dedicated To Your Success.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 border-2 border-white/20 hover:border-red-500 transition-all duration-300 hover:shadow-2xl glass-effect"
              >
                <div className="relative mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mx-auto rounded-lg sm:rounded-xl md:rounded-2xl object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300 border-2 border-slate-200"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)"
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 mb-1 sm:mb-1.5 md:mb-2 capitalize">{member.name}</h3>
                <p className="text-red-600 font-semibold text-xs sm:text-sm md:text-base capitalize mb-2 sm:mb-3 md:mb-4 px-2">{member.role}</p>

                <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4 lg:mt-6">
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-slate-100 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-slate-100 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group/icon"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-slate-600 group-hover/icon:text-white transition-colors" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. CTA Section - DARK (Mobile Responsive) */}
      <motion.section
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-xl sm:rounded-2xl md:rounded-3xl mx-2 sm:mx-3 md:mx-4 lg:mx-6 xl:mx-8 my-3 sm:my-4 md:my-5 lg:my-6 relative heat-haze"
      >
        <div
          className="absolute inset-0 opacity-[0.03] rounded-xl sm:rounded-2xl md:rounded-3xl"
          style={{
            backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
            backgroundSize: '150px',
            backgroundRepeat: 'repeat'
          }}
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 px-2">
              Ready To Transform Your HR Strategy<span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-red-600 rounded-full ml-1 sm:ml-1.5 md:ml-2 ember-pulse"></span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-200 mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
              Let's connect and discover how humanfire can bring your talent strategy to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link to={createPageUrl("ContactUs")} className="w-full sm:w-auto">
                <Button size="lg" className="fire-button text-white px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 w-full sm:w-auto">
                  Book Your Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 8. Newsletter Section - LIGHT (Mobile Responsive) */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }}
        className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 relative bg-slate-50"
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d58d25391c1a6fec6b2bda/39aac9433_Email_Design_Pattern.jpg")`,
            backgroundSize: '150px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </motion.div>
    </div>
  );
}