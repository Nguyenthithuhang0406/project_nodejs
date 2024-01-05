

// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { request } from '../../shared/utils/axios-http';
import { SDetailPost } from './style';
import UpdatePost from './UpdatePost';
import DeletePost from './DeletePost';
import {useQuery} from "react-query";
import { AppContext } from '../../App';

const DetailPost = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const { user } = useContext(AppContext);
    useQuery(["post-detail", id], async () => {
      const response = await request({
        url: `/post/${id}`,
      });
  
      setPost(response.data);
    });
  
    if (!post) return <></>;
    const { title, hashTag, createdAt, content, author } = post;
    const isAuthor = author.id === user?.id;
    return (
      <SDetailPost>
        {isAuthor && (
          <div className="action">
            <UpdatePost />
            <DeletePost />
          </div>
        )}
        <h1>{title}</h1>
        <p>{createdAt}</p>
        <p>#{hashTag}</p>
        <p>Author :{author.username}</p>
        <p>{content}</p>
      </SDetailPost>
    );
  };
  
export default DetailPost;