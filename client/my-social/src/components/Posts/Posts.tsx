import React from 'react'
import './Posts.css';
import {
    setPostsData,
    setPostsLoaded
  } from "../../features/postsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useAppSelector(state => state.posts);
  const mainDisplay = useAppSelector(state => state.mainDisplay);
  const postsData = posts.postsData;

  // Fetching the post data from the db
  async function displayPosts() {
    const url = `http://localhost:3001/posts`;
    const res = await fetch(url);
    const data = await res.json();

    if (mainDisplay.currentDisplay === 'posts' && posts.postsLoaded === false) {
      dispatch(setPostsData(data));
      dispatch(setPostsLoaded(true));
    }
  }

  displayPosts()

  return (
    
    <div>
      <div className=''>

      </div>
      
       {/* First we check if there are any posts in postData using length, then we we map over the posts array } */}
      <div className='posts'>
          {postsData.length > 0 && postsData.map((post: { subreddit: string, title: string } ) => (
          <div 
              id='post' 
              className='row'>
              <div className='col'> r/{post.subreddit}
                  <br />
                  {post.title}
              </div>
          </div>
          ))}
      </div>
    </div>
  )
}
