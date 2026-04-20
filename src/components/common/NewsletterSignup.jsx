
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { localLeadStorage } from "@/api/localLeadStorage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await localLeadStorage.addNewsletterSub({
        email
      });

      emailjs.send('service_x2ddgjf', 'template_wpbj9id', {
        subject: 'New Newsletter Subscriber',
        message: `Email: ${email}`,
      }, 'epUIa8edYGpJPViy9').catch(() => {});

      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Newsletter signup error:", error);
    }
    setIsSubmitting(false);
  };

  return (
    <section className="flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white/80 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-20 rounded-2xl sm:rounded-3xl max-w-4xl w-full backdrop-blur-xl relative overflow-hidden border-2 border-white/20 shadow-2xl glass-effect">
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center space-y-4 sm:space-y-6 md:space-y-8"
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto border-2 border-green-300"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600" strokeWidth={2.5} />
                </motion.div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 uppercase">THANK YOU!</h3>
                <p className="text-sm sm:text-base md:text-lg font-medium text-slate-700 leading-relaxed px-2 sm:px-4">
                  You've successfully subscribed to human+edit. Get ready for valuable insights delivered to your inbox.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 md:mb-8 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  human+edit
                  <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-600 rounded-full ml-1.5 sm:ml-2 ember-pulse"></span>
                </motion.h2>
                
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Get the latest insights on talent strategies and future of work trends.
                </motion.p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto space-y-4 sm:space-y-6 md:space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                    <motion.div
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-medium transition-all duration-300 focus:border-red-400 focus:ring-red-400 bg-slate-50 text-slate-900 border-2 border-slate-300 placeholder:text-slate-500"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-red-600 hover:bg-red-700 px-8 sm:px-10 md:px-12 h-12 sm:h-14 md:h-16 transition-all duration-300 hover:shadow-2xl font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto"
                      >
                        {isSubmitting ? (
                          <div className="dot-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        ) : (
                          <motion.div
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                          </motion.div>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                  
                  <motion.p
                    className="text-xs sm:text-sm md:text-base font-medium text-slate-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    No spam. Unsubscribe anytime.
                  </motion.p>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
