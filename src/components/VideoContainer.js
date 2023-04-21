import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Youtube_Videos_Api } from "../utils/Config";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    console.log(Youtube_Videos_Api);
    const data = await fetch(Youtube_Videos_Api);
    const json = await data.json();
    setVideos(json.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap justify-center">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default VideoContainer;
