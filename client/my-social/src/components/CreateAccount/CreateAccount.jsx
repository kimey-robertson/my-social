import React from 'react'

export default function CreateAccount() {


  function handleCreateAccountSubmit() {
    
  }  

  return (
    <div className="login-container container">
    <form className="login-form" onSubmit={handleCreateAccountSubmit}>
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
    </form>
    </div>
  )
}
