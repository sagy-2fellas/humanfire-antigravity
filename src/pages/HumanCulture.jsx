import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Target,
  Users,
  MessageSquare,
  TrendingUp,
  Zap,
  Settings,
  Lightbulb,
  Calendar,
  BookOpen,
  Flag,
  Compass,
  Award,
  Handshake,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Sun
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import RotatingServicesCards from "../components/humanculture/RotatingServicesCards";
import SEO from "../components/common/SEO";

export default function HumanCulture() {
  const seo = (
    <SEO
      title="human+culture — Culture Transformation & Employee Experience"
      description="Transform your workplace culture with humanfire's human+culture service. We use culture intelligence, barrier-breaking strategies, and business-driven design to create lasting organisational change."
      path="/HumanCulture"
    />
  );

  const services = [
    {
      icon: BarChart3,
      title: "Culture Intelligence",
      description: "We use analytics to uncover what's working, what's missing, and where resistance lives — so you can act with precision.",
      color: "from-[#591E45] to-[#491735]",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: Shield,
      title: "Barrier Breakers",
      description: "We decode cultural blockers — from misaligned behaviours to invisible norms — and design strategies to shift them.",
      color: "from-[#491735] to-[#591E45]",
      imageUrl: "/images/8a968a6ba_AdobeStock_1242859607.jpg"
    },
    {
      icon: Target,
      title: "From Concept to Practice",
      description: "We turn abstract values into lived behaviours through rituals, feedback, and daily habits.",
      color: "from-[#591E45] to-[#491735]",
      imageUrl: "/images/0d620ba59_AdobeStock_856754768.jpg"
    },
    {
      icon: Users,
      title: "Clear Ownership, Real Accountability",
      description: "We define who leads culture at every level.",
      color: "from-[#491735] to-[#591E45]",
      imageUrl: "/images/8af2e4938_AdobeStock_13827366981.jpg"
    },
    {
      icon: MessageSquare,
      title: "Aligned Messaging, Authentic Action",
      description: "We help you walk the talk — syncing values with leadership, communication, and systems.",
      color: "from-[#591E45] to-[#491735]",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: TrendingUp,
      title: "Momentum Over Moments",
      description: "Our culture work is continuous, not campaign-based — designed to evolve with your business.",
      color: "from-[#491735] to-[#591E45]",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      icon: Zap,
      title: "Business-Driven Culture Design",
      description: "We link culture to strategy, performance, and growth — making it a lever, not a luxury.",
      color: "from-[#591E45] to-[#491735]",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const whyProblems = [
    {
      title: "Top-down, not lived-in",
      description: "Culture can't be imposed—it has to be experienced."
    },
    {
      title: "One-off campaigns, not ongoing conversations",
      description: "Posters and workshops don't build belonging."
    },
    {
      title: "Too focused on values, not enough on function and belonging",
      description: "Words on a wall mean nothing without action."
    },
    {
      title: "Disconnected from daily work",
      description: "Culture efforts often sit outside the flow of real life."
    },
    {
      title: "Designed for optics, not impact",
      description: "Many initiatives look good on paper but don't move people and are not integrated into people strategy, technology and data."
    },
    {
      title: "Built for control, not connection",
      description: "Traditional approaches manage culture like a system—not a shared human experience."
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {seo}
      {/* Animated Background Grid - Enhanced */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(89, 30, 69, 0.08) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(89, 30, 69, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Enhanced floating orbs with theme color */}
        <motion.div
          className="absolute top-20 right-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#591E45]/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 60, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#B82E2B]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, -60, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-[#591E45]/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section - MOBILE RESPONSIVE */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8 }}
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden z-10"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#591E45]/10 border border-[#591E45]/30">
                  <Sun className="w-4 h-4 text-[#591E45]" strokeWidth={2.5} />
                  <span className="text-sm font-semibold text-[#591E45]">human+culture</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 lg:mb-8">
                  Culture is the rhythm of how we work, lead, and belong.
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  We tune the rhythm to match your ambition, because change doesn't happen in a memo. It happens in a movement. And movement ignites culture.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3 lg:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <a href="https://calendly.com/d/cptb-6by-68r/talent-strategy-call" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-[#591E45] to-[#491735] hover:from-[#491735] hover:to-[#391225] text-white px-6 py-4 sm:py-5 lg:px-8 lg:py-6 text-sm sm:text-base lg:text-lg shadow-2xl shadow-[#591E45]/40 hover:shadow-[#591E45]/60 transition-all duration-300 group border-0 w-full sm:w-auto hover:scale-105">
                    Start Your Transformation
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-[#591E45]/40 shadow-2xl shadow-[#591E45]/30">
                <motion.img
                  src="/images/9eebaf541_AdobeStock_13128754921.jpg"
                  alt="Culture Transformation"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#591E45]/50 via-transparent to-transparent"></div>
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      "inset 0 0 80px rgba(89, 30, 69, 0.3)",
                      "inset 0 0 100px rgba(89, 30, 69, 0.5)",
                      "inset 0 0 80px rgba(89, 30, 69, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why We Do It - Problem Section - DARK WITH GLASS CARDS */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
              The Problem with Painting Over Culture Cracks
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-1 sm:ml-2 ember-pulse"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {whyProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-xl border-2 border-white/10 hover:border-[#591E45]/50 transition-all duration-300 group shadow-xl hover:shadow-2xl hover:shadow-[#591E45]/20 hover:-translate-y-2">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#591E45]/30 to-[#591E45]/10 border border-[#591E45]/30 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-white font-bold text-lg sm:text-xl">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-[#b99ec7] transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Culture by Design, Not by Default - LIGHT SECTION WITH COLORFUL BACKGROUND */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 overflow-hidden"
      >
        {/* Background Image - More visible */}
        <div className="absolute inset-0">
          <img
            src="/images/da9ea3e65_AdobeStock_13377500861.jpg"
            alt="Culture Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-white/50"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
              Culture by Design, Not by Default
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-1 sm:ml-2 ember-pulse"></span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed px-2">
              Culture is no longer a soft issue—it's a strategic asset. At Humanfire, we help executive teams design intentional, high-impact cultures that drive performance, innovation, and talent retention.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How We Do It - Culture Design Canvas - DARK PREMIUM SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
              The Culture Design Canvas
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-1 sm:ml-2 ember-pulse"></span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
              Our approach is grounded in the <strong className="text-[#ffffff]">Culture Design Canvas by Fearless Culture</strong>—a powerful framework that breaks culture into tangible, actionable components that go beyond just values. It expands to explore the emotional culture – do we have a sense of belonging and psychological safety – how we get work done through our functional culture – and this is where the culture tensions shifts to evolve their Company's DNA.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed px-2">
              This tool enables teams to map their current culture, envision a bold future state, and evolve continuously in response to change.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 sm:mt-8"
            >
              <a href="https://calendly.com/d/cptb-6by-68r/talent-strategy-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#591E45] to-[#491735] hover:from-[#491735] hover:to-[#391225] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-2xl shadow-[#591E45]/40 hover:shadow-[#591E45]/60 transition-all duration-300 group border-0 hover:scale-105 w-full sm:w-auto">
                  Book Your Culture Strategy Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Culture Canvas Visual - MOBILE RESPONSIVE */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Culture Design Canvas
              <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-1 sm:ml-2 ember-pulse"></span>
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-slate-700 mb-4 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Design a workplace culture that propels you into the future.
            </motion.p>
          </motion.div>

          {/* Canvas Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Top Headers - Mobile Responsive */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#591E45]/20 to-[#591E45]/10 border-2 border-[#591E45]/40 rounded-lg sm:rounded-xl p-2 sm:p-4 transition-all duration-300 hover:bg-[#591E45]/25 hover:border-[#591E45]/60 hover:shadow-xl shadow-[#591E45]/20 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <Settings className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#591E45]" />
                    <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-bold text-[#591E45] leading-tight">FUNCTIONAL CULTURE</h4>
                  </div>
                  <p className="text-slate-700 text-[10px] sm:text-xs md:text-sm font-medium">Agility</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#591E45]/30 to-[#591E45]/15 border-2 border-[#591E45]/50 rounded-lg sm:rounded-xl p-2 sm:p-4 transition-all duration-300 hover:bg-[#591E45]/35 hover:border-[#591E45]/70 hover:shadow-xl shadow-[#591E45]/30 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#591E45]" />
                    <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-bold text-[#591E45]">THE CORE</h4>
                  </div>
                  <p className="text-slate-700 text-[10px] sm:text-xs md:text-sm font-medium">Alignment</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-[#591E45]/20 to-[#591E45]/10 border-2 border-[#591E45]/40 rounded-lg sm:rounded-xl p-2 sm:p-4 transition-all duration-300 hover:bg-[#591E45]/25 hover:border-[#591E45]/60 hover:shadow-xl shadow-[#591E45]/20 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#591E45]" />
                    <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-bold text-[#591E45] leading-tight">EMOTIONAL CULTURE</h4>
                  </div>
                  <p className="text-slate-700 text-[10px] sm:text-xs md:text-sm font-medium">Belonging</p>
                </div>
              </motion.div>
            </div>

            {/* Main Canvas Grid - Mobile Stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
              {/* Left Column - Functional Culture */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-3 sm:space-y-4"
              >
                {[
                  { title: "DECISION-MAKING", icon: Lightbulb, desc: "How decision-making is shared" },
                  { title: "MEETINGS", icon: Calendar, desc: "How we meet, communicate and collaborate" },
                  { title: "NORMS & RULES", icon: BookOpen, desc: "Our ways of work and talent practices" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 10 }}
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#591E45]/30 hover:border-[#591E45]/60 transition-all duration-300 hover:shadow-xl shadow-lg hover:shadow-[#591E45]/20">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#591E45]/20 to-[#591E45]/10 flex items-center justify-center flex-shrink-0 shadow-md">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#591E45]" />
                          </div>
                          <h5 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">{item.title}</h5>
                        </div>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Center Column - The Heart - Mobile Responsive */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center items-center my-6 lg:my-0"
              >
                <motion.div
                  className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    viewBox="0 0 100 90"
                    className="w-full h-auto drop-shadow-2xl"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  >
                    <defs>
                      <linearGradient id="heartFill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#591E45" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#6a2456" stopOpacity="0.15" />
                      </linearGradient>
                      <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                        <feOffset dx="0" dy="6" result="offsetblur" />
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.4" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path
                      d="M50,80 C50,80 15,55 15,35 C15,25 20,15 30,15 C37,15 43,20 50,27 C57,20 63,15 70,15 C80,15 85,25 85,35 C85,55 50,80 50,80 Z"
                      fill="url(#heartFill)"
                      stroke="#591E45"
                      strokeWidth="2"
                      filter="url(#dropShadow)"
                      animate={{
                        strokeWidth: [2, 3, 2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 sm:space-y-3 p-4 sm:p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-center bg-white/95 backdrop-blur-md rounded-md sm:rounded-lg px-2 py-1 sm:px-4 sm:py-2 border-2 border-[#591E45]/40 hover:bg-white hover:border-[#591E45]/60 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-1 mb-0.5 sm:mb-1">
                        <Flag className="w-2 h-2 sm:w-3 sm:h-3 text-[#591E45]" />
                        <p className="text-[8px] sm:text-xs text-[#591E45] font-bold">PRIORITIES</p>
                      </div>
                      <p className="text-[7px] sm:text-[10px] text-slate-700">Cultural priorities that guide focus</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center bg-white rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-6 sm:py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#591E45]/30"
                    >
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                        <Compass className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#591E45]" />
                        <h5 className="text-xs sm:text-base font-bold text-[#591E45]">PURPOSE</h5>
                      </div>
                      <p className="text-[8px] sm:text-xs text-slate-700 font-medium">Why we exist</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-6 sm:py-3 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#591E45]/30"
                    >
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                        <Award className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#591E45]" />
                        <h5 className="text-xs sm:text-base font-bold text-[#591E45]">VALUES</h5>
                      </div>
                      <p className="text-[8px] sm:text-xs text-slate-700 font-medium">What we stand for</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="text-center bg-white/95 backdrop-blur-md rounded-md sm:rounded-lg px-2 py-1 sm:px-4 sm:py-2 border-2 border-[#591E45]/40 hover:bg-white hover:border-[#591E45]/60 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                        <Handshake className="w-2 h-2 sm:w-3 sm:h-3 text-[#591E45]" />
                        <h5 className="text-[9px] sm:text-sm font-bold text-[#591E45]">BEHAVIORS</h5>
                      </div>
                      <p className="text-[7px] sm:text-[10px] text-slate-700">How we act</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Emotional Culture */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-3 sm:space-y-4"
              >
                {[
                  { title: "RITUALS", icon: Sparkles, desc: "How we celebrate our people, projects, successes and work" },
                  { title: "FEEDBACK", icon: MessageCircle, desc: "How we help each other learn and grow" },
                  { title: "PSYCHOLOGICAL SAFETY", icon: ShieldCheck, desc: "How we encourage everyone to speak up and promote participation" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, x: -10 }}
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border-2 border-[#591E45]/30 hover:border-[#591E45]/60 transition-all duration-300 hover:shadow-xl shadow-lg hover:shadow-[#591E45]/20">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#591E45]/20 to-[#591E45]/10 flex items-center justify-center flex-shrink-0 shadow-md">
                            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#591E45]" />
                          </div>
                          <h5 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">{item.title}</h5>
                        </div>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Attribution - Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-12"
            >
              <div className="bg-white/90 backdrop-blur-md border-2 border-slate-300/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* License Info */}
                  <div className="text-center lg:text-left">
                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-600 mb-1">
                      This work is licensed under the Creative Commons Attribution-Share Alike 4.0.
                    </p>
                    <a
                      href="http://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[9px] sm:text-xs text-slate-500 hover:text-[#591E45] transition-colors break-all"
                    >
                      http://creativecommons.org/licenses/by-sa/4.0/
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <motion.a
                      href="http://creativecommons.org/licenses/by-sa/4.0/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shadow-md"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/fearlessculture"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shadow-md"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://www.pinterest.com/fearlessculture"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors shadow-md"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c-5.523 0-10 4.477-10 10 0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281.082.099.093.186.069.287l-.278 1.136c-.043.18-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Designer & Logo */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <div className="text-center sm:text-right">
                      <p className="text-xs sm:text-sm text-slate-700 font-medium">Designed by Gustavo Razzetti</p>
                      <a
                        href="https://www.fearlessculture.design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] sm:text-xs text-slate-500 hover:text-[#591E45] transition-colors"
                      >
                        www.fearlessculture.design
                      </a>
                    </div>
                    <motion.a
                      href="https://www.fearlessculture.design"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 bg-slate-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-slate-700 shadow-lg"
                    >
                      <span className="text-white font-bold text-xs sm:text-sm">Fearless</span>
                      <br />
                      <span className="text-white font-bold text-xs sm:text-sm">Culture</span>
                    </motion.a>
                  </div>
                </div>

                {/* Humanfire Partnership */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 text-center">
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">In partnership with</p>
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <img
                      src="/images/f588b6efb_Logo_5-100.jpg"
                      alt="humanfire logo"
                      className="h-10 sm:h-12 md:h-16 w-auto mx-auto"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Offer - ROTATING CARDS */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <RotatingServicesCards />
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-10 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden bg-white/90 backdrop-blur-xl border-2 border-slate-300/50 shadow-2xl"
          >
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-6 px-2">
                Ready to tune your culture's rhythm?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                Let's create a culture that moves your people and business forward together.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <Link to={createPageUrl("ContactUs")} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-[#591E45] to-[#491735] hover:from-[#491735] hover:to-[#391225] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg shadow-2xl shadow-[#591E45]/40 hover:shadow-[#591E45]/60 transition-all duration-300 border-0 w-full sm:w-auto hover:scale-105">
                    Book Your Culture Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Services")} className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="border-2 border-[#591E45]/40 bg-white text-[#591E45] hover:bg-[#591E45]/10 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg backdrop-blur-sm w-full sm:w-auto shadow-lg hover:shadow-xl">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}