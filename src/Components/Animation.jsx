import React, { useState, useEffect } from "react";

const Animation = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
      if (step < 5) {
        const timer = setTimeout(() => setStep(step + 1), 1000); // Adjust timing as needed
        return () => clearTimeout(timer);
      }
    }, [step]);
  return (
    <div>
        <div className="relative w-screen h-screen bg-white flex justify-center items-center overflow-hidden">
        {/* Orange and Blue Circles */}
        <div
            className={`absolute bottom-0 left-0 w-40 h-40 bg-orange-500 rounded-full ${
            step >= 1 ? "animate-moveUp" : ""
            }`}
        ></div>
        <div
            className={`absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full ${
            step >= 2 ? "animate-moveUp" : ""
            }`}
        ></div>
        <div
            className={`absolute top-0 left-0 w-40 h-40 bg-orange-500 rounded-full ${
            step >= 3 ? "animate-moveLeft" : ""
            }`}
        ></div>
        <div
            className={`absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full ${
            step >= 4 ? "animate-moveLeft" : ""
            }`}
        ></div>
        </div>
    </div>
  )
}

export default Animation