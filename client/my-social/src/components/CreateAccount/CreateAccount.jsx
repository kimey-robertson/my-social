import { React, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './CreateAccount.css'
import LoginStatus from '../LoginStatus/LoginStatus';
import { setUserData, setCurrentUser, setLoggedIn, setCreateAccountDisplay } from "../../features/userSlice";

export default function CreateAccount() {

const dispatch = useDispatch();
const user = useSelector(state => state.user);
const userData = user.userData;
const [loginStatusState, setLoginStatusState] = useState(0);


async function getUser(username) {
    const url = `http://localhost:3001/user?username=${username}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.status === 422) {
        console.log('error')
    }

    if (data.length > 0) {
        return true
    } else {
        return false
    }
}


async function createUser(data) {
    const url = `http://localhost:3001/user`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })

    if (res.status === 422) {
        console.log('name and content are required')
    }
    return res.json();
}   


async function handleCreateAccountSubmit(event) {
    event.preventDefault()
    const username = event.target.username.value;
    const password = event.target.password.value;
    const result = await getUser(username)
    if (!result) {
        // If the name isn't already taken
        if (password.length < 8) {
            // If the password is too short
            setLoginStatusState(1)
        } else {
            // If the username doesn't meet criteria
            if (username.length < 3 || username.length > 15 || !isAlphanumeric(username)) {
                setLoginStatusState(6)
            } else {
                // Succesfully created account
                setLoginStatusState(2)
                createUser({
                    username: username, 
                    password: password
                })
                // Delay briefly the time to go back to the login screen
                setTimeout(() => setLoginStatusState(0), 3000 )
                setTimeout(() => dispatch(setCreateAccountDisplay(false)), 2000)
            }
        }

    }
    else if (result){
        // If the username already exists
        setLoginStatusState(3)
    }
}

function isAlphanumeric(input) {
    // Create a regular expression that matches only alphanumeric characters
    const alphanumericRegex = /^[0-9a-zA-Z]+$/;
    
    // Test the input against the regular expression
    return alphanumericRegex.test(input);
  }

  return (
    <div className="login-container container">
    <form className="login-form" onSubmit={handleCreateAccountSubmit}>
        <h2>Create your account</h2>
        {loginStatusState != 0 && <LoginStatus loginStatusState={loginStatusState}/> }
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
        <button type="submit" className="btn btn-primary">
        Create Account
        </button>
    </form>
    </div>
  )
}
