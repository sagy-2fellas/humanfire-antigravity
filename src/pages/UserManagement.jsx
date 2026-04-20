import React, { useState } from "react";
import { localAuth } from "@/api/localAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Shield, Mail, Calendar, Trash2, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

export default function UserManagement() {
  const [admins, setAdmins] = useState(() => localAuth.listAdmins());
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({ full_name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const refreshAdmins = () => setAdmins(localAuth.listAdmins());

  const handleAddAdmin = (e) => {
    e.preventDefault();
    setError("");
    try {
      localAuth.addAdmin(newAdmin);
      refreshAdmins();
      setNewAdmin({ full_name: "", email: "", password: "" });
      setIsAddDialogOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRemoveAdmin = () => {
    if (!selectedAdmin) return;
    setError("");
    try {
      localAuth.removeAdmin(selectedAdmin.email);
      refreshAdmins();
      setSelectedAdmin(null);
      setIsRemoveDialogOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const stats = {
    total: admins.length
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
            <p className="text-slate-400">Manage admin accounts and permissions</p>
          </div>
          <div className="flex gap-3">
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="fire-button text-white" onClick={() => setError("")}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Admin
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-700">
                <DialogHeader>
                  <DialogTitle className="text-slate-200">Add New Admin</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddAdmin} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Full Name</Label>
                    <Input
                      required
                      value={newAdmin.full_name}
                      onChange={(e) => setNewAdmin(prev => ({ ...prev, full_name: e.target.value }))}
                      className="bg-slate-800 border-slate-700 text-slate-200"
                      placeholder="e.g. Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Email</Label>
                    <Input
                      required
                      type="email"
                      value={newAdmin.email}
                      onChange={(e) => setNewAdmin(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-slate-800 border-slate-700 text-slate-200"
                      placeholder="e.g. jane@humanfire.co"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Password</Label>
                    <Input
                      required
                      type="password"
                      value={newAdmin.password}
                      onChange={(e) => setNewAdmin(prev => ({ ...prev, password: e.target.value }))}
                      className="bg-slate-800 border-slate-700 text-slate-200"
                      placeholder="Set a password"
                    />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <Button type="submit" className="w-full fire-button text-white">
                    Add Admin
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Link to={createPageUrl("AdminDashboard")}>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="glass-effect border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-900/30 border border-blue-500/30 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.total}</div>
                  <div className="text-sm text-slate-400">Total Admins</div>
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
                  <div className="text-2xl font-bold text-white">{stats.total}</div>
                  <div className="text-sm text-slate-400">Administrators</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Admins List */}
        <div className="space-y-4">
          {admins.map((admin, index) => (
            <motion.div
              key={admin.email}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="glass-effect border-2 border-slate-800 hover:border-slate-700 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-slate-200">{admin.full_name || "No name"}</h3>
                        <Badge variant="outline" className="border-red-500 text-red-400">
                          {admin.role}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{admin.email}</span>
                        </div>
                        {admin.created_date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Added {format(new Date(admin.created_date), 'MMM d, yyyy')}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {admins.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-800 text-red-400 hover:bg-red-900/30 hover:text-red-300"
                        onClick={() => {
                          setSelectedAdmin(admin);
                          setError("");
                          setIsRemoveDialogOpen(true);
                        }}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Remove Confirmation Dialog */}
        <Dialog open={isRemoveDialogOpen} onOpenChange={(open) => {
          if (!open) {
            setIsRemoveDialogOpen(false);
            setSelectedAdmin(null);
          }
        }}>
          <DialogContent className="bg-slate-900 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-slate-200">Remove Admin</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-slate-400 text-sm">
                Are you sure you want to remove <strong className="text-slate-200">{selectedAdmin?.full_name}</strong> ({selectedAdmin?.email}) as an admin? They will no longer be able to log in.
              </p>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <div className="flex gap-3">
                <Button
                  onClick={handleRemoveAdmin}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  Remove Admin
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                  onClick={() => {
                    setIsRemoveDialogOpen(false);
                    setSelectedAdmin(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
