import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Explore } from "../utils/Config";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 w-52 overflow-y-scroll h-[40rem]  text-pink-300 fixed left-0 mt-16 bg-gray-900 ">
      <ul>
        <Link to="/">
          <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            Home
          </li>
        </Link>
        <Link to="/profile">
          <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            Profile
          </li>
        </Link>
        <Link to={"results?v=" + "video"}>
          <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            Video
          </li>
        </Link>
        <Link to={"results?v=" + "live"}>
          <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            Live
          </li>
        </Link>
      </ul>
      <h1 className="font-bold py-2">Explore</h1>
      <ul>
        {Explore.map((value) => (
          <Link to={"results?v=" + value} key={value}>
            <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
              {value}
            </li>
          </Link>
        ))}
      </ul>
      <hr />
      <ul>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Library
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          History{" "}
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Your Videos
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Watch Later
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Your Clips
        </li>
      </ul>
      <hr />
      <ul>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Settings
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Report History
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Help
        </li>
        <li className="p-2 rounded-lg hover:text-white text-sm whitespace-nowrap hover:bg-blue-600 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
