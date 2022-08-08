import React, {useEffect} from 'react'
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
    console.log("calling displayPosts()")
    const url = `http://localhost:3001/posts`;
    const res = await fetch(url);
    const data = await res.json();

    if (mainDisplay.currentDisplay === 'posts' && posts.postsLoaded === false) {
      dispatch(setPostsData(data));
      dispatch(setPostsLoaded(true));
    }
  };

  async function createPost(data: {postContent: string}) {
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
    event.preventDefault();
    // console.log(event.target.create.value)
    createPost({postContent: event.target.create.value});
  }

  useEffect(() => {
    displayPosts()
  }, []);


  return (
    
    <div>
      <div className='post-input-container'>
        <div id='post-input-box'>
          <form onSubmit={handleCreatePostSubmit}>
            <div>
              {/* <input 
              type="number" 
              /> */}
              <input
                id="create"
                type="text"
                placeholder="What's on your mind?.. "
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
          ))}
      </div>
    </div>
  )
}
