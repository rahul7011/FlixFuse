import React from "react";

const Error = () => {
  return (
    <div className="bg-gray-900 text-pink-300 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl">Error: Desktop Only</h1>
        <p className="text-2xl">
          This website is only supported on desktop devices.
        </p>
      </div>
    </div>
  );
};

export default Error;
