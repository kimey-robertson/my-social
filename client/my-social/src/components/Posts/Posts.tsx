import React from 'react'
import './Posts.css';
import {
    setRedditData,
  } from "../../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export default function Posts() {
  const dispatch = useDispatch();
  const redditData = useAppSelector(state => state.posts.redditData);

  async function searchReddit() {
    const url = `https://www.reddit.com/search.json?q=hello`;
    const res = await fetch(url);
    const data = await res.json();
    dispatch(setRedditData(data));
  }

//   function handleSubmit(event: any) {
//     event.preventDefault();
//     // dispatch(setCurrentlyOpenedPost(''));
//     searchReddit(event.target.search.value);
    
//   }


  return (
    <div className='posts' >
        <button
        id='post-btn' 
        className='btn'
        onClick={() => {
            searchReddit()
        }}>
            Hello
        </button>
        {redditData.data && redditData.data.children.map((post: { data: { subreddit: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => (
        <div 
            id='post' 
            className='row'>
            <div className='col'> r/{post.data.subreddit}
                <br />
                {post.data.title}
            </div>
            <div className='col'>

            </div>
        </div>
        ))
        }
    </div>
  )
}
