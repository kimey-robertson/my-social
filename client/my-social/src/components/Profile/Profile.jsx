import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

export default function Profile() {
  const currentUser = useSelector(state => state.user.currentUser)
  return (
    <div className="container">
      <img
        className="profile-pic"
        src="https://via.placeholder.com/150"
        alt="Profile"
      />
      <div className="username">{currentUser}</div>
      <div className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div className="social-links">
        <a className="social-link" href="#">
          <img src="https://via.placeholder.com/30" alt="Facebook" />
        </a>
        <a className="social-link" href="#">
          <img src="https://via.placeholder.com/30" alt="Twitter" />
        </a>
        <a className="social-link" href="#">
          <img src="https://via.placeholder.com/30" alt="Instagram" />
        </a>
      </div>
    </div>
  )
}
