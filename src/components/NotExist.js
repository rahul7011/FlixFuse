import React from "react";

const NotExist = () => {
  return (
    <div className="bg-gray-900 text-pink-300 h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl p-10">Error:404 Not Found</h1>
        <p className="text-4xl">This Page does not exist!</p>
      </div>
    </div>
  );
};

export default NotExist;
