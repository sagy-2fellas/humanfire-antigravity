import React from "react";
import { useQuery } from "@tanstack/react-query";
import { localLeadStorage } from "@/api/localLeadStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Loader2, User, Building, Phone, Mail, CalendarDays, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactAdmin() {
  const [searchName, setSearchName] = React.useState("");

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
