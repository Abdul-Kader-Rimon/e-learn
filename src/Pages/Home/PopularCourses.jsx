import React from "react";
import CourseCard from "../AllCourses/CourseCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";

const PopularCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["popular-courses"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/popular-courses");
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
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Popular Courses</h2>
      <div className="flex flex-wrap justify-center gap-6">
         {courses.map((course) => (
        <div key={course._id}>
          <CourseCard
            _id={course._id}
            title={course.title}
            image={course.image}
            price={course.price}
            category={course.category}
            duration={course.duration}
          />
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default PopularCourses;
