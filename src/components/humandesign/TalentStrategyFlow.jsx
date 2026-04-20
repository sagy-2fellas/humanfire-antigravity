import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  TrendingUp,
  Target,
  CheckCircle,
  Zap,
  DollarSign,
  BarChart3,
  RotateCcw,
  ArrowDown } from
"lucide-react";

// Mapping between start nodes and their corresponding secondary nodes
const nodeMapping = {
  "high-impact-roles": "critical-alignment",
  "high-impact-talent": "talent-development",
  "retention": "talent-value",
  "succession-risk": "boost-performance"
};

const flowNodes = {
  start: [
  {
    id: "high-impact-roles",
    title: "High Impact Roles",
    question: "Have you identified your high-impact positions?",
    icon: Users,
    color: "#B82E2B",
    noOutcome: "High Impact Position Assessment"
  },
  {
    id: "high-impact-talent",
    title: "High Impact Talent",
    question: "Have you identified your high-impact talent?",
    icon: Award,
    color: "#6F88B5",
    noOutcome: "High Impact Talent Assessment"
  },
  {
    id: "retention",
    title: "Retention",
    question: "Are they likely to stay?",
    icon: TrendingUp,
    color: "#1A6566"
  },
  {
    id: "succession-risk",
    title: "Succession Risk",
    question: 'Do you have a "ready now" successor?',
    icon: Target,
    color: "#591E45"
  }],

  secondary: [
  {
    id: "critical-alignment",
    title: "Critical Alignment",
    question: "Do you have high-impact talent in high impact positions?",
    icon: CheckCircle,
    color: "#B82E2B",
    outcomes: ["Strategic Sourcing & External Talent Intelligence", "EVP & Employer Branding"]
  },
  {
    id: "talent-development",
    title: "Talent Development",
    question: "Can you develop them into high impact talent?",
    icon: Zap,
    color: "#6F88B5"
  },
  {
    id: "talent-value",
    title: "Talent Value",
    question: "Do they have specific talent value?",
    icon: DollarSign,
    color: "#1A6566"
  },
  {
    id: "boost-performance",
    title: "Boost Performance",
    question: "How do you boost their performance?",
    icon: BarChart3,
    color: "#591E45"
  }],

  outcomes: [
  {
    id: "leadership-behaviors",
    title: "Leadership Behaviors & Capability Frameworks",
    description: "Aligned to your strategic demands, we build the behaviors and capabilities your strategy needs to succeed.",
    color: "#B82E2B"
  },
  {
    id: "strategic-sourcing",
    title: "Strategic Sourcing & External Talent Intelligence",
    description: "Build tomorrow's capability today through intelligent sourcing and market insights.",
    color: "#6F88B5"
  },
  {
    id: "performance-practice",
    title: "Performance Practice",
    description: "Connect individual goals to organizational growth with personalized learning pathways.",
    color: "#1A6566"
  },
  {
    id: "succession-pipelines",
    title: "Succession Pipelines",
    description: "Objectively identify and develop future leaders before gaps appear.",
    color: "#591E45"
  },
  {
    id: "retention-strategies",
    title: "Retention Strategies",
    description: "Protect critical talent and reduce the cost of unwanted turnover.",
    color: "#B82E2B"
  },
  {
    id: "evp-branding",
    title: "EVP & Employer Branding",
    description: "Articulate what makes you different and attracts and retains your people.",
    color: "#6F88B5"
  }]

};

function FlowNode({ node, onYes, onNo, isActive, delay = 0, decisionMade = null }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative">

      <Card
        className={`glass-effect border-2 transition-all duration-300 ${
        isActive ? `shadow-lg shadow-${node.color}/20` : decisionMade ? 'opacity-50' : 'border-slate-800'}`
        }
        style={{
          borderColor: isActive ? node.color : undefined
        }}>

        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background: `linear-gradient(135deg, ${node.color}, ${node.color}dd)`
              }}
              animate={{
                scale: isActive ? [1, 1.1, 1] : 1,
                boxShadow: isActive ?
                [
                `0 0 0 0 ${node.color}40`,
                `0 0 0 10px ${node.color}00`,
                `0 0 0 0 ${node.color}00`] :

                undefined
              }}
              transition={{
                duration: 2,
                repeat: isActive ? Infinity : 0,
                ease: "easeInOut"
              }}>

              <node.icon className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-slate-600 text-lg font-bold">{node.title}</h3>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            {node.question}
          </p>

          {isActive &&
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex gap-3 pt-2">

              <Button
              onClick={onYes}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white">

                Yes
              </Button>
              <Button
              onClick={onNo}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white">

                No
              </Button>
            </motion.div>
          }

          {decisionMade &&
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center">

              <Badge
              className={`${
              decisionMade === 'yes' ?
              'bg-green-600 text-white' :
              'bg-red-600 text-white'}`
              }>

                {decisionMade === 'yes' ? 'Yes ✓' : 'No ✗'}
              </Badge>
            </motion.div>
          }

          {node.noOutcome && decisionMade === 'no' &&
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }} className="bg-slate-200 text-slate-800 p-3 text-sm rounded-lg italic border border-slate-700">


              → {node.noOutcome}
            </motion.div>
          }
        </CardContent>
      </Card>
    </motion.div>);

}

