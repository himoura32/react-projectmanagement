import './Navbar.css';
import { Link } from 'react-router-dom';
import Temple from '../assets/temple.svg';
import { useLogout } from '../hooks/useLogout';

import React from 'react';

export default function Navbar() {
  const { logout, isPending } = useLogout();

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
          {!isPending && (
            <button className='btn' onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className='btn' disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
