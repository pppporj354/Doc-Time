import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DocTime3 from "../../public/images/DocTime3.png";

function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous initialization for 3 seconds
    const initializeApp = async () => {
      try {
        // Simulating a delay of 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        setIsLoading(false);
      } catch (error) {
        console.error("Initialization failed:", error);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {isLoading ? (
        <div className="flex flex-col items-center animate-pulse">
          {/* Loading animation */}
          <img
            src={DocTime3}
            alt="Loading Icon"
            className="w-80 h-80 object-contain"
          />
          <p className="mt-0 text-gray-500 font-medium">DocTime</p>
        </div>
      ) : (
        <Link to="/">
          <button className="bg-blue-500 text-white font-semibold h-10 w-56 rounded-md border border-blue-700 shadow-md">
            Get Started
          </button>
        </Link>
      )}
    </div>
  );
}

export default LoadingAnimation;
