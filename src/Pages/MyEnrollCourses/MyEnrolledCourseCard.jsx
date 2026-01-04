
import React from 'react';
import { Link } from 'react-router';

const MyEnrolledCourseCard = ({ course }) => {
    
    const { _id, title, image, price, studentName,
        enrolledAt,
        courseId , phone } = course;

   
    return (
      <div className="border p-5 rounded-xl   border-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mt-3 ">{title}</h2>

        <p className="my-2 text-lg font-semibold ">
          Student Name : <span className=" ">{studentName}</span>{" "}
        </p>
        <p className="my-2 text-lg font-semibold ">
         Phone : <span className=" ">{phone}</span>{" "}
        </p>
        <p className="my-2 text-lg font-semibold ">
          Payment : <span className="text-green-600">${price}</span>{" "}
          <span>(Paid)</span>{" "}
        </p>
        <p className="my-2 text-lg font-semibold ">
          Course ID : <span className=" ">{courseId}</span>{" "}
        </p>
        <p className="my-2 text-lg font-semibold ">
          Enrollment Date : <span className=" ">{enrolledAt}</span>{" "}
        </p>
      </div>
    );
};

export default MyEnrolledCourseCard;