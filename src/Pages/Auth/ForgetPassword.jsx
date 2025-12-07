import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
 
 
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
 

const ForgetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sendPassResetEmailFunc } = useContext(AuthContext);
    useEffect(() => {
      document.title = "Forget Password | E-Learn"
    },[])


  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);
  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter your Email");
      return;
    }

    sendPassResetEmailFunc(email)
      .then(() => {
        toast.success("password reset email sent ");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="w-full max-w-md  mx-auto mt-6  sm:p-8 shadow-lg bg-white/5 border border-purple-500 p-4 rounded-lg ">
        <div>
          <h2 className="text-center font-bold text-5xl mb-10">
            Reset Password
          </h2>
          <form onSubmit={handleReset}>
            <label className="block text-lg font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="input input-bordered border border-purple-400 w-full bg-white   text-black    focus:outline-none focus:ring-2 focus:ring-purple-400 mb-3 hover:scale-105 transition duration-300 delay-150"
            />

            <button type="submit" className="button w-full py-2 text-black my-4">
              Reset Password
            </button>
          </form>
          <button
            onClick={() => navigate("/auth/login")}
            className="button w-full py-2 text-black"
          >
            Back To Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
