import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import { motion } from "framer-motion";
import PopularCard from "../AllCourses/PopularCard";

const PopularCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["popular-courses"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/popular-courses");
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="scale-130">
          <Loader />
        </div>
      </div>
    );
  if (isError) return <ErrorCard message={error.message} />;
  return (
    <div className="max-w-7xl   mx-auto px-4 py-10">
      <div className="relative mb-12">
        
        <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div className="relative inline-block bg-gray-50 px-8 py-3 rounded-full border border-gray-300 shadow-sm z-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-wide">
            Popular Courses
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 justify-items-center max-w-screen-2xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={course._id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <PopularCard
              _id={course._id}
              title={course.title}
              image={course.image}
              price={course.price}
              category={course.category}
              duration={course.duration}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
