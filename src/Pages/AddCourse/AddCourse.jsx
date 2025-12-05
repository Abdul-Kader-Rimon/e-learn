import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';

const AddCourse = () => {
  const {user} = useContext(AuthContext)
  const queryClient = useQueryClient();
  const navigation = useNavigate()


  const { mutate } = useMutation({
    mutationFn: async (newCourse) => {
      const { data } = await axios.post("http://localhost:3000/courses", newCourse);
      return data;
    }, 
    onSuccess: () => {
      toast.success("Course Added Successfully!");
      queryClient.invalidateQueries(["courses"]);

    },
    onError: () => {
      toast.error("Failed to add course!")
    },
  })
    const handleAddCourse = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const duration = form.duration.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const  email = form.email.value;

        const newCourse = {
          title,
          image,
          duration,
          price,
          category,
          description,
          email
        };

      // console.log(newCourse)
      mutate(newCourse)
      navigation("/my-courses");
        form.reset();

    }
     return (
       <div className="card bg-base-100 w-full max-w-lg mx-auto mt-12 shadow-2xl border border-gray-200">
         <div className="card-body">
           <h1 className="text-3xl font-bold text-center">Add New Course</h1>

           <form onSubmit={handleAddCourse}>
             <fieldset className="fieldset space-y-3">
               <div className="flex flex-col gap-2">
                 <label className="label">Course Title</label>
                 <input
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
                   name="category"
                   className="select w-full rounded-full focus:outline-gray-300"
                   required
                 >
                   {" "}
                   <option value="">Select Category</option>{" "}
                   <option value="Web Development">Web Development</option>{" "}
                   <option value="App Development">App Development</option>{" "}
                   <option value="UI/UX Design">UI/UX Design</option>{" "}
                   <option value="Graphics Design">Graphics Design</option>{" "}
                   <option value="Digital Marketing">Digital Marketing</option>{" "}
                   <option value="Cyber Security">Cyber Security</option>{" "}
                   <option value="Machine Learning">Machine Learning</option>{" "}
                   <option value="Data Science">Data Science</option>{" "}
                   <option value="Artificial Intelligence">
                     {" "}
                     Artificial Intelligence{" "}
                   </option>{" "}
                 </select>{" "}
               </div>

               <div className="flex flex-col gap-2">
                 <label className="label">Description</label>
                 <textarea
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

               <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-pink-500 to-red-600 w-full">
                 Add Course
               </button>
             </fieldset>
           </form>
         </div>
       </div>
     );
};


export default AddCourse;