import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: [
        "These Terms of Service ('Terms') govern your access to and use of humanfire (Pty) Ltd's ('humanfire', 'we', 'us', or 'our') website, services, and products.",
        "By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services.",
        "We reserve the right to modify these Terms at any time. Your continued use of our services after changes constitutes acceptance of the modified Terms."
      ]
    },
    {
      icon: CheckCircle,
      title: "2. Description of Services",
      content: [
        "humanfire provides talent management consulting and technology services, including but not limited to:",
        "• Talent strategy and organizational design (human+design)",
        "• AI-powered talent management tools (human+assist)",
        "• People analytics and data insights (human+insight)",
        "• Employee experience and culture transformation (human+culture)",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
      ]
    },
    {
      icon: Shield,
      title: "3. User Eligibility and Registration",
      content: [
        "You must be at least 18 years old and legally capable of entering into binding contracts to use our services.",
        "You represent and warrant that all information you provide is accurate, current, and complete.",
        "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.",
        "You agree to notify us immediately of any unauthorized use of your account."
      ]
    },
    {
      icon: Scale,
      title: "4. Intellectual Property Rights",
      content: [
        "All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and methodologies, are owned by humanfire or our licensors and are protected by South African and international copyright, trademark, and other intellectual property laws.",
        "You are granted a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes only.",
        "You may not:",
        "• Copy, modify, or create derivative works of our content",
        "• Reverse engineer or decompile our software",
        "• Remove any copyright or proprietary notices",
        "• Use our content for commercial purposes without written permission"
      ]
    },
    {
      icon: FileText,
      title: "5. Client Data and Confidentiality",
      content: [
        "We acknowledge that you retain all rights to any data, information, or materials you provide to us ('Client Data').",
        "We will maintain the confidentiality of Client Data and use it only for the purposes of providing our services.",
        "We implement appropriate security measures to protect Client Data in accordance with POPIA and industry standards.",
        "You grant us a limited license to use Client Data solely for the purpose of delivering services to you."
      ]
    },
    {
      icon: AlertTriangle,
      title: "6. Prohibited Uses",
      content: [
        "You agree not to use our services for any unlawful purpose or in any way that:",
        "• Violates any applicable South African or international law",
        "• Infringes on intellectual property rights of others",
        "• Transmits viruses, malware, or harmful code",
        "• Harasses, abuses, or harms others",
        "• Impersonates any person or entity",
        "• Interferes with or disrupts our services",
        "• Attempts to gain unauthorized access to our systems",
        "• Uses automated systems to scrape or collect data"
      ]
    },
    {
      icon: FileText,
      title: "7. Service Fees and Payment",
      content: [
        "Fees for our services will be as agreed in separate service agreements or quotations.",
        "All fees are exclusive of VAT and other applicable taxes, which will be added as required by South African law.",
        "Payment terms are typically 30 days from invoice date unless otherwise agreed.",
        "Late payments may incur interest at the rate prescribed by the National Credit Act.",
        "We reserve the right to suspend services for non-payment after reasonable notice."
      ]
    },
    {
      icon: XCircle,
      title: "8. Disclaimers and Limitation of Liability",
      content: [
        "Our services are provided 'as is' and 'as available' without warranties of any kind, either express or implied.",
        "We do not guarantee:",
        "• Uninterrupted or error-free service",
        "• Specific results or outcomes",
        "• Compatibility with all systems or software",
        "To the maximum extent permitted by South African law, humanfire shall not be liable for:",
        "• Indirect, incidental, or consequential damages",
        "• Loss of profits, data, or business opportunities",
        "• Damages exceeding the fees paid by you in the 12 months preceding the claim",
        "This limitation applies even if we have been advised of the possibility of such damages."
      ]
    },
    {
      icon: Shield,
      title: "9. Indemnification",
      content: [
        "You agree to indemnify, defend, and hold harmless humanfire, its officers, directors, employees, and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from:",
        "• Your use of our services",
        "• Your violation of these Terms",
        "• Your violation of any rights of third parties",
        "• Any Client Data you provide to us"
      ]
    },
    {
      icon: FileText,
      title: "10. Term and Termination",
      content: [
        "These Terms remain in effect until terminated by either party.",
        "You may terminate your use of our services at any time by ceasing access and notifying us in writing.",
        "We may terminate or suspend your access immediately, without notice, for:",
        "• Breach of these Terms",
        "• Non-payment of fees",
        "• Illegal or harmful conduct",
        "Upon termination:",
        "• Your right to use our services ceases immediately",
        "• You remain liable for any outstanding fees",
        "• Provisions regarding confidentiality, intellectual property, and liability survive termination"
      ]
    },
    {
      icon: Scale,
      title: "11. Governing Law and Dispute Resolution",
      content: [
        "These Terms are governed by the laws of the Republic of South Africa.",
        "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the South African courts.",
        "Before initiating legal proceedings, parties agree to attempt resolution through:",
        "• Good faith negotiations",
        "• Mediation, if negotiations fail",
        "Nothing in these Terms prevents either party from seeking urgent interim relief from a court of competent jurisdiction."
      ]
    },
    {
      icon: FileText,
      title: "12. Force Majeure",
      content: [
        "Neither party shall be liable for failure to perform obligations due to circumstances beyond their reasonable control, including:",
        "• Acts of God, natural disasters",
        "• War, terrorism, civil unrest",
        "• Government actions or regulations",
        "• Power outages, telecommunications failures",
        "• Pandemics or epidemics",
        "The affected party must promptly notify the other party and make reasonable efforts to minimize disruption."
      ]
    },
    {
      icon: AlertTriangle,
      title: "13. Privacy and Data Protection",
      content: [
        "Your use of our services is also governed by our Privacy Policy, which is incorporated into these Terms by reference.",
        "We process personal information in accordance with the Protection of Personal Information Act (POPIA).",
        "By using our services, you consent to such processing and warrant that all data provided is accurate."
      ]
    },
    {
      icon: CheckCircle,
      title: "14. General Provisions",
      content: [
        "Entire Agreement: These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and humanfire.",
        "Severability: If any provision is found invalid or unenforceable, the remaining provisions remain in full effect.",
        "Waiver: Our failure to enforce any right or provision does not constitute a waiver of such right or provision.",
        "Assignment: You may not assign these Terms without our written consent. We may assign these Terms to any successor entity.",
        "No Agency: Nothing in these Terms creates a partnership, joint venture, or agency relationship.",
        "Third-Party Rights: These Terms do not confer any rights to third parties."
      ]
    },
    {
      icon: FileText,
      title: "15. Contact Information",
      content: [
        "For questions or concerns about these Terms of Service, please contact:",
        "humanfire (Pty) Ltd",
        "Email: legal@humanfire.co",
        "Phone: +27 84 056 8822",
        "Address: South Africa",
        "General Inquiries: hello@humanfire.co"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 text-blue-400 border-blue-400/50 bg-blue-900/20 backdrop-blur-sm px-4 py-2">
              Legal Agreement
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Terms of Service
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              Please read these terms carefully before using our services
            </p>
            
            <p className="text-sm text-slate-400">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-effect rounded-2xl p-8 border-2 border-slate-800"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border-2 border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-200 flex-1">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4 text-slate-400 leading-relaxed ml-16">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className={paragraph.startsWith('•') ? 'ml-4' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Acknowledgment Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass-effect rounded-2xl p-8 border-2 border-blue-500/30 bg-blue-900/10"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Acknowledgment of Terms
            </h3>
            <p className="text-slate-300 leading-relaxed">
              By accessing or using humanfire's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must immediately cease using our services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}