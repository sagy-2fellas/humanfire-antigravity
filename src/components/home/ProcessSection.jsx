
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Lightbulb, Cog, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We start by understanding your unique challenges, culture, and ambitions through deep listening and comprehensive assessment."
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Design",
    description: "We craft tailored strategies and solutions that align with your business goals and create meaningful employee experiences."
  },
  {
    icon: Cog,
    step: "03",
    title: "Deploy",
    description: "We implement with precision, ensuring seamless integration of new processes, technology, and cultural elements."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Deliver",
    description: "We measure impact and continuously optimize to ensure sustainable transformation and lasting results."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function ProcessSection() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"]
  });
  
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
    ]
  );
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 0]);

  return (
    <section className="relative overflow-hidden heat-haze">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-12 lg:mb-24"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 lg:mb-6 text-red-400 border-red-900/50 bg-white/10 backdrop-blur-sm px-4 lg:px-5 py-1.5 lg:py-2 capitalize text-sm lg:text-base">
              Our Methodology
            </Badge>
          </motion.div>
          <motion.h2 
            style={{ 
              clipPath,
              opacity,
              x
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-200 mb-4 lg:mb-8"
          >
            <span className="inline-block">
              How We Work With You
            </span>
            <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Our proven 4-step process ensures every transformation is strategic, human-centered, and built to last.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Connecting line for desktop */}
              {index < processSteps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-20 left-full w-10 h-0.5 bg-gradient-to-r from-red-600/30 via-red-500/30 to-transparent transform -translate-y-1/2 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                ></motion.div>
              )}

              <motion.div
                className="relative glass-effect rounded-2xl p-6 lg:p-10 fire-glow transition-all duration-300 group-hover:shadow-xl h-full"
                whileHover={{
                  borderColor: "rgba(239, 68, 68, 0.5)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 20px rgba(220, 38, 38, 0.2)"
                }}
              >
                <div className="flex items-center justify-between mb-6 lg:mb-8">
                  <motion.div
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, rgb(220 38 38), rgb(239 68 68), rgb(185 28 28))"
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 0 25px rgba(220, 38, 38, 0.4)",
                      transition: { duration: 0.4 }
                    }}
                  >
                    <step.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </motion.div>
                  <motion.span
                    className="text-3xl lg:text-4xl font-bold text-slate-600 group-hover:text-red-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.step}
                  </motion.span>
                </div>

                <motion.h3
                  className="text-xl lg:text-2xl font-bold text-slate-200 mb-4 lg:mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {step.title}<span className="inline-block w-1.5 h-1.5 lg:w-2 lg:h-2 bg-red-600 rounded-full ml-1 ember-pulse"></span>
                </motion.h3>
                <motion.p
                  className="text-slate-400 leading-relaxed text-sm lg:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12 lg:mt-20 px-4"
        >
          <p className="text-lg sm:text-xl text-slate-400 mb-6 lg:mb-8 leading-relaxed">
            Ready to start your transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link to={createPageUrl("BookDemo")} className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <Button className="fire-button text-white font-semibold px-8 lg:px-10 py-5 lg:py-6 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  Let's Discuss Your Needs
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
