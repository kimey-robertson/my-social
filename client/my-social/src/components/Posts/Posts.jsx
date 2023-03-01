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

  // Local state for clearing the input posts input form
  // const [postAuthor, setPostAuthor] = useState('');
  // const [postContent, setPostContent] = useState('');

  // Fetching the post data from the db
  async function displayPosts() {
    const url = `http://localhost:3001/posts`;
    const res = await fetch(url);
    const data = await res.json();
    if (mainDisplay.currentDisplay === 'posts' && posts.postsLoaded === false) {
      dispatch(setPostsData(data));
      dispatch(setPostsLoaded(true));
    }
  };

  useEffect(() => {
    displayPosts()
  }, []);


  return (
    
    <div>
      < MakePost />
       {/* First we check if there are any posts in postData using length, then we we map over the posts array } */}
      <div className='posts'>
          {postsData.length > 0 && postsData.map((post) => (
          <div 
              id='post' 
              className='row'
              key={post.id}>
              <div className='col'> {post.content}
                  <br />
                  {post.name}
              </div>
          </div>
          // Reverse the array to put the newest post first
          )).reverse()}
      </div>
    </div>
  )
}
