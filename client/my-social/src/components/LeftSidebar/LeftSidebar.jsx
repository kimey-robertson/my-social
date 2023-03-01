import React from 'react';
import './LeftSidebar.css';
import { useSelector } from 'react-redux';

export default function LeftSidebar() {
  const currentUser = useSelector(state => state.user.currentUser)
  return (
    <div className='fixed'>
      <div>Logged in as: {currentUser}</div>
    </div>
  )
}
