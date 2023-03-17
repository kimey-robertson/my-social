import React from 'react'
import './LoginStatus.css'

export default function LoginStatus(props) {
    const status = props.loginStatusState

  return (
    <div>
        {status === 1 && <div className='red'>Password must between 8 and 20 characters</div>}
        {status === 2 && <div className='green'>Account created succesfully! Taking you back to login</div>}
        {status === 3 && <div className='red'>Name exists already</div>}
        {status === 4 && <div className='red'>No account with that name</div>}
        {status === 5 && <div className='red'>Incorrect password</div>}
        {status === 6 && <div className='red'>Username must be between 3 and 15 characters, and contain only alphanumeric characters.</div>}
    </div>
  )
}
