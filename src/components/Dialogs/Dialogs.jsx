import React from "react";

import DialogItem from "./DialogItem/DialogItem"
import DialogMessage from "./DialogMessage/DialogMessage";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
    const messagesElements = props.state.messageData.map((m) => <DialogMessage message={m.message} />);
    let newMessageElement = React.createRef();


    let addMessage = () => {
        props.dispatch(addMessageActionCreator);
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action);
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
                        ref={newMessageElement}
                        onChange={onMessageChange} 
                        value={props.newMessageText}/>
                    <button onClick={addMessage}>
                        Send
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;