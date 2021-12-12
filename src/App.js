import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={
            <DialogsContainer />}
          />
          <Route path="/profile" element={
            <Profile />}
          />
          <Route path="/dialogs" element={
            <DialogsContainer />}
          />
          <Route path="/users" element={
            <UsersContainer />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
