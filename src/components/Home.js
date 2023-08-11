import React from 'react';
import { auth } from './Firebase.js';
import TopAiring from './TopAiring.js';
import Cart from './Cart.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function Home() {
  const [user] = useAuthState(auth);
  return (
    <Router>
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route exact path='/' element={<TopAiring />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
