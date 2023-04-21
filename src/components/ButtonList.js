import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Music",
  "Gaming",
  "Cricket",
  "Fashion",
  "Computer Programming",
  "Cat videos",
  "Cooking tutorials",
  "Travel vlogs",
  "Gaming streams",
  "Comedy skits",
  "Beauty tutorials",
  "Fitness workouts",
  "Science experiments",
  "Music covers",
  "DIY crafts",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto w-full bg-gray-900">
      {list.map((val) => {
        return <Button name={val} key={val}/>;
      })}
    </div>
  );
};

export default ButtonList;
