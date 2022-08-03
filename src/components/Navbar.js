import './Navbar.css';
import { Link } from 'react-router-dom';
import Temple from '../assets/temple.svg';

import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className='logo'>
          <img src={Temple} alt='dogo logo' />
          <span>The Dojo</span>
        </li>

        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <button className='btn'>Logout</button>
        </li>
      </ul>
    </div>
  );
}
