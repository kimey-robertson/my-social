import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import Posts from '../Posts/Posts';
import RightSidebar from '../RightSidebar/RightSidebar';
import './MainDisplay.css';

export default function MainDisplay() {
  return (
    <main>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col sidebar'>
                    <LeftSidebar />
                </div>
                <div className='col-9'>
                    <Posts />
                </div>
                <div className='col sidebar'>
                    <RightSidebar />
                </div>
            </div>
        </div>
    </main>
  )
}
