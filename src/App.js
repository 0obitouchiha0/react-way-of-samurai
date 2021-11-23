import React from 'react';
import './css/App.css';
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
