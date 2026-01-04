import React from "react";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="w-full py-20">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="relative mb-16 text-center">
          <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="relative inline-block bg-white px-10 py-4 rounded-full border border-purple-200 shadow-md z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide"
            >
              Privacy <span className="text-purple-600">Policy</span>
            </motion.h2>
          </div>
        </div>

        <div className="prose prose-lg max-w-5xl mx-auto  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="  p-10 rounded-2xl shadow-xl border border-purple-200"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-purple-100 rounded-full">
                <Shield
                  className="w-12 h-12 text-purple-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <p className="text-center text-sm mb-8">
              Last updated: January 04, 2026
            </p>

            <h3 className="text-2xl font-bold text-purple-500  mb-4">
              Introduction
            </h3>
            <p className="mb-6">
              E-Learn Industries Ltd. ("we", "us", or "our") respects your
              privacy and is committed to protecting your personal data. This
              privacy policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Information We Collect
            </h3>
            <p className="mb-6">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>
                Personal identification information (name, email address, phone
                number, etc.)
              </li>
              <li>Account information (username, password, profile details)</li>
              <li>
                Payment information (processed securely by third-party
                providers)
              </li>
              <li>Usage data (courses enrolled, progress, quiz results)</li>
              <li>
                Device and log information (IP address, browser type, pages
                visited)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              How We Use Your Information
            </h3>
            <p className="mb-6">We use your information to:</p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process payments and prevent fraud</li>
              <li>
                Send course updates, newsletters, and promotional offers (you
                can opt-out anytime)
              </li>
              <li>Personalize your learning experience</li>
              <li>Analyze usage and improve platform performance</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Data Security
            </h3>
            <p className="mb-6">
              We implement industry-standard security measures to protect your
              data, including encryption, secure servers, and regular security
              audits. However, no method of transmission over the internet is
              100% secure.
            </p>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Sharing Your Information
            </h3>
            <p className="mb-6">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Service providers (payment processors, analytics tools)</li>
              <li>Instructors (limited to enrolled course data)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Your Rights
            </h3>
            <p className="mb-6">
              You have the right to access, correct, delete, or restrict your
              personal data. Contact us at support@elearn.com to exercise these
              rights.
            </p>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Cookies
            </h3>
            <p className="mb-6">
              We use cookies to enhance your experience. You can manage cookie
              preferences in your browser settings.
            </p>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Changes to This Policy
            </h3>
            <p className="mb-6">
              We may update this policy periodically. Continued use of our
              services constitutes acceptance of the updated terms.
            </p>

            <h3 className="text-2xl font-bold text-purple-500 mb-4 mt-10">
              Contact Us
            </h3>
            <p className="mb-6">
              For any privacy-related questions, please email us at{" "}
              <a
                href="mailto:support@elearn.com"
                className="text-purple-600 font-semibold hover:underline"
              >
                 e-learn@gmail.com
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
