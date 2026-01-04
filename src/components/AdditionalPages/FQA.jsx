import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is E-Learn?",
      answer:
        "E-Learn is a modern online learning platform offering high-quality, industry-relevant courses in technology, programming, design, business, and more. We provide flexible, accessible education for learners worldwide.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "Browse our course catalog, select the course you're interested in, and click 'Enroll Now'. You can create a free account or log in to complete the enrollment and payment process.",
    },
    {
      question: "Are the courses self-paced?",
      answer:
        "Yes! Most of our courses are fully self-paced, allowing you to learn at your own schedule. Some instructor-led courses may have suggested timelines or live sessions.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Absolutely! Upon successfully completing a course (including quizzes and projects), you'll receive a verifiable digital certificate that you can share on LinkedIn or your resume.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, PayPal, and other secure payment gateways. All transactions are encrypted for your safety.",
    },
    {
      question: "Can I access courses on mobile devices?",
      answer:
        "Yes, our platform is fully responsive and works seamlessly on desktops, tablets, and smartphones. You can learn anytime, anywhere.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "We offer a 14-day money-back guarantee on most courses. If you're not satisfied, contact support within 14 days of purchase for a full refund.",
    },
    {
      question: "How can I contact support if I have issues?",
      answer:
        "You can reach our support team via email at support@elearn.com or through the live chat on our website. We're here to help!",
    },
    {
      question: "Are the courses suitable for beginners?",
      answer:
        "Yes! We offer courses for all levels — from complete beginners to advanced professionals. Each course clearly indicates its difficulty level.",
    },
    {
      question: "Can I preview a course before buying?",
      answer:
        "Many courses offer free preview lessons. You can watch introductory videos and read the curriculum to decide if it's right for you.",
    },
  ];

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
              Frequently Asked{" "}
              <span className="text-purple-600">Questions</span>
            </motion.h2>
          </div>
        </div>

        <div className="text-center mb-16">
          <p className="text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
            Find answers to the most common questions about E-Learn. If you
            can't find what you're looking for, feel free to contact our support
            team.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-purple-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                  <HelpCircle
                    className="w-8 h-8 text-purple-600"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg max-w-4xl mx-auto leading-8 text-gray-700">
            Still have questions? We're here to help! Reach out to us at{" "}
            <a
              href="mailto:support@elearn.com"
              className="text-purple-600 font-semibold hover:underline"
            >
              support@elearn.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
