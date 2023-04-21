import React, { useEffect } from "react";
import { closeMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  //Note this will not work because we are using searchParams and this only works with '/'
  // const params=useParams();
  // console.log(params);

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const contentClass = !isMenuOpen ? "" : "ml-52";
  const wClass = !isMenuOpen ? "876" : "830";
  const hClass = !isMenuOpen ? "493" : "467";
  console.log(isMenuOpen);
  return (
    <div className="flex flex-col w-full mt-2 bg-gray-900">
      <div className={`flex p-5 pt-20 ${contentClass}`}>
        <div className="">
          <iframe
            width={wClass}
            height={hClass}
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
        <div className="ml-32"></div>
      </div>
      <div className={contentClass}>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
