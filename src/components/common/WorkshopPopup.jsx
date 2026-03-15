import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { localLeadStorage } from "@/api/localLeadStorage";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkshopPopup({ isOpen, onClose }) {
  const [email, setEmail] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await localLeadStorage.addWorkshopRegistration({
        email,
        full_name: fullName,
        phone,
        company,
        workshop_name: "Humanfire - Talent on the move - Edition#1 The Brand Issue (Creating Lasting Brand Experiences for Talent)"
      });

      setIsSuccess(true);
      
      setTimeout(() => {
        window.location.href = "https://www.quicket.co.za/events/359945-humanfire-talent-on-the-move-edition1-the-brand-issue-creating-lasting-brand-ex/?utm_source=EventPage&utm_medium=Sharebox&utm_campaign=&ref=event-page-share#/";
      }, 1500);
    } catch (error) {
      console.error("Failed to register:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700 text-slate-100">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-8"
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">You're Registered!</h3>
            <p className="text-slate-400">Redirecting to registration page...</p>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">
                Join Our Workshop
                <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-2 ember-pulse"></span>
              </DialogTitle>
              <DialogDescription className="text-slate-300 text-base mt-3">
                <strong>Humanfire - Talent on the move</strong>
                <br />
                <span className="text-slate-400">Edition #1: The Brand Issue</span>
                <br />
                <span className="text-sm text-slate-500 mt-2 block">
                  Creating Lasting Brand Experiences for Talent
                </span>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Label htmlFor="email" className="text-slate-200">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <div>
                <Label htmlFor="fullName" className="text-slate-200">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-slate-200">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 XX XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-slate-200">Company</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-slate-100 focus:border-red-600"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full fire-button text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registering...
                  </>
                ) : (
                  "Register for Workshop"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}