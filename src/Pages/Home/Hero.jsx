 import React from 'react';
import { motion } from "framer-motion";
import img from "../../assets/e-learn-banner.webp";
 import { Link } from "react-router";
 const Hero = () => {
    return (
      <div className="hero min-h-screen px-4">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16 gap-8">
          <motion.img
            src={img}
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-2xl"
            initial={{ x: 120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.div
            className="text-center lg:text-left"
            initial={{ x: -120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Learn & Create Your Own Courses!
            </h1>
            <p className="py-6 text-sm sm:text-base md:text-lg">
              Our e-learning platform lets you not only enroll in top-quality
              courses but also create and upload your own online courses. Share
              your knowledge, learn from others, and grow your skills anytime,
              anywhere.
            </p>
            <Link to={"/all-courses"}>
              <button className="button px-6 py-3 text-black">Get Started</button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
 };
 
 export default Hero;