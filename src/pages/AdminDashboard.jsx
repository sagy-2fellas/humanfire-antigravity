import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Users, Mail, Settings, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AdminDashboard() {
  const adminCards = [
    {
      title: "Blog Management",
      description: "Create, edit, and manage blog posts",
      icon: BookOpen,
      link: createPageUrl("BlogAdmin"),
      color: "bg-red-600"
    },
    {
      title: "Newsletter Subscribers",
      description: "View and manage newsletter subscriptions",
      icon: Mail,
      link: createPageUrl("NewsletterAdmin"),
      color: "bg-blue-600"
    },
    {
      title: "Contact Leads",
      description: "View demo requests and contact submissions",
      icon: Users,
      link: createPageUrl("AdminDashboard"), // You can create this later
      color: "bg-green-600"
    },
    {
      title: "Analytics",
      description: "View site analytics and insights",
      icon: BarChart,
      link: createPageUrl("AdminDashboard"), // You can create this later
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Admin Dashboard
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
          </h1>
          <p className="text-xl text-slate-400">Manage your humanfire platform</p>
        </motion.div>

        {/* Admin Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={card.link}>
                <Card className="group glass-effect border-2 border-slate-800 hover:border-slate-700 transition-all duration-300 h-full cursor-pointer hover:shadow-xl">
                  <CardHeader>
                    <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-xl text-slate-200 group-hover:text-white transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">{card.description}</p>
                    <Button 
                      className="w-full bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 group-hover:border-red-500 group-hover:text-red-400 transition-colors"
                    >
                      Open
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="glass-effect border-2 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-200">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("BlogEditor")}>
                  <Button className="fire-button text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    New Blog Post
                  </Button>
                </Link>
                <Link to={createPageUrl("Blog")}>
                  <Button className="bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Blog
                  </Button>
                </Link>
                <Link to={createPageUrl("Home")}>
                  <Button className="bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700">
                    <Settings className="w-4 h-4 mr-2" />
                    Back to Site
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}