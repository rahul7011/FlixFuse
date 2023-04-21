import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_SEARCH_RESULTS } from "../utils/Config";
import { Link, useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  console.log(params, params.replace(/\s+/g, "+"));
  const getVideos = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_SEARCH_RESULTS + params.replace(/\s+/g, "+")
    );
    const json = await data.json();
    setVideos(json.items);
    // console.log(videos);
  };
  useEffect(() => {
    getVideos();
  }, [params]);
  //   console.log(videos)
  return (
    <div className="flex flex-col justify-center items-center mt-20 bg-gray-900 w-full overflow-x-hidden">
      {videos.length > 0
        ? videos.map((video) => (
            <Link
              to={"/watch?v=" + video?.id?.videoId}
              key={video?.id?.videoId}
            >
              <div className="w-[75rem]">
                <SearchCard info={video} key={video?.id?.videoId} />
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default SearchResults;
