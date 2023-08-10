import React from 'react'

import '../Fonts/Kanit/Kanit-Medium.ttf'
import styles from "./LoginPage.module.css"
import { useState } from 'react';

const LoginPage = ({login, Setlogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleUsernameChange(event) {
      setUsername(event.target.value);
    }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleLogin = (event) => {
    if (username === 'admin' && password === 'admin') {
      console.log('Login successful');
      Setlogin(true)
      // Redirect the user to the home page or perform any other necessary actions
    } else {
      console.log('Invalid username or password');
      // Display an error message or perform any other necessary actions
    }
  };


    return (
      <article className={styles.loginpage}>
        <h1 className={styles.heading}>Login</h1>
        <form onSubmit={handleLogin} className={styles.formstart}>
          <div>
             <input 
              className={styles.input_text}
              type='text'
              id='username'
              placeholder='Enter Username'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <br></br>
            <input className ={styles.input_password}
              type='password'
              id='password'
              placeholder='Enter Password'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
           <button type='submit' className={styles.button_submit}>Login</button>
           <div>Already have an account?<a href =''>Signin</a></div>
          
        </form>
      </article>
    );
}
export default LoginPage;