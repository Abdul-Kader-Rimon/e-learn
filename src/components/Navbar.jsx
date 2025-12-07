import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaRegIdBadge, FaRegUserCircle, FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [authOpen , setAuthOpen] = useState(false)

  const handleThemeChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    const theme = isChecked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isChecked]);

  return (
    <div>
      <div className="navbar   ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="text-lg menu font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/all-courses"}>Courses</NavLink>
              </li>
              <li>
                <a>Dashboard</a>
                <ul className="p-2">
                  <li>
                    <Link to={"/my-enrolledCourses"}>My Enrolled course</Link>
                  </li>
                  <li>
                    <Link to={"/add-course"}>Add course</Link>
                  </li>
                  <li>
                    <Link to={"/my-courses"}>My added course</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br to-purple-600 via-blue-500 from-blue-600 italic">
              E-Learn
            </h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all-courses"}>Courses</NavLink>
            </li>
            <li>
              <details className="group transition-all duration-300">
                <summary className="cursor-pointer">Dashboard</summary>

                <ul
                  className="
                    p-4 w-56 space-y-2 bg-base-100 shadow-lg rounded-lg
                    origin-top
                    transition-all duration-300
                    max-h-0 opacity-0 scale-95 overflow-hidden
                    group-open:max-h-96 group-open:opacity-100 group-open:scale-100 z-10
                  "
                >
                  <li>
                    <Link to={"/my-enrolledCourses"}>My Enrolled course</Link>
                  </li>
                  <li>
                    <Link to={"/add-course"}>Add course</Link>
                  </li>
                  <li>
                    <Link to={"/my-courses"}>My added course</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleThemeChange}
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="my-1">
                  <Link to={"/my-profile"}>
                    <FaUser /> Profile
                  </Link>
                </li>
                <li className="my-1">
                  <Link to={"/my-courses"}>My Courses</Link>
                </li>
                <li className="my-1">
                  <Link to={"/my-enrolledCourses"}>My Enrolled Courses</Link>
                </li>

                <li>
                  <button
                    onClick={signOutUser}
                    className="btn button text-black  btn-xs text-left  py-4"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="hidden md:flex gap-2">
                <Link
                  to={"/auth/login"}
                  className="btn  button rounded-full border-gray-300 text-purple-700 "
                >
                  {" "}
                  <IoLogIn /> Login
                </Link>
                <Link
                  to={"/auth/register"}
                  className="btn  button rounded-full border-gray-300 text-purple-700 "
                >
                  {" "}
                  <FaRegIdBadge /> Ragistation
                </Link>
              </div>

              <div className="md:hidden relative">
                <button
                  onClick={() => setAuthOpen(!authOpen)}
                  className="btn btn-ghost btn-circle text-2xl"
                >
                  <FaRegUserCircle />
                </button>
                {authOpen && (
                  <div className="absolute space-y-2 right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg p-2 z-50">
                    <Link
                      to="/auth/login"
                      className="button text-black  flex items-center gap-2 py-2 px-3 rounded hover:bg-purple-100"
                      onClick={() => setAuthOpen(false)}
                    >
                      <IoLogIn /> Login
                    </Link>
                    <Link
                      to="/auth/register"
                      className="button text-black flex items-center gap-2 py-2 px-3 rounded hover:bg-purple-100"
                      onClick={() => setAuthOpen(false)}
                    >
                      <FaRegIdBadge /> Register
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
