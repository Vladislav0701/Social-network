import React from 'react';

import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';


import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
