import React, { useEffect } from "react";
import MyEnrolledCourseCard from "./MyEnrolledCourseCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";

const MyEnrollCourses = () => {
  useEffect(() => {
    document.title = "My Enrolled Courses | E-Learn";
  }, []);

  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["enrolledCourses"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:5000/enrolled-courses"
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
    <div>
      <h1 className="text-3xl font-bold my-10 text-center">
        My Enrolled Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 dark:text-black">
        {courses.map((course) => (
          <MyEnrolledCourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyEnrollCourses;
