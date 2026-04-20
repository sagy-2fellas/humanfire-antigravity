import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { localLeadStorage } from "@/api/localLeadStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { format } from "date-fns";
import { Loader2, Mail, Building, User, CalendarDays, Download, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewsletterAdmin() {
  const [searchEmail, setSearchEmail] = React.useState("");
  const [showActiveOnly, setShowActiveOnly] = React.useState(false);
  const [isAddOpen, setIsAddOpen] = React.useState(false);
  const [newSub, setNewSub] = React.useState({ email: "", first_name: "", company: "" });
  const queryClient = useQueryClient();

  const { data: newsletters, isLoading, isError, error } = useQuery({
    queryKey: ["newsletter-subscriptions"],
    queryFn: () => localLeadStorage.getNewsletterSubs(),
    initialData: [],
  });

  const filteredNewsletters = React.useMemo(() => {
    if (!newsletters) return [];
    return newsletters.filter((newsletter) => {
      const matchesEmail = newsletter.email.toLowerCase().includes(searchEmail.toLowerCase());
      const matchesStatus = showActiveOnly ? newsletter.status === "active" : true;
      return matchesEmail && matchesStatus;
    });
  }, [newsletters, searchEmail, showActiveOnly]);

  const handleAddSub = async (e) => {
    e.preventDefault();
    await localLeadStorage.addNewsletterSub(newSub);
    queryClient.invalidateQueries({ queryKey: ["newsletter-subscriptions"] });
    setNewSub({ email: "", first_name: "", company: "" });
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
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-slate-100 mb-6">Newsletter Subscriptions</h1>
        <p className="text-slate-400 mb-8">Manage and view all subscribers to your newsletter.</p>

        <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-lg">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-2xl font-semibold">Subscribers ({filteredNewsletters.length})</CardTitle>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="active-only"
                  checked={showActiveOnly}
                  onCheckedChange={setShowActiveOnly}
                  className="border-slate-400 data-[state=checked]:bg-red-600 data-[state=checked]:text-white"
                />
                <Label htmlFor="active-only" className="text-slate-300">Show Active Only</Label>
              </div>
              <div className="relative">
                <Input
                  placeholder="Search by email..."
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-slate-100 focus:border-red-600"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Subscriber
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-900 border-slate-700">
                  <DialogHeader>
                    <DialogTitle className="text-slate-200">Add Newsletter Subscriber</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddSub} className="space-y-4 py-2">
                    <div className="space-y-2">
                      <Label className="text-slate-300">Email</Label>
                      <Input required type="email" value={newSub.email} onChange={(e) => setNewSub(p => ({ ...p, email: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">First Name</Label>
                      <Input value={newSub.first_name} onChange={(e) => setNewSub(p => ({ ...p, first_name: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300">Company</Label>
                      <Input value={newSub.company} onChange={(e) => setNewSub(p => ({ ...p, company: e.target.value }))} className="bg-slate-800 border-slate-700 text-slate-200" />
                    </div>
                    <Button type="submit" className="w-full fire-button text-white">Add Subscriber</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => localLeadStorage.exportToCSV(filteredNewsletters, 'newsletter_subscribers')}
                className="bg-green-600 hover:bg-green-700 text-white"
                disabled={filteredNewsletters.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {filteredNewsletters.length === 0 ? (
              <p className="text-center text-slate-400 py-8">
                No newsletter subscribers found matching your criteria.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-slate-700">
                <Table>
                  <TableHeader className="bg-slate-700">
                    <TableRow>
                      <TableHead className="text-slate-300">Email</TableHead>
                      <TableHead className="text-slate-300">First Name</TableHead>
                      <TableHead className="text-slate-300">Company</TableHead>
                      <TableHead className="text-slate-300">Interests</TableHead>
                      <TableHead className="text-slate-300">Status</TableHead>
                      <TableHead className="text-slate-300">Subscribed Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredNewsletters.map((newsletter) => (
                      <TableRow key={newsletter.id} className="border-slate-700 hover:bg-slate-700/50">
                        <TableCell className="font-medium text-red-400"><Mail className="inline-block h-4 w-4 mr-2" />{newsletter.email}</TableCell>
                        <TableCell className="text-slate-300"><User className="inline-block h-4 w-4 mr-2" />{newsletter.first_name || "N/A"}</TableCell>
                        <TableCell className="text-slate-300"><Building className="inline-block h-4 w-4 mr-2" />{newsletter.company || "N/A"}</TableCell>
                        <TableCell className="text-slate-300">
                          {newsletter.interests && newsletter.interests.length > 0
                            ? newsletter.interests.join(", ")
                            : "N/A"}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${newsletter.status === "active"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {newsletter.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-slate-300"><CalendarDays className="inline-block h-4 w-4 mr-2" />{format(new Date(newsletter.created_date), "PPP")}</TableCell>
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