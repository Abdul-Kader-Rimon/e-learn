import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { BookOpen, Clock, PlayCircle, ArrowRight } from "lucide-react";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentCourses = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // ✅ Backend call (localhost:5000)
        const res = await axios.get("http://localhost:5000/enrolled-courses");

        // ✅ ensure array
        const allEnrolled = Array.isArray(res.data) ? res.data : [];

        // ✅ logged-in user courses
        const userEnrolled = allEnrolled.filter(
          (item) => item.email === user.email
        );

        // ✅ recent 3 courses
        const recentThree = userEnrolled
          .sort(
            (a, b) => new Date(b.enrolledAt || 0) - new Date(a.enrolledAt || 0)
          )
          .slice(0, 3);

        setEnrolledCourses(recentThree);
      } catch (error) {
        console.error(error);
        setEnrolledCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentCourses();
  }, [user?.email]);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen   py-10">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Welcome back,{" "}
            <span className="text-purple-600">
              {user?.displayName || "Learner"}
            </span>{" "}
          </h1>
          <p className="  text-lg">
            Here are your most recent courses
          </p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <PlayCircle className="text-purple-600" />
            Recent Courses
          </h2>
          <Link
            to="my-enrolledCourses"
            className="text-purple-600 font-medium flex items-center gap-1"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        {enrolledCourses.length === 0 ? (
          <div className="  rounded-xl shadow p-10 text-center">
            <BookOpen className="w-16 h-16 text-purple-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              No courses enrolled yet
            </h3>
            <p className="  mb-6">
              Start learning by enrolling in a course
            </p>
            <Link
              to="/all-courses"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <motion.div
                key={course._id}
                whileHover={{ y: -5 }}
                className=" border border-gray-50 rounded-xl shadow overflow-hidden"
              >
                <img
                  src={
                    course.image ||
                    "https://via.placeholder.com/600x400?text=Course"
                  }
                  alt={course.title}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {course.title || course.courseName}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {course.duration || "8 weeks"}
                    </span>
                    <span>{course.progress || 0}% done</span>
                  </div>

                  <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${course.progress || 30}%` }}
                    />
                  </div>

                  <Link
                    to={`/courses/${course._id}`}
                    className="block text-center py-2 bg-purple-600 text-white rounded-md"
                  >
                    Continue Course
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
