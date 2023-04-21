import React from "react";
import CommentCard from "./CommentCard";
import { commentsData } from "../utils/Config";

const CommentsContainer = () => {

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <CommentCard data={comment} />
        {comment.replies.length > 0 && (
          <div className="text-gray-300 font-bold pl-14 text-xl">|</div>
        )}
        <div className="pl-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className=" p-2 m-5">
      <h1 className="text-2xl font-mono font-bold text-pink-300">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
