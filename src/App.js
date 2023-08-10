import Home from './components/Home';
import { useState } from 'react';
import LoginPage from './components/loginn';

import React from 'react';


export default function App() {
  const [login, Setlogin] = useState(false);
  return (
    <>{login ? <LoginPage login={login} Setlogin={Setlogin} /> : <Home login={login} Setlogin={Setlogin}/>}
  
    </>
  );
}
