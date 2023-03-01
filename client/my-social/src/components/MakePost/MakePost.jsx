import React from 'react'
import './MakePost.css';
import { useSelector } from "react-redux";

export default function MakePost() {
  const currentUser = useSelector(state => state.user.currentUser)

    async function createPost(data) {
        console.log(data)
        const url = `http://localhost:3001/posts`;
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
          
        })
    
        if (res.status === 422) {
          console.log('name and content are required')
        }
        console.log(res)
        return res.json();
      }
    
      function handleCreatePostSubmit(event) {
        event.preventDefault();
        createPost({
          postContent: event.target.postContent.value,
          postAuthor: currentUser
        });
      }
 

  return (
    <div className='post-input-container container-fluid'>
    <div className='row' id='post-input-row'>
    <form onSubmit={handleCreatePostSubmit}>
        <div className='col' id='post-input-box'>
        {/* <input
            id="postAuthor"
            type="text"
            placeholder="Name"
            // value={postAuthor}
        /> */}
            <input
            id="postContent"
            type="text"
            placeholder="What's on your mind?... "
            // value={postContent}
        />
        <button className="btn" type="submit">
            Submit
        </button>
        </div>
    </form>
    </div>
    </div>
  )
}



