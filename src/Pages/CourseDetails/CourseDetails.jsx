import React from "react";

const CourseDetails = ({ course }) => {
  // Example fallback data if no props passed
  const data = course || {
    title: "Full-Stack Web Development",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80",
    price: 49,
    duration: "40 hours",
    category: "Web Development",
    description:
      "Learn full-stack development using React, Node.js, Express, and MongoDB with hands-on projects and real-world application building.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="rounded-2xl overflow-hidden shadow-xl bg-white ">
        {/* Image */}
        <img
          src={data.image}
          alt="course banner"
          className="w-full h-72 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-extrabold">{data.title}</h1>

          {/* Table */}
          <div className="mt-7 border rounded-xl p-5">
            <h2 className="text-xl font-semibold mb-3">Course Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <div className="text-sm text-slate-500">Title</div>
                <div className="font-semibold">{data.title}</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="text-sm text-slate-500">Category</div>
                <div className="font-semibold">{data.category}</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="text-sm text-slate-500">Duration</div>
                <div className="font-semibold">{data.duration}</div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="text-sm text-slate-500">Price</div>
                <div className="font-semibold">${data.price}</div>
              </div>
            </div>
          </div>

          <div className="my-3 text-slate-600"> <span className="font-bold">Discription: </span>{data.description}</div>

          {/* Enroll Button */}
          <button className="button">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
