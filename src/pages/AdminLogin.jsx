import React, { useState } from "react";
import { localAuth } from "@/api/localAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const urlParams = new URLSearchParams(window.location.search);
  const nextUrl = urlParams.get("next") || createPageUrl("BlogAdmin");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await localAuth.login(email, password);
      const user = await localAuth.me();
      
      if (user.role !== 'admin') {
        setError("Access denied. Admin privileges required.");
        await localAuth.logout();
        setIsLoading(false);
        return;
      }

      window.location.href = nextUrl;
    } catch (err) {
      setError("Invalid email or password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(184, 46, 43, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 46, 43, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-red-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="glass-effect border-2 border-slate-800 shadow-2xl">
          <CardHeader className="space-y-4 pb-6">
            <div className="flex justify-center">
              <motion.img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/9775e7da1_Logo_white_divider_transparent.png"
                alt="humanfire"
                className="h-16 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-slate-200">
              Admin Access
            </CardTitle>
            <p className="text-center text-slate-400 text-sm">
              Sign in to manage your blog content
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-900/20 border border-red-600/30 rounded-lg p-3 flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@humanfire.co"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Link to={createPageUrl("ForgotPassword")} className="text-sm text-slate-400 hover:text-red-400 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full fire-button text-white py-6 text-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-800">
              <p className="text-center text-slate-500 text-xs">
                Only authorized administrators can access this area
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}