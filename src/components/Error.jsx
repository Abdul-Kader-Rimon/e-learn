
import React from "react";
import { Link, useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className=" mt-20 flex items-center justify-center bg-base-100 text-base-content  px-6">
      <div>
        {/* Illustration */}

        {/* Text & Actions */}
        <div className="flex-1 text-center  ">
          <h1 className="mb-5 text-6xl md:text-8xl font-extrabold tracking-tight  ">
            404
          </h1>
          <h2 className="text-2xl md:text-6xl font-semibold my-6">
            Page Not Found
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="button px-4 py-2  dark:text-black"
              aria-label="Go back to home"
            >
              Back Home
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="button px-4 py-2  dark:text-black"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
