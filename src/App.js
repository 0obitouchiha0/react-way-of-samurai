import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/news" element={<Profile />} />
          <Route path="/music" element={<Dialogs />} />
          <Route path="/settings" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
