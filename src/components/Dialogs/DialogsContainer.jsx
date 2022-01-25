import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Dialogs from "./Dialogs"
import { addMessageActionCreator } from "../../redux/DialogsReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);