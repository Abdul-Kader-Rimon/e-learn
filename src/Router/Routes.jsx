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
import Error from "../components/Error";
import MyProfile from "../components/MyProfile";
import PublicRoute from "./PublicRoute";
import About from "../components/AdditionalPages/About";
import Contact from "../components/AdditionalPages/Contact";
import Blog from "../components/AdditionalPages/Blog";
 

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
        element:<AllCourses /> ,
      },
      {
        path: "/about",
        element:<About /> ,
      },
      {
        path: "/contact-us",
        element:<Contact /> ,
      },
      {
        path: "/blog",
        element:<Blog /> ,
      },
      {
        path: "/add-course",
        element: <PrivateRoute>
          <AddCourse />
        </PrivateRoute>
          ,
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
        element: <PublicRoute>
          <Login />
        </PublicRoute> ,
      },
 
      {
        path: "/auth/register",
        element: <PublicRoute>
          <Register />
        </PublicRoute> ,
      },
      {
        path: "/auth/forgetpassword",
        element: <ForgetPassword />,
      },
      {
        path: "/my-profile",
        element: <PrivateRoute>
          <MyProfile />
          </PrivateRoute>,
      },
      {
        path: "*",
        element: <Error/>,
      },
    ],
  },
]);
