import React from 'react';
import './RightSidebar.css';
import { setLoggedIn, setCurrentUser } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

export default function RightSidebar() {
  const dispatch = useDispatch()
  function handleLogoutSubmit(event) {
    event.preventDefault()
    localStorage.removeItem('profile')
    dispatch(setLoggedIn(false))
    dispatch(setCurrentUser())
  }

  return (
    <div className='fixed'>
      <form onSubmit={handleLogoutSubmit}>
        <button type="submit" className="btn btn-primary" id='logout-btn'>
          Logout
        </button>
      </form>
    </div>
  )
}
