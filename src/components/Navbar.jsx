 import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { FaRegIdBadge, FaUser } from 'react-icons/fa';
 
const Navbar = () => {
   const { user, signOutUser } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                    <a>My Enrolled course</a>
                  </li>
                  <li>
                    <Link to={"/add-course"}>Add course</Link>
                  </li>
                  <li>
                    <a>My added course</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">E-Learn</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
                    <a>My Enrolled course</a>
                  </li>
                  <li>
                    <Link to={"/add-course"}>Add course</Link>
                  </li>
                  <li>
                    <a>My added course</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {/* <div className="navbar-end flex gap-2">
          <NavLink to={"/auth/login"} className="btn">
            Login
          </NavLink>
          <NavLink to={"/auth/register"} className="btn">
            Ragistation
          </NavLink>
        </div> */}

        <div className="navbar-end gap-3">
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
                <li className="mt-3">
                  <Link to={"/profile"}>
                    <FaUser /> Profile
                  </Link>
                </li>

                <li>
                  <Link to={"/my-models"}>My Models</Link>
                </li>

                <li>
                  <Link to={"/my-downloads"}>My Downloads</Link>
                </li>

                <li>
                  <button
                    onClick={signOutUser}
                    className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to={"/auth/login"}
                className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
              >
                {" "}
                <IoLogIn /> Login
              </Link>
              <Link
                to={"/auth/register"}
                className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
              >
                {" "}
                <FaRegIdBadge /> Ragistation
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
 };
 
 export default Navbar;