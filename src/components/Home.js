import React from 'react';
import TopProducts from './TopProducts.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase.js';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecProducts from './RecProducts.js';
import CategoryBar from './CategoryBar.js';

function Home() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div>
        <Navbar user={user} />
        <CategoryBar />
        <Banner />
        <Routes>
          {/* <Route
            exact
            path='/'
            element={
              <div>
                <TopProducts />
                {user && <RecProducts />}
              </div>
            }
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
