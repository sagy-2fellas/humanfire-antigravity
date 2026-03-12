import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, UserCheck, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "1. Introduction",
      content: [
        "humanfire (Pty) Ltd ('we', 'us', or 'our') is committed to protecting your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) and other applicable South African legislation.",
        "This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us in any way.",
        "By using our services, you consent to the data practices described in this policy."
      ]
    },
    {
      icon: FileText,
      title: "2. Information We Collect",
      content: [
        "We may collect the following categories of personal information:",
        "• Contact Information: Name, email address, phone number, company name, job title",
        "• Professional Information: Company size, industry, areas of interest, specific requirements",
        "• Technical Information: IP address, browser type, device information, cookies",
        "• Communication Records: Correspondence with us, demo requests, consultation notes",
        "• Service Usage Data: How you interact with our services, features used, performance data"
      ]
    },
    {
      icon: UserCheck,
      title: "3. Legal Basis for Processing",
      content: [
        "We process your personal information based on the following lawful grounds under POPIA:",
        "• Consent: You have given explicit consent for us to process your information",
        "• Contractual Necessity: Processing is necessary to fulfill our contract with you",
        "• Legitimate Interests: Processing is necessary for our legitimate business interests",
        "• Legal Obligations: Processing is required to comply with South African law"
      ]
    },
    {
      icon: Lock,
      title: "4. How We Use Your Information",
      content: [
        "We use your personal information for the following purposes:",
        "• Providing and improving our talent management services",
        "• Responding to inquiries and providing customer support",
        "• Sending newsletters and marketing communications (with consent)",
        "• Conducting business analysis and research",
        "• Complying with legal obligations and protecting our rights",
        "• Detecting and preventing fraud or security issues"
      ]
    },
    {
      icon: Eye,
      title: "5. Information Sharing and Disclosure",
      content: [
        "We do not sell your personal information. We may share your information with:",
        "• Service Providers: Third-party vendors who assist in delivering our services",
        "• Business Partners: With your consent, for collaborative projects",
        "• Legal Requirements: When required by South African law or legal process",
        "• Business Transfers: In connection with a merger, acquisition, or sale of assets",
        "All third parties are bound by confidentiality obligations and POPIA compliance requirements."
      ]
    },
    {
      icon: Shield,
      title: "6. Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, loss, destruction, or alteration.",
        "These measures include:",
        "• Encryption of data in transit and at rest",
        "• Regular security assessments and audits",
        "• Access controls and authentication procedures",
        "• Employee training on data protection",
        "• Incident response and breach notification procedures"
      ]
    },
    {
      icon: AlertCircle,
      title: "7. Your Rights Under POPIA",
      content: [
        "Under POPIA, you have the following rights:",
        "• Right to Access: Request access to your personal information",
        "• Right to Correction: Request correction of inaccurate information",
        "• Right to Deletion: Request deletion of your information (subject to legal obligations)",
        "• Right to Object: Object to processing of your information",
        "• Right to Restriction: Request restriction of processing",
        "• Right to Data Portability: Receive your information in a structured format",
        "• Right to Withdraw Consent: Withdraw consent at any time (where consent is the basis)",
        "To exercise these rights, contact us at privacy@humanfire.co"
      ]
    },
    {
      icon: FileText,
      title: "8. Data Retention",
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
        "Retention periods vary based on:",
        "• The nature of the information",
        "• The purpose for which it was collected",
        "• Legal and regulatory requirements",
        "• Our legitimate business interests"
      ]
    },
    {
      icon: Lock,
      title: "9. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to enhance your experience on our website.",
        "Types of cookies we use:",
        "• Essential Cookies: Necessary for website functionality",
        "• Analytics Cookies: Help us understand how visitors use our site",
        "• Marketing Cookies: Used to deliver relevant advertisements",
        "You can control cookie preferences through your browser settings."
      ]
    },
    {
      icon: Shield,
      title: "10. International Data Transfers",
      content: [
        "Your personal information may be transferred to and processed in countries outside of South Africa.",
        "When we transfer data internationally, we ensure appropriate safeguards are in place, including:",
        "• Adequacy decisions by the Information Regulator",
        "• Standard contractual clauses",
        "• Binding corporate rules",
        "• Your explicit consent where required"
      ]
    },
    {
      icon: UserCheck,
      title: "11. Children's Privacy",
      content: [
        "Our services are not directed to individuals under the age of 18.",
        "We do not knowingly collect personal information from children.",
        "If we become aware that we have collected information from a child, we will take steps to delete it promptly."
      ]
    },
    {
      icon: FileText,
      title: "12. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
        "We will notify you of significant changes by:",
        "• Posting the updated policy on our website",
        "• Updating the 'Last Updated' date",
        "• Sending email notifications for material changes (where appropriate)",
        "Your continued use of our services after changes constitutes acceptance of the updated policy."
      ]
    },
    {
      icon: AlertCircle,
      title: "13. Contact Information",
      content: [
        "If you have questions or concerns about this Privacy Policy or our data practices, please contact:",
        "humanfire (Pty) Ltd",
        "Email: privacy@humanfire.co",
        "Phone: +27 84 056 8822",
        "Information Officer: Selma de Morney",
        "You also have the right to lodge a complaint with the Information Regulator:",
        "Information Regulator (South Africa)",
        "Email: inforeg@justice.gov.za",
        "Website: www.justice.gov.za/inforeg"
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
            <Badge variant="outline" className="mb-6 text-red-400 border-red-400/50 bg-red-900/20 backdrop-blur-sm px-4 py-2">
              POPIA Compliant
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Privacy Policy
              <span className="inline-block w-3 h-3 bg-red-600 rounded-full ml-2 ember-pulse"></span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              Your privacy and data protection are our top priorities
            </p>
            
            <p className="text-sm text-slate-400">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
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
                  <div className="w-12 h-12 rounded-xl bg-red-900/30 border-2 border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-red-400" />
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

          {/* Consent Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass-effect rounded-2xl p-8 border-2 border-red-500/30 bg-red-900/10"
          >
            <h3 className="text-xl font-bold text-red-400 mb-4">
              Consent and Acknowledgment
            </h3>
            <p className="text-slate-300 leading-relaxed">
              By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein. If you do not agree with any part of this policy, please discontinue use of our services immediately.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}