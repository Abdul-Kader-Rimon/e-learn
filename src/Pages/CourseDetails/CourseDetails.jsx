import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useParams } from "react-router";
import EnrollCourse from "../EnrollCourse/EnrollCourse";
import { AuthContext } from "../../Context/AuthContext";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";


const fetchSingleCourseData = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/courses/${id}`);
    return data;
};


const CourseDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
    const {
        data: course,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["course", id],
        queryFn: () => fetchSingleCourseData(id),
        
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
    <div className="max-w-4xl mx-auto p-6  dark:text-black">
      <div className="rounded-2xl overflow-hidden shadow-xl bg-white ">
        <img
          src={course.image}
          alt="course banner"
          className="w-full h-72 object-cover"
        />

        <div className="p-6 ">
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

          {/* <button className="button my-5 py-2 px-10">Enroll Now</button> */}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="button my-5 py-2 px-10"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Enroll Now
          </button>
          <EnrollCourse    user={user} course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
