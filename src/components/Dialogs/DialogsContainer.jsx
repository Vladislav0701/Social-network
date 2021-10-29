import React from "react";
import { connect } from "react-redux";

import Dialogs from "./Dialogs"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/DialogsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

  
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;