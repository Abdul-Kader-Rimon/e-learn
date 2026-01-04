import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";

 
const fetchCourses = async (category, page, limit) => {
  const { data } = await axios.get("http://localhost:5000/courses", {
    params: {
      category: category || "",
      page,
      limit,
    },
  });
  return data;
};

 
const fetchCourseCount = async (category) => {
  const { data } = await axios.get("http://localhost:5000/courses/count", {
    params: { category: category || "" },
  });
  return data.count;
};

const AllCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const limit = 8;

 
  useEffect(() => {
    document.title = "All Courses | E-Learn";
  }, []);

 
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

 
  const {
    data: courses = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["courses", selectedCategory, page],
    queryFn: () => fetchCourses(selectedCategory, page, limit),
    keepPreviousData: true,
  });

 
  const { data: totalCount = 0 } = useQuery({
    queryKey: ["courseCount", selectedCategory],
    queryFn: () => fetchCourseCount(selectedCategory),
  });

  const totalPages = Math.max(page, Math.ceil(totalCount / limit));
  
 const getPageNumbers = () => {
   const maxPageButtons = 3;
   let startPage, endPage;

   if (totalPages <= maxPageButtons) {
     startPage = 1;
     endPage = totalPages;
   } else {
     if (page <= 2) {
       startPage = 1;
       endPage = maxPageButtons;
     } else if (page >= totalPages - 1) {
       startPage = totalPages - maxPageButtons + 1;
       endPage = totalPages;
     } else {
       startPage = page - 1;
       endPage = page + 1;
     }
   }

   const pages = [];
   for (let i = startPage; i <= endPage; i++) pages.push(i);
   return pages;
 };

  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="scale-125">
          <Loader />
        </div>
      </div>
    );
  }

  if (isError) {
    return <ErrorCard message={error.message} />;
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-center my-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-8/12 md:w-4/12 px-6 py-3 rounded-2xl 
          bg-white text-black shadow-xl
          transition-all duration-300
          hover:shadow-2xl hover:shadow-purple-600/30 hover:scale-105
          focus:outline-none focus:ring-4 focus:ring-purple-600/50"
        >
          <option value="">All Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Design">Design</option>
          <option value="Programming">Programming</option>
          <option value="Marketing">Marketing</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={course._id}
              _id={course._id}
              title={course.title}
              image={course.image}
              price={course.price}
              category={course.category}
              duration={course.duration}
            />
          ))
        ) : (
          <p className="text-center col-span-4 text-lg font-semibold text-gray-500">
            No courses found in this category
          </p>
        )}
      </div>

      <div className="flex justify-center items-center gap-2 my-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2  border border-purple-400 rounded disabled:opacity-40"
        >
          Prev
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`px-4 py-2 rounded ${
              page === pageNumber
                ? "bg-purple-600 text-white   scale-110"
                : " border border-purple-400 "
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          disabled={courses.length === 0}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border border-purple-400 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllCourses;
