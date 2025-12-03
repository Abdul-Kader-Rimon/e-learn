 import React from 'react';
import { Link } from 'react-router';
 
 const MyCoursesCard = ({title , image , price , category , duration}) => {
    return (
      <div className="border p-5 rounded-xl simple-card">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mt-3 ">{title}</h2>
        <p className="mt-2 font-semibold">Category: {category}</p>
        <p className=" font-semibold"> Duration: {duration} hours</p>
        <p className="my-2 font-bold text-purple-600"> Price: ${price}</p>

        <Link>
          <button className="button w-full px-4 py-2">View Details</button>
        </Link>

        <div className="mt-4 flex gap-2 justify-between items-center">
          <Link>
            <button className="button w-full px-4 md:px-10  py-2">
              Update
            </button>
          </Link>
          <Link>
            <button className="button w-full px-4 md:px-10   py-2">
              Delete
            </button>
          </Link>
        </div>
      </div>
    );
 };
 
 export default MyCoursesCard;