import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const UpdateCourseData = async (id) => {
  const { data } = await axios.get(
    ` https://e-learn-zeta.vercel.app/courses/${id}`
  );
  return data;
};

const UpdateCourse = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigation = useNavigate();

  useEffect(() => {
    document.title = "Update Course | E-Learn";
  }, []);

  const { data: course, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: () => UpdateCourseData(id),
  });

  const { mutate } = useMutation({
    mutationFn: async (updatedCourse) => {
      const { data } = await axios.put(
        ` https://e-learn-zeta.vercel.app/update-course/${id}`,
        updatedCourse
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Course Updated Successfully");
      queryClient.invalidateQueries(["my-courses"]);
      navigation("/my-courses");
    },
    onError: () => {
      toast.error("Update failed ");
    },
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedCourse = {
      title: form.title.value,
      image: form.image.value,
      duration: parseInt(form.duration.value),
      price: parseInt(form.price.value),
      category: form.category.value,
      description: form.description.value,
      email: user?.email,
      createdAt: course?.createdAt,
    };

    mutate(updatedCourse);
  };

  if (isLoading || !course)
    return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="card bg-base-100 w-full max-w-lg mx-auto mt-12 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Update Course</h1>

        <form onSubmit={handleUpdate}>
          <fieldset className="fieldset space-y-3">
            <div className="flex flex-col gap-2">
              <label className="label">Course Title</label>
              <input
                defaultValue={course?.title}
                type="text"
                name="title"
                className="input w-full rounded-full focus:outline-gray-300"
                placeholder="Course Title"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Image URL</label>
              <input
                defaultValue={course?.image}
                type="text"
                name="image"
                className="input w-full rounded-full focus:outline-gray-300"
                placeholder="Image URL"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Price (USD)</label>
              <input
                defaultValue={course?.price}
                type="text"
                name="price"
                className="input w-full rounded-full focus:outline-gray-300"
                placeholder="Course Price"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Duration</label>
              <input
                defaultValue={course?.duration}
                type="text"
                name="duration"
                className="input w-full rounded-full focus:outline-gray-300"
                placeholder="Course Duration"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              {" "}
              <label className="label">Category</label>{" "}
              <select
                defaultValue={course?.category}
                name="category"
                className="select w-full rounded-full focus:outline-gray-300"
                required
              >
                {" "}
                <option value="">Select Category</option>{" "}
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
              </select>{" "}
            </div>

            <div className="flex flex-col gap-2">
              <label className="label">Description</label>
              <textarea
                defaultValue={course?.description}
                name="description"
                className="textarea w-full rounded-xl focus:outline-gray-300"
                placeholder="Course Description"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="label">Email</label>
              <input
                value={user?.email}
                type="email"
                name="email"
                className="input w-full rounded-full focus:outline-gray-300"
                placeholder="Course Title"
                required
              />
            </div>

            <button className="btn button text-black  mt-4 rounded-full  ">
              Update Course
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
