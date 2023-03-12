import React from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setCurrentUser, setUserBio } from "../../features/userSlice";

export default function Profile() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  const userBio = useSelector(state => state.user.userBio)
  const [editingProfileState, setEditingProfileState] = useState(false);

  async function updateUserInfo(userInfo) {
    try {
      const response = await fetch(`http://localhost:3001/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
  
      if (response.ok) {
        const data = await response.json();
      } else {
        throw new Error('HTTP error ' + response.status);
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  async function getUser(username) {
    const url = `http://localhost:3001/user?username=${username}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.status === 422) {
      console.log('error')
    }
    return data
  }

  function handleEditProfileClick() {
    if (editingProfileState === true) {
      setEditingProfileState(false)
    } else {
      setEditingProfileState(true)
    }
  }

  async function handleSubmitUpdatedUsername(event) {
    event.preventDefault()
    const username = event.target.usernameInput.value
    const data = await getUser(username)
    if (data.length > 0) {
      console.log('name already exists')
    } else {
      await updateUserInfo({
        oldUsername: currentUser,
        username: username,
      })
      localStorage.setItem('profile', username);
      dispatch(setCurrentUser())
    }
  }

  async function handleSubmitUpdatedBio(event) {
    event.preventDefault()
    const bio = event.target.bioInput.value
    const data = await getUser(bio)
    if (data.length > 0) {
      console.log('name already exists')
    } else {
      await updateUserInfo({
        bio: bio,
        username: currentUser,
      })
      localStorage.setItem('bio', bio);
      dispatch(setUserBio())
    }
  }


  return (
    <div className="profile-container container">
        <button 
          className="edit-button"
          onClick={handleEditProfileClick}
          >Edit Profile
        </button>

      {/* Not editing profile */}
      
      { editingProfileState === false && 
        <div>
          <img
            className="profile-pic"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div className="username">{currentUser}</div>
          <div className="bio">{userBio}</div>
        </div>
      }

      {/* Editing profile */}

      { editingProfileState === true && 
      <div className='edit-profile-grid'>
        <img
          className="profile-pic"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <form id='name-form' onSubmit={handleSubmitUpdatedUsername}>
            <input type="text" id="usernameInput" className="username-input" defaultValue={currentUser} />
            <button id='edit-name-btn'>Submit</button>
        </form>
        <form id='bio-form' onSubmit={handleSubmitUpdatedBio}>
            <textarea type="textarea" id="bioInput" className="bio-input" defaultValue={userBio}/>
            <button id='edit-bio-btn'>Submit</button>
        </form>
      </div>
      }
      
      
      
    </div>
  )
}
