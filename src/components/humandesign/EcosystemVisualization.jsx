
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  UserCircle,
  Bot,
  Database,
  Server,
  BarChart3,
  FolderKanban,
  Palette,
  ChevronRight } from
"lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const services = {
  "Talent Management Platforms": [
  {
    id: 1,
    badge: "1",
    title: "TalentPrint",
    icon: FileText,
    what: "A self-directed employee assessment and development tool that provides 360-degree feedback, performance management and personalised development plans.",
    why: "Empowers employees to own their growth journey while providing managers with actionable insights.",
    color: "#B82E2B"
  },
  {
    id: 2,
    badge: "2",
    title: "TalentProfile",
    icon: UserCircle,
    what: "TalentProfile lets your employees showcase their skills, career aspirations, culture and engagement sentiment to create a full talent ecosystem.",
    why: "Creates a living, breathing talent database that goes beyond static resumes to capture what truly drives your people.",
    color: "#6F88B5"
  },
  {
    id: 3,
    badge: "3",
    title: "TAILA",
    icon: Bot,
    what: "The Virtual Talent Partner powered by AI, gives you instant, personalised responses about your talent.",
    why: "Democratizes access to talent insights, enabling every manager to make informed decisions in real-time.",
    color: "#1A6566",
    featured: true
  },
  {
    id: 4,
    badge: "4",
    title: "DataHub",
    icon: Database,
    what: "Organises your company's key roles, tags and structures while automating succession and nominations.",
    why: "Brings order to chaos, ensuring your organizational structure always reflects reality.",
    color: "#591E45"
  }],

  "Data & Intelligence Infrastructure": [
  {
    id: 5,
    badge: "1",
    title: "Applications & IT Infrastructure",
    icon: Server,
    what: "Secure, scalable IT infrastructure and talent applications.",
    why: "Provides secure environment and user-friendly applications.",
    color: "#B82E2B"
  },
  {
    id: 6,
    badge: "2",
    title: "Data Management",
    icon: Database,
    what: "People data structure, integration and management.",
    why: "An integrated repository of people insights enables data-driven decisions.",
    color: "#6F88B5"
  },
  {
    id: 7,
    badge: "3",
    title: "Data Visualization",
    icon: BarChart3,
    what: "Real-time interactive, visual dashboards.",
    why: "Supports informed people decisions with real-time insights.",
    color: "#1A6566"
  }],

  "Strategic Enablement": [
  {
    id: 8,
    badge: "1",
    title: "Project & Change Management",
    icon: FolderKanban,
    what: "Implement, inspire and mobilise teams for readiness.",
    why: "Ensures Tech + culture readiness + capability + implementation merge seamlessly.",
    color: "#B82E2B"
  },
  {
    id: 9,
    badge: "2",
    title: "Brand Design Capability",
    icon: Palette,
    what: "Brand alignment, campaign and communication assets.",
    why: "Ensures your HR brand and purpose comes to life in meaningful and beautiful ways.",
    color: "#6F88B5"
  }]

};

function ServiceCard({ service, index, categoryIndex }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full">

      <Card
        className={`relative h-full cursor-pointer overflow-hidden border-2 transition-all duration-300 ${
        service.featured ?
        'border-[#1A6566] shadow-lg shadow-[#1A6566]/20' :
        'border-slate-800 hover:border-slate-700'} glass-effect`
        }
        onClick={() => setIsFlipped(!isFlipped)}>

        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
            }}
            animate={{
              scale: service.featured ? [1, 1.1, 1] : 1,
              boxShadow: service.featured ?
              [
              `0 0 0 0 ${service.color}40`,
              `0 0 0 10px ${service.color}00`,
              `0 0 0 0 ${service.color}00`] :

              undefined
            }}
            transition={{
              duration: 2,
              repeat: service.featured ? Infinity : 0,
              ease: "easeInOut"
            }}>

            {service.badge}
          </motion.div>
        </div>

        <CardContent className="p-6 h-full flex flex-col">
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md"
            style={{
              background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`
            }}
            animate={{
              rotate: isFlipped ? 360 : 0
            }}
            transition={{ duration: 0.6 }}>

            <service.icon
              className="w-7 h-7"
              style={{ color: service.color }} />

          </motion.div>

          <h3 className="text-slate-900 mb-4 text-xl font-bold">
            {service.title}
            {service.featured &&
            <Badge className="ml-2 bg-[#1A6566] text-white text-xs">
                AI Powered
              </Badge>
            }
          </h3>

          <AnimatePresence mode="wait">
            {!isFlipped ?
            <motion.div
              key="what"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.4 }}
              className="flex-1">

                <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                  What
                </p>
                <p className="text-slate-700 leading-relaxed">
                  {service.what}
                </p>
              </motion.div> :

            <motion.div
              key="why"
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.4 }}
              className="flex-1">

                <p className="text-xs uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                  Why
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {service.why}
                </p>
              </motion.div>
            }
          </AnimatePresence>

          <motion.div
            className="mt-4 flex items-center text-sm font-semibold"
            style={{ color: service.color }}
            whileHover={{ x: 4 }}>

            Click to see {isFlipped ? 'What' : 'Why'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </motion.div>
        </CardContent>

        {/* Animated connection lines (decorative) */}
        {index < 3 &&
        <motion.div
          className="absolute bottom-0 right-0 w-px h-8 bg-gradient-to-b from-slate-700 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }} />

        }
      </Card>
    </motion.div>);

}

export default function EcosystemVisualization() {
  return (
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("/images/39aac9433_Email_Design_Pattern.jpg")`,
          backgroundSize: '150px',
          backgroundRepeat: 'repeat'
        }} />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-slate-900 mb-6 text-4xl font-bold lg:text-5xl">The Talent Management Ecosystem


          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            An integrated suite of tools, technology, and expertise designed to transform your talent strategy into competitive advantage.
          </p>
        </motion.div>

        {Object.entries(services).map(([category, items], categoryIndex) =>
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          className="mb-20 last:mb-0">

            {/* Category Title */}
            <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>

              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
              <h3 className="text-slate-900 px-6 text-2xl font-bold">
                {category}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
            </motion.div>

            {/* Service Cards Grid */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {items.map((service, index) =>
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              categoryIndex={categoryIndex} />

            )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>);

}