import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { localLeadStorage } from "@/api/localLeadStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Loader2, User, Building, Mail, CalendarDays, Download, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactAdmin() {
  const [searchName, setSearchName] = React.useState("");
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [newLead, setNewLead] = React.useState({ first_name: "", last_name: "", email: "", phone: "", company: "", position: "", company_size: "", interest: "", message: "", source: "demo_request", status: "new" });
  const queryClient = useQueryClient();

  const { data: leads, isLoading, isError, error } = useQuery({
    queryKey: ["contact-leads"],
    queryFn: () => localLeadStorage.getContactLeads(),
    initialData: [],
  });

  const filteredLeads = React.useMemo(() => {
    if (!leads) return [];
    return leads.filter((lead) => {
      const fullName = `${lead.first_name || ''} ${lead.last_name || ''}`.toLowerCase();
      const matchName = fullName.includes(searchName.toLowerCase());
      const matchCompany = (lead.company || '').toLowerCase().includes(searchName.toLowerCase());
      return matchName || matchCompany;
    });
  }, [leads, searchName]);

  const handleAddLead = async (e) => {
    e.preventDefault();
    await localLeadStorage.addContactLead(newLead);
    queryClient.invalidateQueries({ queryKey: ["contact-leads"] });
    setNewLead({ first_name: "", last_name: "", email: "", phone: "", company: "", position: "", company_size: "", interest: "", message: "", source: "demo_request", status: "new" });
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
        <h1 className="text-4xl font-bold text-slate-100 mb-6">Contact Leads</h1>
        <p className="text-slate-400 mb-8">Manage and export demo requests and contact submissions.</p>

        <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-lg">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-2xl font-semibold">Leads ({filteredLeads.length})</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Search by name or company..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="pl-10 w-64 bg-slate-700 border-slate-600 text-slate-100 focus:border-red-600"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Lead
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-slate-200">Add Contact Lead</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddLead} className="space-y-4 py-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300">First Name *</Label>
                        <Input required placeholder="e.g. Caroline" value={newLead.first_name} onChange={(e) => setNewLead(p => ({ ...p, first_name: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300">Last Name *</Label>
                        <Input required placeholder="e.g. Heap" value={newLead.last_name} onChange={(e) => setNewLead(p => ({ ...p, last_name: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Email *</Label>
                      <Input required type="email" placeholder="e.g. caroline.heap@core.co.za" value={newLead.email} onChange={(e) => setNewLead(p => ({ ...p, email: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300">Company</Label>
                        <Input placeholder="e.g. Core Group" value={newLead.company} onChange={(e) => setNewLead(p => ({ ...p, company: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300">Position</Label>
                        <Input placeholder="e.g. HR Executive" value={newLead.position} onChange={(e) => setNewLead(p => ({ ...p, position: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300">Phone</Label>
                        <Input placeholder="e.g. 0828851240" value={newLead.phone} onChange={(e) => setNewLead(p => ({ ...p, phone: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300">Company Size</Label>
                        <Select value={newLead.company_size} onValueChange={(v) => setNewLead(p => ({ ...p, company_size: v }))}>
                          <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="1-10">1-10</SelectItem>
                            <SelectItem value="11-50">11-50</SelectItem>
                            <SelectItem value="51-200">51-200</SelectItem>
                            <SelectItem value="201-500">201-500</SelectItem>
                            <SelectItem value="501-1000">501-1000</SelectItem>
                            <SelectItem value="1000+">1000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Interest</Label>
                      <Select value={newLead.interest} onValueChange={(v) => setNewLead(p => ({ ...p, interest: v }))}>
                        <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                          <SelectValue placeholder="Select interest" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-700">
                          <SelectItem value="human_design">human+design</SelectItem>
                          <SelectItem value="human_assist">human+assist</SelectItem>
                          <SelectItem value="human_insight">human+insight</SelectItem>
                          <SelectItem value="human_culture">human+culture</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Message</Label>
                      <Input placeholder="e.g. AI and employee culture" value={newLead.message} onChange={(e) => setNewLead(p => ({ ...p, message: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-300">Source</Label>
                        <Select value={newLead.source} onValueChange={(v) => setNewLead(p => ({ ...p, source: v }))}>
                          <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="demo_request">Demo Request</SelectItem>
                            <SelectItem value="contact_form">Contact Form</SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="manual">Manual Entry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-slate-300">Status</Label>
                        <Select value={newLead.status} onValueChange={(v) => setNewLead(p => ({ ...p, status: v }))}>
                          <SelectTrigger className="bg-slate-800 border-slate-700 text-slate-200">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="qualified">Qualified</SelectItem>
                            <SelectItem value="converted">Converted</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full fire-button text-white">Add Lead</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => localLeadStorage.exportToCSV(filteredLeads, 'contact_leads')}
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={filteredLeads.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {filteredLeads.length === 0 ? (
              <p className="text-center text-slate-400 py-8">
                No contact leads found matching your criteria.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-slate-700">
                <Table>
                  <TableHeader className="bg-slate-700">
                    <TableRow>
                      <TableHead className="text-slate-300">Name</TableHead>
                      <TableHead className="text-slate-300">Company</TableHead>
                      <TableHead className="text-slate-300">Position</TableHead>
                      <TableHead className="text-slate-300">Email</TableHead>
                      <TableHead className="text-slate-300">Interest</TableHead>
                      <TableHead className="text-slate-300">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow key={lead.id} className="border-slate-700 hover:bg-slate-700/50">
                        <TableCell className="font-medium text-slate-200">
                          <User className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {lead.first_name} {lead.last_name}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <Building className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {lead.company || "N/A"}
                          {lead.company_size && <span className="text-xs text-slate-500 ml-2">({lead.company_size})</span>}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {lead.position || "N/A"}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <a href={`mailto:${lead.email}`} className="text-red-400 hover:underline">
                            <Mail className="inline-block h-4 w-4 mr-2" />
                            {lead.email}
                          </a>
                        </TableCell>
                        <TableCell className="text-slate-300">
                          {lead.interest || "N/A"}
                        </TableCell>
                        <TableCell className="text-slate-300">
                          <CalendarDays className="inline-block h-4 w-4 mr-2 text-slate-400" />
                          {format(new Date(lead.created_date), "MMM d, yyyy")}
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
