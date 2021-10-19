import React from "react";
import { connect } from "react-redux";

import Dialogs from "./Dialogs"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/DialogsReducer";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

  
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;