import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Api } from "../utils/Config";
import { cacheResults } from "../utils/searchSlice";
import logoText from "../media/logoText.png";
import menu from "../media/menu.png";
import user from "../media/user.png";
import { Link } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    //if the difference btw 2 Api call is <200ms
    //then decline the call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //caching result
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleBlur = (e) => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };
  return (
    <div className="grid grid-flow-col p-2 fixed inset-x-0 top-0 bg-gray-900">
      <div className="flex col-span-1">
        <img
          className="h-14 p-2 cursor-pointer rounded-full hover:bg-pink-300"
          src={menu}
          alt="menu"
          onClick={() => toggleMenuHandler()}
        ></img>
        <a href="/">
          <img
            className="h-16 w-90 mx-2 mt-0"
            src={logoText}
            alt="youtube-logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10 text-center">
        <div className="relative">
          <input
            className="w-1/2 pl-9 py-1 mt-3 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => handleBlur()}
          />
          <button className="border border-gray-400 rounded-r-full px-4 py-1 bg-gray-100">
            🔍
          </button>
          {showSuggestions && (
            <div
              className={`absolute left-60 right-72 text-md top-full shadow-md rounded-md ${
                suggestions.length > 0 ? "border" : ""
              } bg-white text-left`}
            >
              <ul className={suggestions.length > 0 ? "pt-4" : ""}>
                {suggestions.map((s) => (
                  <Link to={"results?v="+s} key={s}>
                    <li
                      className="hover:bg-gray-200 p-1 pl-5 cursor-pointer"
                    >
                      🔍 {s}{" "}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img className="h-8 my-3" alt="user" src={user}></img>
      </div>
    </div>
  );
};

export default Head;
