// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary

// Functional Components
const HomeScreen = () => <h1>home</h1>;
const ProfileScreen = () => <h1>profile</h1>;
const ShopScreen = () => {
  throw new Error('Intentional error in ShopScreen'); // This will be caught by ErrorBoundary
};

const App = () => (
  <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shop" element={<ShopScreen />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
