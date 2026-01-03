 import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import React from 'react';
 
const WhyChooseUs = () => {
     const features = [
       "100% Quality Courses",
       "Expert Instructors",
       "Affordable Pricing",
       "Lifetime Course Access",
       "Certificate After Completion",
       "24/7 Student Support",
    ];
    
    const row1Features = features.slice(0, 3);
    const row2Features = features.slice(3, 6);
    return (
      <div className="max-w-7xl   mx-auto py-16 px-6">
        <div className="relative mb-12">
          <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <div className="relative inline-block bg-gray-50 px-8 py-3 rounded-full border border-gray-300 shadow-sm z-10">
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-2xl font-semibold text-gray-900 tracking-wide"
            >
              Why Choose Us
            </motion.h2>
 
          </div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className=" text-lg   max-w-2xl mx-auto mb-10"
          >
            We provide top-quality courses, expert teachers, and a powerful
            learning experience to help you achieve your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-8"
          >
            {row1Features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <CheckCircle className="w-10 h-10 mx-auto text-green-500 mb-4" />
                <h3 className="text-xl   font-semibold">{feature}</h3>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-8"
          >
            {row2Features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <CheckCircle className="w-10 h-10 mx-auto text-green-500 mb-4" />
                <h3 className="text-xl   font-semibold">{feature}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
 };
 
 export default WhyChooseUs;