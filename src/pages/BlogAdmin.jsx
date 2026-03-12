import React, { useState, useEffect } from "react";
import { localAuth } from "@/api/localAuth";
import { localBlogStorage } from "@/api/localBlogStorage";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreVertical, Edit, Trash2, Eye, Star, Archive, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

const categories = [
  { value: "all", label: "All Posts" },
  { value: "talent_strategy", label: "Talent Strategy" },
  { value: "hr_tech", label: "HR Tech" },
  { value: "culture", label: "Culture" },
  { value: "leadership", label: "Leadership" },
  { value: "future_of_work", label: "Future of Work" },
  { value: "data_insights", label: "Data Insights" }
];

const statuses = [
  { value: "all", label: "All Statuses" },
  { value: "draft", label: "Draft" },
  { value: "published", label: "Published" },
  { value: "archived", label: "Archived" }
];

export default function BlogAdmin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await localAuth.isAuthenticated();
        
        if (!isAuth) {
          window.location.href = `${createPageUrl("AdminLogin")}?next=${encodeURIComponent(window.location.href)}`;
          return;
        }

        setIsAuthenticated(true);
        const user = await localAuth.me();
        
        if (user.role === 'admin') {
          setIsAuthorized(true);
        }
      } catch (error) {
        window.location.href = `${createPageUrl("AdminLogin")}?next=${encodeURIComponent(window.location.href)}`;
      } finally {
        setIsCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['admin-blog-posts'],
    queryFn: () => localBlogStorage.list('-updated_date', 100),
    enabled: isAuthorized
  });

  const deletePostMutation = useMutation({
    mutationFn: (postId) => localBlogStorage.delete(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
    }
  });

  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }) => localBlogStorage.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
    }
  });

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || post.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (postId) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePostMutation.mutate(postId);
    }
  };

  const handleToggleFeatured = (post) => {
    updatePostMutation.mutate({
      id: post.id,
      data: { featured: !post.featured }
    });
  };

  const handleUpdateStatus = (post, newStatus) => {
    updatePostMutation.mutate({
      id: post.id,
      data: { status: newStatus }
    });
  };

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === "published").length,
    drafts: posts.filter(p => p.status === "draft").length,
    featured: posts.filter(p => p.featured).length
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated && !isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <Card className="border-2 border-red-200 bg-white shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-red-50 border-2 border-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h1>
              <p className="text-slate-600 mb-6">
                You don't have permission to access this page. Admin privileges are required.
              </p>
              <Link to={createPageUrl("Home")}>
                <Button className="fire-button text-white">
                  Return to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Blog Management</h1>
            <p className="text-slate-600">Create and manage your blog posts</p>
          </div>
          <Link to={createPageUrl("BlogEditor")}>
            <Button className="fire-button text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-slate-200 shadow">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-slate-900 mb-1">{stats.total}</div>
              <div className="text-sm text-slate-600">Total Posts</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-200 shadow">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-1">{stats.published}</div>
              <div className="text-sm text-slate-600">Published</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-200 shadow">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-600 mb-1">{stats.drafts}</div>
              <div className="text-sm text-slate-600">Drafts</div>
            </CardContent>
          </Card>
          <Card className="bg-white border-slate-200 shadow">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-red-600 mb-1">{stats.featured}</div>
              <div className="text-sm text-slate-600">Featured</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-8 shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-slate-300 text-slate-900"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border-2 border-slate-300 text-slate-900 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white border-2 border-slate-300 text-slate-900 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            >
              {statuses.map(status => (
                <option key={status.value} value={status.value}>{status.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Posts List */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">No posts found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="bg-white border-2 border-slate-200 hover:border-slate-300 transition-all shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Featured Image */}
                      {post.featured_image && (
                        <div className="hidden sm:block w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-slate-900 truncate">
                                {post.title}
                              </h3>
                              {post.featured && (
                                <Star className="w-4 h-4 text-yellow-500 fill-current flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                              <Badge
                                variant="outline"
                                className={`${
                                  post.status === "published"
                                    ? "border-green-600 text-green-600"
                                    : post.status === "draft"
                                    ? "border-yellow-600 text-yellow-600"
                                    : "border-slate-400 text-slate-600"
                                }`}
                              >
                                {post.status}
                              </Badge>
                              <Badge variant="outline" className="border-slate-300 text-slate-600">
                                {categories.find(c => c.value === post.category)?.label}
                              </Badge>
                              <span>By {post.author}</span>
                              {post.publish_date && (
                                <span>{format(new Date(post.publish_date), 'MMM d, yyyy')}</span>
                              )}
                              <span>{post.views || 0} views</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-white border-slate-200">
                              <DropdownMenuItem asChild className="text-slate-700 hover:bg-slate-100">
                                <Link to={`${createPageUrl("BlogEditor")}?id=${post.id}`}>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit
                                </Link>
                              </DropdownMenuItem>
                              {post.status === "published" && (
                                <DropdownMenuItem asChild className="text-slate-700 hover:bg-slate-100">
                                  <Link to={`${createPageUrl("BlogPost")}?slug=${post.slug}`} target="_blank">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem
                                onClick={() => handleToggleFeatured(post)}
                                className="text-slate-700 hover:bg-slate-100"
                              >
                                <Star className="w-4 h-4 mr-2" />
                                {post.featured ? "Unfeature" : "Feature"}
                              </DropdownMenuItem>
                              {post.status === "draft" && (
                                <DropdownMenuItem
                                  onClick={() => handleUpdateStatus(post, "published")}
                                  className="text-green-600 hover:bg-slate-100"
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  Publish
                                </DropdownMenuItem>
                              )}
                              {post.status === "published" && (
                                <DropdownMenuItem
                                  onClick={() => handleUpdateStatus(post, "draft")}
                                  className="text-yellow-600 hover:bg-slate-100"
                                >
                                  <Archive className="w-4 h-4 mr-2" />
                                  Unpublish
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem
                                onClick={() => handleDelete(post.id)}
                                className="text-red-600 hover:bg-slate-100"
                              >
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}