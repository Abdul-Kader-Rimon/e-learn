import React from "react";
import { motion } from "framer-motion";

const instructors = [
  {
    name: "Jhankar Mahbub",
    subject: "Sr. Web Developer",
    bio: "Expertise: JavaScript, ES6, React, Redux, Angular6, Data visualization, Material Design.",
    image: "https://i.ibb.co.com/5gp3p44b/download-9.jpg",
  },
  {
    name: "Md Rasel Ahmed",
    subject: "Sr. Web Developer",
    bio: "10+ years in EdTech and software development.",
    image: "https://i.ibb.co.com/fL31J0W/download-10.jpg",
  },
  {
    name: "ABDUR RAKIB",
    subject: "Sr. Web Developer",
    bio: " 5+ years of experience in software development.",
    image: "https://i.ibb.co.com/gLH3zLyC/download-12.jpg",
  },
];
const TopInstructors = () => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl font-bold mb-6"
        >
          Top Instructors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Learn from highly experienced instructors who specialize in delivering
          real-world skills and practical knowledge.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mt-8">
          {instructors.map((inst, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow"
              />
              <h3 className="text-xl font-semibold">{inst.name}</h3>
              <p className="text-indigo-600 font-medium mt-1">{inst.subject}</p>
              <p className="text-gray-600 mt-3 text-sm">{inst.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
