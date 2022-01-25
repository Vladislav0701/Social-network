import { Route } from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Sett/Settings";
import Login from "./components/Login/Login"
import style from "./App.module.css";


function App() { 
  return (
      <div className={style.wrapper}>
        <HeaderContainer />
        <NavBar />
        <div className={style.content}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
  )
}

export default App;
