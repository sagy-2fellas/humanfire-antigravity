
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Feather, RefreshCw, Boxes, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discover',
    subtitle: 'Understanding and alignment',
    color: 'bg-red-600',
    borderColor: 'border-red-600',
    description: [
      "A clear diagnostics of your current state—strengths, gaps, and root causes",
      "Strategic alignment on priorities and what success looks like",
      "A shared understanding of scope, timelines, and resource requirements",
      "Confidence that we understand your unique context",
    ],
  },
  {
    icon: Feather,
    title: 'Shape',
    subtitle: 'Co-creation and design',
    color: 'bg-slate-700',
    borderColor: 'border-slate-700',
    description: [
      "Customized tools and frameworks for relevant talent practices",
      "A detailed change roadmap with clear milestones and ownership",
      "Pilot-tested solutions with early validation from your teams",
    ],
  },
  {
    icon: RefreshCw,
    title: 'Mobilise',
    subtitle: 'Activation and momentum',
    color: 'bg-slate-600',
    borderColor: 'border-slate-600',
    description: [
      "Strategy becomes reality",
      "Tools deployed and integrated into daily workflows",
      "Employees, Leaders and HR teams trained and confident and engaged",
      "Beautifully crafted campaigns, communication plans and assets",
      "Early adoption metrics showing momentum and impact",
    ],
  },
  {
    icon: Boxes,
    title: 'Enrich',
    subtitle: 'Sustainability and evolution',
    color: 'bg-teal-600',
    borderColor: 'border-teal-600',
    description: [
      "Data and insights tracking impact against your success measures",
      "Continuous improvement processes owned by your team",
      "Internal capability built—your people can run, refine, and scale without us",
      "Documentation and playbooks for enterprise-wide rollout",
    ],
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8">
            How we work
            <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-700 max-w-4xl mx-auto leading-relaxed px-4">
            We believe transformation happens through partnership, not prescription. Here's what you can expect at each stage of our work together.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`${step.color} rounded-t-3xl p-6 sm:p-8 lg:p-10 text-center`}>
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm font-medium">{step.subtitle}</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-xl border-2 border-white/20 rounded-b-3xl p-6 sm:p-8 shadow-xl glass-effect">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-5">What you'll get</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {step.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                      <span className="text-red-600 mt-1 flex-shrink-0 text-base sm:text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 z-10">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" strokeWidth={2.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-white/20 shadow-2xl glass-effect text-center"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
            The Bottom Line
          </h3>
          <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
            <span className="font-bold text-red-600">This isn't a handoff.</span> We're a journey partner. We succeed when you succeed—and success means you're more capable, more confident, and more competitive because of the work we did together.
          </p>
          <p className="text-lg sm:text-xl font-bold text-slate-900 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Ready to get started?
          </p>
          <div className="flex justify-center">
            <Link to={createPageUrl("BookDemo")}>
              <Button size="lg" className="fire-button text-white px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-3xl w-full sm:w-auto">
                Book Your Demo
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
