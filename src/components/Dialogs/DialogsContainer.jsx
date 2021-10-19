import React from "react";

import Dialogs from "./Dialogs"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/DialogsReducer";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = (text) => {
        props.store.dispatch(addMessageActionCreator(text));
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action);
    }

    return ( <Dialogs 
                state={state.dialogsPage}
                addMessage={addMessage}
                onMessageChange={onMessageChange}/>

    )
}

export default DialogsContainer;