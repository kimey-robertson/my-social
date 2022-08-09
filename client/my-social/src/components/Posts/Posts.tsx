import React, {useEffect, useState} from 'react'
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

  // Local state for clearing the input posts input form
  // const [postAuthor, setPostAuthor] = useState('');
  // const [postContent, setPostContent] = useState('');

  // Fetching the post data from the db
  async function displayPosts() {
    console.log("calling displayPosts()")
    const url = `http://localhost:3001/posts`;
    const res = await fetch(url);
    const data = await res.json();

    if (mainDisplay.currentDisplay === 'posts' && posts.postsLoaded === false) {
      dispatch(setPostsData(data));
      dispatch(setPostsLoaded(true));
    }
  };

  async function createPost(data: {postContent: string, postAuthor: string}) {
    console.log(data)
    const url = `http://localhost:3001/posts`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return res.json();
  }

  function handleCreatePostSubmit(event: any) {
    // event.preventDefault();
    createPost({
      postContent: event.target.postContent.value,
      postAuthor: event.target.postAuthor.value
    });
    // setPostAuthor('')
    // setPostContent('')
  }

  useEffect(() => {
    displayPosts()
  }, []);


  return (
    
    <div>
      <div className='post-input-container container-fluid'>
        <div className='row' id='post-input-row'>
          <form onSubmit={handleCreatePostSubmit}>
            <div className='col' id='post-input-box'>
              <input
                id="postAuthor"
                type="text"
                placeholder="Name"
                // value={postAuthor}
              />
                <input
                id="postContent"
                type="text"
                placeholder="What's on your mind?.. "
                // value={postContent}
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      
       {/* First we check if there are any posts in postData using length, then we we map over the posts array } */}
      <div className='posts'>
          {postsData.length > 0 && postsData.map((post: { subreddit: string, title: string } ) => (
          <div 
              id='post' 
              className='row'>
              <div className='col'> {post.subreddit}
                  <br />
                  {post.title}
              </div>
          </div>
          )).reverse()}
      </div>
    </div>
  )
}
