import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const contentClass = !isMenuOpen ? "" : "ml-52";
  return (
    <div className={`w-full ${contentClass} mt-20 overflow-x-hidden bg-gray-900 `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
