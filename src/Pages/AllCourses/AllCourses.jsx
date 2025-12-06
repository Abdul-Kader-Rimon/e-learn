import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Loader from "../../components/Loader";

const fetchCourses = async (category) => {
  const { data } = await axios.get("http://localhost:3000/courses" , {params : {category : category || ""}});
  return data;
};

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("");


  const {
    data: courses ,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses" , selectedCategory],
    queryFn: ()=>fetchCourses(selectedCategory),
  });

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="scale-130">
        <Loader />
      </div>
    </div>
  )
  if (isError) return <p className="text-center mt-5"> Error : {error.message}</p>;

  return (
    <div>
      <div className="flex justify-center items-center my-6 ">
        <select
          onChange={(event) => setSelectedCategory(event.target.value)}
          defaultValue="Select Category"
          className=" w-8/12 md:w-4/12 px-6 py-3  rounded-2xl 
      bg-white text-black shadow-xl
      transition-all duration-300
      hover:shadow-2xl hover:shadow-purple-600/30 hover:scale-105  
      focus:outline-none focus:ring-3 focus:ring-purple-600/50
      animate-in fade-in zoom-in"
        >
          {" "}
          <option disabled={true}>Select Category</option>{" "}
          <option value="">All Category</option>{" "}
          <option value="Web Development">Web Development</option>{" "}
          <option value="Full Stack">Full Stack</option>{" "}
          <option value="Design">Design</option>{" "}
          <option value="Frontend">Frontend</option>{" "}
          <option value="Programming">Programming</option>{" "}
          <option value="Marketing">Marketing</option>{" "}
          <option value="Backend">Backend</option>{" "}
          <option value="Data Analysis">Data Analysis</option>{" "}
          <option value="Mobile Development">Mobile Development</option>{" "}
          <option value="Artificial Intelligence">
            {" "}
            Artificial Intelligence{" "}
          </option>{" "}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-5">
        { courses.length > 0 ? (
           courses.map((courses, index) => (
            <CourseCard
              key={index}
              _id={courses._id}
              title={courses.title}
              image={courses.image}
              price={courses.price}
              category={courses.category}
              duration={courses.duration}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-lg font-semibold text-gray-500">
            No courses found in this category
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
