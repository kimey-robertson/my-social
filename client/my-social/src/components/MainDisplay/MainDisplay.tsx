import React from 'react'
import Posts from '../Posts/Posts';
import './MainDisplay.css';

export default function MainDisplay() {
  return (
    <main>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {/* <p>test</p> */}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Posts />
                </div>
            </div>
        </div>
    </main>
  )
}
