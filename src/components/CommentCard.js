import React from "react";

const CommentCard = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex w-full justify-between border rounded-md mt-2 ">
      <div className="p-3">
        <div className="flex gap-3 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png"
            className="object-cover w-10 h-10 p-1 rounded-full border-2 border-pink-400"
          />
          <h3 className="font-bold text-pink-300">
            {name}
            <br />
          </h3>
        </div>
        <p className="text-white mt-2">{comment}</p>
      </div>
    </div>
  );
};

export default CommentCard;
