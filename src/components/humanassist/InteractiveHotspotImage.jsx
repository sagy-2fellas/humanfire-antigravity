
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const hotspots = [
  {
    id: 1,
    position: { top: "20%", left: "15%" },
    title: "Who are our future leaders?",
    description: "Put the right leaders in the right positions."
  },
  {
    id: 2,
    position: { top: "25%", right: "25%" },
    title: "Who should we promote?",
    description: "Create growth opportunities for your top performers."
  },
  {
    id: 3,
    position: { top: "55%", left: "20%" },
    title: "Who has the right skills?",
    description: "Retain and hire employees with critical or scarce skills."
  },
  {
    id: 4,
    position: { bottom: "20%", right: "30%" },
    title: "Who is a flight risk?",
    description: "Prevent turnover of high impact or high demand employees."
  }
];

export default function InteractiveHotspotImage() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#6F88B5]/30">
      {/* Main Image */}
      <img
        src="/images/8ed56abed_Screenshot2025-11-09at220002.png"
        alt="AI-powered talent insights"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#12103F]/60 via-transparent to-transparent"></div>

      {/* Hotspots */}
      {hotspots.map((hotspot) => (
        <div key={hotspot.id}>
          {/* Hotspot Button */}
          <motion.button
            className="absolute w-12 h-12 rounded-full bg-[#6F88B5] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20 border-2 border-white/30"
            style={hotspot.position}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: activeHotspot === hotspot.id 
                ? "0 0 0 0 rgba(111, 136, 181, 0)" 
                : ["0 0 0 0 rgba(111, 136, 181, 0.4)", "0 0 0 20px rgba(111, 136, 181, 0)"]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: activeHotspot === hotspot.id ? 0 : Infinity,
                ease: "easeOut"
              }
            }}
          >
            <AnimatePresence mode="wait">
              {activeHotspot === hotspot.id ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" strokeWidth={3} />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-6 h-6 text-white" strokeWidth={3} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Info Card */}
          <AnimatePresence>
            {activeHotspot === hotspot.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-30"
                style={{
                  ...hotspot.position,
                  transform: (hotspot.position.top && hotspot.position.top.includes("%")) || (hotspot.position.left && hotspot.position.left.includes("%"))
                    ? "translate(-50%, -120%)" 
                    : "translate(-50%, 20%)"
                }}
              >
                <Card className="bg-white/95 backdrop-blur-sm border-2 border-[#6F88B5]/20 shadow-2xl p-6 max-w-xs">
                  <h3 className="text-[#6F88B5] text-lg font-bold mb-2 leading-tight">
                    {hotspot.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {hotspot.description}
                  </p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

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
        }}
      />
    </div>
  );
}
