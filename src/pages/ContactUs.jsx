
import React, { useState } from "react";
import { localLeadStorage } from "@/api/localLeadStorage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    company_size: "",
    interest: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create contact record locally
      const contact = await localLeadStorage.addContactLead({
        ...formData
      });

      fetch('/api/notify-submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', data: formData }),
      }).catch(() => {});

      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] bg-slate-950 flex items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center space-y-6 glass-effect rounded-3xl p-12"
        >
          <div className="w-20 h-20 bg-green-900/30 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-200">Request Sent!</h1>
          <p className="text-slate-400 leading-relaxed">
            Thank you. Our journey partners will review your request and contact you soon!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-200 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Let's explore how we can shape your talent strategy to move your moves your business forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.8, delay: 0.3 }}
        >
          <div className="glass-effect border-2 border-slate-800 rounded-3xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first_name" className="text-slate-300">First Name *</Label>
                  <Input
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    required
                    className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="text-slate-300">Last Name *</Label>
                  <Input
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) => handleChange('last_name', e.target.value)}
                    required
                    className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Work Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+27 82 123 4567"
                  className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-300">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    required
                    className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position" className="text-slate-300">Your Position *</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleChange('position', e.target.value)}
                    required
                    className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-slate-300">Company Size</Label>
                  <Select onValueChange={(value) => handleChange('company_size', value)}>
                    <SelectTrigger className="bg-slate-900/50 border-slate-700 text-slate-200">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectItem value="1-50">1-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Primary Interest</Label>
                  <Select onValueChange={(value) => handleChange('interest', value)}>
                    <SelectTrigger className="bg-slate-900/50 border-slate-700 text-slate-200">
                      <SelectValue placeholder="What are you focused on?" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                      <SelectItem value="human+design">human+design (strategy)</SelectItem>
                      <SelectItem value="human+assist">human+assist (technology)</SelectItem>
                      <SelectItem value="human+insight">human+insight (data)</SelectItem>
                      <SelectItem value="human+culture">human+culture (ex)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">What Would You Like To Solve?</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="bg-slate-900/50 border-slate-700 text-slate-200 focus:border-red-500"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full fire-button text-white py-3 text-lg h-12"
              >
                {isSubmitting ? (
                  <div className="dot-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
