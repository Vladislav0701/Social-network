import React from 'react';

import style from "./User.module.css";

const User = (props) => {

    return (
        <div className={style.wrapper}>
            <div className={style.item}>
                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" />
                <button>Follow</button>
            </div>
            <div className={style.content}>
                <div className={style.name}>
                    <h3>{props.fullName}</h3>
                    <p>{props.status}</p>
                </div>
                
                <div className={style.location}>
                    <div className={style.country}>{props.country}</div>
                    <div>{props.city}</div>
                </div>
            </div>
        </div>
    )
} 

export default User;