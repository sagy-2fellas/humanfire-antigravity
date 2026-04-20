import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { localLeadStorage } from "@/api/localLeadStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Loader2, User, Building, Mail, Phone, CalendarDays, Download, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WorkshopAdmin() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [newReg, setNewReg] = React.useState({ full_name: "", email: "", phone: "", company: "", workshop_name: "" });
  const queryClient = useQueryClient();

  const { data: registrations, isLoading, isError, error } = useQuery({
    queryKey: ["workshop-registrations"],
    queryFn: () => localLeadStorage.getWorkshopRegistrations(),
    initialData: [],
  });

  const filteredRegistrations = React.useMemo(() => {
    if (!registrations) return [];
    return registrations.filter((reg) => {
      const term = searchTerm.toLowerCase();
      const matchName = (reg.full_name || '').toLowerCase().includes(term);
      const matchEmail = (reg.email || '').toLowerCase().includes(term);
      const matchCompany = (reg.company || '').toLowerCase().includes(term);
      return matchName || matchEmail || matchCompany;
    });
  }, [registrations, searchTerm]);

  const handleAddReg = async (e) => {
    e.preventDefault();
    await localLeadStorage.addWorkshopRegistration(newReg);
    queryClient.invalidateQueries({ queryKey: ["workshop-registrations"] });
    setNewReg({ full_name: "", email: "", phone: "", company: "", workshop_name: "" });
    setIsAddOpen(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Loader2 className="h-12 w-12 text-slate-400 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-6">Workshop Registrations</h1>
        <p className="text-slate-400 mb-8">Manage and export workshop registration submissions.</p>

        <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-lg">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-2xl font-semibold">Registrations ({filteredRegistrations.length})</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Search by name, email or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-72 bg-slate-700 border-slate-600 text-slate-100 focus:border-red-600"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Registration
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-slate-700">
                  <DialogHeader>
                    <DialogTitle className="text-slate-200">Add Workshop Registration</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddReg} className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label className="text-slate-300">Full Name</Label>
                      <Input required value={newReg.full_name} onChange={(e) => setNewReg(p => ({ ...p, full_name: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Email</Label>
                      <Input required type="email" value={newReg.email} onChange={(e) => setNewReg(p => ({ ...p, email: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Phone</Label>
                      <Input value={newReg.phone} onChange={(e) => setNewReg(p => ({ ...p, phone: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Company</Label>
                      <Input value={newReg.company} onChange={(e) => setNewReg(p => ({ ...p, company: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Workshop Name</Label>
                      <Input value={newReg.workshop_name} onChange={(e) => setNewReg(p => ({ ...p, workshop_name: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <Button type="submit" className="w-full fire-button text-white">Add Registration</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => localLeadStorage.exportToCSV(filteredRegistrations, 'workshop_registrations')}
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={filteredRegistrations.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {filteredRegistrations.length === 0 ? (
              <p className="text-center text-slate-400 py-8">
                No workshop registrations found matching your criteria.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-slate-700">
                <Table>
                  <TableHeader className="bg-slate-700">
                    <TableRow>
                      <TableHead className="text-slate-300">Name</TableHead>
                      <TableHead className="text-slate-300">Email</TableHead>
                      <TableHead className="text-slate-300">Phone</TableHead>
                      <TableHead className="text-slate-300">Company</TableHead>
                      <TableHead className="text-slate-300">Workshop</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRegistrations.map((reg) => (
                      <TableRow key={reg.id} className="border-slate-700 hover:bg-slate-700/50">
                        <TableCell className="font-medium text-slate-200">
                          <User className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {reg.full_name || "N/A"}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <a href={`mailto:${reg.email}`} className="text-red-400 hover:underline">
                            <Mail className="inline-block h-4 w-4 mr-2" />
                            {reg.email}
                          </a>
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <Phone className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {reg.phone || "N/A"}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <Building className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {reg.company || "N/A"}
                        </TableCell>
                        <TableCell className="text-slate-300 max-w-[200px] truncate">
                          {reg.workshop_name || "N/A"}
                        </TableCell>
                        <TableCell>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400">
                            {reg.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <CalendarDays className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {format(new Date(reg.created_date), "MMM d, yyyy")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
