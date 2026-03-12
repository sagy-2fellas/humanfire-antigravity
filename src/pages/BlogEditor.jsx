import React, { useState, useEffect } from "react";
import { localAuth } from "@/api/localAuth";
import { localBlogStorage } from "@/api/localBlogStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Send, Upload, X, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";

const categories = [
  { value: "talent_strategy", label: "Talent Strategy" },
  { value: "hr_tech", label: "HR Tech" },
  { value: "culture", label: "Culture" },
  { value: "leadership", label: "Leadership" },
  { value: "future_of_work", label: "Future of Work" },
  { value: "data_insights", label: "Data Insights" }
];

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link"],
    ["clean"]
  ]
};

export default function BlogEditor() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [isUploadingFeatured, setIsUploadingFeatured] = useState(false);
  const [isUploadingAuthor, setIsUploadingAuthor] = useState(false);
  const queryClient = useQueryClient();

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get("id");

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      category: "talent_strategy",
      tags: "",
      author: "",
      read_time: 5,
      publish_date: new Date().toISOString().split('T')[0],
      status: "draft"
    }
  });

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

  useEffect(() => {
    const loadData = async () => {
      if (!isAuthorized) return;
      
      if (postId) {
        const posts = await localBlogStorage.list();
        const post = posts.find(p => p.id === postId);
        if (post) {
          Object.keys(post).forEach(key => {
            if (key === 'tags') {
              setValue(key, Array.isArray(post[key]) ? post[key].join(', ') : post[key]);
            } else if (key === 'content') {
              setContent(post[key] || "");
            } else if (key === 'featured_image') {
              setFeaturedImage(post[key] || "");
            } else if (key === 'author_image') {
              setAuthorImage(post[key] || "");
            } else if (key === 'publish_date' && post[key]) {
              setValue(key, new Date(post[key]).toISOString().split('T')[0]);
            } else {
              setValue(key, post[key]);
            }
          });
        }
      } else {
        const user = await localAuth.me();
        setValue('author', user.full_name || user.email);
      }
      setIsLoading(false);
    };
    loadData();
  }, [postId, setValue, isAuthorized]);

  const title = watch("title");
  useEffect(() => {
    if (title && !postId) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setValue("slug", slug);
    }
  }, [title, postId, setValue]);

  const handleImageUpload = async (e, type) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const setUploading = type === "featured" ? setIsUploadingFeatured : setIsUploadingAuthor;
    const setImage = type === "featured" ? setFeaturedImage : setAuthorImage;

    setUploading(true);
    const { file_url } = await localBlogStorage.uploadFile(file);
    setImage(file_url);
    setUploading(false);
  };

  const createPostMutation = useMutation({
    mutationFn: (data) => localBlogStorage.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      window.location.href = createPageUrl("BlogAdmin");
    }
  });

  const updatePostMutation = useMutation({
    mutationFn: (data) => localBlogStorage.update(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      window.location.href = createPageUrl("BlogAdmin");
    }
  });

  const onSubmit = async (data) => {
    if (!content.trim()) {
      alert("Please add content to your post");
      return;
    }

    const postData = {
      ...data,
      content,
      featured_image: featuredImage,
      author_image: authorImage,
      tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
      read_time: parseInt(data.read_time) || 5
    };

    if (postId) {
      updatePostMutation.mutate(postData);
    } else {
      createPostMutation.mutate(postData);
    }
  };

  if (isCheckingAuth || (isAuthorized && isLoading)) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-600">{isCheckingAuth ? "Verifying access..." : "Loading..."}</p>
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
      <style>{`
        .prose-editor .ql-container {
          min-height: 400px;
          font-size: 16px;
        }
        .prose-editor .ql-editor {
          min-height: 400px;
        }
        .prose-editor .ql-editor.ql-blank::before {
          color: #94a3b8;
          font-style: normal;
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to={createPageUrl("BlogAdmin")}>
              <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">
              {postId ? "Edit Post" : "Create New Post"}
            </h1>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleSubmit((data) => onSubmit({ ...data, status: "draft" }))}
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100"
              disabled={createPostMutation.isPending || updatePostMutation.isPending}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button
              onClick={handleSubmit((data) => onSubmit({ ...data, status: "published" }))}
              className="fire-button text-white"
              disabled={createPostMutation.isPending || updatePostMutation.isPending}
            >
              <Send className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>

        <form className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <Card className="bg-white border-slate-200 shadow">
              <CardContent className="p-6">
                <Label className="text-slate-700 mb-2 block">Post Title *</Label>
                <Input
                  {...register("title", { required: true })}
                  placeholder="Enter an engaging title..."
                  className="bg-white border-slate-300 text-slate-900 text-xl"
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">Title is required</p>}
              </CardContent>
            </Card>

            {/* Slug */}
            <Card className="bg-white border-slate-200 shadow">
              <CardContent className="p-6">
                <Label className="text-slate-700 mb-2 block">URL Slug *</Label>
                <Input
                  {...register("slug", { required: true })}
                  placeholder="url-friendly-slug"
                  className="bg-white border-slate-300 text-slate-900"
                />
                {errors.slug && <p className="text-red-600 text-sm mt-1">Slug is required</p>}
              </CardContent>
            </Card>

            {/* Excerpt */}
            <Card className="bg-white border-slate-200 shadow">
              <CardContent className="p-6">
                <Label className="text-slate-700 mb-2 block">Excerpt</Label>
                <Textarea
                  {...register("excerpt")}
                  placeholder="Brief summary of the post..."
                  className="bg-white border-slate-300 text-slate-900 min-h-[100px]"
                />
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card className="bg-white border-slate-200 shadow">
              <CardHeader>
                <CardTitle className="text-slate-900">Content *</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose-editor">
                  <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    placeholder="Start writing your blog post..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Category & Tags */}
            <Card className="bg-white border-slate-200 shadow">
              <CardHeader>
                <CardTitle className="text-slate-900">Categories & Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-700 mb-2 block">Category *</Label>
                  <select
                    {...register("category", { required: true })}
                    className="w-full bg-white border-2 border-slate-300 text-slate-900 rounded-md px-3 py-2"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label className="text-slate-700 mb-2 block">Tags (comma-separated)</Label>
                  <Input
                    {...register("tags")}
                    placeholder="hr, talent, strategy"
                    className="bg-white border-slate-300 text-slate-900"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Author Info */}
            <Card className="bg-white border-slate-200 shadow">
              <CardHeader>
                <CardTitle className="text-slate-900">Author Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-700 mb-2 block">Author Name *</Label>
                  <Input
                    {...register("author", { required: true })}
                    className="bg-white border-slate-300 text-slate-900"
                  />
                </div>
                <div>
                  <Label className="text-slate-700 mb-2 block">Author Image</Label>
                  <div className="space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "author")}
                      className="hidden"
                      id="author-image-upload"
                    />
                    <label htmlFor="author-image-upload">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-slate-300 text-slate-700"
                        disabled={isUploadingAuthor}
                        onClick={() => document.getElementById("author-image-upload").click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {isUploadingAuthor ? "Uploading..." : "Upload Image"}
                      </Button>
                    </label>
                    {authorImage && (
                      <div className="relative">
                        <img src={authorImage} alt="Author" className="w-full h-32 object-cover rounded-lg" />
                        <button
                          type="button"
                          onClick={() => setAuthorImage("")}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card className="bg-white border-slate-200 shadow">
              <CardHeader>
                <CardTitle className="text-slate-900">Featured Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "featured")}
                  className="hidden"
                  id="featured-image-upload"
                />
                <label htmlFor="featured-image-upload">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-slate-300 text-slate-700"
                    disabled={isUploadingFeatured}
                    onClick={() => document.getElementById("featured-image-upload").click()}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {isUploadingFeatured ? "Uploading..." : "Upload Image"}
                  </Button>
                </label>
                {featuredImage && (
                  <div className="relative">
                    <img src={featuredImage} alt="Featured" className="w-full h-48 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => setFeaturedImage("")}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Publishing */}
            <Card className="bg-white border-slate-200 shadow">
              <CardHeader>
                <CardTitle className="text-slate-900">Publishing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-slate-700 mb-2 block">Publish Date</Label>
                  <Input
                    type="date"
                    {...register("publish_date")}
                    className="bg-white border-slate-300 text-slate-900"
                  />
                </div>
                <div>
                  <Label className="text-slate-700 mb-2 block">Read Time (minutes)</Label>
                  <Input
                    type="number"
                    {...register("read_time")}
                    className="bg-white border-slate-300 text-slate-900"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
}