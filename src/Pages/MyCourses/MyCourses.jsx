import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import MyCoursesCard from "./MyCoursesCard";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import { motion } from "framer-motion";

const fetchMyCourses = async (email) => {
  const { data } = await axios.get(
    ` https://e-learn-zeta.vercel.app/my-courses?email=${email}`
  );
  return data;
};

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    document.title = "My Courses | E-Learn";
  }, []);
  const {
    data: courses = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-courses", user?.email],
    queryFn: () => fetchMyCourses(user?.email),
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
    <div className="w-11/12 mx-auto">
      <div className="relative mb-16 text-center">
        <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        <div className="relative inline-block bg-white px-10 py-4 rounded-full border border-purple-200 shadow-md z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-2xl text-black md:text-3xl font-bold tracking-wide"
          >
            My Added <span className="text-purple-600">Courses</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
        {courses.map((course, index) => (
          <MyCoursesCard
            key={index}
            _id={course._id}
            title={course.title}
            image={course.image}
            price={course.price}
            category={course.category}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
