import React from 'react'
import './Header.css'

export default function Header() {
  return (
        <div className='container' id="App-header">
            <div className='row'>
                <div className='col header' id='home-btn-header'>
                    <button className='btn' id='home-btn'>
                        Home
                    </button>
                </div>
                <div className='col header' id='main-header'>
                    <p>My Social</p>
                </div>
                <div className='col header'>
                </div>    
            </div>
        </div>
  )
}
