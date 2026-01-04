import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const MyCoursesCard = ({ _id, title, image, price, category, duration }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `http://localhost:5000/delete-course/${id}`
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Course deleted Successfully");
      queryClient.invalidateQueries(["my-courses"]);
    },
    onError: () => {
      toast.error("Failed to delete Course ");
    },
  });
  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  return (
    <div className="border p-5  rounded-xl  ">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold mt-3 ">{title}</h2>
      <p className="mt-2 font-semibold">Category: {category}</p>
      <p className=" font-semibold"> Duration: {duration} hours</p>
      <p className="my-2 font-bold text-purple-600"> Price: ${price}</p>

      <Link to={`/course-details/${_id}`}>
        <button className="button w-full px-4 text-black py-2">
          View Details
        </button>
      </Link>

      <div className="mt-4 flex gap-2 justify-between items-center">
        <Link to={`/update-course/${_id}`}>
          <button className="button w-full px-4 md:px-10 text-black  py-2">
            Update
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleDelete(_id)}
            className="button w-full px-4 md:px-10 text-black   py-2"
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyCoursesCard;
