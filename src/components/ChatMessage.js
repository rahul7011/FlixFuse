import React from "react";

const ChatMessage = ({name,msg}) => {
  return (
    <div className="flex items-center py-1">
      <img
        src="https://cdn.pixabay.com/photo/2013/07/13/11/44/penguin-158551_1280.png"
        className="object-cover w-10 h-10 p-1 rounded-full border-2 border-pink-400"
      />
      <span className="px-2 font-bold text-pink-300">{name}</span>
      <span className="text-white">{msg}</span>
    </div>
  );
};

export default ChatMessage;
