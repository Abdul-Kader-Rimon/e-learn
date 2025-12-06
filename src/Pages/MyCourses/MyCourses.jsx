 import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import MyCoursesCard from './MyCoursesCard';
 
const fetchMyCourses = async (email) => {
  const { data } = await axios.get(`http://localhost:3000/my-courses?email=${email}`);
  return data;
};


const MyCourses = () => {
  const { user } = useContext(AuthContext);

  const {
    data: courses = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-courses", user?.email],
    queryFn: () => fetchMyCourses(user?.email)
  });

  if (isLoading) return <p className="text-center mt-5">Loading...</p>;
  if (isError) return <p className="text-center mt-5"> Error : {error.message}</p>;
  
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