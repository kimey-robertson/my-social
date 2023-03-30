import React, {useEffect, useState} from 'react'
import './Posts.css';
import {
    setPostsData,
    setPostsLoaded
  } from "../../features/postsSlice";
import MakePost from '../MakePost/MakePost';
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useAppSelector(state => state.posts);
  const mainDisplay = useAppSelector(state => state.mainDisplay);
  const postsData = posts.postsData;

  // Fetching the post data from the db
  async function displayPosts() {
    const url = `https://0rd16p43a9.execute-api.ap-southeast-2.amazonaws.com/dev/posts`;
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (mainDisplay.currentDisplay === 'posts' && posts.postsLoaded === false) {
      dispatch(setPostsData(data));
      dispatch(setPostsLoaded(true));
    }
  };

  useEffect(() => {
    displayPosts()
  }, [postsData]);


  return (
    
    <div>
      < MakePost />
       {/* First we check if there are any posts in postData using length, then we we map over the posts array } */}
      <div className='posts'>
          {postsData.length > 0 && postsData.map((post) => (
          <div 
              className='row post'
              key={post.id}>
              <div className='col'> 
                  <div className='post-author-container'>{post.author}</div>
                  {post.content}
              </div>
          </div>
          // Reverse the array to put the newest post first
          )).reverse()}
      </div>
    </div>
  )
}
