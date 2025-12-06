import {  useContext } from "react";
 
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

 if (loading)
   return (
     <div className="flex justify-center items-center h-screen">
       <div className="scale-130">
         <Loader />
       </div>
     </div>
   );

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