function ConnectionLine({ active, vertical = false, delay = 0, highlight = false, fromColor = "#ef4444" }) {
  return (
    <motion.div
      initial={{ scaleY: vertical ? 0 : 1, scaleX: vertical ? 1 : 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`${vertical ? 'w-0.5 h-12' : 'h-0.5 w-12'} mx-auto relative overflow-hidden`}
      style={{ originY: vertical ? 0 : 0.5, originX: vertical ? 0.5 : 0 }}>

      <div className={`absolute inset-0`} style={{
        background: highlight ? fromColor : active ? `${fromColor}80` : '#334155'
      }} />
      {highlight &&
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to ${vertical ? 'bottom' : 'right'}, ${fromColor}, ${fromColor}dd)`
        }}
        animate={{
          [vertical ? 'y' : 'x']: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }} />

      }
    </motion.div>);

}

function OutcomeNode({ outcome, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>

      <Card
        className="glass-effect border-2 transition-all duration-300 hover:shadow-lg h-full"
        style={{ borderColor: outcome.color }}>

        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <motion.div
              className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
              style={{ backgroundColor: outcome.color }}
              animate={{
                boxShadow: [
                `0 0 0 0 ${outcome.color}80`,
                `0 0 0 8px ${outcome.color}00`,
                `0 0 0 0 ${outcome.color}00`]

              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }} />

            <div className="flex-1 space-y-2">
              <h4 className="text-slate-900 text-base font-bold leading-tight">
                {outcome.title}
              </h4>
              {outcome.description &&
              <p className="text-slate-600 text-sm leading-relaxed">
                  {outcome.description}
                </p>
              }
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>);

}

export default function TalentStrategyFlow() {
  const [decisions, setDecisions] = useState({});
  const [activeNode, setActiveNode] = useState("high-impact-roles");
  const [showOutcomes, setShowOutcomes] = useState(false);
  const [activePath, setActivePath] = useState([]);

  const handleDecision = async (nodeId, decision) => {
    setDecisions((prev) => ({ ...prev, [nodeId]: decision }));
    setActivePath((prev) => [...prev, { nodeId, decision }]);

    // Check if this is a start node
    const isStartNode = flowNodes.start.some((n) => n.id === nodeId);

    if (isStartNode) {
      // Find next unanswered start node
      const nextStartNode = flowNodes.start.find((n) =>
      decisions[n.id] === undefined && n.id !== nodeId
      );

      if (nextStartNode) {
        // Move to next start node
        setActiveNode(nextStartNode.id);
      } else {
        // All start nodes answered, move to first secondary node
        const firstSecondaryNode = flowNodes.secondary[0];
        setActiveNode(firstSecondaryNode.id);
      }
    } else {
      // We're in secondary nodes
      const allSecondaryAnswered = flowNodes.secondary.every((n) =>
      decisions[n.id] !== undefined || n.id === nodeId
      );

      if (allSecondaryAnswered) {
        // All secondary nodes answered, show outcomes
        setShowOutcomes(true);
      } else {
        // Find next unanswered secondary node
        const nextSecondary = flowNodes.secondary.find((n) =>
        decisions[n.id] === undefined && n.id !== nodeId
        );
        if (nextSecondary) {
          setActiveNode(nextSecondary.id);
        }
      }
    }
  };

  const resetFlow = () => {
    setDecisions({});
    setActiveNode("high-impact-roles");
    setShowOutcomes(false);
    setActivePath([]);
  };

  // Check if all start nodes have been answered
  const allStartNodesAnswered = flowNodes.start.every((n) => decisions[n.id] !== undefined);

  return (
    <section className="py-24 relative bg-white">
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

          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{
                y: [0, 8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className="w-8 h-8 text-red-600" strokeWidth={3} />
            </motion.div>
          </div>
          
          <p className="text-2xl font-semibold text-slate-900 max-w-3xl mx-auto leading-relaxed">
            Answer these questions and see how our design focus areas unfold
          </p>
        </motion.div>

        {/* Fixed Reset Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="fixed top-24 right-8 z-50">

          <Button
            onClick={resetFlow}
            variant="outline"
            size="sm"
            className="border-slate-300 bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-slate-50 shadow-lg glass-effect">

            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </motion.div>

        {/* Flow Visualization */}
        <div className="space-y-12">
          {/* Step 1: Initial Questions */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {flowNodes.start.map((node, index) =>
              <div key={node.id} className="relative">
                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-1 border-2 border-white/20 shadow-lg glass-effect">
                    <FlowNode
                    node={node}
                    isActive={activeNode === node.id}
                    decisionMade={decisions[node.id]}
                    onYes={() => handleDecision(node.id, 'yes')}
                    onNo={() => handleDecision(node.id, 'no')}
                    delay={index * 0.1} />

                  </div>
                  
                  {/* Individual connection line to corresponding secondary node */}
                  {allStartNodesAnswered && decisions[node.id] && nodeMapping[node.id] &&
                <ConnectionLine
                  vertical
                  delay={0.3}
                  active
                  highlight={activeNode === nodeMapping[node.id] || decisions[nodeMapping[node.id]] !== undefined}
                  fromColor={node.color} />

                }
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Step 2: Secondary Questions */}
          <AnimatePresence>
            {allStartNodesAnswered &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {flowNodes.secondary.map((node, index) =>
              <div key={node.id} className="bg-white/80 backdrop-blur-xl rounded-2xl p-1 border-2 border-white/20 shadow-lg glass-effect">
                    <FlowNode
                  node={node}
                  isActive={activeNode === node.id}
                  decisionMade={decisions[node.id]}
                  onYes={() => handleDecision(node.id, 'yes')}
                  onNo={() => handleDecision(node.id, 'no')}
                  delay={index * 0.1 + 0.3} />

                  </div>
              )}
              </motion.div>
            }
          </AnimatePresence>

          {/* Connection Line */}
          {showOutcomes &&
          <ConnectionLine vertical delay={0.5} active highlight fromColor="#B82E2B" />
          }

          {/* Step 3: Outcomes */}
          <AnimatePresence>
            {showOutcomes &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8">

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center">

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Your Talent Strategy Design Areas
                  </h3>
                  <p className="text-slate-700">Depending on your business strategy and talent needs, here are the key design areas we focus on

                </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {flowNodes.outcomes.map((outcome, index) =>
                <OutcomeNode
                  key={outcome.id}
                  outcome={outcome}
                  delay={index * 0.1 + 0.5} />

                )}
                </div>

                {/* Final Outcome Blocks */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}>

                    <Card className="bg-gradient-to-br from-[#6F88B5] to-[#5a6d94] border-2 border-[#6F88B5] overflow-hidden relative">
                      <CardContent className="p-8 text-center relative z-10">
                        <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#6F88B5]/30 to-transparent opacity-30"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }} />

                        <CheckCircle className="w-12 h-12 text-white mx-auto mb-4 relative z-10" />
                        <h4 className="text-2xl font-bold text-white mb-2 relative z-10">
                          The Ideal Outcome
                        </h4>
                        <p className="text-white relative z-10">
                          Aligned talent strategy driving business success
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}>

                    <Card className="bg-gradient-to-br from-[#B82E2B] to-[#9a2523] border-2 border-[#B82E2B] overflow-hidden relative">
                      <CardContent className="p-8 text-center relative z-10">
                        <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#B82E2B]/30 to-transparent opacity-30"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1.5
                        }} />

                        <Target className="w-12 h-12 text-white mx-auto mb-4 relative z-10" />
                        <h4 className="text-2xl font-bold text-white mb-2 relative z-10">
                          Manage for the Ideal Outcome
                        </h4>
                        <p className="text-white relative z-10">
                          Continuous optimization and strategic intervention
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </section>);

}