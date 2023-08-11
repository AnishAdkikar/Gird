// Navbar.js
import React from 'react';
import './Navbar.css';
import { logout } from './Firebase';
import { signInWithGoogle } from './Firebase';
function Navbar({user}) {
  return (
    <nav className='custom-navbar'>
      <div className='navbar-logo'>Grid</div>
      <ul className='navbar-links'>
          <a href='/'>Home</a>
        {user ? (
          <>
          <li>

            <button onClick={logout}>Logout</button>
          </li>
              <img
                src={user.photoURL}
                alt='Profile'
                className='profile-photo'
              />
          </>
        ) : (
          <li>
            <button onClick={signInWithGoogle}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
