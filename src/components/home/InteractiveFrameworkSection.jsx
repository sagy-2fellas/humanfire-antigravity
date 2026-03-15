
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feather, Bot, BarChart, Sun } from "lucide-react";
import { createPageUrl } from "@/utils";

const frameworkData = [
  {
    icon: Feather,
    trigger: "Shape Strategy & Design",
    title: "human+design",
    description: "We help you design the strategic foundations for a thriving workforce. This involves shaping your organizational structure, defining your talent philosophy, and crafting a compelling Employee Value Proposition (EVP).",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80",
    pageLink: createPageUrl("HumanDesign"),
    color: "red"
  },
  {
    icon: Bot,
    trigger: "Augment with Technology",
    title: "human+assist",
    description: "Leverage the power of technology to augment your HR capabilities. We implement smart tools, AI-powered chatbots, and custom applications to automate processes and provide instant support.",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1470&q=80",
    pageLink: createPageUrl("HumanAssist"),
    color: "blue"
  },
  {
    icon: BarChart,
    trigger: "Unlock Data-Driven Insights",
    title: "human+insight",
    description: "Transform raw data into actionable intelligence. Our approach to people analytics helps you understand the story your data is telling, enabling you to make informed decisions about performance, engagement, and retention.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1470&q=80",
    pageLink: createPageUrl("HumanInsight"),
    color: "green"
  },
  {
    icon: Sun,
    trigger: "Cultivate a Thriving Culture",
    title: "human+culture",
    description: "Culture is the operating system of your organization. We work with you to design and embed a culture that supports your strategic goals, enhances employee experience (EX), and drives transformation from the inside out.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1374&q=80",
    pageLink: createPageUrl("HumanCulture"),
    color: "purple"
  },
];

const colors = {
  red: {
    border: 'border-red-500',
    text: 'text-red-500',
    bg: 'bg-red-500',
    hover: 'hover:border-red-500 hover:shadow-red-100',
  },
  blue: {
    border: 'border-blue-500',
    text: 'text-blue-500',
    bg: 'bg-blue-500',
    hover: 'hover:border-blue-500 hover:shadow-blue-100',
  },
  green: {
    border: 'border-green-500',
    text: 'text-green-500',
    bg: 'bg-green-500',
    hover: 'hover:border-green-500 hover:shadow-green-100',
  },
  purple: {
    border: 'border-purple-500',
    text: 'text-purple-500',
    bg: 'bg-purple-500',
    hover: 'hover:border-purple-500 hover:shadow-purple-100',
  }
}

export default function InteractiveFrameworkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = frameworkData[activeIndex];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How We Help You Thrive<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Our modular framework provides end-to-end solutions, connecting your most pressing business challenges to tangible, people-centric outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Triggers */}
          <div className="flex flex-col gap-4 sticky top-24">
            {frameworkData.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? `border-red-500 bg-white shadow-xl`
                    : `border-transparent hover:bg-white/80 ${colors[item.color].hover} hover:shadow-lg`
                }`}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 360 : 0,
                      scale: activeIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <item.icon className={`w-8 h-8 transition-colors duration-300 ${activeIndex === index ? colors[item.color].text : 'text-slate-500'}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-800">{item.trigger}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Column - Content */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6"
            whileHover={{ 
              y: -4, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="relative aspect-video rounded-xl overflow-hidden mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src={activeData.imageUrl}
                    alt={activeData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-bold text-slate-900 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {activeData.title}<span className={`inline-block w-2 h-2 ${colors[activeData.color].bg} rounded-full ml-2 ember-pulse`}></span>
                </motion.h3>
                
                <motion.p
                  className="text-slate-600 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {activeData.description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
