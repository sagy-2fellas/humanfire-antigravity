import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Users, TrendingUp, Target, Award, Play, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import SEO from "../components/common/SEO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HumanInsight() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const seo = (
    <SEO
      title="human+insight — People Analytics & Data-Driven Talent Decisions"
      description="Turn talent data into actionable insights with humanfire's human+insight service. Automate talent profiles, performance analytics, succession bench strength, retention tracking, and talent value analytics."
      path="/HumanInsight"
    />
  );

  const whatWeDo = [
    { icon: Users, title: "Automate and generate talent profiles", description: "We turn talent analytics into creative direction that moves people." },
    { icon: BarChart, title: "Performance data", description: "Generate performance data and insights" },
    { icon: Target, title: "Talent reviews", description: "Comprehensive talent review processes" },
    { icon: TrendingUp, title: "Succession bench strength, retention & engagement", description: "Build succession pipelines and strengthen retention" },
    { icon: Award, title: "Talent value analytics", description: "Comprehensive talent value analytics" },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#1A6566]/10 to-slate-950">
      {seo}
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(26, 101, 102, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 101, 102, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(26, 101, 102, 0.2)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(26, 101, 102, 0.15)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={ref} className="relative py-32 overflow-hidden z-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A6566]/10 border border-[#1A6566]/30">
                  <BarChart className="w-4 h-4 text-[#1A6566]" strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-[#1A6566]">human+insight</span>
                </div>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight italic">
                "Data Is The Compass. People Are The Journey."
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                We turn data into insights for relevant talent management strategies that shape what's next. Because the future of work isn't a spreadsheet—it's a story.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("ContactUs")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#1A6566] to-[#134243] hover:from-[#134243] hover:to-[#0C2A2A] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg transition-all duration-300 group border-0" style={{ boxShadow: '0 10px 40px rgba(26, 101, 102, 0.25)' }}>
                    Get Data Clarity
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4"
              style={{ borderColor: 'rgba(26, 101, 102, 0.3)' }}
            >
              <img
                src="/images/6676b0bab_humaninsight.jpg"
                alt="Data Analytics and Insights"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/20 to-slate-950 opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Split Layout */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: What We Do Content - Glossy Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 glass-effect rounded-3xl p-8 lg:p-10 border-2"
              style={{ borderColor: 'rgba(26, 101, 102, 0.2)' }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-8">
                What We Do<span style={{ color: '#1A6566' }}>.</span>
              </h2>
              
              <div className="space-y-6">
                {whatWeDo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(26, 101, 102, 0.3)', border: '1px solid rgba(26, 101, 102, 0.3)' }}>
                      <item.icon className="w-6 h-6" style={{ color: '#1A6566' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-[#1A6566] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Clickable Image - Opens Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                onClick={() => setIsVideoOpen(true)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 shadow-2xl cursor-pointer group"
                style={{ borderColor: 'rgba(26, 101, 102, 0.2)' }}
              >
                <img
                  src="/images/6e0ff5eb3_Screenshot2025-11-16at133207.png"
                  alt="9 Cell Analytics - Talent Matrix"
                  className="w-full h-full object-contain bg-white p-4"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/50 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl"
                    style={{ backgroundColor: '#1A6566' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </motion.div>
                </div>

                {/* Click to watch text */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#1A6566' }}>
                  <p className="text-white font-semibold text-sm whitespace-nowrap">
                    Click to watch demo
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl w-full bg-slate-950 border-2 p-0 overflow-hidden" style={{ borderColor: 'rgba(26, 101, 102, 0.3)' }}>
          {/* Custom Close Button */}
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-[#1A6566] hover:bg-[#134243] flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-white">
              9 Cell Analytics Demo
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1137387083?autoplay=1&title=0&byline=0&portrait=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="9 Cell Analytics Demo"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-effect rounded-3xl p-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6">Ready To Turn Insight Into Impact?</h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's build a data-driven talent strategy that tells a human story and moves your business forward.
            </p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-gradient-to-r from-[#1A6566] to-[#134243] hover:from-[#134243] hover:to-[#0C2A2A] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg transition-all duration-300 border-0" style={{ boxShadow: '0 10px 40px rgba(26, 101, 102, 0.25)' }}>
                Book Your Insight Session
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}