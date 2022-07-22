import React from 'react'
import './Posts.css';
import {
    setRedditData,
    setPostsLoaded
  } from "../../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useAppSelector(state => state.posts);
  const redditData = posts.redditData;

  async function searchReddit() {
    const url = `https://www.reddit.com/search.json?q=hello`;
    const res = await fetch(url);
    const data = await res.json();
    if (posts.onPosts === true && posts.postsLoaded === false) {
      dispatch(setRedditData(data));
      dispatch(setPostsLoaded(true));
    }
  }

  searchReddit()

  return (
    <div className='posts'>
        {redditData.data && redditData.data.children.map((post: { data: { subreddit: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => (
        <div 
            id='post' 
            className='row'>
            <div className='col'> r/{post.data.subreddit}
                <br />
                {post.data.title}
            </div>
        </div>
        ))
        }
    </div>
  )
}
