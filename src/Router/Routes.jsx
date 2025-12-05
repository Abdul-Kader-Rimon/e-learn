import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import AllCourses from "../Pages/AllCourses/AllCourses";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import AddCourse from "../Pages/AddCourse/AddCourse";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import MyCourses from "../Pages/MyCourses/MyCourses";
import UpdateCourse from "../Pages/UpdateCourse/UpdateCourse";
import MyEnrollCourses from "../Pages/MyEnrollCourses/MyEnrollCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-courses",
        element: (
          <PrivateRoute>
            <AllCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-course",
        element: <AddCourse />,
      },
      {
        path: "/course-details/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-courses",
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-course/:id",
        element: (
          <PrivateRoute>
            <UpdateCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-enrolledCourses",
        element: (
          <PrivateRoute>
            <MyEnrollCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forgetpassword",
        element: <ForgetPassword />,
      },
    ],
  },
]);
