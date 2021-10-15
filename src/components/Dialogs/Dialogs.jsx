import React from "react";

import DialogItem from "./DialogItem/DialogItem"
import DialogMessage from "./DialogMessage/DialogMessage";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    const messagesElements = props.messageData.map((m) => <DialogMessage message={m.message} />);

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