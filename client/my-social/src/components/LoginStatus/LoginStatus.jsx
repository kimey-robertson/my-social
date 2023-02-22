import React from 'react'

export default function LoginStatus(props) {
    const status = props.loginStatusState

  return (
    <div>
        {status === 1 && <div>Password too short</div>}
        {status === 2 && <div>Account created succesfully! Taking you back to login</div>}
        {status === 3 && <div>Name exists already</div>}
        {status === 4 && <div>No account with that name</div>}
        {status === 5 && <div>Incorrect password</div>}
    </div>
  )
}
