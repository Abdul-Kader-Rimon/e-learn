import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const EnrollCourse = ({ user, course }) => {
    
    const enrollMutation = useMutation({
        mutationFn: async (enrollmentData) => {
            const { data } = await axios.post("http://localhost:3000/enrolled-courses", enrollmentData)
            return data;

        }, 
        
    onSuccess: () => {
        toast.success(" Enrollment  Successfully!");
        document.getElementById("my_modal_3").close();
      

    },
        onError: () => {
            toast.error("Enrollment Failed ");
        }
})


    const handleEnroll = (event) => {
        event.preventDefault();

        const form = event.target;

        const enrollmentData = {
        studentName: form.studentName.value,
          email: form.email.value,
          phone: parseInt(form.phone.value),
          title: form.title.value,
          image: form.image.value,
            price: parseInt(form.price.value),
          courseId: course._id,
           enrolledAt: new Date()
        };

        console.log(enrollmentData)
        enrollMutation.mutate(enrollmentData)
    }

  return (
    <div className="text-base-content">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="font-bold text-3xl text-center my-2">Enroll Course</h2>
          <form onSubmit={handleEnroll}>
            <fieldset className="fieldset space-y-3">
              <div className="flex flex-col gap-2">
                <label className="label">Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  className="input w-full rounded-full focus:outline-gray-300"
                  value={user?.displayName}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Course Title</label>
                <input
                  type="text"
                  name="title"
                  className="input w-full rounded-full focus:outline-gray-300"
                  value={course?.title}
                  readOnly
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label">Image URL</label>
                <input
                  type="text"
                  name="image"
                  className="input w-full rounded-full focus:outline-gray-300"
                  value={course?.image}
                  readOnly
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label">Price (USD)</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full rounded-full focus:outline-gray-300"
                  value={course?.price}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  className="input w-full rounded-full focus:outline-gray-300"
                  placeholder="Enter your Phone number"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full rounded-full focus:outline-gray-300"
                  value={user?.email}
                  readOnly
                />
              </div>

              <button
                type="submit"
                className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600 w-full"
              >
                Payment Now
              </button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default EnrollCourse;
