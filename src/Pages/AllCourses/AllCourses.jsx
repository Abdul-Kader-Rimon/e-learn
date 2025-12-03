import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Card from "./CourseCard";

const fetchCourses = async () => {
  const { data } = await axios.get("http://localhost:3000/courses");
  return data;
};

const AllCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (isError) return <p className="text-center mt-5"> Error : {error.message}</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
      {courses.map((courses , index) => (
        <Card
          key={index}
          _id={courses._id}
          title={courses.title}
          image={courses.image}
          price={courses.price}
          category={courses.category}
          duration={courses.duration}
        />
      ))}
    </div>
  );
};

export default AllCourses;
