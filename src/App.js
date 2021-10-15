import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Sett/Settings"

import style from "./App.module.css";


function App() {


  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <NavBar />
        <div className={style.content}>
          <Route path="/profile" component={Profile}/>
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
            
        
        
      </div>
    </BrowserRouter>
  )
}

export default App;
