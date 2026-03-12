import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Target, Zap, Shield, TrendingUp, Users, CheckCircle, Sparkles, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import EcosystemVisualization from "@/components/humandesign/EcosystemVisualization";
import InteractiveHotspotImage from "@/components/humanassist/InteractiveHotspotImage";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function HumanAssist() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const [isTailaVideoOpen, setIsTailaVideoOpen] = React.useState(false);

  const whatWeDoFeatures = [
  {
    icon: Zap,
    title: "Plug & Play Power",
    description: "Automate and generate talent profiles, performance data, talent reviews, succession bench strength, retention & engagement, talent value analytics",
    iconBg: "bg-[#6F88B5]/20"
  },
  {
    icon: Target,
    title: "Consistent, Connected Talent Practices",
    description: "Digitised processes across business units enable mobility and alignment.",
    iconBg: "bg-[#6F88B5]/20"
  },
  {
    icon: Shield,
    title: "One Source of Truth",
    description: "Integrated assessments and insights fuel smarter decisions.",
    iconBg: "bg-[#6F88B5]/20"
  },
  {
    icon: TrendingUp,
    title: "Succession, Sorted",
    description: "Identify and prepare future talent before gaps appear",
    iconBg: "bg-[#6F88B5]/20"
  },
  {
    icon: Users,
    title: "Retention Radar",
    description: "Predict and prevent talent loss with AI-powered insights.",
    iconBg: "bg-[#6F88B5]/20"
  },
  {
    icon: CheckCircle,
    title: "Performance That Drives Growth",
    description: "Align goals with ambition — and track what matters.",
    iconBg: "bg-[#6F88B5]/20"
  }];


  const whyProblems = [
  {
    title: "Traditional HR systems are not built for integration in the flow of work",
    description: "They prioritise transactional HR processes over talent value enablers such as succession, retention, culture, potential in a complete ecosystem"
  },
  {
    title: "Too rigid for today's work",
    description: "They don't flex with hybrid, fluid careers or integrate with a range of talent practices and moments that matter that impact talent management."
  },
  {
    title: "Disconnected from culture",
    description: "Ignore what truly drives engagement and adoption of talent practices."
  },
  {
    title: "One-size-fits-none",
    description: "They fail to reflect diverse ambitions of the organisation."
  },
  {
    title: "Automate the wrong things",
    description: "Legacy tech doesn't fix broken processes—it just speeds up and automates what doesn't work."
  }];


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - DARK */}
      <section ref={ref} className="relative py-32 overflow-hidden bg-[#12103F]">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(111, 136, 181, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(111, 136, 181, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating orbs */}
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-[#6F88B5]/15 rounded-full blur-3xl"
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
            }} />

          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#6F88B5]/10 rounded-full blur-3xl"
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
            }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6F88B5]/10 border border-[#6F88B5]/30">
                <Bot className="w-4 h-4 text-[#6F88B5]" strokeWidth={2.5} />
                <span className="text-sm font-semibold text-[#6F88B5]">human+assist</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Smart tools.<br />Human outcomes.
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                We deploy a future-fit talent management solution that unlocks talent value—ensuring the right people, with the right capabilities, are in place to deliver on your business ambition, scale growth, and lead the organisation into what's next.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("ContactUs")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#091E54] hover:from-[#091E54] hover:to-[#6F88B5] text-white px-8 py-6 text-lg shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 group border-0">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#6F88B5]/30 bg-[#6F88B5]/5 text-[#6F88B5] hover:bg-[#6F88B5]/10 px-8 py-6 text-lg backdrop-blur-sm"
                  onClick={() => setIsVideoModalOpen(true)}>

                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#6F88B5]/30">

              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/ff90d676f_AdobeStock_837363881.jpg"
                alt="Human interacting with AI interface"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#12103F] via-transparent to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#12103F]/20 to-[#12103F] opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-5xl w-full bg-[#12103F] border-2 border-[#6F88B5]/30 p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-white">
              Watch Demo
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1133460624?autoplay=1&title=0&byline=0&portrait=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Demo Video" />
          </div>
        </DialogContent>
      </Dialog>

      {/* Why We Do It - Problem Section - WHITE */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 bg-white relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Old Talent Systems No Longer Work for People
              <span className="inline-block w-3 h-3 bg-[#6F88B5] rounded-full ml-2 ember-pulse"></span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#6F88B5]/20">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional systems"
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating accent element */}
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 bg-[#6F88B5]/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} />

            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6">

              {whyProblems.map((problem, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 group">

                  <div className="w-10 h-10 rounded-lg bg-[#6F88B5]/10 border border-[#6F88B5]/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#6F88B5] font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#6F88B5] transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* TAILA Section - DARK */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-32 relative overflow-hidden bg-[#12103F]">

        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(111, 136, 181, 0.1) 0%, transparent 50%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <motion.div
              className="flex justify-center mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/d98cb3a90_TAILA_AI_that_enhances_the_quality_of_human_relationships__1_-removebg-preview.png"
                alt="TAILA AI Assistant"
                className="w-auto h-40 object-contain drop-shadow-2xl" />

            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet TAILA: Your Virtual Talent Partner
            </h2>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">Every business requires managers to drive results — but they lack the time, tools, and training to lead effectively.

TAILA closes the manager gap
Unlike generic AI, TAILA connects your behavioral, role, and performance data to deliver personalized, actionable guidance — turning every manager into a confident leader. Watch below:
            </p>

            {/* Clickable TAILA Demo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12">

              <motion.div
                onClick={() => setIsTailaVideoOpen(true)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border-4 border-[#6F88B5]/30 hover:border-[#6F88B5]/60 transition-all duration-300">

                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/f95a550cc_Screenshot2025-11-06at144922.png"
                  alt="TAILA Demo"
                  className="w-full h-auto" />

                {/* Play button overlay */}
                <div className="absolute inset-0 bg-[#12103F]/40 group-hover:bg-[#12103F]/50 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#6F88B5] flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}>

                    <Play className="w-10 h-10 text-white ml-1" />
                  </motion.div>
                </div>

                {/* Click to watch text */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#6F88B5] px-6 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-sm whitespace-nowrap">
                    Click to watch how TAILA works
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA button */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-6">

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="https://calendly.com/d/cptb-6by-68r/talent-strategy-call" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#091E54] hover:from-[#091E54] hover:to-[#6F88B5] text-white px-10 py-6 text-lg font-semibold shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 border-0">
                  Book a session to find out more
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* TAILA Video Modal */}
      <Dialog open={isTailaVideoOpen} onOpenChange={setIsTailaVideoOpen}>
        <DialogContent className="max-w-5xl w-full bg-[#12103F] border-2 border-[#6F88B5]/30 p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-white">
              See TAILA In Action
            </DialogTitle>
          </DialogHeader>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/1133460624?autoplay=1&title=0&byline=0&portrait=0"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="TAILA Demo Video" />
          </div>
        </DialogContent>
      </Dialog>
      
      {/* What We Do - WHITE WITH ENHANCED DEPTH */}
      <section className="py-32 bg-gradient-to-br from-slate-100 via-slate-50 to-white relative overflow-hidden">
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(111, 136, 181, 0.05) 0%, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              What We Do<span className="text-[#6F88B5]">.</span>
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Powering Your Talent Strategy With Intelligent Automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDoFeatures.map((feature, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group">
                <div className="h-full p-8 relative overflow-hidden rounded-2xl transition-all duration-300">
                  {/* Multiple layered backgrounds for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/90 to-slate-100/80"></div>
                  
                  {/* Glossy overlay layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-slate-100/40 backdrop-blur-sm"></div>
                  
                  {/* Strong border with shadow */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-slate-300/70 group-hover:border-[#6F88B5]/70 transition-all duration-300 shadow-lg"></div>
                  
                  {/* Inner shadow for depth */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.06)]"></div>
                  
                  {/* Shine effect on hover */}
                  <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#6F88B5]/0 via-[#6F88B5]/15 to-[#6F88B5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}>
                </motion.div>
                  
                  {/* Outer shadow glow on hover */}
                  <div className="absolute inset-0 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:shadow-[#6F88B5]/30 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} backdrop-blur-sm border border-[#6F88B5]/20 flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:border-[#6F88B5]/40 transition-all duration-300`}>
                      <feature.icon className="w-8 h-8 text-[#6F88B5]" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#6F88B5] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Top-right accent glow - more visible */}
                  <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-[#6F88B5]/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </motion.div>
                  
                  {/* Bottom-left accent glow for more depth */}
                  <motion.div
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-slate-400/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500">
                </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      {/* Image + Content Section - DARK */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 relative bg-[#12103F]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Interactive Image with Hotspots */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative">

              <InteractiveHotspotImage />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6">

              <Badge className="bg-[#6F88B5]/20 text-[#6F88B5] border-[#6F88B5]/30 px-4 py-2 text-sm font-semibold">
                Talent Management as a Service
              </Badge>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Get fast, accurate answers to every talent question
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Talent Management is a total talent solution - everything you need to manage your talent in a growing business.
              </p>
              
              <div className="pt-4">
                <Link to={createPageUrl("ContactUs")}>
                  <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#091E54] hover:from-[#091E54] hover:to-[#6F88B5] text-white px-8 py-6 text-lg shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 group border-0">
                    Book a Free Strategy Session
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* The Talent Management Ecosystem - WHITE */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="relative bg-white">

        <EcosystemVisualization />
      </motion.div>

      {/* CTA Section - DARK */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-24 relative bg-[#12103F]">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl p-12 overflow-hidden bg-white/5 backdrop-blur-xl border-2 border-[#6F88B5]/20">
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready To Transform Your Talent Technology?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Let's Discuss How We Can Streamline Your Talent Processes And Empower Your Managers With AI-Driven Insights.

              </p>
              
              <Link to={createPageUrl("ContactUs")}>
                <Button size="lg" className="bg-gradient-to-r from-[#6F88B5] to-[#091E54] hover:from-[#091E54] hover:to-[#6F88B5] text-white px-10 py-6 text-lg shadow-lg shadow-[#6F88B5]/25 hover:shadow-[#6F88B5]/40 transition-all duration-300 border-0">
                  Book Your Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>);

}