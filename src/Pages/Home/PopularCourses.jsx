import React from "react";
import CourseCard from "../AllCourses/CourseCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import { motion } from "framer-motion";

const PopularCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["popular-courses"],
    queryFn: async () => {
      const { data } = await axios.get(
        " https://e-learn-zeta.vercel.app/popular-courses"
      );
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
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Popular Courses
      </h2>
      <div className="flex text-black flex-wrap justify-center gap-6 px-4">
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
            <CourseCard
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
