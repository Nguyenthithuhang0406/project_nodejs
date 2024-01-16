/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { SPostItem } from "./style";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const PostItem = ({
  post: { title, content, hashTag, createdAt, author, postID, image },
}) => {
  const navigate = useNavigate();
  return (
    <SPostItem onClick={() => navigate(`post/${postID}`)}>
      <img
        className="image-post"
        src={import.meta.env.VITE_STATIC_URL + image}
      />

      <div className="info">
        <h1 className="title">{title}</h1>

        <p className="createdAt">
          {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <p className="hashTag">#{hashTag}</p>
        <p className="content">{content}</p>
        <p className="content">Author : {author?.username}</p>
      </div>
    </SPostItem>
  );
};

export default PostItem;
