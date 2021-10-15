import React from 'react';
import {NavLink} from 'react-router-dom';

import style from "./Navbar.module.css";

const NavBar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png" alt="Logo" />
            </div>
            <nav className={style.nav}>
                <div className={style.item}>
                    <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/news" activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar;