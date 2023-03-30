import { React, useState, useEffect } from 'react';
import './LoginDisplay.css';
import { setUserData, setCurrentUser, setLoggedIn, setCreateAccountDisplay, setUserBio } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginStatus from '../LoginStatus/LoginStatus';

export default function LoginDisplay() {
  const dispatch = useDispatch();
  const [loginStatusState, setLoginStatusState] = useState(0);
  const userData = useSelector(state => state.user)
  const currentUser = useSelector(state => state.user.currentUser)

  async function getUser(username) {
    const url = `https://0rd16p43a9.execute-api.ap-southeast-2.amazonaws.com/dev/userAll?username=${username}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.status === 422) {
      console.log('error')
    }
    return data
  }

  async function handleGetUserSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const data = await getUser(username);
    logUserIn(username, password, data);
  }

  function logUserIn(username, password, data) {
        // Check if there is any userData
        if (data[0]) {
          // Check if password entered was same as the password stored in the db
          if (data[0].password === password) {
            // Set local storage and redux state as user logged in
            localStorage.setItem('profile', username);
            dispatch(setLoggedIn(true))
            dispatch(setCurrentUser())
            setLoginStatusState(0)
            localStorage.setItem('bio', data[0].bio);
            dispatch(setUserBio())
          } else {
            // If password is incorrect
            setLoginStatusState(5)
          }
        } else {
          // If there is no matching username
          setLoginStatusState(4)
        }

  }

  function signUpButton() {
    dispatch(setCreateAccountDisplay(true))
  }

  useEffect(() => {
    if (localStorage.getItem('profile')) {
      dispatch(setCurrentUser())
    }
    if (localStorage.getItem('bio')) {
      dispatch(setUserBio())
    }
  }, [userData]);




  return (
    
        <div className="login-container container">
        <form className="login-form" onSubmit={handleGetUserSubmit}>
            <h2>Enter your login details</h2>
            {loginStatusState !== 0 && <LoginStatus loginStatusState={loginStatusState}/> }
            <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter your username"
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                required
            />
            </div>
            <button type="submit" className="btn btn-primary login-btns">
            Log In
            </button>
            <button type="button" className="btn btn-primary login-btns" onClick={signUpButton}>
            Sign Up
            </button>
        </form>
        </div>
  )
}