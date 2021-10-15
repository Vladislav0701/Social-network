import React from "react";
import { NavLink } from "react-router-dom";

import style from "./DialogItem.module.css";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.item}>
            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" />
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;