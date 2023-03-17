import React from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setCurrentUser, setUserBio, setLoggedIn } from "../../features/userSlice";

export default function Profile() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  const userBio = useSelector(state => state.user.userBio)
  const [editingProfileState, setEditingProfileState] = useState(false);
  const [deletingProfileState, setDeletingProfileState] = useState(false);
  const [nameExistsState, setNameExistsState] = useState(false);

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

  async function handleSubmitUpdatedUsername(event) {
    event.preventDefault()
    const username = event.target.usernameInput.value
    const data = await getUser(username)
    if (data.length > 0) {
      if (data[0].username !== currentUser) {
        setNameExistsState(true)
      }
    } else {
      setNameExistsState(false)
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

  async function handleConfirmDeleteProfile() {
    try {
      const response = await fetch(`http://localhost:3001/user`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: currentUser})
      });
      if (response.ok) {
        const data = await response.json();
      } else {
        throw new Error('HTTP error ' + response.status);
      }

      localStorage.removeItem('profile')
      dispatch(setLoggedIn(false))
      dispatch(setCurrentUser())

    } catch (error) {
      console.error(error);
    }

  }

  // Toggles edit profile section, and untoggles if user goes to the delete profile section. Also removes the name exists if it was rendered.

  function handleEditProfile() {
    setNameExistsState(false)
    if (deletingProfileState) {
      setDeletingProfileState(false)
    }
    if (editingProfileState) {
      setEditingProfileState(false)
    } else {
      setEditingProfileState(true)
    }
  }

    // Toggles delete profile section, and untoggles if user goes to the edit profile section

  function handleDeleteProfile() {
    if (editingProfileState) {
      setEditingProfileState(false)
    }
    if (deletingProfileState) {
      setDeletingProfileState(false)
    } else {
      setDeletingProfileState(true)
    }
  }


  return (
    <div className="profile-container container">
        <button 
          className="edit-button"
          onClick={handleEditProfile}
          >Edit Profile
        </button>
        <button
          className='delete-profile-button'
          onClick={handleDeleteProfile}
          >Delete Profile
        </button>

      {/* Not editing profile */}
      
      { !editingProfileState && !deletingProfileState &&
        <div>
          {/* <img
            className="profile-pic"
            src="https://via.placeholder.com/150"
            alt="Profile"
          /> */}
          <div className="username">{currentUser}</div>
          <div className="bio">{userBio}</div>
        </div>
      }

      {/* Editing profile */}

      { editingProfileState && !deletingProfileState &&
      <div className='edit-profile-grid'>
        {/* <img
          className="profile-pic"
          src="https://via.placeholder.com/150"
          alt="Profile"
        /> */}
        { nameExistsState && <div className='name-exists'>Name already exists</div> }
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

      {/* Deleting profile */}

      { !editingProfileState && deletingProfileState &&
      <div className='confirm-profile-delete'>
        <p>Are you sure you want to delete your profile? This action is irreversible and will log you out</p>
        <button
          className='really-delete-profile-button'
          onClick={handleConfirmDeleteProfile}
          >Delete!
        </button>
      </div>
      }
      
      {/* {<div>editing profile: {JSON.stringify(editingProfileState)} </div>}
      {<div>deleting profile: {JSON.stringify(deletingProfileState)} </div>} */}
      
    </div>
  )
}
