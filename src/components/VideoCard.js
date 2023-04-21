import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const contentClass = !isMenuOpen ? "w-64" : "w-72";
  return (
    <div className={`p-2 m-2 ${contentClass}`}>
      <img src={thumbnails.medium.url} className="rounded-lg" alt="thumbnail" />
      <ul>
        <li className="font-bold py-2 text-white">
          {title.length > 62 ? title.slice(0, 58) + "..." : title}
        </li>
        <li className="text-pink-300">{channelTitle}</li>
        <li className="text-pink-300">{Intl.NumberFormat("en-IN", {notation: "compact"}).format(statistics.viewCount)} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
