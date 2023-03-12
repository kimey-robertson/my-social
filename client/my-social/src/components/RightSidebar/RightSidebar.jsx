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
    <div className='rightSideBar'>
      <form onSubmit={handleLogoutSubmit}>
        <div className="user-container">
          <p className="greeting">Welcome back,</p>
          <p className="user">{currentUser}</p>
        </div>
        <button type="submit" className="btn btn-primary" id='logout-btn'>
          Logout
        </button>
      </form>
    </div>
  )
}
