import React, { useEffect } from "react";

const ErrorCard = ({ message }) => {
      useEffect(() => {
      document.title = "Error | E-Learn"
    },[])
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg text-center shadow-md">
        <h2 className="text-2xl font-bold mb-2">Error!</h2>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};

export default ErrorCard;
