import React from 'react';
import MyEnrolledCourseCard from './MyEnrolledCourseCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MyEnrollCourses = () => {
     const {
       data: courses,
       isLoading,
       isError,
       error,
     } = useQuery({
       queryKey: ["enrolledCourses"],
       queryFn: async () => {
         const { data } = await axios.get(
           "http://localhost:3000/enrolled-courses"
         );
         return data;
       },
     });

     if (isLoading) return <p className="text-center mt-5">Loading...</p>;
     if (isError) return <p className="text-center mt-5"> Error : {error.message}</p>;
    return (
      <div>
        <h1 className="text-3xl font-bold my-10 text-center">
          My  Enrolled Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <MyEnrolledCourseCard
              key={course._id}
              course={course}
               
            />
          ))}
        </div>
      </div>
    );
};

export default MyEnrollCourses;