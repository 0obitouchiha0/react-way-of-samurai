import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Profile />
      {/* <Dialogs /> */}
    </div>
  );
}

export default App;
