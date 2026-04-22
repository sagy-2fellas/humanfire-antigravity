import React from "react";
import emailjs from "@emailjs/browser";
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

  const settings = React.useMemo(() => localLeadStorage.getPopupSettings(), [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const workshopData = {
        email,
        full_name: fullName,
        phone,
        company,
        workshop_name: [settings.title, settings.subtitle, settings.description]
          .filter(Boolean)
          .join(" - ")
      };

      await localLeadStorage.addWorkshopRegistration(workshopData);

      emailjs.send('service_x2ddgjf', 'template_wpbj9id', {
        subject: 'New Workshop Registration',
        message: Object.entries(workshopData)
          .map(([key, value]) => `${key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}: ${value || 'Not provided'}`)
          .join('\n'),
      }, 'epUIa8edYGpJPViy9').catch(() => {});

      setIsSuccess(true);

      if (settings.redirect_url) {
        setTimeout(() => {
          window.location.href = settings.redirect_url;
        }, 1500);
      } else {
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setEmail("");
          setFullName("");
          setPhone("");
          setCompany("");
        }, 2000);
      }
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
            <p className="text-slate-400">
              {settings.redirect_url
                ? "Redirecting to registration page..."
                : "Thank you for signing up!"}
            </p>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">
                {settings.title || "Join Our Event"}
                <span className="inline-block w-2 h-2 bg-red-600 rounded-full ml-2 ember-pulse"></span>
              </DialogTitle>
              <DialogDescription className="text-slate-300 text-base mt-3">
                {settings.subtitle && (
                  <>
                    <strong>{settings.subtitle}</strong>
                    <br />
                  </>
                )}
                {settings.description && (
                  <span className="text-sm text-slate-500 mt-2 block">
                    {settings.description}
                  </span>
                )}
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
                  "Register for Event"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
