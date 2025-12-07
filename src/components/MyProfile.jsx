import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import ErrorCard from "./ErrorCard";
 

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
 
  return (
    <div className="flex justify-center mt-10 px-4 py-4">
      <div className=" w-full md:w-2/6   border border-purple-400 rounded-lg shadow-lg my-4 px-4 py-4">
        <h2 className="text-center font-bold text-3xl mt-4">My Profile</h2>

        <div className="flex flex-col items-center pb-8 px-6 pt-6">
          <img
            className="w-32 h-32 rounded-full mb-3 border-4 border-purple-400 shadow-lg"
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt=""
          />
          <h2 className="text-2xl font-semibold mb-1  text-center">
            {user?.displayName}
          </h2>
          <p className="text-xl   text-center">{user?.email}</p>

          <div className="mt-4">
            <button
              onClick={() => navigate("/")}
              className="button text-black w-full py-2 px-8"
            >
              Go Back Home 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
