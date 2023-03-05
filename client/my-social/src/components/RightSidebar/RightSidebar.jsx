import React from 'react';
import './RightSidebar.css';
import { setLoggedIn, setCurrentUser } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function RightSidebar() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  function handleLogoutSubmit(event) {
    event.preventDefault()
    localStorage.removeItem('profile')
    dispatch(setLoggedIn(false))
    dispatch(setCurrentUser())
  }

  return (
    <div class='rightSideBar'>
      <form onSubmit={handleLogoutSubmit}>
        <div>Logged in as: {currentUser}</div>
        <button type="submit" className="btn btn-primary" id='logout-btn'>
          Logout
        </button>
      </form>
    </div>
  )
}
