import React from "react";

import DialogItem from "./DialogItem/DialogItem"
import DialogMessage from "./DialogMessage/DialogMessage";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    const messagesElements = props.state.messageData.map((m) => <DialogMessage message={m.message} />);


    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let target = e.target.value;
        let action = updateNewMessageTextActionCreator(target)
        props.dispatch(action);
    }

    debugger;

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
                        value={props.state.newMessageText} />
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;