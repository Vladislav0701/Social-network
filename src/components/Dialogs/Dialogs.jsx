import React from "react";

import DialogItem from "./DialogItem/DialogItem"
import DialogMessage from "./DialogMessage/DialogMessage";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    const messagesElements = state.messageData.map((m) => <DialogMessage message={m.message} />);

    let addMessage = (text) => {
        props.addMessage(text);
    }

    let onMessageChange = (e) => {
        let target = e.target.value;
        props.onMessageChange(target)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={style.newMessage}>
                    <textarea 
                        onChange={onMessageChange} 
                        value={state.newMessageText} />
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;