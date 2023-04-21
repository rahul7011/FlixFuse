import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./ChatSlice";
import { generate, makeRandomMsg } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling

      dispatch(
        addMessage({
          name: generate(),
          msg: makeRandomMsg(17),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="ml-8 p-2 w-full h-[493px] border border-black bg bg-gray-800 rounded-lg overflow-y-scroll overflow-x-hidden flex flex-col-reverse">
        {chatMessages.map(({ name, msg }, index) => (
          <ChatMessage key={index} name={name} msg={msg} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target.reset();
          // console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Rahul",
              msg: liveMessage,
            })
          );
        }}
        className="w-full p-2 ml-6 "
      >
        <input
          type="text"
          className="border border-black w-72 p-1 px-2 rounded-lg"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-1 px-4 mx-2 rounded-lg bg-pink-300 hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
