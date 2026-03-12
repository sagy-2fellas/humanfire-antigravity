import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Shield,
  Target,
  Users,
  MessageSquare,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function RotatingServicesCards() {
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
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/8a968a6ba_AdobeStock_1242859607.jpg"
    },
    {
      icon: Target,
      title: "From Concept to Practice",
      description: "We turn abstract values into lived behaviours through rituals, feedback, and daily habits.",
      color: "from-[#591E45] to-[#491735]",
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/0d620ba59_AdobeStock_856754768.jpg"
    },
    {
      icon: Users,
      title: "Clear Ownership, Real Accountability",
      description: "We define who leads culture at every level.",
      color: "from-[#491735] to-[#591E45]",
      imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/8af2e4938_AdobeStock_13827366981.jpg"
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

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We Offer
            <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-[#591E45] rounded-full ml-2 ember-pulse"></span>
          </h2>
        </motion.div>

        {/* Infinite rotating horizontal row */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -100 * services.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {/* First set of cards */}
              {services.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-[350px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#591E45]/20 transition-all duration-300 flex-shrink-0"
                >
                  <div className="absolute inset-0">
                    <motion.img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/40 to-slate-950/20 group-hover:from-slate-950/70 group-hover:via-slate-950/50 transition-all duration-300`} />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300`}
                    />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#b99ec7] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <motion.div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-30 blur-2xl`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#591E45]/60 rounded-2xl transition-all duration-300" />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {services.map((item, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="group relative w-[350px] h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#591E45]/20 transition-all duration-300 flex-shrink-0"
                >
                  <div className="absolute inset-0">
                    <motion.img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/40 to-slate-950/20 group-hover:from-slate-950/70 group-hover:via-slate-950/50 transition-all duration-300`} />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-25 transition-opacity duration-300`}
                    />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#b99ec7] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <motion.div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-30 blur-2xl`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#591E45]/60 rounded-2xl transition-all duration-300" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}