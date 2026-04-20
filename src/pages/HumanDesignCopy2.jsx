import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Users, BrainCircuit, Shield, Megaphone, Zap, Wrench } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import TalentStrategyFlow from "@/components/humandesign/TalentStrategyFlow";

export default function HumanDesignCopy2() {
  // Removed activeFocus state as it's no longer used in the updated Focus Areas section
  // const [activeFocus, setActiveFocus] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Leadership Behaviors & Capability Frameworks",
    description: "Aligned to your strategic demands, we build the behaviors and capabilities your strategy needs to succeed.",
    color: "#B82E2B",
    imageUrl: "/images/e288ba045_AdobeStock_12012901651.jpg"
  },
  {
    icon: Target,
    title: "Strategic Sourcing & External Talent Intelligence",
    description: "Build tomorrow's capability today through intelligent sourcing and market insights.",
    color: "#6F88B5",
    imageUrl: "/images/3b45b7d53_whoarewe.jpg"
  },
  {
    icon: TrendingUp,
    title: "Performance Practice",
    description: "Connect individual goals to organizational growth with personalized learning pathways.",
    color: "#1A6566",
    imageUrl: "/images/25a38fb78_AdobeStock_1404579333.jpg"
  },
  {
    icon: Users,
    title: "Succession Pipelines",
    description: "Objectively identify and develop future leaders before gaps appear.",
    color: "#591E45",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: Shield,
    title: "Retention Strategies",
    description: "Protect critical talent and reduce the cost of unwanted turnover.",
    color: "#B82E2B",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    icon: Megaphone,
    title: "EVP & Employer Branding",
    description: "Articulate what makes you different and attracts and retains your people.",
    color: "#6F88B5",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
  }];


  const processSteps = [
  {
    number: "01",
    icon: Wrench,
    title: "Tools You Already Have",
    description: "We work with your existing systems and infrastructure, maximizing the value of investments you've already made."
  },
  {
    number: "02",
    icon: Zap,
    title: "Enabling Technology",
    description: "We layer smart, AI-powered capabilities that bring intelligence to your talent processes without complex implementations."
  },
  {
    number: "03",
    icon: Users,
    title: "Expert Team Support",
    description: "Our talent strategists work alongside you, bringing deep expertise without expanding your headcount."
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Instant Insights & Impact",
    description: "Real-time data and actionable insights that reflect immediate impact and guide continuous improvement."
  }];


  const challenges = [
  {
    title: "The Strategic Gap",
    description: "The gap between what talent teams know they should do and what their systems allow them to do has never been wider",
    imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lost in Translation",
    description: "Strategic intent rarely translates to operational reality",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Data Trapped",
    description: "Insights sit trapped in data while decisions are made in the dark",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Scaling Challenges",
    description: "Talent practices you need can't scale with current capability",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
  }];


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* 1. Hero Section: Immersive Statement - DARK */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

            {/* Removed the background image pattern div */}
          </motion.div>

          {/* Animated Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

        </div>

        <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}>

                <Badge variant="outline" className="mb-6 text-red-400 border-red-400/50 bg-red-900/20 backdrop-blur-sm px-4 py-2">
                  human+design
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl lg:text-6xl font-bold text-white leading-tight italic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>

                "Talent management is not a department. Not a process.{" "}
                <span className="text-red-400">It's your competitive edge</span>."
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}>

                We design your talent management strategy to feel as human as it is intelligent.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}>

                <Link to={createPageUrl("BookDemo")}>
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Book a Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: New Hero Image */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}>

              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500/30">
                <img
                  src="/images/83fff7af3_AdobeStock_876973765.jpg"
                  alt="Human designing with holographic technology"
                  className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-950/20 to-slate-950 opacity-50"></div>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />

              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}>

          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"
              animate={{
                y: [0, 16, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} />

          </div>
        </motion.div>
      </section>

      {/* 2. The Problem: What's Broken - REDESIGNED WITH HERO LAYOUT */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Better Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <Badge variant="outline" className="mb-6 text-red-600 border-red-600/50 bg-red-50 px-4 py-2 font-semibold">
              The Challenge
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Talent Management,<br />Reimagined
              <span className="inline-block w-4 h-4 bg-red-600 rounded-full ml-3 ember-pulse"></span>
            </h2>
            <p className="text-2xl lg:text-3xl text-slate-700 max-w-5xl mx-auto leading-relaxed font-light">
              Growing organizations recognize that business impact comes from how well they{" "}
              <span className="font-semibold text-red-600">develop, deploy, and retain talent</span>
              —not how perfectly they follow traditional HR processes.
            </p>
          </motion.div>

          {/* Image-Based Challenge Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -8 }}
              className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">

                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img
                  src={challenge.imageUrl}
                  alt={challenge.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }} />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 group-hover:from-slate-950 group-hover:via-slate-950/85 transition-all duration-300" />
                  {/* Soft blue accent overlay on hover */}
                  <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="space-y-4">

                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {challenge.title}
                    </h3>
                    <p className="text-slate-200 text-base leading-relaxed">
                      {challenge.description}
                    </p>
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }} />

                </div>

                {/* Corner decoration - soft blue */}
                <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }} />

              </motion.div>
            )}
          </div>

          {/* Bottom CTA Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16">

            <p className="text-xl text-slate-600 italic">
              It's time to close these gaps and build a talent strategy that truly drives business impact.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. Our Solution: TMaaS Introduction - DARK */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 lg:py-32 bg-slate-900 relative mx-4 sm:mx-6 lg:mx-8 my-8 rounded-3xl">

        {/* Removed the background image pattern div */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              We Close That Gap
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We provide Talent Management as a service. This approach gives you the tools, enabling technology, and actionable insights and the team to transform talent management from an event-driven process into your competitive advantage.
            </p>
          </motion.div>

          {/* Interactive Pillars with Enhanced Connection Visual */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 mt-16 relative z-10">
              {[
              {
                icon: Wrench,
                title: "Tools",
                description: "We design the tools and practices for all talent management processes.",
                color: "#B82E2B"
              },
              {
                icon: Zap,
                title: "Technology",
                description: "AI-powered capabilities that bring intelligence to your talent processes without complex implementations.",
                color: "#6F88B5"
              },
              {
                icon: Users,
                title: "Team",
                description: "Expert talent strategists work alongside you, bringing deep expertise without expanding headcount.",
                color: "#1A6566"
              }].
              map((pillar, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group">

                  <Card className="h-full glass-effect border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-8 text-center space-y-6">
                      <motion.div
                      className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-lg glass-effect"
                      style={{
                        background: `linear-gradient(135deg, ${pillar.color}30, ${pillar.color}10)`,
                        borderColor: `${pillar.color}40`,
                        borderWidth: '2px'
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}>

                        <pillar.icon className="w-10 h-10" style={{ color: pillar.color }} />
                      </motion.div>

                      <h3 className="text-2xl font-bold text-slate-200 uppercase">{pillar.title}</h3>

                      <p className="text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Dynamic Connecting Bridge - Positioned Between Cards */}
            <motion.div
              className="hidden md:block absolute top-1/3 left-0 right-0 -translate-y-1/2 pointer-events-none z-0"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}>

              <div className="relative h-2 max-w-6xl mx-auto">
                {/* Base gradient line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent rounded-full" />

                {/* Animated flowing effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/60 to-transparent rounded-full"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scaleX: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} />


                {/* Animated pulse dots */}
                {[0, 1, 2].map((i) =>
                <motion.div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"
                  style={{ left: `${(i + 1) * 25}%` }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }} />

                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. What We Do: Focus Areas - LIGHT */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="py-24 lg:py-32 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Do
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h2>
            <p className="text-xl text-slate-700"></p>
          </motion.div>

          {/* Interactive Focus Areas Grid with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">

                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img
                  src={area.imageUrl}
                  alt={area.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }} />

                  {/* Gradient Overlay - lighter for more image visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/40 to-slate-950/20 group-hover:from-slate-950/80 group-hover:via-slate-950/50 transition-all duration-300" />
                  {/* Soft blue accent overlay on hover */}
                  <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Title and Description at bottom */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {area.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-400/30 to-transparent opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }} />

                </div>

                {/* Border glow on hover - soft blue */}
                <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300" />

              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* 5. Interactive Talent Strategy Flow - WHITE */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="bg-white">

        <TalentStrategyFlow />
      </motion.div>

      {/* 6. Final CTA - DARK */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 mx-4 sm:mx-6 lg:mx-8 my-8 rounded-3xl">

        {/* Removed the background image pattern div */}

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-700/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }} />

        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-12 lg:p-16 border-2 border-red-500/30 relative overflow-hidden">

            {/* Flowing lines decoration */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}>

              {[...Array(3)].map((_, i) =>
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent"
                style={{
                  top: `${33 * (i + 1)}%`,
                  left: 0,
                  right: 0
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeInOut"
                }} />

              )}
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 relative z-10">
              Ready to design your competitive edge?
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h2>

            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed relative z-10">
              Let's build a talent strategy that is not just a process, but a true driver of business success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to={createPageUrl("BookDemo")}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative">

                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Start Designing Your Strategy
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }} />

                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>);

}