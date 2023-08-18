import React from 'react';
import './Navbar.css';
import { logout, handle_login} from './Firebase';
import logo from '../assets/logo.svg';
import search from '../assets/search.png';
import cart from '../assets/cart.png';
import logout_icon from '../assets/logout_icon.png';

function Navbar({user}) {
  // const handle_login = async () => {
  //   try{
  //     await signInWithGoogle()
  //   } catch(error){
  //     console.log('Authentication popup closed by user.');
  //     // window.location.href = window.location.href;
  //   }
  // }
  return (
    <nav className='custom-navbar'>
      <div className='nav-spacer-1'> 
        <img className='navbar-logo' src={logo} alt=''/>
        <form>
          <input type='text' placeholder='Search for items' name='nav-search-bar' className='nav-search-bar'></input>
        </form>
        <img className='navbar-search-icon' src={search} alt=''/>
      </div>
      <div className='nav-spacer-2'> 
        {user ? (
          <>
            <p className='welcome-msg'>Welcome, {user.displayName.split(' ')[0]}</p>
            <img src={user.photoURL} alt='Profile' className='profile-photo' />
            <button className='cart-button'>
              <img src={cart} alt='' className='cart-icon' />
            </button>
            <button onClick={logout} className='cart-button'>
              <img src={logout_icon} alt='' className='cart-icon' />
            </button>
          </>
          ) : (
            <button onClick={handle_login} className='login-button'>Login</button>
          )}
      </div>
    </nav>
  );
}

export default Navbar;
