import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);