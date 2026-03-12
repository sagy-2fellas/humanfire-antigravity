
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Services() {
  const coreAreas = [
    {
      title: "human+design",
      category: "strategy",
      description: "organizational design, talent philosophy, and employee value proposition crafting",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-red-900/30 text-red-400 border-red-500/30",
      link: createPageUrl("HumanDesign")
    },
    {
      title: "human+assist",
      category: "technology",
      description: "ai chatbots, hr process automation, and custom application development",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-blue-900/30 text-blue-400 border-blue-500/30",
      link: createPageUrl("HumanAssist")
    },
    {
      title: "human+insight",
      category: "analytics",
      description: "people analytics, data storytelling, and performance metric dashboards",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-green-900/30 text-green-400 border-green-500/30",
      link: createPageUrl("HumanInsight")
    },
    {
      title: "human+culture",
      category: "experience",
      description: "employee experience design, culture transformation, and change management",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-purple-900/30 text-purple-400 border-purple-500/30",
      link: createPageUrl("HumanCulture")
    },
    {
      title: "talent assessment",
      category: "evaluation",
      description: "comprehensive talent evaluation, competency mapping, and leadership potential analysis",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-orange-900/30 text-orange-400 border-orange-500/30",
      link: createPageUrl("BookDemo")
    },
    {
      title: "workforce planning",
      category: "planning",
      description: "succession planning, future workforce modeling, and organizational capability building",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      badgeColor: "bg-teal-900/30 text-teal-400 border-teal-500/30",
      link: createPageUrl("BookDemo")
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 text-red-400 border-red-500/30 bg-red-900/20 px-4 py-2 capitalize">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-6 max-w-4xl mx-auto leading-tight">
              We Offer A Comprehensive Range Of Human+ Services<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our holistic approach integrates strategy, technology, data, and culture to build resilient, high-performing organizations ready for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreAreas.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <Card className="group glass-effect border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl cursor-pointer h-full">
                    <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className={`${service.badgeColor} mb-3 text-xs font-medium px-3 py-1 border`}>
                        {service.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
        className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready To Build Your Future-Ready Workforce<span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-1 ember-pulse"></span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Our framework is designed to be modular. Let's discuss which elements will have the greatest impact on your organization today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("ContactUs")}>
                <Button size="lg" className="fire-button text-white px-8">
                  Book Your Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to={createPageUrl("Portfolio")}>
                <Button size="lg" variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white hover:text-slate-800">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
