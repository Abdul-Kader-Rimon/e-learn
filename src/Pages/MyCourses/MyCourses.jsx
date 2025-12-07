import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import MyCoursesCard from "./MyCoursesCard";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";

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
    <div>
      <h1 className="text-3xl font-bold my-10 text-center">My Added Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 dark:text-black">
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
