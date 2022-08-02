import React, { useState } from 'react';
import './LeftSidebar.css';

import { useDispatch, } from "react-redux";

export default function LeftSidebar() {

  return (
    <div className='fixed'>
      <ul>
        <li>User name</li>
        <li>Friends</li>
        <li></li>
      </ul>
    </div>
  )
}
