import { React, useState, useEffect } from 'react';
import './LoginDisplay.css';
import { setUserData, setCurrentUser, setLoggedIn, setCreateAccountDisplay } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function LoginDisplay() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userData = user.userData;

  async function getUser(username) {
    console.log('in getUser')
    const url = `http://localhost:3001/user?username=${username}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.status === 422) {
      console.log('error')
    }
    dispatch(setUserData(data))
    console.log('user data set')
  }

  async function handleGetUserSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    await getUser(username);
    console.log('after getUser')
    logUserIn(username, password);
  }

  function logUserIn(username, password) {
    console.log('in logUserIn')
    console.log(userData)
        // Check if there is any userData
        if (userData[0]) {
          console.log('after if statement')
          // Check if password entered was same as the password stored in the db
          if (userData[0].password === password) {
            // Set local storage and redux state as user logged in
            console.log('running dispatch')
            localStorage.setItem('profile', username);
            dispatch(setLoggedIn(true))
            dispatch(setCurrentUser())
          }
        }
        // Should be done to remove userData
        // dispatch(setUserData({}))
  }

  function signUpButton() {
    console.log('sign up button')
    dispatch(setCreateAccountDisplay(true))
  }




  return (
    
        <div className="login-container container">
        <form className="login-form" onSubmit={handleGetUserSubmit}>
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter your username"
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
            />
            </div>
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
            <button type="button" className="btn btn-primary" onClick={signUpButton}>
            Sign Up
            </button>
        </form>
        </div>
  )
}