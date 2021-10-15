import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.item}>
            <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="" />
            <NavLink activeClassName={style.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

let dialogsData = [
    {name: "Dimych", id:1},
    {name: "Andrey", id:2},
    {name: "Sveta", id:3},
    {name: "Nastay", id:4},
    {name: "Sasha", id:5},
    {name: "Alex", id:6}
]

let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-cam ?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "What's up ?"}
]

const dialogsElements = dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
const messagesElements = messageData.map((m) => <Message message={m.message} />)

const Dialogs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;