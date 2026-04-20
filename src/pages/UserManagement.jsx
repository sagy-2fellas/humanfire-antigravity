import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Shield, Mail, Calendar, Key } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => base44.entities.User.list('-created_date', 100),
    enabled: true
  });

  const sendResetEmailMutation = useMutation({
    mutationFn: async (userEmail) => {
      // Generate unique token
      const token = Math.random().toString(36).substring(2) + Date.now().toString(36);

      // Set expiration to 1 hour from now
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

      // Store reset token
      await base44.entities.PasswordReset.create({
        user_email: userEmail,
        token: token,
        expires_at: expiresAt,
        used: false
      });

      // Send reset email
      const resetUrl = `${window.location.origin}${createPageUrl("ResetPassword")}?token=${token}`;

      await base44.integrations.Core.SendEmail({
        to: userEmail,
        subject: "Reset Your humanfire Password",
        body: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px; text-align: center;">
    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69074074f7f859062aa83943/9775e7da1_Logo_white_divider_transparent.png" alt="humanfire" style="height: 60px; margin-bottom: 20px;">
    <h1 style="color: #ffffff; margin: 0;">Password Reset</h1>
  </div>
  
  <div style="padding: 40px; background: #ffffff;">
    <p style="color: #334155; font-size: 16px; line-height: 1.6;">
      An administrator has initiated a password reset for your account. Click the button below to create a new password:
    </p>
    
    <div style="text-align: center; margin: 40px 0;">
      <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #B82E2B, #B9472C); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Reset Password</a>
    </div>
    
    <p style="color: #64748b; font-size: 14px; line-height: 1.6;">
      This link will expire in 1 hour.
    </p>
    
    <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
      If the button doesn't work, copy and paste this link:<br>
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
    },
    onSuccess: () => {
      setIsDialogOpen(false);
      setSelectedUser(null);
      alert("Password reset email sent successfully");
    }
  });

  const handleSendResetEmail = () => {
    if (!selectedUser) return;
    sendResetEmailMutation.mutate(selectedUser.email);
  };

  const stats = {
    total: users.length,
    admins: users.filter((u) => u.role === 'admin').length,
    regular: users.filter((u) => u.role === 'user').length
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
            <p className="text-slate-400">Manage user accounts and permissions</p>
          </div>
          <Link to={createPageUrl("AdminDashboard")}>
            <Button variant="outline" className="bg-background text-slate-800 px-4 py-2 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:bg-accent hover:text-accent-foreground h-10 border-slate-700">
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="glass-effect border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.total}</div>
                  <div className="text-sm text-slate-400">Total Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-900/30 border border-red-500/30 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.admins}</div>
                  <div className="text-sm text-slate-400">Administrators</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-effect border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-900/30 border border-green-500/30 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.regular}</div>
                  <div className="text-sm text-slate-400">Regular Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Users List */}
        {isLoading ?
        <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div> :
        users.length === 0 ?
        <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No users found</p>
          </div> :

        <div className="space-y-4">
            {users.map((user, index) =>
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}>

                <Card className="glass-effect border-2 border-slate-800 hover:border-slate-700 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-slate-200">{user.full_name || "No name"}</h3>
                          <Badge
                        variant="outline"
                        className={`${
                        user.role === "admin" ?
                        "border-red-500 text-red-400" :
                        "border-slate-500 text-slate-400"}`
                        }>

                            {user.role}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{user.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Joined {format(new Date(user.created_date), 'MMM d, yyyy')}</span>
                          </div>
                        </div>
                      </div>

                      <Dialog open={isDialogOpen && selectedUser?.id === user.id} onOpenChange={(open) => {
                    if (!open) {
                      setIsDialogOpen(false);
                      setSelectedUser(null);
                    }
                  }}>
                        <DialogTrigger asChild>
                          <Button
                        variant="outline"
                        size="sm" className="bg-background text-slate-800 px-3 text-sm font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-9 border-slate-700 hover:bg-slate-800"

                        onClick={() => {
                          setSelectedUser(user);
                          setIsDialogOpen(true);
                        }}>

                            <Key className="w-4 h-4 mr-2" />
                            Reset Password
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-900 border-slate-700">
                          <DialogHeader>
                            <DialogTitle className="text-slate-200">Send Password Reset</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <p className="text-slate-400 text-sm">
                              This will send a password reset email to <strong>{user.email}</strong>. They will receive a link to set a new password.
                            </p>
                            <Button
                          onClick={handleSendResetEmail}
                          className="w-full fire-button text-white"
                          disabled={sendResetEmailMutation.isPending}>

                              {sendResetEmailMutation.isPending ? "Sending..." : "Send Reset Email"}
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
          )}
          </div>
        }
      </div>
    </div>);

}