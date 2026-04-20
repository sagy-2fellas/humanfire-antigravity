
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feather, Bot, BarChart, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const frameworkData = [
  {
    icon: Feather,
    title: "human+design",
    description: "Talent management is not a department. It's your competitive edge. We design your talent management strategy to feel as human as it is intelligent.",
    imageUrl: "/images/eb016b0ba_AdobeStock_876973765.jpg",
    pageLink: createPageUrl("HumanDesign"),
    color: "#B82E2B",
    bgFrom: "from-[#B82E2B]/20",
    borderColor: "border-[#B82E2B]/30",
    buttonBg: "bg-[#B82E2B] hover:bg-[#9a2624]",
  },
  {
    icon: Bot,
    title: "human+assist",
    description: "Smart tools need human outcomes. We deploy Talent Management as a Service to bring meaning to technology.",
    imageUrl: "/images/ff90d676f_AdobeStock_837363881.jpg",
    pageLink: createPageUrl("HumanAssist"),
    color: "#6F88B5",
    bgFrom: "from-[#6F88B5]/20",
    borderColor: "border-[#6F88B5]/30",
    buttonBg: "bg-[#6F88B5] hover:bg-[#5d749e]",
  },
  {
    icon: BarChart,
    title: "human+insight",
    description: "Data is the compass. People are the journey. Because the future of work isn't a spreadsheet. It's a story! We turn data into insights for relevant talent management strategies that shape what's next.",
    imageUrl: "/images/88cf9af30_AdobeStock_1423904126.jpg",
    pageLink: createPageUrl("HumanInsight"),
    color: "#1A6566",
    bgFrom: "from-[#1A6566]/20",
    borderColor: "border-[#1A6566]/30",
    buttonBg: "bg-[#1A6566] hover:bg-[#145253]",
  },
  {
    icon: Sun,
    title: "human+culture",
    description: "Culture is the rhythm of how we work, lead, and belong. We tune the rhythm to match your ambition, because change doesn't happen in a memo. It happens in a movement. And movement ignites culture.",
    imageUrl: "/images/9eebaf541_AdobeStock_13128754921.jpg",
    pageLink: createPageUrl("HumanCulture"),
    color: "#591E45",
    bgFrom: "from-[#591E45]/20",
    borderColor: "border-[#591E45]/30",
    buttonBg: "bg-[#591E45] hover:bg-[#491735]",
  },
];

export default function InteractiveFrameworkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = frameworkData[activeIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What We Do<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
            Our modular framework provides end-to-end solutions, connecting your most pressing business challenges to tangible, people-centric outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Triggers */}
          <div className="flex flex-col gap-3 sm:gap-4 sticky top-24">
            {frameworkData.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`text-left p-5 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? `border-[${item.color}] bg-slate-800/50 shadow-xl`
                    : `border-slate-800 hover:border-slate-700 hover:bg-slate-800/30`
                }`}
                style={activeIndex === index ? { borderColor: item.color } : {}}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: activeIndex === index ? 360 : 0,
                      scale: activeIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <item.icon
                      className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300"
                      style={{ color: activeIndex === index ? item.color : '#94a3b8' }}
                    />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-200">{item.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Column - Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border-2 bg-slate-900/50"
              style={{ borderColor: `${activeData.color}30` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={activeData.imageUrl}
                  alt={activeData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {activeData.title}
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full ml-2 ember-pulse"
                    style={{ backgroundColor: activeData.color }}
                  ></span>
                </motion.h3>

                <motion.p
                  className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {activeData.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <Link to={activeData.pageLink}>
                    <Button
                      size="lg"
                      className={`${activeData.buttonBg} text-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 w-full sm:w-auto`}
                    >
                      Learn More About {activeData.title}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
