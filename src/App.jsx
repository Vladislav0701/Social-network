import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Sett/Settings"

import style from "./App.module.css";


function App(props) {

  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <NavBar state={props.state.siteBar} />
        <div className={style.content}>
          <Route path="/profile" render={() => <Profile
            state={props.state.profilePage}
            dispatch={props.dispatch} />} />
          <Route path="/dialogs" render={() => <Dialogs
            state={props.state.dialogsPage}
            dispatch={props.dispatch} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>



      </div>
    </BrowserRouter>
  )

  
}

export default App;
