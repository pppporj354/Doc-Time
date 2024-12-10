import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(() => {
    
    return localStorage.getItem("loadingCompleted") !== "true";
  });

  useEffect(() => {
    if (isLoading) {
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("loadingCompleted", "true"); 
      }, 3000);

      
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoading ? (
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      ) : (
        <Link to="/">
          <button className="bg-blue-500 text-white font-semibold h-10 w-56 rounded-md border border-blue-700 shadow-md">
            Get Started
          </button>
        </Link>
      )}
    </div>
  );
};

export default LoadingAnimation;
