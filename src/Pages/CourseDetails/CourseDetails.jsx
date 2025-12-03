import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router";


const fetchSingleCourseData = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/courses/${id}`);
    return data;
};


const CourseDetails = () => {
    const { id } = useParams();
    const {
        data: course,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["course", id],
        queryFn: () => fetchSingleCourseData(id),
        
    });

    if (isLoading) return <p className="text-center mt-5">Loading...</p>;
    if (isError) return <p className="text-center mt-5"> Error : {error.message}</p>;
  

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="rounded-2xl overflow-hidden shadow-xl bg-white ">
        <img
          src={course.image}
          alt="course banner"
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <h1 className="text-4xl font-bold">{course.title}</h1>

          <div className="mt-7 border rounded-xl p-5">
            <h2 className="text-2xl font-bold mb-3">Course Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <div className="font-bold text-slate-500">Title</div>
                <div className="font-semibold">{course.title}</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="font-bold text-slate-500">Category</div>
                <div className="font-semibold">{course.category}</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="font-bold text-slate-500">Duration</div>
                <div className="font-semibold">{course.duration} hours</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="font-bold text-slate-500">Price</div>
                <div className="font-semibold">${course.price}</div>
              </div>
            </div>
            
            <div className="my-3 text-slate-600">
            {" "}
            <span className="font-bold">Discription: </span>
            {course.description}
          </div>
          </div>

          

          <button className="button my-5 py-2 px-10">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
