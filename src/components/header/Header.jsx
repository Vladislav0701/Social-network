import React from 'react';
import { NavLink } from 'react-router-dom';

import style from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div>
                <form className={style.form} action="" method="get">
                    <button className={style.search} type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>

                    <input name="s" placeholder="Искать здесь..." type="search" />
                    <button className={style.micro} type="submit">
                        <i className="fa fa-microphone" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
            <div>
                <div className={style.user}>
                    <button type="submit">
                        <i className="fa fa-bell" aria-hidden="true"></i>
                    </button>
                    <button type="submit">
                        <i className="fa fa-commenting" aria-hidden="true"></i>
                    </button>
                    <img src="https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg" alt="User" className="user_avata" />
                    <div className={style.login}>
                        <NavLink to={"/login"}>
                        { props.isAuth ? props.login :<p className={style.name}>Login</p> }
                        </NavLink>
                        
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;