import React from 'react';
import style from "./navbar.module.css";

const NavBar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SVG_Logo.svg/512px-SVG_Logo.svg.png" alt="Logo" />
            </div>
            <nav className={style.nav}>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar;