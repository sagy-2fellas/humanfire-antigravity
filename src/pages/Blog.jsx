import React, { useState } from "react";
import { localBlogStorage } from "@/api/localBlogStorage";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calendar, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

const categories = [
{ value: "all", label: "All Posts", color: "#B82E2B" },
{ value: "talent_strategy", label: "Talent Strategy", color: "#B82E2B" },
{ value: "hr_tech", label: "HR Tech", color: "#6F88B5" },
{ value: "culture", label: "Culture", color: "#591E45" },
{ value: "leadership", label: "Leadership", color: "#1A6566" },
{ value: "future_of_work", label: "Future of Work", color: "#B9472C" },
{ value: "data_insights", label: "Data Insights", color: "#1A6566" }];


export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => localBlogStorage.filter({ status: "published" }, "-publish_date", 100)
  });

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <Badge variant="outline" className="mb-6 text-red-600 border-red-400 bg-red-50 px-4 py-2">
              human+edit Insights
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              The humanfire Blog
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Insights, strategies, and stories from the future of work
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base bg-white border-slate-300 text-slate-900 focus:border-red-500" />

            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) =>
            <Button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              variant={selectedCategory === cat.value ? "default" : "outline"} className="bg-background text-slate-800 px-4 py-2 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 border-slate-300 hover:bg-slate-100"





              style={{
                background: selectedCategory === cat.value ? cat.color : undefined
              }}>

                {cat.label}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "all" && !searchQuery &&
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-900">Featured Posts</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) =>
            <FeaturedPostCard key={post.id} post={post} index={index} />
            )}
            </div>
          </div>
        </motion.section>
      }

      {/* Regular Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ?
          <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div> :
          regularPosts.length === 0 ?
          <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No posts found. Try adjusting your filters.</p>
            </div> :

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) =>
            <BlogPostCard key={post.id} post={post} index={index} />
            )}
            </div>
          }
        </div>
      </section>
    </div>);

}

function FeaturedPostCard({ post, index }) {
  const categoryColor = categories.find((c) => c.value === post.category)?.color || "#B82E2B";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}>

      <Link to={`${createPageUrl("BlogPost")}?slug=${post.slug}`}>
        <Card className="group h-full border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden bg-white shadow">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.featured_image || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

          </div>
          <CardContent className="p-6">
            <Badge
              className="mb-3 text-xs font-medium px-3 py-1"
              style={{ backgroundColor: `${categoryColor}30`, color: categoryColor, borderColor: `${categoryColor}50` }}>

              {categories.find((c) => c.value === post.category)?.label}
            </Badge>
            
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.publish_date && format(new Date(post.publish_date), 'MMM d, yyyy')}
              </div>
              {post.read_time &&
              <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.read_time} min read
                </div>
              }
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>);

}

function BlogPostCard({ post, index }) {
  const categoryColor = categories.find((c) => c.value === post.category)?.color || "#B82E2B";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}>

      <Link to={`${createPageUrl("BlogPost")}?slug=${post.slug}`}>
        <Card className="group h-full border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden bg-white shadow">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={post.featured_image || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

          </div>
          <CardContent className="p-6">
            <Badge
              className="mb-3 text-xs font-medium px-3 py-1"
              style={{ backgroundColor: `${categoryColor}30`, color: categoryColor, borderColor: `${categoryColor}50` }}>

              {categories.find((c) => c.value === post.category)?.label}
            </Badge>
            
            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
              {post.title}
            </h3>
            
            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {post.author_image &&
                <img
                  src={post.author_image}
                  alt={post.author}
                  className="w-8 h-8 rounded-full object-cover" />

                }
                <span className="text-xs text-slate-500">{post.author}</span>
              </div>
              
              {post.read_time &&
              <div className="flex items-center gap-1 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  {post.read_time} min
                </div>
              }
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>);

}