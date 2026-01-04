 
import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, Link, useNavigate } from "react-router";  
import {
  Menu,
  X,
  Home,
  LogOut,
  User,
  BookOpen,
  Trophy,
  Settings,
  Library,
  SquarePlus,
  LayoutGrid,
} from "lucide-react";
import Navbar from "../components/Navbar";
 
import { AuthContext } from "../Context/AuthContext";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const { user, signOutUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

 

 
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen   flex">
    
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl md:w-64"
          >
            
            <div className="flex items-center justify-between p-6 border-b border-purple-100">
              <h2 className="text-2xl font-bold text-purple-600">E-Learn</h2>
              <button
                onClick={toggleSidebar}
                className="p-3 rounded-xl hover:bg-purple-100 transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-7 h-7 text-purple-600" />
              </button>
            </div>

            
            <nav className="p-6 space-y-3">
              <Link
                to="/dashboard"
                onClick={closeSidebar}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-100 text-purple-700 font-medium transition-all"
              >
                <LayoutGrid className="w-5 h-5" />
                Dashboard Home
              </Link>
              <Link
                to="my-profile"
                onClick={closeSidebar}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-100 text-purple-700 font-medium transition-all"
              >
                <User className="w-5 h-5" />
                My Profile
              </Link>
              <Link
                to="my-enrolledCourses"
                onClick={closeSidebar}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-100 text-purple-700 font-medium transition-all"
              >
                <BookOpen className="w-5 h-5" />
                My Enroll Courses
              </Link>
              <Link
                to="add-course"
                onClick={closeSidebar}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-100 text-purple-700 font-medium transition-all"
              >
                <SquarePlus className="w-5 h-5" />
                Add Course
              </Link>
              <Link
                to="my-courses"
                onClick={closeSidebar}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-100 text-purple-700 font-medium transition-all"
              >
                <Library className="w-5 h-5" />
                My Courses
              </Link>

              <div className="pt-6 border-t border-purple-100">
                <Link
                  to="/"
                  onClick={closeSidebar}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-purple-100 text-purple-700 font-medium transition-all"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
                <button
                  onClick={signOutUser}
                  className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-red-50 text-red-600 font-medium transition-all text-left"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/60 z-40"
          aria-hidden="true"
        />
      )}

      <div className="flex-1 flex flex-col">
        <header className="    shadow-lg">
          <div className="w-11/12 max-w-6xl mx-auto py-5 flex justify-between items-center">
            <Navbar />

            <button
              onClick={toggleSidebar}
              className="p-3 rounded-xl hover:bg-gray-300 transition-colors"
              aria-label="Open sidebar"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
