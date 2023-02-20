import React from 'react'
import { useDispatch } from "react-redux";
import { setCurrentDisplay } from '../../features/mainDisplaySlice';

import './Header.css';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-left">
        <button 
          className="header-btn" 
          onClick={() => {
            dispatch(setCurrentDisplay('posts'))
          }}
        >
          Home
        </button>
      </div>
      <h1 className="header-title">mySocial</h1>
      <div className="header-right">
        <button 
          className="header-btn" 
          onClick={() => {
            dispatch(setCurrentDisplay('profile'))
          }}
        >
          Profile
        </button>
      </div>
    </header>
  );
}

export default Header;

