import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Check if user exists
      const users = await base44.entities.User.filter({ email: email });
      
      if (users.length > 0) {
        // Generate unique token
        const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
        
        // Set expiration to 1 hour from now
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
        
        // Store reset token
        await base44.entities.PasswordReset.create({
          user_email: email,
          token: token,
          expires_at: expiresAt,
          used: false
        });
        
        // Send reset email
        const resetUrl = `${window.location.origin}${createPageUrl("ResetPassword")}?token=${token}`;
        
        await base44.integrations.Core.SendEmail({
          to: email,
          subject: "Reset Your humanfire Password",
          body: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px; text-align: center;">
    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/9775e7da1_Logo_white_divider_transparent.png" alt="humanfire" style="height: 60px; margin-bottom: 20px;">
    <h1 style="color: #ffffff; margin: 0;">Password Reset Request</h1>
  </div>
  
  <div style="padding: 40px; background: #ffffff;">
    <p style="color: #334155; font-size: 16px; line-height: 1.6;">
      You requested to reset your password. Click the button below to create a new password:
    </p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #B82E2B, #B9472C); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Reset Password</a>
    </div>
    
    <p style="color: #64748b; font-size: 14px; line-height: 1.6;">
      This link will expire in 1 hour. If you didn't request this, please ignore this email.
    </p>
    
    <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
      If the button doesn't work, copy and paste this link into your browser:<br>
      <a href="${resetUrl}" style="color: #B82E2B; word-break: break-all;">${resetUrl}</a>
    </p>
  </div>
  
  <div style="padding: 20px; background: #f1f5f9; text-align: center;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">
      &copy; 2025 humanfire. All rights reserved.
    </p>
  </div>
</div>
          `
        });
      }
      
      // Always show success to prevent email enumeration
      setIsSuccess(true);
    } catch (error) {
      console.error("Password reset request failed:", error);
      // Still show success to user
      setIsSuccess(true);
    }
    
    setIsLoading(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <Card className="glass-effect border-2 border-slate-800 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-900/30 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">Check Your Email</h1>
              <p className="text-slate-400 mb-6">
                If an account exists with {email}, you will receive a password reset link shortly.
              </p>
              <Link to={createPageUrl("AdminLogin")}>
                <Button className="fire-button text-white w-full">
                  Return to Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <Link to={createPageUrl("AdminLogin")} className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Link>

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
              Reset Password
            </CardTitle>
            <p className="text-center text-slate-400 text-sm">
              Enter your email address and we'll send you a link to reset your password
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email Address</Label>
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

              <Button
                type="submit"
                className="w-full fire-button text-white py-6 text-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}