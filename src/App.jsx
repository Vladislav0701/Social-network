import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer"
import Settings from "./components/Sett/Settings"

import style from "./App.module.css";


function App() { 
  return (
      <div className={style.wrapper}>
        <Header />
        <NavBar />
        <div className={style.content}>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
  )
}

export default App;
