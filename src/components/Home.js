import React from 'react';
import { auth } from './Firebase.js';
import TopProducts from './TopProducts.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  const [user] = useAuthState(auth);
  return (
    <Router>
      <div>
        <Navbar user={user}/>
        <Banner />
        <Routes>
          <Route exact path='/' element={<TopProducts />} />
          {/* <Route exact path='/cart' element={<Cart />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
