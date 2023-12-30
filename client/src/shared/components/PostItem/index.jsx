/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom';
import {SPostItem} from "./style.js";
import moment from "moment";

const PostItem = ({
    post: {title, content, hashTag, createdAt, author, postID},
}) => {
    const navigate = useNavigate();
  return (
    <SPostItem onClick={() => navigate(`post/${postID}`)}>
        <img
            className="image-post"
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
        />

        <div className='info'>
            <h1 className='title'>{title}</h1>

            <p className='createdAt'>
                {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <p className='hashTag'>#{hashTag}</p>
            <p className='content'>{content}</p>
            
            <p className='content'>Author: {author.username}</p>
        </div>
    </SPostItem>
  );
};

export default PostItem;