import React from "react";
import { Target, BookOpen, Eye } from "lucide-react";  
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="w-full py-20  ">
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
              About <span className="text-purple-600">E-Learn</span>
            </motion.h2>
          </div>
        </div>
        <div className="text-center mb-16">
          <p className="text-xl   max-w-4xl mx-auto leading-relaxed">
            E-Learn is a cutting-edge online learning platform committed to
            empowering learners worldwide with practical, industry-relevant
            skills in technology, programming, design, business, and beyond. We
            believe in making high-quality education accessible, flexible, and
            transformative for everyone — from students to working
            professionals.
          </p>
        </div>

        <div className="mb-20 text-center">
          <p className="text-lg   max-w-5xl mx-auto leading-8">
            Founded with the vision of bridging the gap between traditional
            education and real-world demands, E-Learn partners with top industry
            experts and instructors to deliver interactive, hands-on courses.
            Our platform features engaging video lessons, practical projects,
            quizzes, certifications, and a supportive community to ensure you
            not only learn but truly master new skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="  p-8 rounded-2xl shadow-xl border border-purple-300 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 rounded-full">
                <Target
                  className="w-12 h-12 text-purple-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold   mb-4 text-center">
              Our Mission
            </h3>
            <p className="  leading-relaxed text-center">
              To democratize education by providing affordable, high-quality,
              and practical courses that equip learners with industry-ready
              skills, fostering personal growth and career advancement for
              millions around the globe.
            </p>
          </div>

          <div className="  p-8 rounded-2xl shadow-xl border border-purple-300 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 rounded-full">
                <BookOpen
                  className="w-12 h-12 text-purple-600"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold   mb-4 text-center">
              Our Courses
            </h3>
            <p className="  leading-relaxed text-center">
              Expertly curated courses designed and taught by seasoned
              professionals. From beginner-friendly introductions to advanced
              specializations, every course includes real-world projects,
              interactive assignments, and lifetime access.
            </p>
          </div>

          <div className="  p-8 rounded-2xl shadow-xl border border-purple-300 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 rounded-full">
                <Eye className="w-12 h-12 text-purple-600" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-2xl font-bold   mb-4 text-center">
              Our Vision
            </h3>
            <p className="  leading-relaxed text-center">
              To become the world's leading e-learning platform, inspiring
              lifelong learning and creating opportunities for individuals to
              thrive in an ever-evolving digital economy.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg   max-w-4xl mx-auto leading-8">
            Join thousands of learners who have transformed their careers with
            E-Learn. Start your journey today and unlock your full potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
