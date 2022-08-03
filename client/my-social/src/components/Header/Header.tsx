import React from 'react'
import './Header.css';
import {
    setPostsLoaded
  } from "../../features/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { setCurrentDisplay } from '../../features/mainDisplaySlice';

export default function Header() {

const dispatch = useDispatch();
  return (
        <div className='container' id="App-header">
            <div className='row'>
                <div className='col header' id='home-btn-header'>
                    <button 
                    className='btn' 
                    id='home-btn'
                    onClick={() => {
                        dispatch(setCurrentDisplay('posts'))
                    }}
                    >Home
                    </button>
                </div>
                <div className='col header' id='main-header'>
                    <p>My Social</p>
                </div>
                <div className='col header' id='profile-btn-header'>
                    <button 
                    className='btn' 
                    id='profile-btn'
                    onClick={() => {
                        dispatch(setCurrentDisplay('profile'))
                    }}
                    >Profile
                    </button>
                </div>    
            </div>
        </div>
  )
}
