import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Sett/Settings"

import style from "./App.module.css";


function App(props) {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <NavBar state={props.state.sidebar} />
        <div className={style.content}>
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
