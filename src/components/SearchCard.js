import React from "react";
import { useSelector } from "react-redux";

const SearchCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails, description } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const contentClass = !isMenuOpen ? "ml-16" : "ml-24";
  return (
    <div className={`flex w-full mt-4 ${contentClass} break-words`}>
      <div className="">
        <img
          src={thumbnails.medium.url}
          className="rounded-lg w-[360px] h-[202px]"
          alt="thumbnail"
        />
      </div>
      <div className="m-2 p-2">
        <ul>
          <li className="font-bold py-2 text-white">
            {title.length > 100 ? title.slice(0, 95) + "..." : title}
          </li>
          <li className="text-pink-300 mt-8 mb-2">{channelTitle}</li>
          <li className="font-bold py-2 text-sm text-gray-400">
            {description.length > 100
              ? description.slice(0, 95) + "..."
              : description}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchCard;
